"use client";

import { useState, useRef, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { 
  FileText, 
  Link, 
  Upload, 
  Loader2, 
  CheckCircle, 
  AlertCircle, 
  Sparkles,
  File,
  Globe,
  Type,
  Zap
} from 'lucide-react';
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

  const getInputTypeConfig = () => {
    switch (inputType) {
      case 'url':
        return {
          icon: Globe,
          label: 'URL Detected',
          color: 'text-blue-600 bg-blue-50 border-blue-200 dark:bg-blue-950/20 dark:border-blue-800',
        };
      case 'file':
        return {
          icon: File,
          label: 'File Processing',
          color: 'text-purple-600 bg-purple-50 border-purple-200 dark:bg-purple-950/20 dark:border-purple-800',
        };
      case 'text':
        return {
          icon: Type,
          label: 'Text Analysis',
          color: 'text-green-600 bg-green-50 border-green-200 dark:bg-green-950/20 dark:border-green-800',
        };
      default:
        return null;
    }
  };

  const getStatusIcon = () => {
    if (isProcessing) return <Loader2 className="w-4 h-4 animate-spin text-blue-500" />;
    if (parseStatus === 'success') return <CheckCircle className="w-4 h-4 text-green-500" />;
    if (parseStatus === 'error') return <AlertCircle className="w-4 h-4 text-red-500" />;
    return null;
  };

  const typeConfig = getInputTypeConfig();

  return (
    <div className="space-y-4">
      {/* Input Type Indicator */}
      <AnimatePresence>
        {typeConfig && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="flex items-center gap-2"
          >
            <Badge 
              variant="outline" 
              className={`${typeConfig.color} font-medium`}
            >
              <typeConfig.icon className="w-3 h-3 mr-1.5" />
              {typeConfig.label}
            </Badge>
            {isProcessing && (
              <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                <Loader2 className="w-3 h-3 animate-spin" />
                Processing...
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Main Input Area */}
      <div className="relative">
        <input
          ref={fileInputRef}
          type="file"
          accept=".csv,.xlsx,.xls,.txt"
          className="hidden"
          onChange={handleFileSelect}
        />
        
        <div
          className={`group relative border-2 border-dashed rounded-xl transition-all duration-300 ${
            isDragActive 
              ? 'border-blue-500 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30 shadow-lg scale-[1.02]' 
              : 'border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-600 hover:bg-gradient-to-br hover:from-blue-50/50 hover:to-indigo-50/50 dark:hover:from-blue-950/10 dark:hover:to-indigo-950/10'
          } ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-text'}`}
          onDragEnter={handleDrag}
          onDragLeave={handleDrag}
          onDragOver={handleDrag}
          onDrop={handleDrop}
        >
          {/* Magic Sparkle Effect */}
          <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center shadow-lg">
            <Sparkles className="w-3 h-3 text-white" />
          </div>

          <Textarea
            id="magic-input"
            value={value}
            onChange={(e) => handleTextChange(e.target.value)}
            placeholder={placeholder}
            disabled={disabled}
            className="min-h-[140px] resize-none border-0 bg-transparent focus:ring-0 focus:border-0 text-base leading-relaxed placeholder:text-gray-400 dark:placeholder:text-gray-500"
          />
          
          {/* Status indicator */}
          <div className="absolute top-4 right-4 flex items-center gap-2">
            {getStatusIcon()}
          </div>
          
          {/* Enhanced Drop Zone Overlay */}
          <AnimatePresence>
            {isDragActive && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="absolute inset-2 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/40 dark:to-indigo-950/40 border-2 border-blue-400 border-dashed rounded-lg flex items-center justify-center backdrop-blur-sm"
              >
                <div className="text-center">
                  <motion.div 
                    animate={{ 
                      scale: [1, 1.1, 1],
                      rotate: [0, 5, -5, 0]
                    }}
                    transition={{ 
                      duration: 0.6,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    className="w-20 h-20 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-xl"
                  >
                    <Upload className="w-10 h-10 text-white" />
                  </motion.div>
                  <h3 className="text-xl font-bold text-blue-700 dark:text-blue-300 mb-2">
                    🪄 Drop your file here
                  </h3>
                  <p className="text-sm text-blue-600 dark:text-blue-400 font-medium">
                    CSV, Excel, TXT files supported
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        
        {/* Enhanced Action Bar */}
        <div className="flex justify-between items-center mt-4 px-1">
          <Button
            type="button"
            variant="outline"
            size="sm"
            onClick={() => fileInputRef.current?.click()}
            disabled={disabled}
            className="text-sm font-medium hover:bg-blue-50 dark:hover:bg-blue-950/20 hover:border-blue-300 dark:hover:border-blue-600 transition-all duration-200"
          >
            <Upload className="w-4 h-4 mr-2" />
            Browse Files
          </Button>
          
          <div className="flex items-center gap-3 text-xs text-muted-foreground">
            <div className="flex items-center gap-1">
              <Zap className="w-3 h-3 text-blue-500" />
              <span className="font-medium">Smart parsing enabled</span>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Examples Section */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
        <div className="flex items-center gap-2 p-3 bg-gray-50 dark:bg-gray-800/50 rounded-lg border">
          <Type className="w-4 h-4 text-green-500 flex-shrink-0" />
          <div>
            <div className="font-medium text-gray-900 dark:text-gray-100">Text Input</div>
            <div className="text-gray-500 dark:text-gray-400">"Tactical backpack 45L"</div>
          </div>
        </div>
        <div className="flex items-center gap-2 p-3 bg-gray-50 dark:bg-gray-800/50 rounded-lg border">
          <Globe className="w-4 h-4 text-blue-500 flex-shrink-0" />
          <div>
            <div className="font-medium text-gray-900 dark:text-gray-100">URL</div>
            <div className="text-gray-500 dark:text-gray-400 truncate">amazon.com/...</div>
          </div>
        </div>
        <div className="flex items-center gap-2 p-3 bg-gray-50 dark:bg-gray-800/50 rounded-lg border">
          <File className="w-4 h-4 text-purple-500 flex-shrink-0" />
          <div>
            <div className="font-medium text-gray-900 dark:text-gray-100">Files</div>
            <div className="text-gray-500 dark:text-gray-400 truncate">CSV, Excel</div>
          </div>
        </div>
      </div>
      
      {/* Enhanced Success State */}
      <AnimatePresence>
        {parsedResult && parsedResult !== value && (
          <motion.div
            initial={{ opacity: 0, height: 0, y: -10 }}
            animate={{ opacity: 1, height: 'auto', y: 0 }}
            exit={{ opacity: 0, height: 0, y: -10 }}
            className="relative overflow-hidden rounded-xl bg-gradient-to-r from-green-50 via-emerald-50 to-teal-50 dark:from-green-950/20 dark:via-emerald-950/20 dark:to-teal-950/20 border border-green-200 dark:border-green-800"
          >
            {/* Animated background pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-green-400 to-emerald-400 animate-pulse"></div>
            </div>
            
            <div className="relative p-5">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg">
                  <CheckCircle className="w-5 h-5 text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-2">
                    <h4 className="text-sm font-bold text-green-800 dark:text-green-200">
                      ✨ Smart Extraction Successful!
                    </h4>
                    <Badge variant="outline" className="text-xs bg-green-100 text-green-700 border-green-300">
                      AI Powered
                    </Badge>
                  </div>
                  <div className="bg-white/60 dark:bg-gray-900/60 rounded-lg p-3 border border-green-200/50 dark:border-green-700/50">
                    <p className="text-sm font-semibold text-green-900 dark:text-green-100">
                      {parsedResult}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Enhanced Error State */}
      <AnimatePresence>
        {parseStatus === 'error' && (
          <motion.div
            initial={{ opacity: 0, height: 0, y: -10 }}
            animate={{ opacity: 1, height: 'auto', y: 0 }}
            exit={{ opacity: 0, height: 0, y: -10 }}
            className="relative overflow-hidden rounded-xl bg-gradient-to-r from-red-50 via-rose-50 to-pink-50 dark:from-red-950/20 dark:via-rose-950/20 dark:to-pink-950/20 border border-red-200 dark:border-red-800"
          >
            <div className="p-5">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-gradient-to-r from-red-500 to-rose-500 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg">
                  <AlertCircle className="w-5 h-5 text-white" />
                </div>
                <div className="flex-1">
                  <h4 className="text-sm font-bold text-red-800 dark:text-red-200 mb-1">
                    Parsing Failed
                  </h4>
                  <p className="text-sm text-red-700 dark:text-red-300 mb-2">
                    {inputType === 'url' && 'Could not extract product information from the provided URL'}
                    {inputType === 'file' && 'Could not parse the uploaded file content'}
                    {inputType === 'text' && 'Could not extract a clear product name from the text'}
                  </p>
                  <p className="text-xs text-red-600 dark:text-red-400 font-medium">
                    💡 Try a different format or enter the product name manually
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}