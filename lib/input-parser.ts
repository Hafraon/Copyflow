// Input parsing logic for Magic Input component
// Handles text, URL, and file parsing

interface ParseResult {
  success: boolean;
  productName?: string;
  error?: string;
  metadata?: {
    source: string;
    confidence: number;
    extractedData?: any;
  };
}

export async function parseInput(
  input: string | File, 
  type: 'text' | 'url' | 'file'
): Promise<ParseResult> {
  try {
    switch (type) {
      case 'text':
        return parseText(input as string);
      case 'url':
        return parseURL(input as string);
      case 'file':
        return parseFile(input as File);
      default:
        return { success: false, error: 'Unknown input type' };
    }
  } catch (error) {
    return { 
      success: false, 
      error: error instanceof Error ? error.message : 'Parsing failed' 
    };
  }
}

// Parse text input to extract product name
async function parseText(text: string): Promise<ParseResult> {
  const cleanText = text.trim();
  
  if (!cleanText) {
    return { success: false, error: 'Empty text input' };
  }

  // Simple product name extraction logic
  // Look for patterns that suggest a product name
  const productPatterns = [
    // Direct product mentions
    /(?:product|item|товар):\s*(.+)/i,
    // Brand + model patterns
    /^([A-Z][a-zA-Z0-9\s]+(?:[A-Z][a-zA-Z0-9]+)+)/,
    // First meaningful phrase (up to first punctuation)
    /^([^.!?]+)/,
  ];

  for (const pattern of productPatterns) {
    const match = cleanText.match(pattern);
    if (match && match[1]) {
      const extracted = match[1].trim();
      if (extracted.length > 2 && extracted.length < 100) {
        return {
          success: true,
          productName: extracted,
          metadata: {
            source: 'text_extraction',
            confidence: 0.7,
            extractedData: { originalText: cleanText }
          }
        };
      }
    }
  }

  // Fallback: use first 50 characters if it looks like a product name
  if (cleanText.length <= 100 && !cleanText.includes('\n')) {
    return {
      success: true,
      productName: cleanText,
      metadata: {
        source: 'text_fallback',
        confidence: 0.5
      }
    };
  }

  return { success: false, error: 'Could not extract product name from text' };
}

// Parse URL to extract product information
async function parseURL(url: string): Promise<ParseResult> {
  try {
    const urlObj = new URL(url);
    const hostname = urlObj.hostname.toLowerCase();
    
    // Simulate URL parsing for different e-commerce platforms
    await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate network delay
    
    // Platform-specific parsing logic
    if (hostname.includes('amazon.')) {
      return parseAmazonURL(urlObj);
    } else if (hostname.includes('rozetka.com.ua')) {
      return parseRozetkaURL(urlObj);
    } else if (hostname.includes('prom.ua')) {
      return parsePromURL(urlObj);
    } else if (hostname.includes('ebay.')) {
      return parseEbayURL(urlObj);
    } else if (hostname.includes('aliexpress.')) {
      return parseAliExpressURL(urlObj);
    } else {
      return parseGenericURL(urlObj);
    }
  } catch (error) {
    return { success: false, error: 'Invalid URL format' };
  }
}

// Platform-specific URL parsers (mock implementations)
function parseAmazonURL(url: URL): ParseResult {
  // Mock Amazon product extraction
  const pathSegments = url.pathname.split('/');
  const productIndex = pathSegments.findIndex(segment => segment === 'dp' || segment === 'product');
  
  if (productIndex > 0 && pathSegments[productIndex - 1]) {
    const productName = decodeURIComponent(pathSegments[productIndex - 1])
      .replace(/-/g, ' ')
      .replace(/\b\w/g, l => l.toUpperCase());
    
    return {
      success: true,
      productName,
      metadata: {
        source: 'amazon_url',
        confidence: 0.9,
        extractedData: { platform: 'Amazon', url: url.href }
      }
    };
  }
  
  return { success: false, error: 'Could not extract product from Amazon URL' };
}

function parseRozetkaURL(url: URL): ParseResult {
  // Mock Rozetka product extraction
  const pathMatch = url.pathname.match(/\/([^\/]+)\/p\d+/);
  if (pathMatch) {
    const productName = decodeURIComponent(pathMatch[1])
      .replace(/-/g, ' ')
      .replace(/\b\w/g, l => l.toUpperCase());
    
    return {
      success: true,
      productName,
      metadata: {
        source: 'rozetka_url',
        confidence: 0.9,
        extractedData: { platform: 'Rozetka', url: url.href }
      }
    };
  }
  
  return { success: false, error: 'Could not extract product from Rozetka URL' };
}

function parsePromURL(url: URL): ParseResult {
  // Mock Prom.ua product extraction
  const pathMatch = url.pathname.match(/\/([^\/]+)$/);
  if (pathMatch) {
    const productName = decodeURIComponent(pathMatch[1])
      .replace(/-/g, ' ')
      .replace(/\b\w/g, l => l.toUpperCase());
    
    return {
      success: true,
      productName,
      metadata: {
        source: 'prom_url',
        confidence: 0.8,
        extractedData: { platform: 'Prom.ua', url: url.href }
      }
    };
  }
  
  return { success: false, error: 'Could not extract product from Prom.ua URL' };
}

