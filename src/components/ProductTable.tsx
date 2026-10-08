import React, { useState, useMemo } from 'react';
import { 
  CHEMICAL_COMPOUNDS_CATALOGUE, 
  ChemicalCompoundItem 
} from '../data/chemicalCatalogueData';
import { 
  Search, 
  Filter, 
  ArrowUpDown, 
  ArrowUp, 
  ArrowDown, 
  Download, 
  Copy, 
  Check, 
  ChevronLeft, 
  ChevronRight, 
  FlaskConical, 
  ShieldCheck, 
  ArrowRight,
  Sparkles
} from 'lucide-react';

export interface ProductTableProps {
  onOpenInquiry?: (productName: string) => void;
  className?: string;
}

type SortField = 'sr' | 'brandName' | 'form' | 'activeIngredients' | 'packDetail';
type SortDirection = 'asc' | 'desc';

export const ProductTable: React.FC<ProductTableProps> = ({
  onOpenInquiry,
  className = ''
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedForm, setSelectedForm] = useState<string>('All');
  const [sortField, setSortField] = useState<SortField>('sr');
  const [sortDirection, setSortDirection] = useState<SortDirection>('asc');
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [pageSize, setPageSize] = useState<number>(20);
  const [copiedSr, setCopiedSr] = useState<number | null>(null);

  // Extract unique forms
  const availableForms = useMemo(() => {
    const set = new Set<string>();
    CHEMICAL_COMPOUNDS_CATALOGUE.forEach(item => {
      set.add(item.form.trim().toUpperCase());
    });
    return ['All', ...Array.from(set).sort()];
  }, []);

  // Filter items
  const filteredItems = useMemo(() => {
    return CHEMICAL_COMPOUNDS_CATALOGUE.filter(item => {
      const query = searchQuery.toLowerCase().trim();
      const matchesSearch = !query || 
        item.brandName.toLowerCase().includes(query) ||
        item.activeIngredients.toLowerCase().includes(query) ||
        item.packDetail.toLowerCase().includes(query) ||
        item.form.toLowerCase().includes(query) ||
        String(item.sr).includes(query);

      const matchesForm = selectedForm === 'All' || item.form.trim().toUpperCase() === selectedForm;

      return matchesSearch && matchesForm;
    });
  }, [searchQuery, selectedForm]);

  // Sort items
  const sortedItems = useMemo(() => {
    const list = [...filteredItems];
    list.sort((a, b) => {
      let result = 0;
      if (sortField === 'sr') {
        result = a.sr - b.sr;
      } else {
        const valA = (a[sortField] || '').toLowerCase();
        const valB = (b[sortField] || '').toLowerCase();
        result = valA.localeCompare(valB);
      }
      return sortDirection === 'asc' ? result : -result;
    });
    return list;
  }, [filteredItems, sortField, sortDirection]);

  // Pagination
  const totalItems = sortedItems.length;
  const totalPages = pageSize === -1 ? 1 : Math.ceil(totalItems / pageSize);
  const paginatedItems = useMemo(() => {
    if (pageSize === -1) return sortedItems;
    const start = (currentPage - 1) * pageSize;
    return sortedItems.slice(start, start + pageSize);
  }, [sortedItems, currentPage, pageSize]);

  const handleSort = (field: SortField) => {
    if (sortField === field) {
      setSortDirection(prev => (prev === 'asc' ? 'desc' : 'asc'));
    } else {
      setSortField(field);
      setSortDirection('asc');
    }
    setCurrentPage(1);
  };

  const renderSortIndicator = (field: SortField) => {
    if (sortField !== field) {
      return <ArrowUpDown className="w-3.5 h-3.5 text-slate-400 opacity-60 group-hover:opacity-100 transition-opacity" />;
    }
    return sortDirection === 'asc' ? (
      <ArrowUp className="w-3.5 h-3.5 text-blue-600" />
    ) : (
      <ArrowDown className="w-3.5 h-3.5 text-blue-600" />
    );
  };

  const handleCopy = (sr: number, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedSr(sr);
    setTimeout(() => {
      setCopiedSr(null);
    }, 2000);
  };

  const handleExportCSV = () => {
    const headers = ['Sr.', 'Brand Name', 'Form', 'Active Ingredient(s)', 'Pack Detail'];
    const rows = sortedItems.map(item => [
      item.sr,
      `"${item.brandName.replace(/"/g, '""')}"`,
      `"${item.form.replace(/"/g, '""')}"`,
      `"${item.activeIngredients.replace(/"/g, '""')}"`,
      `"${item.packDetail.replace(/"/g, '""')}"`
    ]);
    const csvContent = 'data:text/csv;charset=utf-8,' + [headers.join(','), ...rows.map(e => e.join(','))].join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `Bedfordshire_Biotech_Chemical_Compounds_Catalogue_${new Date().toISOString().split('T')[0]}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className={`w-full ${className}`}>
      {/* Table Header Controls */}
      <div className="bg-[#0A192F] text-white p-6 rounded-t-3xl border border-slate-800">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-blue-400 uppercase tracking-wider mb-1">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Chemical Compounds Master Directory</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-extrabold text-white">
              Comprehensive Formulations & Active Ingredients
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 mt-1">
              Showing {sortedItems.length} of {CHEMICAL_COMPOUNDS_CATALOGUE.length} registered pharmaceutical compounds and brand formulations.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={handleExportCSV}
              className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-xs font-semibold text-white flex items-center gap-2 transition-colors cursor-pointer"
              title="Download CSV Catalogue"
            >
              <Download className="w-3.5 h-3.5 text-blue-400" />
              <span>Export CSV</span>
            </button>

            {onOpenInquiry && (
              <button
                onClick={() => onOpenInquiry('Custom Batch Quotation / Bulk Chemical Order')}
                className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-xs font-bold text-white flex items-center gap-2 shadow-lg shadow-blue-600/30 transition-colors cursor-pointer"
              >
                <span>Bulk Quotation RFI</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>

        {/* Search Bar & Dosage Form Filter */}
        <div className="mt-6 pt-6 border-t border-slate-800 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
          {/* Search Input */}
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setCurrentPage(1);
              }}
              placeholder="Search by Brand Name, Active Ingredients, Form, or Pack..."
              className="w-full pl-10 pr-10 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-sm text-white placeholder:text-slate-400 focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-400"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-white"
              >
                Clear
              </button>
            )}
          </div>

          {/* Dosage Form Filter */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 md:pb-0">
            <span className="text-xs font-mono text-slate-400 flex items-center gap-1 shrink-0">
              <Filter className="w-3 h-3 text-blue-400" />
              <span>Form:</span>
            </span>
            <div className="flex items-center gap-1.5 flex-nowrap">
              {availableForms.slice(0, 7).map((form) => (
                <button
                  key={form}
                  onClick={() => {
                    setSelectedForm(form);
                    setCurrentPage(1);
                  }}
                  className={`px-3 py-1.5 rounded-lg text-xs font-mono font-medium transition-colors shrink-0 cursor-pointer ${
                    selectedForm === form
                      ? 'bg-blue-600 text-white font-bold'
                      : 'bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-800'
                  }`}
                >
                  {form}
                </button>
              ))}
              {availableForms.length > 7 && (
                <select
                  value={selectedForm}
                  onChange={(e) => {
                    setSelectedForm(e.target.value);
                    setCurrentPage(1);
                  }}
                  className="px-2.5 py-1.5 rounded-lg text-xs font-mono bg-slate-900 text-slate-300 border border-slate-800 focus:outline-none cursor-pointer"
                >
                  <option value="All">All Forms</option>
                  {availableForms.map(f => (
                    <option key={f} value={f}>{f}</option>
                  ))}
                </select>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Responsive HTML Table Container */}
      <div className="overflow-x-auto border-x border-b border-slate-200 bg-white shadow-xl rounded-b-3xl">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-slate-100 text-[#0A192F] text-xs font-mono uppercase tracking-wider border-b border-slate-200">
              
              {/* Sr. Header (Sortable) */}
              <th 
                onClick={() => handleSort('sr')}
                className="py-4 px-4 font-bold w-16 text-center cursor-pointer select-none hover:bg-slate-200/70 transition-colors group"
              >
                <div className="flex items-center justify-center gap-1">
                  <span>Sr.</span>
                  {renderSortIndicator('sr')}
                </div>
              </th>

              {/* Brand Name Header (Sortable) */}
              <th 
                onClick={() => handleSort('brandName')}
                className="py-4 px-5 font-bold w-64 cursor-pointer select-none hover:bg-slate-200/70 transition-colors group"
              >
                <div className="flex items-center gap-1.5">
                  <span>Brand Name</span>
                  {renderSortIndicator('brandName')}
                </div>
              </th>

              {/* Form Header (Sortable) */}
              <th 
                onClick={() => handleSort('form')}
                className="py-4 px-4 font-bold w-36 cursor-pointer select-none hover:bg-slate-200/70 transition-colors group"
              >
                <div className="flex items-center gap-1.5">
                  <span>Form</span>
                  {renderSortIndicator('form')}
                </div>
              </th>

              {/* Active Ingredient(s) Header (Sortable) */}
              <th 
                onClick={() => handleSort('activeIngredients')}
                className="py-4 px-6 font-bold min-w-[320px] cursor-pointer select-none hover:bg-slate-200/70 transition-colors group"
              >
                <div className="flex items-center gap-1.5">
                  <span>Active Ingredient(s)</span>
                  {renderSortIndicator('activeIngredients')}
                </div>
              </th>

              {/* Pack Detail Header (Sortable) */}
              <th 
                onClick={() => handleSort('packDetail')}
                className="py-4 px-5 font-bold w-44 cursor-pointer select-none hover:bg-slate-200/70 transition-colors group"
              >
                <div className="flex items-center gap-1.5">
                  <span>Pack Detail</span>
                  {renderSortIndicator('packDetail')}
                </div>
              </th>

              {/* Action Column */}
              <th className="py-4 px-4 font-bold w-36 text-center">
                Action
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 text-sm">
            {paginatedItems.length === 0 ? (
              <tr>
                <td colSpan={6} className="py-12 text-center text-slate-500">
                  <FlaskConical className="w-10 h-10 text-slate-300 mx-auto mb-2" />
                  <p className="font-semibold text-base">No chemical compounds matched your search criteria.</p>
                  <p className="text-xs text-slate-400 mt-1">Try clearing the search query or changing the dosage form filter.</p>
                  <button
                    onClick={() => {
                      setSearchQuery('');
                      setSelectedForm('All');
                    }}
                    className="mt-3 px-4 py-2 rounded-xl bg-blue-600 text-white text-xs font-bold cursor-pointer"
                  >
                    Reset Filters
                  </button>
                </td>
              </tr>
            ) : (
              paginatedItems.map((item) => (
                <tr 
                  key={item.sr} 
                  className="hover:bg-blue-50/40 transition-colors group"
                >
                  {/* 1. Sr. */}
                  <td className="py-3.5 px-4 text-center font-mono text-xs font-bold text-slate-500">
                    #{item.sr}
                  </td>

                  {/* 2. Brand Name */}
                  <td className="py-3.5 px-5">
                    <div className="font-bold text-[#0A192F] group-hover:text-blue-700 transition-colors">
                      {item.brandName}
                    </div>
                    <div className="text-[11px] text-slate-600 font-mono">
                      Item Code: BB-CAT-{String(item.sr).padStart(3, '0')}
                    </div>
                  </td>

                  {/* 3. Form */}
                  <td className="py-3.5 px-4">
                    <span className="inline-block px-2.5 py-1 rounded-md text-xs font-mono font-semibold bg-slate-100 text-slate-800 border border-slate-200 uppercase">
                      {item.form}
                    </span>
                  </td>

                  {/* 4. Active Ingredient(s) */}
                  <td className="py-3.5 px-6">
                    <div className="text-xs sm:text-sm text-slate-800 leading-relaxed font-sans">
                      {item.activeIngredients}
                    </div>
                    <div className="mt-1 flex items-center gap-2">
                      <button
                        onClick={() => handleCopy(item.sr, item.activeIngredients)}
                        className="text-[11px] font-mono text-blue-600 hover:text-blue-800 flex items-center gap-1 transition-colors cursor-pointer"
                        title="Copy formula breakdown"
                      >
                        {copiedSr === item.sr ? (
                          <>
                            <Check className="w-3 h-3 text-emerald-600" />
                            <span className="text-emerald-700 font-bold">Copied Formula</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3 h-3" />
                            <span>Copy Formula</span>
                          </>
                        )}
                      </button>
                    </div>
                  </td>

                  {/* 5. Pack Detail */}
                  <td className="py-3.5 px-5 font-mono text-xs font-semibold text-slate-700">
                    {item.packDetail}
                  </td>

                  {/* 6. Action */}
                  <td className="py-3.5 px-4 text-center">
                    <button
                      onClick={() => onOpenInquiry?.(`Inquiry & COA Request: ${item.brandName} (${item.form} - ${item.packDetail})`)}
                      className="px-3 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs uppercase tracking-wide transition-colors cursor-pointer shadow-sm hover:shadow"
                    >
                      Inquire
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>

        {/* Table Footer / Pagination */}
        <div className="p-4 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs text-slate-600 font-mono">
            Showing <span className="font-bold text-[#0A192F]">{totalItems === 0 ? 0 : (currentPage - 1) * pageSize + 1}</span> to{' '}
            <span className="font-bold text-[#0A192F]">
              {pageSize === -1 ? totalItems : Math.min(currentPage * pageSize, totalItems)}
            </span> of <span className="font-bold text-[#0A192F]">{totalItems}</span> entries
          </div>

          <div className="flex items-center gap-3">
            {/* Page Size Selector */}
            <div className="flex items-center gap-1.5 text-xs text-slate-600 font-mono">
              <span>Per page:</span>
              <select
                value={pageSize}
                onChange={(e) => {
                  setPageSize(Number(e.target.value));
                  setCurrentPage(1);
                }}
                className="px-2 py-1 rounded bg-white border border-slate-300 text-xs font-mono text-slate-800 focus:outline-none cursor-pointer"
              >
                <option value={15}>15</option>
                <option value={20}>20</option>
                <option value={50}>50</option>
                <option value={-1}>All (104)</option>
              </select>
            </div>

            {/* Page Navigation Controls */}
            {pageSize !== -1 && totalPages > 1 && (
              <div className="flex items-center gap-1">
                <button
                  onClick={() => setCurrentPage(p => Math.max(p - 1, 1))}
                  disabled={currentPage === 1}
                  className="p-1.5 rounded bg-white border border-slate-300 text-slate-700 hover:bg-slate-100 disabled:opacity-40 disabled:pointer-events-none cursor-pointer"
                  aria-label="Previous Page"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>

                <span className="px-3 py-1 rounded bg-white border border-slate-300 text-xs font-mono font-bold text-slate-800">
                  {currentPage} / {totalPages}
                </span>

                <button
                  onClick={() => setCurrentPage(p => Math.min(p + 1, totalPages))}
                  disabled={currentPage === totalPages}
                  className="p-1.5 rounded bg-white border border-slate-300 text-slate-700 hover:bg-slate-100 disabled:opacity-40 disabled:pointer-events-none cursor-pointer"
                  aria-label="Next Page"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
