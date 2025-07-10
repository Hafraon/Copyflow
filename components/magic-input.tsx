"use client";

import { useState, useRef, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { FileText, Link, Upload, Loader2, CheckCircle, AlertCircle, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { parseInput } from '@/lib/input-parser';

interface MagicInputProps {
  value: string;
  onChange: (value: string) => void;
  onParsedData?: (data: { productName: string; type: 'text' | 'url' | 'file' }) => void;
  placeholder: string;
  disabled?: boolean;
}

export function MagicInput({ 
  value, 
  onChange, 
  onParsedData, 
  placeholder,
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
    <div className="space-y-2">
      {inputType && (
        <div className="flex items-center gap-2">
          <Badge variant="secondary" className="text-xs">
            {getInputTypeIcon()}
            <span className="ml-1">
              {inputType === 'url' && 'URL Detected'}
              {inputType === 'file' && 'File Uploaded'}
              {inputType === 'text' && 'Text Input'}
            </span>
          </Badge>
        </div>
      )}
      
      <div className="relative">
        <input
          ref={fileInputRef}
          type="file"
          accept=".csv,.xlsx,.xls,.txt"
          className="hidden"
          onChange={handleFileSelect}
        />
        
        <div
          className={`relative border-2 border-dashed rounded-lg transition-all duration-200 ${
            isDragActive 
              ? 'border-blue-500 bg-blue-50 dark:bg-blue-950/20 scale-[1.02]' 
              : 'border-border hover:border-blue-300 hover:bg-blue-50/30 dark:hover:bg-blue-950/10'
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
            className="min-h-[120px] resize-none border-0 bg-transparent focus:ring-0 focus:border-0 text-base"
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
                className="absolute inset-0 bg-blue-50 dark:bg-blue-950/20 border-2 border-blue-500 border-dashed rounded-lg flex items-center justify-center backdrop-blur-sm"
              >
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Upload className="w-8 h-8 text-white" />
                  </div>
                  <p className="text-lg font-semibold text-blue-600 dark:text-blue-400 mb-1">
                    🪄 Drop your file here
                  </p>
                  <p className="text-xs text-blue-500">
                    CSV, Excel, TXT files supported
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        
        {/* Enhanced file upload section */}
        <div className="flex justify-between items-center mt-3">
          <Button
            type="button"
            variant="outline"
            size="sm"
            onClick={() => fileInputRef.current?.click()}
            disabled={disabled}
            className="text-xs hover:bg-blue-50 dark:hover:bg-blue-950/20"
          >
            <Upload className="w-3 h-3 mr-2" />
            📁 Browse Files
          </Button>
          
          <div className="text-xs text-muted-foreground flex items-center gap-1">
            <Sparkles className="w-3 h-3" />
            Smart parsing enabled
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
            className="p-4 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20 border border-green-200 dark:border-green-800 rounded-lg"
          >
            <div className="flex items-start gap-2">
              <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                <CheckCircle className="w-4 h-4 text-white" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold text-green-800 dark:text-green-200 mb-1">
                  ✨ Smart Extraction Successful!
                </p>
                <p className="text-sm text-green-700 dark:text-green-300 font-medium">
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
            className="p-4 bg-gradient-to-r from-red-50 to-rose-50 dark:from-red-950/20 dark:to-rose-950/20 border border-red-200 dark:border-red-800 rounded-lg"
          >
            <div className="flex items-start gap-2">
              <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0">
                <AlertCircle className="w-4 h-4 text-white" />
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium text-red-800 dark:text-red-200">
                  {inputType === 'url' && 'Could not extract product information from URL'}
                  {inputType === 'file' && 'Could not parse file content'}
                  {inputType === 'text' && 'Could not extract product name'}
                </p>
                <p className="text-xs text-red-600 dark:text-red-400 mt-1">
                  Try a different format or enter manually
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}