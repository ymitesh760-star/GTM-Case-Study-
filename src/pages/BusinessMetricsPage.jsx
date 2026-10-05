import React, { useState } from 'react';
import { 
  BarChart3, 
  IndianRupee, 
  TrendingUp, 
  PieChart, 
  ShieldAlert, 
  Sliders, 
  Layers, 
  Sparkles, 
  CheckCircle2,
  Package,
  Calculator
} from 'lucide-react';
import { BRAND_DATA } from '../data/caseStudyData';

export const BusinessMetricsPage = () => {
  // Interactive Simulator State
  const [simulatedPacks, setSimulatedPacks] = useState(BRAND_DATA.initialPacks);

  // Dynamic calculations for simulator
  const simRevenue = simulatedPacks * BRAND_DATA.price;
  const simCost = simulatedPacks * BRAND_DATA.cost;
  const simContribution = simulatedPacks * BRAND_DATA.contribution;
  const simMargin = ((simContribution / simRevenue) * 100).toFixed(1);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
      
      {/* Page Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-1.5 bg-emerald-100 text-emerald-900 border border-emerald-300 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
          <BarChart3 className="w-3.5 h-3.5" />
          <span>Financial Assumptions & Economics</span>
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-dark font-serif tracking-tight">
          Business Metrics & Unit Economics
        </h1>
        <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
          Case study baseline financial assumptions and economic model for the 500g Ready-to-Cook Millet Breakfast Mix pilot run.
        </p>
      </div>

      {/* Mandatory Academic Disclaimer Banner */}
      <div className="bg-amber-50 rounded-3xl p-5 sm:p-6 border border-amber-300/80 shadow-xs flex items-start gap-4">
        <ShieldAlert className="w-6 h-6 text-amber-700 shrink-0 mt-1" />
        <div className="space-y-1 text-xs sm:text-sm text-amber-950">
          <h3 className="font-extrabold text-sm sm:text-base uppercase tracking-wider text-amber-900">
            Case Study Financial Assumptions
          </h3>
          <p className="leading-relaxed text-amber-800 text-xs">
            These figures represent theoretical academic modeling parameters created specifically for the college Go-To-Market & Operations case study. They are not actual historical or audited financial results of an operating commercial enterprise.
          </p>
        </div>
      </div>


      {/* SECTION 1: CORE UNIT ECONOMICS (3 CARDS) */}
      <section className="space-y-6">
        <div className="border-b border-slate-200 pb-3">
          <h2 className="text-xl font-bold text-brand-dark font-serif">
            Per-Unit Economics (500 g Pack)
          </h2>
          <p className="text-xs text-slate-500">
            Unit price, cost structure, and gross contribution per pack.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          
          {/* Selling Price */}
          <div className="bg-white rounded-3xl p-6 border border-brand-border shadow-soft space-y-2">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">
              Selling Price (MRP)
            </span>
            <div className="flex items-baseline gap-1">
              <span className="text-3xl sm:text-4xl font-black text-brand-dark font-mono">
                ₹{BRAND_DATA.price}
              </span>
              <span className="text-xs text-slate-500 font-medium">/ 500g pack</span>
            </div>
            <p className="text-xs text-slate-500 pt-2 border-t border-slate-100">
              Optimal price ceiling for urban trial conversion.
            </p>
          </div>

          {/* Production Cost */}
          <div className="bg-white rounded-3xl p-6 border border-brand-border shadow-soft space-y-2">
            <span className="text-xs font-bold text-amber-700 uppercase tracking-wider block">
              Production Cost
            </span>
            <div className="flex items-baseline gap-1">
              <span className="text-3xl sm:text-4xl font-black text-amber-900 font-mono">
                ₹{BRAND_DATA.cost}
              </span>
              <span className="text-xs text-slate-500 font-medium">/ pack</span>
            </div>
            <p className="text-xs text-slate-500 pt-2 border-t border-slate-100">
              Raw millets, processing, nitrogen packaging.
            </p>
          </div>

          {/* Contribution */}
          <div className="bg-white rounded-3xl p-6 border border-brand-border shadow-soft space-y-2">
            <span className="text-xs font-bold text-emerald-700 uppercase tracking-wider block">
              Gross Contribution
            </span>
            <div className="flex items-baseline gap-1">
              <span className="text-3xl sm:text-4xl font-black text-emerald-800 font-mono">
                ₹{BRAND_DATA.contribution}
              </span>
              <span className="text-xs text-slate-500 font-medium">/ pack</span>
            </div>
            <p className="text-xs text-slate-500 pt-2 border-t border-slate-100">
              Direct gross profit per 500g pouch sold.
            </p>
          </div>

          {/* Contribution Margin */}
          <div className="bg-gradient-to-br from-brand-primary to-brand-dark text-white rounded-3xl p-6 shadow-soft space-y-2">
            <span className="text-xs font-bold text-amber-300 uppercase tracking-wider block">
              Contribution Margin
            </span>
            <div className="flex items-baseline gap-1">
              <span className="text-3xl sm:text-4xl font-black text-white font-mono">
                {BRAND_DATA.marginPercent}
              </span>
            </div>
            <p className="text-xs text-slate-300 pt-2 border-t border-white/10">
              (₹77 ÷ ₹169) × 100 = 45.6%
            </p>
          </div>

        </div>
      </section>


      {/* SECTION 2: INITIAL PRODUCTION RUN (2,000 PACKS BASELINE) */}
      <section className="bg-[#FAF6F0] rounded-3xl p-8 sm:p-10 border border-brand-border space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-brand-border pb-4">
          <div>
            <span className="text-xs font-bold text-brand-grain uppercase tracking-wider block">
              Pilot Batch Projection
            </span>
            <h2 className="text-2xl font-bold text-brand-dark font-serif mt-0.5">
              Initial Production: {BRAND_DATA.initialPacks.toLocaleString()} Packs
            </h2>
          </div>
          <span className="text-xs font-mono font-bold bg-white border border-brand-border px-3 py-1 rounded-full self-start sm:self-auto text-slate-700">
            Batch 01 Baseline
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          
          <div className="bg-white rounded-2xl p-5 border border-brand-border shadow-xs">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">
              Total Production Volume
            </span>
            <span className="text-2xl font-black text-slate-900 font-mono mt-1 block">
              {BRAND_DATA.initialPacks.toLocaleString()} Packs
            </span>
            <span className="text-[11px] text-slate-500 mt-1 block">1,000 kg total mix</span>
          </div>

          <div className="bg-white rounded-2xl p-5 border border-brand-border shadow-xs">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">
              Total Revenue
            </span>
            <span className="text-2xl font-black text-slate-900 font-mono mt-1 block">
              ₹{BRAND_DATA.totalRevenue.toLocaleString('en-IN')}
            </span>
            <span className="text-[11px] text-slate-500 mt-1 block">2,000 × ₹169</span>
          </div>

          <div className="bg-white rounded-2xl p-5 border border-brand-border shadow-xs">
            <span className="text-xs font-bold text-amber-700 uppercase tracking-wider block">
              Total Production Cost
            </span>
            <span className="text-2xl font-black text-amber-900 font-mono mt-1 block">
              ₹{BRAND_DATA.totalCost.toLocaleString('en-IN')}
            </span>
            <span className="text-[11px] text-slate-500 mt-1 block">2,000 × ₹92</span>
          </div>

          <div className="bg-white rounded-2xl p-5 border border-emerald-200 shadow-xs">
            <span className="text-xs font-bold text-emerald-700 uppercase tracking-wider block">
              Gross Contribution
            </span>
            <span className="text-2xl font-black text-emerald-800 font-mono mt-1 block">
              ₹{BRAND_DATA.grossContribution.toLocaleString('en-IN')}
            </span>
            <span className="text-[11px] text-emerald-700 font-semibold mt-1 block">45.6% Margin</span>
          </div>

        </div>
      </section>


      {/* SECTION 3: INTERACTIVE DYNAMIC SCENARIO SIMULATOR */}
      <section className="bg-white rounded-3xl p-8 sm:p-12 border border-brand-border shadow-soft space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-6">
          <div>
            <div className="inline-flex items-center gap-1.5 bg-blue-50 text-blue-900 border border-blue-200 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-2">
              <Calculator className="w-3.5 h-3.5" />
              <span>Interactive Simulator</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-dark font-serif">
              Production Volume & Revenue Simulator
            </h2>
          </div>

          <button
            onClick={() => setSimulatedPacks(BRAND_DATA.initialPacks)}
            className="text-xs font-semibold text-brand-primary hover:underline self-start sm:self-auto"
          >
            Reset to Baseline (2,000 packs)
          </button>
        </div>

        {/* Slider Input */}
        <div className="space-y-4 max-w-3xl">
          <div className="flex items-center justify-between">
            <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">
              Simulated Batch Size (Packs)
            </label>
            <span className="text-xl font-black text-brand-primary font-mono bg-amber-50 px-3 py-1 rounded-xl border border-amber-200">
              {simulatedPacks.toLocaleString()} Packs
            </span>
          </div>

          <input
            type="range"
            min="500"
            max="15000"
            step="250"
            value={simulatedPacks}
            onChange={(e) => setSimulatedPacks(Number(e.target.value))}
            className="w-full h-3 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-brand-primary"
          />

          <div className="flex justify-between text-[11px] text-slate-400 font-mono">
            <span>500 Packs (Trial)</span>
            <span>2,000 Packs (Case Study)</span>
            <span>10,000 Packs (Scale)</span>
            <span>15,000 Packs</span>
          </div>
        </div>

        {/* Dynamic Simulator Output Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4">
          <div className="bg-[#FAF6F0] p-6 rounded-3xl border border-brand-border text-center space-y-1">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block">Simulated Revenue</span>
            <span className="text-3xl font-black text-brand-dark font-mono block">
              ₹{simRevenue.toLocaleString('en-IN')}
            </span>
            <span className="text-[11px] text-slate-500 block">@ ₹169 per pack</span>
          </div>

          <div className="bg-[#FAF6F0] p-6 rounded-3xl border border-brand-border text-center space-y-1">
            <span className="text-xs font-bold text-amber-800 uppercase tracking-wider block">Simulated Production Cost</span>
            <span className="text-3xl font-black text-amber-900 font-mono block">
              ₹{simCost.toLocaleString('en-IN')}
            </span>
            <span className="text-[11px] text-slate-500 block">@ ₹92 per pack</span>
          </div>

          <div className="bg-emerald-50 p-6 rounded-3xl border border-emerald-200 text-center space-y-1">
            <span className="text-xs font-bold text-emerald-800 uppercase tracking-wider block">Simulated Contribution</span>
            <span className="text-3xl font-black text-emerald-800 font-mono block">
              ₹{simContribution.toLocaleString('en-IN')}
            </span>
            <span className="text-[11px] text-emerald-700 font-bold block">{simMargin}% Gross Margin</span>
          </div>
        </div>
      </section>

    </div>
  );
};
