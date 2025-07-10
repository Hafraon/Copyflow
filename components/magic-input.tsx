"use client";

import { useState, useRef, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Upload, 
  Link, 
  FileText, 
  X, 
  CheckCircle, 
  AlertCircle,
  Download,
  Eye,
  Loader2
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { toast } from 'sonner';

interface MagicInputProps {
  onDataExtracted: (data: any[]) => void;
  className?: string;
}

interface ParsedProduct {
  name: string;
  price?: string;
  description?: string;
  url?: string;
  image?: string;
}

export function MagicInput({ onDataExtracted, className }: MagicInputProps) {
  const { t } = useTranslation();
  const [inputType, setInputType] = useState<'text' | 'url' | 'file' | null>(null);
  const [inputValue, setInputValue] = useState('');
  const [dragActive, setDragActive] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [parsedData, setParsedData] = useState<ParsedProduct[]>([]);
  const [selectedProducts, setSelectedProducts] = useState<Set<number>>(new Set());
  const [showPreview, setShowPreview] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Auto-detect input type
  const detectInputType = (value: string) => {
    if (value.startsWith('http://') || value.startsWith('https://')) {
      setInputType('url');
    } else if (value.length > 0) {
      setInputType('text');
    } else {
      setInputType(null);
    }
  };

  // Handle drag and drop
  const handleDrag = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  }, []);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFileUpload(e.dataTransfer.files[0]);
    }
  }, []);

  // Handle file upload
  const handleFileUpload = async (file: File) => {
    if (!file) return;

    // Validate file type
    const allowedTypes = [
      'text/csv',
      'application/vnd.ms-excel',
      'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
      'text/plain'
    ];

    if (!allowedTypes.includes(file.type)) {
      toast.error('Unsupported file type. Please use CSV, Excel, or TXT files.');
      return;
    }

    // Validate file size (max 5MB)
    if (file.size > 5 * 1024 * 1024) {
      toast.error('File too large. Maximum size is 5MB.');
      return;
    }

    setInputType('file');
    setIsProcessing(true);

    try {
      const text = await file.text();
      const products = parseFileContent(text, file.type);
      setParsedData(products);
      setSelectedProducts(new Set(products.map((_, index) => index)));
      setShowPreview(true);
      toast.success(`Parsed ${products.length} products from file`);
    } catch (error) {
      toast.error('Failed to parse file. Please check the format.');
    } finally {
      setIsProcessing(false);
    }
  };

  // Parse file content
  const parseFileContent = (content: string, fileType: string): ParsedProduct[] => {
    const lines = content.split('\n').filter(line => line.trim());
    
    if (fileType === 'text/csv' || fileType === 'application/vnd.ms-excel') {
      // CSV parsing
      const headers = lines[0].split(',').map(h => h.trim().toLowerCase());
      const nameIndex = headers.findIndex(h => h.includes('name') || h.includes('title') || h.includes('product'));
      const priceIndex = headers.findIndex(h => h.includes('price') || h.includes('cost'));
      const descIndex = headers.findIndex(h => h.includes('description') || h.includes('desc'));
      const urlIndex = headers.findIndex(h => h.includes('url') || h.includes('link'));

      return lines.slice(1).map(line => {
        const values = line.split(',').map(v => v.trim().replace(/"/g, ''));
        return {
          name: values[nameIndex] || `Product ${Math.random().toString(36).substr(2, 9)}`,
          price: values[priceIndex] || undefined,
          description: values[descIndex] || undefined,
          url: values[urlIndex] || undefined,
        };
      });
    } else {
      // Plain text - each line is a product name
      return lines.map(line => ({
        name: line.trim(),
      }));
    }
  };

  // Handle URL parsing
  const handleUrlParsing = async (url: string) => {
    setIsProcessing(true);
    
    try {
      // Detect platform
      let platform = 'unknown';
      if (url.includes('amazon.')) platform = 'Amazon';
      else if (url.includes('aliexpress.')) platform = 'AliExpress';
      else if (url.includes('shopify')) platform = 'Shopify';
      else if (url.includes('etsy.')) platform = 'Etsy';
      else if (url.includes('rozetka.com.ua')) platform = 'Rozetka';
      else if (url.includes('prom.ua')) platform = 'Prom.ua';

      // Simulate URL parsing (in production, this would call a real API)
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      const mockProduct: ParsedProduct = {
        name: `Product from ${platform}`,
        price: '$29.99',
        description: `High-quality product imported from ${platform}`,
        url: url,
        image: 'https://via.placeholder.com/150'
      };

      setParsedData([mockProduct]);
      setSelectedProducts(new Set([0]));
      setShowPreview(true);
      toast.success(`Successfully parsed product from ${platform}`);
    } catch (error) {
      toast.error('Failed to parse URL. Please check if the URL is accessible.');
    } finally {
      setIsProcessing(false);
    }
  };

  // Handle text input
  const handleTextInput = (text: string) => {
    const products = text.split('\n')
      .filter(line => line.trim())
      .map(line => ({
        name: line.trim()
      }));
    
    setParsedData(products);
    setSelectedProducts(new Set(products.map((_, index) => index)));
    setShowPreview(true);
  };

  // Process input
  const handleProcess = () => {
    if (!inputValue.trim()) return;

    if (inputType === 'url') {
      handleUrlParsing(inputValue);
    } else if (inputType === 'text') {
      handleTextInput(inputValue);
    }
  };

  // Generate content for selected products
  const handleGenerate = () => {
    const selectedData = parsedData.filter((_, index) => selectedProducts.has(index));
    onDataExtracted(selectedData);
    setShowPreview(false);
    setParsedData([]);
    setInputValue('');
    setInputType(null);
  };

  // Toggle product selection
  const toggleProductSelection = (index: number) => {
    const newSelected = new Set(selectedProducts);
    if (newSelected.has(index)) {
      newSelected.delete(index);
    } else {
      newSelected.add(index);
    }
    setSelectedProducts(newSelected);
  };

  return (
    <div className={className}>
      <Card className="border-2 border-dashed border-muted-foreground/25 hover:border-primary/50 transition-colors">
        <CardContent className="p-6">
          {/* Main Input Area */}
          <div
            className={`relative ${dragActive ? 'bg-primary/5' : ''}`}
            onDragEnter={handleDrag}
            onDragLeave={handleDrag}
            onDragOver={handleDrag}
            onDrop={handleDrop}
          >
            <Label className="text-base font-medium mb-4 block">
              ✨ Magic Input - Paste text, URL, or drop files
            </Label>

            <div className="space-y-4">
              {/* Text/URL Input */}
              <div className="relative">
                <Input
                  placeholder="Paste product names, URLs, or drop CSV/Excel files here..."
                  value={inputValue}
                  onChange={(e) => {
                    setInputValue(e.target.value);
                    detectInputType(e.target.value);
                  }}
                  className="min-h-[100px] resize-none"
                />
                
                {/* Input Type Badge */}
                <AnimatePresence>
                  {inputType && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      className="absolute top-2 right-2"
                    >
                      <Badge variant="secondary" className="gap-1">
                        {inputType === 'url' && <Link className="w-3 h-3" />}
                        {inputType === 'text' && <FileText className="w-3 h-3" />}
                        {inputType === 'file' && <Upload className="w-3 h-3" />}
                        {inputType === 'url' ? 'URL Detected' : 
                         inputType === 'text' ? 'Text Input' : 'File Upload'}
                      </Badge>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* File Upload Area */}
              <div className="border-2 border-dashed border-muted-foreground/25 rounded-lg p-6 text-center hover:border-primary/50 transition-colors">
                <input
                  ref={fileInputRef}
                  type="file"
                  accept=".csv,.xlsx,.xls,.txt"
                  onChange={(e) => e.target.files?.[0] && handleFileUpload(e.target.files[0])}
                  className="hidden"
                />
                
                <Upload className="w-8 h-8 mx-auto mb-2 text-muted-foreground" />
                <p className="text-sm text-muted-foreground mb-2">
                  Drop files here or{' '}
                  <button
                    onClick={() => fileInputRef.current?.click()}
                    className="text-primary hover:underline"
                  >
                    browse
                  </button>
                </p>
                <p className="text-xs text-muted-foreground">
                  Supports CSV, Excel, TXT files (max 5MB)
                </p>
              </div>

              {/* Process Button */}
              {inputValue.trim() && inputType && (
                <Button
                  onClick={handleProcess}
                  disabled={isProcessing}
                  className="w-full"
                >
                  {isProcessing ? (
                    <>
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                      Processing...
                    </>
                  ) : (
                    <>
                      {inputType === 'url' ? <Link className="w-4 h-4 mr-2" /> : <FileText className="w-4 h-4 mr-2" />}
                      Process {inputType === 'url' ? 'URL' : 'Text'}
                    </>
                  )}
                </Button>
              )}
            </div>
          </div>

          {/* Preview Section */}
          <AnimatePresence>
            {showPreview && parsedData.length > 0 && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="mt-6 pt-6 border-t"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <Eye className="w-4 h-4" />
                    <span className="font-medium">
                      Preview ({selectedProducts.size}/{parsedData.length} selected)
                    </span>
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => {
                      const allSelected = selectedProducts.size === parsedData.length;
                      if (allSelected) {
                        setSelectedProducts(new Set());
                      } else {
                        setSelectedProducts(new Set(parsedData.map((_, i) => i)));
                      }
                    }}
                  >
                    {selectedProducts.size === parsedData.length ? 'Deselect All' : 'Select All'}
                  </Button>
                </div>

                <div className="space-y-2 max-h-60 overflow-y-auto">
                  {parsedData.slice(0, 10).map((product, index) => (
                    <div
                      key={index}
                      className={`flex items-center gap-3 p-3 border rounded-lg cursor-pointer transition-colors ${
                        selectedProducts.has(index) ? 'bg-primary/5 border-primary' : 'hover:bg-muted/50'
                      }`}
                      onClick={() => toggleProductSelection(index)}
                    >
                      <div className={`w-4 h-4 rounded border-2 flex items-center justify-center ${
                        selectedProducts.has(index) ? 'bg-primary border-primary' : 'border-muted-foreground'
                      }`}>
                        {selectedProducts.has(index) && (
                          <CheckCircle className="w-3 h-3 text-white" />
                        )}
                      </div>
                      
                      <div className="flex-1 min-w-0">
                        <p className="font-medium truncate">{product.name}</p>
                        {product.price && (
                          <p className="text-sm text-muted-foreground">{product.price}</p>
                        )}
                      </div>
                      
                      {product.url && (
                        <Badge variant="outline" className="text-xs">
                          <Link className="w-3 h-3 mr-1" />
                          URL
                        </Badge>
                      )}
                    </div>
                  ))}
                  
                  {parsedData.length > 10 && (
                    <p className="text-sm text-muted-foreground text-center py-2">
                      ... and {parsedData.length - 10} more products
                    </p>
                  )}
                </div>

                <div className="flex gap-2 mt-4">
                  <Button
                    onClick={handleGenerate}
                    disabled={selectedProducts.size === 0}
                    className="flex-1"
                  >
                    Generate Content ({selectedProducts.size} products)
                  </Button>
                  <Button
                    variant="outline"
                    onClick={() => {
                      setShowPreview(false);
                      setParsedData([]);
                    }}
                  >
                    <X className="w-4 h-4" />
                  </Button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </CardContent>
      </Card>
    </div>
  );
}