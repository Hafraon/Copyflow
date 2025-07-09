"use client";

import { useState, useRef, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { FileText, Link, Upload, Loader2, CheckCircle, AlertCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { parseInput } from '@/lib/input-parser';

interface MagicInputProps {
  value: string;
  onChange: (value: string) => void;
  onParsedData?: (data: { productName: string; type: 'text' | 'url' | 'file' }) => void;
  placeholder?: string;
  disabled?: boolean;
}

export function MagicInput({ 
  value, 
  onChange, 
  onParsedData, 
  placeholder = "Enter product name, paste URL, or drag & drop files...",
  disabled = false 
}: MagicInputProps) {
  const { t } = useTranslation();
  const [isDragActive, setIsDragActive] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [inputType, setInputType] = useState<'text' | 'url' | 'file' | null>(null);
  const [parseStatus, setParseStatus] = useState<'success' | 'error' | null>(null);
  const [parsedResult, setParsedResult] = useState<string>('');
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleDrag = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setIsDragActive(true);
    } else if (e.type === "dragleave") {
      setIsDragActive(false);
    }
  }, []);

  const handleDrop = useCallback(async (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragActive(false);
    
    if (disabled) return;
    
    const files = Array.from(e.dataTransfer.files);
    if (files.length > 0) {
      await processFile(files[0]);
    }
  }, [disabled]);

  const handleFileSelect = useCallback(async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files[0]) {
      await processFile(files[0]);
    }
  }, []);

  const processFile = async (file: File) => {
    setIsProcessing(true);
    setInputType('file');
    
    try {
      const result = await parseInput(file, 'file');
      if (result.success && result.productName) {
        setParsedResult(result.productName);
        onChange(result.productName);
        setParseStatus('success');
        onParsedData?.({ productName: result.productName, type: 'file' });
      } else {
        setParseStatus('error');
      }
    } catch (error) {
      setParseStatus('error');
    } finally {
      setIsProcessing(false);
    }
  };

  const handleTextChange = async (newValue: string) => {
    onChange(newValue);
    
    if (!newValue.trim()) {
      setInputType(null);
      setParseStatus(null);
      setParsedResult('');
      return;
    }

    // Auto-detect input type
    const isUrl = /^https?:\/\/.+/i.test(newValue.trim());
    const detectedType = isUrl ? 'url' : 'text';
    setInputType(detectedType);

    // Process URL or text
    if (isUrl) {
      setIsProcessing(true);
      try {
        const result = await parseInput(newValue, 'url');
        if (result.success && result.productName) {
          setParsedResult(result.productName);
          setParseStatus('success');
          onParsedData?.({ productName: result.productName, type: 'url' });
        } else {
          setParseStatus('error');
        }
      } catch (error) {
        setParseStatus('error');
      } finally {
        setIsProcessing(false);
      }
    } else {
      // For text input, try to extract product name
      setIsProcessing(true);
      try {
        const result = await parseInput(newValue, 'text');
        if (result.success && result.productName) {
          setParsedResult(result.productName);
          setParseStatus('success');
          onParsedData?.({ productName: result.productName, type: 'text' });
        } else {
          setParseStatus(null); // Don't show error for text input
        }
      } catch (error) {
        setParseStatus(null);
      } finally {
        setIsProcessing(false);
      }
    }
  };

  const getInputTypeIcon = () => {
    switch (inputType) {
      case 'url': return <Link className="w-4 h-4" />;
      case 'file': return <Upload className="w-4 h-4" />;
      case 'text': return <FileText className="w-4 h-4" />;
      default: return null;
    }
  };

  const getStatusIcon = () => {
    if (isProcessing) return <Loader2 className="w-4 h-4 animate-spin text-blue-500" />;
    if (parseStatus === 'success') return <CheckCircle className="w-4 h-4 text-green-500" />;
    if (parseStatus === 'error') return <AlertCircle className="w-4 h-4 text-red-500" />;
    return null;
  };

  return (
    <div className="space-y-3">
      <Label htmlFor="magic-input" className="flex items-center gap-2">
        {t('form.product.name')}
        {inputType && (
          <Badge variant="secondary" className="text-xs">
            {getInputTypeIcon()}
            <span className="ml-1">
              {inputType === 'url' && 'URL'}
              {inputType === 'file' && 'File'}
              {inputType === 'text' && 'Text'}
            </span>
          </Badge>
        )}
      </Label>
      
      <div className="relative">
        <input
          ref={fileInputRef}
          type="file"
          accept=".csv,.xlsx,.xls,.txt"
          className="hidden"
          onChange={handleFileSelect}
        />
        
        <div
          className={`relative border-2 border-dashed rounded-lg transition-colors ${
            isDragActive 
              ? 'border-blue-500 bg-blue-50 dark:bg-blue-950/20' 
              : 'border-border hover:border-blue-300'
          } ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
          onDragEnter={handleDrag}
          onDragLeave={handleDrag}
          onDragOver={handleDrag}
          onDrop={handleDrop}
        >
          <Textarea
            id="magic-input"
            value={value}
            onChange={(e) => handleTextChange(e.target.value)}
            placeholder={placeholder}
            disabled={disabled}
            className="min-h-[100px] resize-none border-0 bg-transparent focus:ring-0 focus:border-0"
          />
          
          {/* Status indicator */}
          <div className="absolute top-3 right-3 flex items-center gap-2">
            {getStatusIcon()}
          </div>
          
          {/* Drop zone overlay */}
          <AnimatePresence>
            {isDragActive && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 bg-blue-50 dark:bg-blue-950/20 border-2 border-blue-500 border-dashed rounded-lg flex items-center justify-center"
              >
                <div className="text-center">
                  <Upload className="w-8 h-8 text-blue-500 mx-auto mb-2" />
                  <p className="text-sm font-medium text-blue-600 dark:text-blue-400">
                    Drop files here
                  </p>
                  <p className="text-xs text-blue-500">
                    CSV, Excel, or TXT files
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        
        {/* File upload button */}
        <div className="flex justify-between items-center mt-2">
          <Button
            type="button"
            variant="ghost"
            size="sm"
            onClick={() => fileInputRef.current?.click()}
            disabled={disabled}
            className="text-xs"
          >
            <Upload className="w-3 h-3 mr-1" />
            Upload File
          </Button>
          
          <div className="text-xs text-muted-foreground">
            Supports: Text, URLs, CSV, Excel, TXT
          </div>
        </div>
      </div>
      
      {/* Parsed result preview */}
      <AnimatePresence>
        {parsedResult && parsedResult !== value && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="p-3 bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800 rounded-lg"
          >
            <div className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-green-800 dark:text-green-200">
                  Extracted Product Name:
                </p>
                <p className="text-sm text-green-700 dark:text-green-300 truncate">
                  {parsedResult}
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Error state */}
      <AnimatePresence>
        {parseStatus === 'error' && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="p-3 bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-800 rounded-lg"
          >
            <div className="flex items-start gap-2">
              <AlertCircle className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
              <div className="flex-1">
                <p className="text-sm text-red-800 dark:text-red-200">
                  {inputType === 'url' && 'Could not extract product information from URL'}
                  {inputType === 'file' && 'Could not parse file content'}
                  {inputType === 'text' && 'Could not extract product name'}
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}