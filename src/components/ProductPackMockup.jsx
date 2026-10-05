import React from 'react';
import { Sparkles, Clock, CheckCircle2, ShieldCheck, Flame } from 'lucide-react';

export const ProductPackMockup = ({ size = 'lg', className = '', interactive = true }) => {
  const isLarge = size === 'lg';

  return (
    <div className={`relative flex items-center justify-center select-none ${className}`}>
      {/* Background Soft Glow */}
      <div className="absolute inset-0 bg-gradient-to-tr from-brand-accent/20 via-brand-grain/20 to-brand-primary/20 rounded-full blur-3xl transform scale-90 pointer-events-none" />

      {/* Main Pouch Container */}
      <div 
        className={`relative z-10 w-full ${isLarge ? 'max-w-md' : 'max-w-xs'} transition-all duration-500 ${
          interactive ? 'hover:-translate-y-2 hover:shadow-2xl' : ''
        }`}
      >
        {/* Pouch Top Seal Notch & Grip Lines */}
        <div className="mx-auto w-[82%] h-4 bg-[#0A1628] rounded-t-xl border-t border-x border-[#254472] relative flex items-center justify-between px-4">
          <div className="w-4 h-1.5 bg-[#F59E0B]/40 rounded-full" />
          <div className="flex gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-white/20"></span>
            <span className="w-1.5 h-1.5 rounded-full bg-white/20"></span>
            <span className="w-1.5 h-1.5 rounded-full bg-white/20"></span>
          </div>
          <div className="w-4 h-1.5 bg-[#F59E0B]/40 rounded-full" />
        </div>

        {/* Pouch Zipper Line Indicator */}
        <div className="mx-auto w-[86%] h-2.5 bg-gradient-to-r from-[#D97706] via-[#F59E0B] to-[#D97706] border-y border-[#92400E]/30 relative flex items-center justify-center">
          <span className="text-[8px] font-bold text-[#451A03] tracking-widest uppercase">EASY TEAR • RESEALABLE FRESHNESS</span>
        </div>

        {/* Pouch Body */}
        <div className="relative bg-gradient-to-b from-[#162D50] via-[#0F1E36] to-[#0A1424] text-white rounded-b-3xl p-6 sm:p-8 shadow-2xl border border-[#254472] overflow-hidden">
          
          {/* Subtle Pouch Sheen Overlay */}
          <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-white/5 to-transparent pointer-events-none" />
          <div className="absolute -top-16 -left-16 w-36 h-36 bg-[#1E7B42]/15 rounded-full blur-2xl pointer-events-none" />

          {/* Top Brand & Category Badges */}
          <div className="flex items-center justify-between gap-2 mb-4 border-b border-white/10 pb-3">
            <div className="flex items-center gap-1.5 bg-[#1E7B42]/20 border border-[#1E7B42]/50 text-[#86EFAC] px-2.5 py-1 rounded-full text-xs font-semibold tracking-wide">
              <Sparkles className="w-3.5 h-3.5 text-[#4ADE80]" />
              <span>100% WHOLESOME</span>
            </div>
            <div className="bg-[#D97706]/20 border border-[#F59E0B]/40 text-[#FDE68A] px-2.5 py-1 rounded-full text-xs font-bold tracking-wider">
              500 g PACK
            </div>
          </div>

          {/* Brand Name Emblem */}
          <div className="text-center my-3">
            <div className="inline-flex items-center gap-2 mb-1">
              <span className="w-2 h-2 rounded-full bg-[#F59E0B] animate-ping" />
              <span className="text-xs uppercase tracking-widest text-[#FCD34D] font-bold">PREMIUM FMCG NUTRITION</span>
            </div>
            <h3 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white font-serif drop-shadow-sm">
              Millet<span className="text-[#F59E0B]">Morn</span>
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 font-medium tracking-wide mt-1">
              Ready-to-Cook Millet Breakfast Mix
            </p>
          </div>

          {/* Golden Millet Illustration Container */}
          <div className="my-5 relative p-4 rounded-2xl bg-gradient-to-b from-white/5 to-white/[0.02] border border-white/10 text-center">
            <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-tr from-[#D97706] to-[#F59E0B] flex items-center justify-center p-1 shadow-lg shadow-amber-900/40 mb-3">
              <div className="w-full h-full rounded-full bg-[#0F1E36] flex flex-col items-center justify-center text-[#FCD34D]">
                <Flame className="w-7 h-7 text-[#F59E0B]" />
                <span className="text-[10px] font-bold tracking-tighter uppercase text-amber-200">5-Min Cook</span>
              </div>
            </div>

            <p className="text-xs text-amber-100 font-medium italic">
              "Quick, wholesome and easy-to-prepare for busy mornings"
            </p>

            {/* Micro Highlights Pill Row */}
            <div className="grid grid-cols-3 gap-1.5 mt-3 pt-3 border-t border-white/10 text-[11px] text-slate-200">
              <div className="bg-white/5 py-1 px-1.5 rounded-lg">
                <span className="block font-bold text-[#86EFAC]">Zero Prep</span>
                <span className="text-[9px] text-slate-400">Open & Cook</span>
              </div>
              <div className="bg-white/5 py-1 px-1.5 rounded-lg">
                <span className="block font-bold text-[#FDE68A]">10-12 Bowls</span>
                <span className="text-[9px] text-slate-400">Per 500g</span>
              </div>
              <div className="bg-white/5 py-1 px-1.5 rounded-lg">
                <span className="block font-bold text-[#93C5FD]">Millet Power</span>
                <span className="text-[9px] text-slate-400">High Fibre</span>
              </div>
            </div>
          </div>

          {/* Bottom Price & Pack Details Bar */}
          <div className="flex items-center justify-between pt-3 border-t border-white/10">
            <div>
              <span className="text-[10px] text-slate-400 uppercase tracking-wider block">M.R.P. (Incl. Taxes)</span>
              <div className="flex items-baseline gap-1">
                <span className="text-2xl font-black text-[#FCD34D] tracking-tight">₹169</span>
                <span className="text-xs text-slate-400 line-through">₹199</span>
              </div>
            </div>
            <div className="text-right">
              <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#86EFAC] bg-[#1E7B42]/30 px-2 py-0.5 rounded-md border border-[#1E7B42]/40">
                <ShieldCheck className="w-3 h-3" /> FSSAI Grade
              </span>
              <span className="block text-[10px] text-slate-400 mt-0.5">Net Wt: 500 g</span>
            </div>
          </div>

          {/* Bottom Seal Strip */}
          <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#1E7B42] via-[#F59E0B] to-[#1E7B42]" />
        </div>

        {/* Floating Value Badges */}
        <div className="absolute -bottom-3 -left-3 bg-white text-[#0F1E36] px-3 py-1.5 rounded-xl shadow-lg border border-amber-200 text-xs font-bold flex items-center gap-1.5 animate-bounce">
          <Clock className="w-3.5 h-3.5 text-[#D97706]" />
          <span>Quick 5-Min Breakfast</span>
        </div>

        <div className="absolute -top-3 -right-2 bg-[#1E7B42] text-white px-3 py-1 rounded-xl shadow-lg text-xs font-bold flex items-center gap-1">
          <CheckCircle2 className="w-3.5 h-3.5 text-[#86EFAC]" />
          <span>Ready-to-Cook</span>
        </div>
      </div>
    </div>
  );
};
