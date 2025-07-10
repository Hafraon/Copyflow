"use client";

import { useReducer, useRef, useCallback, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { 
  Upload, 
  Link, 
  FileText, 
  X, 
  CheckCircle, 
  AlertCircle,
  Download,
  Eye,
  Loader2,
  Globe
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { toast } from 'sonner';
import { PlatformSelector } from '@/components/platform-selector';
import { 
  MagicInputState, 
  MagicInputAction, 
  ParsedProduct, 
  InputType,
  initialMagicInputState,
  magicInputReducer 
} from '@/types/magic-input';
import { parseCsv, parseExcel, parseTxt } from '@/lib/input-parsers/csvParser';
import { isValidUrl, parseUrl } from '@/lib/input-parsers/urlParser';

interface MagicInputProps {
  onDataExtracted: (data: ParsedProduct[]) => void;
  className?: string;
}

export function MagicInput({ onDataExtracted, className }: MagicInputProps) {
  const { t } = useTranslation();
  const [state, dispatch] = useReducer(magicInputReducer, initialMagicInputState);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const dragCounter = useRef(0);

  // Auto-detect input type with debouncing
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (!state.inputValue.trim()) {
        dispatch({ type: 'SET_INPUT_TYPE', payload: null });
        return;
      }

      if (isValidUrl(state.inputValue)) {
        dispatch({ type: 'SET_INPUT_TYPE', payload: 'url' });
      } else {
        dispatch({ type: 'SET_INPUT_TYPE', payload: 'text' });
      }
    }, 300);

    return () => clearTimeout(timeoutId);
  }, [state.inputValue]);

  // Drag and drop handlers
  const handleDrag = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
  }, []);

  const handleDragEnter = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    dragCounter.current++;
    if (e.dataTransfer.items && e.dataTransfer.items.length > 0) {
      // Visual feedback for drag enter
    }
  }, []);

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    dragCounter.current--;
    if (dragCounter.current === 0) {
      // Remove visual feedback
    }
  }, []);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    dragCounter.current = 0;
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFileUpload(e.dataTransfer.files[0]);
    }
  }, []);

  // File validation
  const validateFile = (file: File): string | null => {
    const allowedTypes = [
      'text/csv',
      'application/vnd.ms-excel',
      'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
      'text/plain'
    ];

    const allowedExtensions = ['.csv', '.xlsx', '.xls', '.txt'];
    const hasValidType = allowedTypes.includes(file.type);
    const hasValidExtension = allowedExtensions.some(ext => file.name.toLowerCase().endsWith(ext));

    if (!hasValidType && !hasValidExtension) {
      return t('magicInput.errors.unsupportedFileType', 'Unsupported file type. Please use CSV, Excel, or TXT files.');
    }

    if (file.size > 5 * 1024 * 1024) { // 5MB limit
      return t('magicInput.errors.fileTooLarge', 'File too large. Maximum size is 5MB.');
    }

    return null;
  };

  // File upload handler
  const handleFileUpload = async (file: File) => {
    const validationError = validateFile(file);
    if (validationError) {
      dispatch({ type: 'SET_ERROR', payload: validationError });
      toast.error(validationError);
      return;
    }

    dispatch({ type: 'SET_INPUT_TYPE', payload: 'file' });
    dispatch({ type: 'SET_PROCESSING', payload: true });
    dispatch({ type: 'SET_ERROR', payload: null });
    dispatch({ type: 'SET_FILE_PROGRESS', payload: 0 });

    try {
      let products: ParsedProduct[] = [];

      // Progress simulation
      const progressInterval = setInterval(() => {
        dispatch({ type: 'SET_FILE_PROGRESS', payload: prev => Math.min(prev + 10, 90) });
      }, 100);

      if (file.type === 'text/csv' || file.name.toLowerCase().endsWith('.csv')) {
        products = await parseCsv(file);
      } else if (file.type.includes('spreadsheet') || file.name.match(/\.(xlsx|xls)$/i)) {
        products = await parseExcel(file);
      } else if (file.type === 'text/plain' || file.name.toLowerCase().endsWith('.txt')) {
        products = await parseTxt(file);
      }

      clearInterval(progressInterval);
      dispatch({ type: 'SET_FILE_PROGRESS', payload: 100 });

      if (products.length === 0) {
        throw new Error(t('magicInput.errors.noProductsFound', 'No products found in file'));
      }

      dispatch({ type: 'SET_PARSED_DATA', payload: products });
      dispatch({ type: 'SET_SELECTED_PRODUCTS', payload: new Set(products.map((_, index) => index)) });
      dispatch({ type: 'SET_SHOW_PREVIEW', payload: true });
      
      toast.success(t('magicInput.success.fileParsed', `Parsed ${products.length} products from file`));
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
      dispatch({ type: 'SET_ERROR', payload: errorMessage });
      toast.error(errorMessage);
    } finally {
      dispatch({ type: 'SET_PROCESSING', payload: false });
    }
  };

  // URL parsing handler
  const handleUrlParsing = async (url: string) => {
    dispatch({ type: 'SET_PROCESSING', payload: true });
    dispatch({ type: 'SET_ERROR', payload: null });

    try {
      const product = await parseUrl(url);
      dispatch({ type: 'SET_PARSED_DATA', payload: [product] });
      dispatch({ type: 'SET_SELECTED_PRODUCTS', payload: new Set([0]) });
      dispatch({ type: 'SET_SHOW_PREVIEW', payload: true });
      
      toast.success(t('magicInput.success.urlParsed', 'Successfully parsed product from URL'));
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Failed to parse URL';
      dispatch({ type: 'SET_ERROR', payload: errorMessage });
      toast.error(errorMessage);
    } finally {
      dispatch({ type: 'SET_PROCESSING', payload: false });
    }
  };

  // Text input handler
  const handleTextInput = (text: string) => {
    const products = text.split('\n')
      .filter(line => line.trim())
      .map(line => ({
        name: line.trim()
      }));
    
    dispatch({ type: 'SET_PARSED_DATA', payload: products });
    dispatch({ type: 'SET_SELECTED_PRODUCTS', payload: new Set(products.map((_, index) => index)) });
    dispatch({ type: 'SET_SHOW_PREVIEW', payload: true });
    
    toast.success(t('magicInput.success.textParsed', `Parsed ${products.length} products from text`));
  };

  // Process input based on type
  const handleProcess = () => {
    if (!state.inputValue.trim()) return;

    if (state.inputType === 'url') {
      handleUrlParsing(state.inputValue);
    } else if (state.inputType === 'text') {
      handleTextInput(state.inputValue);
    }
  };

  // Generate content for selected products
  const handleGenerate = () => {
    const selectedData = state.parsedData.filter((_, index) => state.selectedProducts.has(index));
    onDataExtracted(selectedData);
    
    // Reset state after generation
    dispatch({ type: 'RESET_STATE' });
    toast.success(t('magicInput.success.generated', `Generating content for ${selectedData.length} products`));
  };

  // Toggle product selection
  const toggleProductSelection = (index: number) => {
    const newSelected = new Set(state.selectedProducts);
    if (newSelected.has(index)) {
      newSelected.delete(index);
    } else {
      newSelected.add(index);
    }
    dispatch({ type: 'SET_SELECTED_PRODUCTS', payload: newSelected });
  };

  // Select/deselect all products
  const toggleSelectAll = () => {
    const allSelected = state.selectedProducts.size === state.parsedData.length;
    if (allSelected) {
      dispatch({ type: 'SET_SELECTED_PRODUCTS', payload: new Set() });
    } else {
      dispatch({ type: 'SET_SELECTED_PRODUCTS', payload: new Set(state.parsedData.map((_, i) => i)) });
    }
  };

  return (
    <div className={className}>
      <Card className="border-2 border-dashed border-muted-foreground/25 hover:border-primary/50 transition-colors">
        <CardContent className="p-6">
          {/* Platform Selector */}
          <div className="mb-6">
            <PlatformSelector
              value={state.platform}
              onChange={(value) => dispatch({ type: 'SET_PLATFORM', payload: value })}
            />
          </div>

          {/* Main Input Area */}
          <div
            className="relative"
            onDragEnter={handleDragEnter}
            onDragLeave={handleDragLeave}
            onDragOver={handleDrag}
            onDrop={handleDrop}
          >
            <Label className="text-base font-medium mb-4 block flex items-center gap-2">
              <span className="text-2xl">✨</span>
              {t('magicInput.label', 'Magic Input - Paste text, URL, or drop files')}
            </Label>

            <div className="space-y-4">
              {/* Text/URL Input */}
              <div className="relative">
                <Textarea
                  placeholder={t('magicInput.placeholder', 'Paste product names, URLs, or drop CSV/Excel files here...')}
                  value={state.inputValue}
                  onChange={(e) => dispatch({ type: 'SET_INPUT_VALUE', payload: e.target.value })}
                  className="min-h-[100px] resize-none pr-20"
                  disabled={state.isProcessing}
                />
                
                {/* Input Type Badge */}
                <AnimatePresence>
                  {state.inputType && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      className="absolute top-2 right-2"
                    >
                      <Badge variant="secondary" className="gap-1">
                        {state.inputType === 'url' && <Link className="w-3 h-3" />}
                        {state.inputType === 'text' && <FileText className="w-3 h-3" />}
                        {state.inputType === 'file' && <Upload className="w-3 h-3" />}
                        {state.inputType === 'url' ? t('magicInput.types.url', 'URL Detected') : 
                         state.inputType === 'text' ? t('magicInput.types.text', 'Text Input') : 
                         t('magicInput.types.file', 'File Upload')}
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
                  {t('magicInput.dropZone.text', 'Drop files here or')}{' '}
                  <button
                    onClick={() => fileInputRef.current?.click()}
                    className="text-primary hover:underline"
                    disabled={state.isProcessing}
                  >
                    {t('magicInput.dropZone.browse', 'browse')}
                  </button>
                </p>
                <p className="text-xs text-muted-foreground">
                  {t('magicInput.dropZone.formats', 'Supports CSV, Excel, TXT files (max 5MB)')}
                </p>
                
                {/* File Progress */}
                {state.isProcessing && state.inputType === 'file' && (
                  <div className="mt-4">
                    <div className="w-full bg-muted rounded-full h-2">
                      <div 
                        className="bg-primary h-2 rounded-full transition-all duration-300"
                        style={{ width: `${state.fileProgress}%` }}
                      />
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">
                      {t('magicInput.processing', 'Processing...')} {state.fileProgress}%
                    </p>
                  </div>
                )}
              </div>

              {/* Error Display */}
              {state.error && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2 p-3 bg-destructive/10 border border-destructive/20 rounded-lg"
                >
                  <AlertCircle className="w-4 h-4 text-destructive" />
                  <span className="text-sm text-destructive">{state.error}</span>
                </motion.div>
              )}

              {/* Process Button */}
              {state.inputValue.trim() && state.inputType && state.inputType !== 'file' && !state.showPreview && (
                <Button
                  onClick={handleProcess}
                  disabled={state.isProcessing}
                  className="w-full"
                >
                  {state.isProcessing ? (
                    <>
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                      {t('magicInput.processing', 'Processing...')}
                    </>
                  ) : (
                    <>
                      {state.inputType === 'url' ? <Link className="w-4 h-4 mr-2" /> : <FileText className="w-4 h-4 mr-2" />}
                      {t('magicInput.process', 'Process')} {state.inputType === 'url' ? 'URL' : 'Text'}
                    </>
                  )}
                </Button>
              )}
            </div>
          </div>

          {/* Preview Section */}
          <AnimatePresence>
            {state.showPreview && state.parsedData.length > 0 && (
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
                      {t('filePreview.title', 'Preview')} ({state.selectedProducts.size}/{state.parsedData.length} {t('filePreview.selected', 'selected')})
                    </span>
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={toggleSelectAll}
                  >
                    {state.selectedProducts.size === state.parsedData.length 
                      ? t('filePreview.deselectAll', 'Deselect All') 
                      : t('filePreview.selectAll', 'Select All')
                    }
                  </Button>
                </div>

                <div className="space-y-2 max-h-60 overflow-y-auto border rounded-lg">
                  {state.parsedData.slice(0, 10).map((product, index) => (
                    <div
                      key={index}
                      className={`flex items-center gap-3 p-3 hover:bg-muted/50 transition-colors ${
                        state.selectedProducts.has(index) ? 'bg-primary/5 border-l-2 border-l-primary' : ''
                      }`}
                    >
                      <Checkbox
                        checked={state.selectedProducts.has(index)}
                        onCheckedChange={() => toggleProductSelection(index)}
                      />
                      
                      <div className="flex-1 min-w-0">
                        <p className="font-medium truncate">{product.name}</p>
                        {product.price && (
                          <p className="text-sm text-muted-foreground">{product.price}</p>
                        )}
                        {product.description && (
                          <p className="text-xs text-muted-foreground truncate">{product.description}</p>
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
                  
                  {state.parsedData.length > 10 && (
                    <p className="text-sm text-muted-foreground text-center py-2">
                      {t('filePreview.moreItems', '... and {{count}} more products', { count: state.parsedData.length - 10 })}
                    </p>
                  )}
                </div>

                <div className="flex gap-2 mt-4">
                  <Button
                    onClick={handleGenerate}
                    disabled={state.selectedProducts.size === 0}
                    className="flex-1"
                  >
                    {t('filePreview.generateSelected', 'Generate Content ({{count}} products)', { count: state.selectedProducts.size })}
                  </Button>
                  <Button
                    variant="outline"
                    onClick={() => {
                      dispatch({ type: 'SET_SHOW_PREVIEW', payload: false });
                      dispatch({ type: 'SET_PARSED_DATA', payload: [] });
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