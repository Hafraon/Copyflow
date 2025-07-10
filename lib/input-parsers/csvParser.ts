import Papa from 'papaparse';
import * as XLSX from 'xlsx';
import { ParsedProduct } from '@/types/magic-input';

export async function parseCsv(file: File): Promise<ParsedProduct[]> {
  return new Promise((resolve, reject) => {
    Papa.parse(file, {
      header: true,
      skipEmptyLines: true,
      dynamicTyping: true,
      complete: (results) => {
        try {
          const products: ParsedProduct[] = results.data.map((row: any) => {
            // Try to find common column names
            const nameFields = ['name', 'title', 'product', 'product_name', 'item_name'];
            const priceFields = ['price', 'cost', 'amount', 'value'];
            const descFields = ['description', 'desc', 'details', 'summary'];
            const urlFields = ['url', 'link', 'href', 'website'];
            const imageFields = ['image', 'img', 'photo', 'picture'];

            const findField = (fields: string[], data: any) => {
              for (const field of fields) {
                const key = Object.keys(data).find(k => 
                  k.toLowerCase().includes(field.toLowerCase())
                );
                if (key && data[key]) return String(data[key]).trim();
              }
              return undefined;
            };

            return {
              name: findField(nameFields, row) || `Product ${Math.random().toString(36).substr(2, 9)}`,
              price: findField(priceFields, row),
              description: findField(descFields, row),
              url: findField(urlFields, row),
              image: findField(imageFields, row),
            };
          });

          resolve(products.filter(p => p.name && p.name.length > 0));
        } catch (error) {
          reject(new Error('Failed to parse CSV data'));
        }
      },
      error: (error) => {
        reject(new Error(`CSV parsing error: ${error.message}`));
      }
    });
  });
}

export async function parseExcel(file: File): Promise<ParsedProduct[]> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    
    reader.onload = (e) => {
      try {
        const data = new Uint8Array(e.target?.result as ArrayBuffer);
        const workbook = XLSX.read(data, { type: 'array' });
        
        // Get first worksheet
        const firstSheetName = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[firstSheetName];
        
        // Convert to JSON with header row
        const jsonData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });
        
        if (jsonData.length < 2) {
          reject(new Error('Excel file must have at least a header row and one data row'));
          return;
        }

        const headers = jsonData[0] as string[];
        const rows = jsonData.slice(1) as any[][];

        const products: ParsedProduct[] = rows.map((row, index) => {
          const rowData: any = {};
          headers.forEach((header, i) => {
            if (header && row[i] !== undefined) {
              rowData[header] = row[i];
            }
          });

          // Same field mapping logic as CSV
          const nameFields = ['name', 'title', 'product', 'product_name', 'item_name'];
          const priceFields = ['price', 'cost', 'amount', 'value'];
          const descFields = ['description', 'desc', 'details', 'summary'];
          const urlFields = ['url', 'link', 'href', 'website'];
          const imageFields = ['image', 'img', 'photo', 'picture'];

          const findField = (fields: string[], data: any) => {
            for (const field of fields) {
              const key = Object.keys(data).find(k => 
                k.toLowerCase().includes(field.toLowerCase())
              );
              if (key && data[key]) return String(data[key]).trim();
            }
            return undefined;
          };

          return {
            name: findField(nameFields, rowData) || `Product ${index + 1}`,
            price: findField(priceFields, rowData),
            description: findField(descFields, rowData),
            url: findField(urlFields, rowData),
            image: findField(imageFields, rowData),
          };
        });

        resolve(products.filter(p => p.name && p.name.length > 0));
      } catch (error) {
        reject(new Error(`Excel parsing error: ${error instanceof Error ? error.message : 'Unknown error'}`));
      }
    };

    reader.onerror = () => {
      reject(new Error('Failed to read Excel file'));
    };

    reader.readAsArrayBuffer(file);
  });
}

export async function parseTxt(file: File): Promise<ParsedProduct[]> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    
    reader.onload = (e) => {
      try {
        const text = e.target?.result as string;
        const lines = text.split('\n')
          .map(line => line.trim())
          .filter(line => line.length > 0);

        if (lines.length === 0) {
          reject(new Error('Text file is empty'));
          return;
        }

        const products: ParsedProduct[] = lines.map((line, index) => ({
          name: line,
        }));

        resolve(products);
      } catch (error) {
        reject(new Error(`Text parsing error: ${error instanceof Error ? error.message : 'Unknown error'}`));
      }
    };

    reader.onerror = () => {
      reject(new Error('Failed to read text file'));
    };

    reader.readAsText(file);
  });
}