import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, BarChart3, HelpCircle, ArrowRight } from 'lucide-react';
import { useApp } from '../context/AppContext';

export const CaseStudyBanner = () => {
  const { setIsTourOpen } = useApp();

  return (
    <div className="bg-[#0F1E36] text-white border-b border-[#254472] text-xs py-1.5 px-4">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <span className="bg-[#D97706] text-[#451A03] font-bold px-2 py-0.5 rounded text-[10px] uppercase tracking-wider">
            Case Study Demo
          </span>
          <span className="text-slate-300 hidden sm:inline">
            Go-To-Market & Customer Operations Model for Fictional FMCG Brand
          </span>
          <span className="text-slate-300 sm:hidden">
            GTM & Operations Case Study Demo
          </span>
        </div>

        <div className="flex items-center gap-3 text-[11px]">
          <button 
            onClick={() => setIsTourOpen(true)}
            className="flex items-center gap-1 text-[#FCD34D] hover:text-white font-medium transition"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Interactive Demo Tour</span>
          </button>
          <span className="text-slate-600">•</span>
          <Link 
            to="/business-metrics" 
            className="flex items-center gap-1 text-emerald-300 hover:text-white font-medium transition"
          >
            <BarChart3 className="w-3.5 h-3.5" />
            <span>Unit Economics (₹169 / ₹77 Margin)</span>
          </Link>
        </div>
      </div>
    </div>
  );
};
