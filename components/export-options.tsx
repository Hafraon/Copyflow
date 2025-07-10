"use client";

import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Download, FileText, Table, FileSpreadsheet, Code } from 'lucide-react';
import { GeneratedContent } from '@/types/generator';
import { toast } from 'sonner';

interface ExportOptionsProps {
  content: GeneratedContent | GeneratedContent[];
  filename?: string;
}

export function ExportOptions({ content, filename = 'copyflow-content' }: ExportOptionsProps) {
  const { t } = useTranslation();
  const [isExporting, setIsExporting] = useState(false);

  const exportAsText = () => {
    const contentArray = Array.isArray(content) ? content : [content];
    const textContent = contentArray.map((item, index) => {
      return `Product ${index + 1}:
Title: ${item.productTitle}
Description: ${item.productDescription}
SEO Title: ${item.seoTitle}
Meta Description: ${item.metaDescription}
Call-to-Action: ${item.callToAction}

---

`;
    }).join('');

    downloadFile(textContent, `${filename}.txt`, 'text/plain');
  };

  const exportAsCSV = () => {
    const contentArray = Array.isArray(content) ? content : [content];
    const headers = ['Product Title', 'Product Description', 'SEO Title', 'Meta Description', 'Call-to-Action'];
    const csvContent = [
      headers.join(','),
      ...contentArray.map(item => [
        `"${item.productTitle.replace(/"/g, '""')}"`,
        `"${item.productDescription.replace(/"/g, '""')}"`,
        `"${item.seoTitle.replace(/"/g, '""')}"`,
        `"${item.metaDescription.replace(/"/g, '""')}"`,
        `"${item.callToAction.replace(/"/g, '""')}"`
      ].join(','))
    ].join('\n');

    downloadFile(csvContent, `${filename}.csv`, 'text/csv');
  };

  const exportAsExcel = () => {
    // For Excel export, we'll create a simple HTML table that Excel can import
    const contentArray = Array.isArray(content) ? content : [content];
    const excelContent = `
<table>
  <tr>
    <th>Product Title</th>
    <th>Product Description</th>
    <th>SEO Title</th>
    <th>Meta Description</th>
    <th>Call-to-Action</th>
  </tr>
  ${contentArray.map(item => `
  <tr>
    <td>${item.productTitle}</td>
    <td>${item.productDescription}</td>
    <td>${item.seoTitle}</td>
    <td>${item.metaDescription}</td>
    <td>${item.callToAction}</td>
  </tr>
  `).join('')}
</table>
    `;

    downloadFile(excelContent, `${filename}.xls`, 'application/vnd.ms-excel');
  };

  const exportAsJSON = () => {
    const jsonContent = JSON.stringify(content, null, 2);
    downloadFile(jsonContent, `${filename}.json`, 'application/json');
  };

  const downloadFile = (content: string, filename: string, mimeType: string) => {
    setIsExporting(true);
    
    try {
      const blob = new Blob([content], { type: mimeType });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = filename;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
      
      toast.success(t('toast.success.exported'));
    } catch (error) {
      toast.error(t('toast.error.export'));
    } finally {
      setIsExporting(false);
    }
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="sm" disabled={isExporting}>
          <Download className="w-4 h-4 mr-2" />
          {isExporting ? 'Exporting...' : t('results.export')}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={exportAsText}>
          <FileText className="w-4 h-4 mr-2" />
          {t('results.export.txt')}
        </DropdownMenuItem>
        <DropdownMenuItem onClick={exportAsCSV}>
          <Table className="w-4 h-4 mr-2" />
          {t('results.export.csv')}
        </DropdownMenuItem>
        <DropdownMenuItem onClick={exportAsExcel}>
          <FileSpreadsheet className="w-4 h-4 mr-2" />
          {t('results.export.xlsx')}
        </DropdownMenuItem>
        <DropdownMenuItem onClick={exportAsJSON}>
          <Code className="w-4 h-4 mr-2" />
          {t('results.export.json')}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}