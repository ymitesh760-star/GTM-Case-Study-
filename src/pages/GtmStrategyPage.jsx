import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Store, 
  ShoppingCart, 
  HeartHandshake, 
  Coffee, 
  Globe, 
  MessageSquare, 
  Share2, 
  Truck, 
  Sparkles, 
  Tag, 
  ShieldCheck, 
  AlertTriangle, 
  ArrowRight, 
  CheckCircle2, 
  Compass, 
  ChevronRight 
} from 'lucide-react';
import { 
  GTM_CHANNELS, 
  ACQUISITION_STRATEGIES, 
  SWOT_DATA, 
  RISKS_AND_MITIGATION,
  BRAND_DATA 
} from '../data/caseStudyData';
import { useApp } from '../context/AppContext';

export const GtmStrategyPage = () => {
  const navigate = useNavigate();
  const { addToCart, setIsCartOpen } = useApp();
  const [activeSwotTab, setActiveSwotTab] = useState('all');

  const getChannelIcon = (name) => {
    switch (name) {
      case 'Store': return <Store className="w-5 h-5 text-amber-600" />;
      case 'ShoppingCart': return <ShoppingCart className="w-5 h-5 text-blue-600" />;
      case 'HeartHandshake': return <HeartHandshake className="w-5 h-5 text-emerald-600" />;
      case 'Coffee': return <Coffee className="w-5 h-5 text-rose-600" />;
      case 'Globe': return <Globe className="w-5 h-5 text-blue-600" />;
      case 'MessageSquare': return <MessageSquare className="w-5 h-5 text-emerald-600" />;
      case 'Share2': return <Share2 className="w-5 h-5 text-purple-600" />;
      default: return <Truck className="w-5 h-5 text-amber-600" />;
    }
  };

  const handleTryMilletMorn = () => {
    addToCart(1);
    setIsCartOpen(true);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-16">
      
      {/* Page Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-1.5 bg-blue-50 text-blue-900 border border-blue-200 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
          <Compass className="w-3.5 h-3.5" />
          <span>Go-To-Market Execution Plan</span>
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-dark font-serif tracking-tight">
          How We Reach & Acquire Customers
        </h1>
        <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
          A balanced omnichannel distribution strategy combining local community sampling with digital direct-to-consumer reach.
        </p>
      </div>


      {/* 1. HOW WE REACH CUSTOMERS (OFFLINE + ONLINE CHANNELS) */}
      <section className="space-y-8">
        <div className="border-b border-slate-200 pb-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div>
            <h2 className="text-2xl font-bold text-brand-dark font-serif">
              How We Reach Customers
            </h2>
            <p className="text-xs text-slate-500">
              Omnichannel strategy covering retail shelves and digital commerce touchpoints.
            </p>
          </div>
          <span className="text-xs font-semibold bg-amber-100 text-amber-900 px-3 py-1 rounded-full self-start sm:self-auto">
            Dual-Channel Strategy
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* OFFLINE CHANNELS */}
          <div className="bg-[#FAF6F0] rounded-3xl p-6 sm:p-8 border border-brand-border space-y-6">
            <div className="flex items-center justify-between border-b border-brand-border pb-3">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-xl bg-amber-200/60 flex items-center justify-center text-amber-900">
                  <Store className="w-4 h-4" />
                </div>
                <h3 className="text-lg font-bold text-slate-900">
                  OFFLINE CHANNELS
                </h3>
              </div>
              <span className="text-xs font-semibold text-slate-500">Physical Retail Presence</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {GTM_CHANNELS.offline.map((ch) => (
                <div key={ch.title} className="bg-white rounded-2xl p-4 border border-brand-border shadow-xs space-y-2">
                  <div className="w-9 h-9 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center">
                    {getChannelIcon(ch.icon)}
                  </div>
                  <h4 className="font-bold text-sm text-slate-900">{ch.title}</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">{ch.description}</p>
                  <div className="pt-2 border-t border-slate-100">
                    <span className="text-[10px] font-semibold text-brand-grain block">Focus: {ch.focus}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ONLINE CHANNELS */}
          <div className="bg-[#FAF6F0] rounded-3xl p-6 sm:p-8 border border-brand-border space-y-6">
            <div className="flex items-center justify-between border-b border-brand-border pb-3">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-xl bg-blue-200/60 flex items-center justify-center text-blue-900">
                  <Globe className="w-4 h-4" />
                </div>
                <h3 className="text-lg font-bold text-slate-900">
                  ONLINE CHANNELS
                </h3>
              </div>
              <span className="text-xs font-semibold text-slate-500">Direct & Digital Commerce</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {GTM_CHANNELS.online.map((ch) => (
                <div key={ch.title} className="bg-white rounded-2xl p-4 border border-brand-border shadow-xs space-y-2">
                  <div className="w-9 h-9 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center">
                    {getChannelIcon(ch.icon)}
                  </div>
                  <h4 className="font-bold text-sm text-slate-900">{ch.title}</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">{ch.description}</p>
                  <div className="pt-2 border-t border-slate-100">
                    <span className="text-[10px] font-semibold text-brand-primary block">Focus: {ch.focus}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>


      {/* 2. CUSTOMER ACQUISITION (FREE SAMPLING & INTRODUCTORY OFFER) */}
      <section className="bg-gradient-to-b from-white to-[#FAF6F0] rounded-3xl p-8 sm:p-12 border border-brand-border shadow-soft space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <div className="inline-flex items-center gap-1.5 bg-amber-100 text-amber-900 border border-amber-300 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
            <span>First-Time Conversion</span>
          </div>
          <h2 className="text-3xl font-extrabold text-brand-dark font-serif">
            How We Acquire First-Time Customers
          </h2>
          <p className="text-slate-600 text-sm">
            Breaking trial inertia with instant taste validation and low-friction pricing.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {ACQUISITION_STRATEGIES.map((strat) => (
            <div
              key={strat.title}
              className="bg-white rounded-3xl p-7 border border-brand-border shadow-soft flex flex-col justify-between space-y-6"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-2xl bg-amber-50 flex items-center justify-center text-amber-700">
                    {strat.title === 'FREE SAMPLING' ? <Sparkles className="w-6 h-6" /> : <Tag className="w-6 h-6" />}
                  </div>
                  <span className="text-xs font-bold bg-amber-100 text-amber-900 px-3 py-1 rounded-full">
                    {strat.badge}
                  </span>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-slate-900">{strat.title}</h3>
                  <span className="text-xs font-semibold text-brand-primary block mt-0.5">{strat.subtitle}</span>
                  <p className="text-xs text-slate-600 mt-2 leading-relaxed">{strat.description}</p>
                </div>

                <div className="space-y-2 pt-2 border-t border-slate-100 text-xs text-slate-700">
                  {strat.points.map((pt, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>
              </div>

              <button
                onClick={handleTryMilletMorn}
                className="w-full bg-brand-primary hover:bg-brand-dark text-white py-3 rounded-xl font-bold text-xs shadow-sm transition flex items-center justify-center gap-2"
              >
                <span>Try MilletMorn (₹169)</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      </section>


      {/* 3. INTERACTIVE 2x2 SWOT MATRIX */}
      <section className="space-y-8">
        <div className="border-b border-slate-200 pb-4">
          <h2 className="text-2xl font-bold text-brand-dark font-serif">
            Interactive SWOT Analysis
          </h2>
          <p className="text-xs text-slate-500">
            Case study strategic evaluation matrix.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* STRENGTHS */}
          <div className="bg-white rounded-3xl p-6 border-2 border-emerald-200 shadow-soft space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-emerald-100">
              <span className="text-sm font-black text-emerald-800 tracking-wider font-mono">
                {SWOT_DATA.strengths.title}
              </span>
              <span className="w-3 h-3 rounded-full bg-emerald-500" />
            </div>
            <ul className="space-y-2.5 text-xs text-slate-700">
              {SWOT_DATA.strengths.items.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* WEAKNESSES */}
          <div className="bg-white rounded-3xl p-6 border-2 border-amber-200 shadow-soft space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-amber-100">
              <span className="text-sm font-black text-amber-800 tracking-wider font-mono">
                {SWOT_DATA.weaknesses.title}
              </span>
              <span className="w-3 h-3 rounded-full bg-amber-500" />
            </div>
            <ul className="space-y-2.5 text-xs text-slate-700">
              {SWOT_DATA.weaknesses.items.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* OPPORTUNITIES */}
          <div className="bg-white rounded-3xl p-6 border-2 border-blue-200 shadow-soft space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-blue-100">
              <span className="text-sm font-black text-blue-800 tracking-wider font-mono">
                {SWOT_DATA.opportunities.title}
              </span>
              <span className="w-3 h-3 rounded-full bg-blue-500" />
            </div>
            <ul className="space-y-2.5 text-xs text-slate-700">
              {SWOT_DATA.opportunities.items.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <Sparkles className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* THREATS */}
          <div className="bg-white rounded-3xl p-6 border-2 border-rose-200 shadow-soft space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-rose-100">
              <span className="text-sm font-black text-rose-800 tracking-wider font-mono">
                {SWOT_DATA.threats.title}
              </span>
              <span className="w-3 h-3 rounded-full bg-rose-500" />
            </div>
            <ul className="space-y-2.5 text-xs text-slate-700">
              {SWOT_DATA.threats.items.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <AlertTriangle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </section>


      {/* 4. RISKS & MITIGATION TABLE */}
      <section className="space-y-6">
        <div className="border-b border-slate-200 pb-4">
          <h2 className="text-2xl font-bold text-brand-dark font-serif">
            Risks & Mitigation Matrix
          </h2>
          <p className="text-xs text-slate-500">
            Systematic operational safeguards to ensure resilient business continuity.
          </p>
        </div>

        <div className="bg-white rounded-3xl border border-brand-border overflow-hidden shadow-soft">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-[#FAF6F0] border-b border-brand-border text-slate-900 uppercase font-mono tracking-wider text-[11px]">
                  <th className="py-4 px-6 font-black">Identified Risk</th>
                  <th className="py-4 px-6 font-black">Risk Details</th>
                  <th className="py-4 px-6 font-black text-emerald-900">Strategic Mitigation</th>
                  <th className="py-4 px-6 font-black">Mitigation Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {RISKS_AND_MITIGATION.map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/70 transition">
                    <td className="py-4 px-6 font-bold text-slate-900">
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-rose-500" />
                        <span>{row.risk}</span>
                      </div>
                    </td>
                    <td className="py-4 px-6 text-slate-600 max-w-xs leading-relaxed">
                      {row.riskDetail}
                    </td>
                    <td className="py-4 px-6 font-bold text-emerald-800">
                      <span className="bg-emerald-50 text-emerald-800 px-2 py-1 rounded-lg border border-emerald-200">
                        {row.mitigation}
                      </span>
                    </td>
                    <td className="py-4 px-6 text-slate-600 max-w-xs leading-relaxed">
                      {row.mitigationDetail}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

    </div>
  );
};