function parseEbayURL(url: URL): ParseResult {
  // Mock eBay product extraction
  const pathMatch = url.pathname.match(/\/itm\/([^\/]+)/);
  if (pathMatch) {
    const productName = decodeURIComponent(pathMatch[1])
      .replace(/-/g, ' ')
      .replace(/\b\w/g, l => l.toUpperCase());
    
    return {
      success: true,
      productName,
      metadata: {
        source: 'ebay_url',
        confidence: 0.8,
        extractedData: { platform: 'eBay', url: url.href }
      }
    };
  }
  
  return { success: false, error: 'Could not extract product from eBay URL' };
}

function parseAliExpressURL(url: URL): ParseResult {
  // Mock AliExpress product extraction
  const pathMatch = url.pathname.match(/\/item\/([^\/]+)/);
  if (pathMatch) {
    const productName = decodeURIComponent(pathMatch[1])
      .replace(/-/g, ' ')
      .replace(/\b\w/g, l => l.toUpperCase());
    
    return {
      success: true,
      productName,
      metadata: {
        source: 'aliexpress_url',
        confidence: 0.7,
        extractedData: { platform: 'AliExpress', url: url.href }
      }
    };
  }
  
  return { success: false, error: 'Could not extract product from AliExpress URL' };
}

function parseGenericURL(url: URL): ParseResult {
  // Generic URL parsing - extract from path or title
  const pathSegments = url.pathname.split('/').filter(segment => segment.length > 0);
  const lastSegment = pathSegments[pathSegments.length - 1];
  
  if (lastSegment && lastSegment.length > 3) {
    const productName = decodeURIComponent(lastSegment)
      .replace(/[-_]/g, ' ')
      .replace(/\.(html?|php|aspx?)$/i, '')
      .replace(/\b\w/g, l => l.toUpperCase());
    
    return {
      success: true,
      productName,
      metadata: {
        source: 'generic_url',
        confidence: 0.6,
        extractedData: { platform: 'Generic', url: url.href }
      }
    };
  }
  
  return { success: false, error: 'Could not extract product from URL' };
}

// Parse file content to extract product names
async function parseFile(file: File): Promise<ParseResult> {
  const fileType = file.type;
  const fileName = file.name.toLowerCase();
  
  try {
    if (fileName.endsWith('.csv') || fileType === 'text/csv') {
      return parseCSVFile(file);
    } else if (fileName.endsWith('.txt') || fileType === 'text/plain') {
      return parseTextFile(file);
    } else if (fileName.endsWith('.xlsx') || fileName.endsWith('.xls')) {
      return parseExcelFile(file);
    } else {
      return { success: false, error: 'Unsupported file type' };
    }
  } catch (error) {
    return { 
      success: false, 
      error: `File parsing error: ${error instanceof Error ? error.message : 'Unknown error'}` 
    };
  }
}

async function parseCSVFile(file: File): Promise<ParseResult> {
  const text = await file.text();
  const lines = text.split('\n').filter(line => line.trim());
  
  if (lines.length === 0) {
    return { success: false, error: 'Empty CSV file' };
  }
  
  // Try to find product name in first few columns of first data row
  const firstDataLine = lines[1] || lines[0]; // Skip header if exists
  const columns = firstDataLine.split(',').map(col => col.trim().replace(/"/g, ''));
  
  // Look for the most likely product name column
  const productName = columns.find(col => col.length > 3 && col.length < 100) || columns[0];
  
  if (productName) {
    return {
      success: true,
      productName,
      metadata: {
        source: 'csv_file',
        confidence: 0.8,
        extractedData: { 
          fileName: file.name,
          totalRows: lines.length,
          columns: columns.length
        }
      }
    };
  }
  
  return { success: false, error: 'Could not find product name in CSV' };
}

async function parseTextFile(file: File): Promise<ParseResult> {
  const text = await file.text();
  const lines = text.split('\n').filter(line => line.trim());
  
  if (lines.length === 0) {
    return { success: false, error: 'Empty text file' };
  }
  
  // Use first non-empty line as product name
  const productName = lines[0].trim();
  
  if (productName.length > 2 && productName.length < 100) {
    return {
      success: true,
      productName,
      metadata: {
        source: 'text_file',
        confidence: 0.7,
        extractedData: { 
          fileName: file.name,
          totalLines: lines.length
        }
      }
    };
  }
  
  return { success: false, error: 'Could not extract product name from text file' };
}

async function parseExcelFile(file: File): Promise<ParseResult> {
  // Mock Excel parsing (in real implementation, you'd use a library like xlsx)
  // For now, we'll simulate Excel parsing
  await new Promise(resolve => setTimeout(resolve, 1500)); // Simulate processing time
  
  // Mock extracted data
  const mockProductNames = [
    'Premium Wireless Headphones',
    'Smart Fitness Tracker',
    'Organic Cotton T-Shirt',
    'Stainless Steel Water Bottle',
    'Bluetooth Speaker'
  ];
  
  const randomProduct = mockProductNames[Math.floor(Math.random() * mockProductNames.length)];
  
  return {
    success: true,
    productName: randomProduct,
    metadata: {
      source: 'excel_file',
      confidence: 0.8,
      extractedData: { 
        fileName: file.name,
        note: 'Mock Excel parsing - first product from sheet'
      }
    }
  };
}