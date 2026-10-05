import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  PackageOpen, 
  Flame, 
  Smile, 
  Wheat, 
  Boxes, 
  Cog, 
  ShieldCheck, 
  PackageCheck, 
  Warehouse, 
  Truck, 
  Heart, 
  ArrowRight, 
  CheckCircle2, 
  Sparkles,
  ChevronRight,
  Layers
} from 'lucide-react';
import { PREPARATION_STEPS, SUPPLY_CHAIN_STEPS, BRAND_DATA } from '../data/caseStudyData';
import { useApp } from '../context/AppContext';

export const HowItWorksPage = () => {
  const [activeStepId, setActiveStepId] = useState(1);
  const navigate = useNavigate();
  const { addToCart, setIsCartOpen } = useApp();

  const activeSupplyStep = SUPPLY_CHAIN_STEPS.find(s => s.id === activeStepId) || SUPPLY_CHAIN_STEPS[0];

  const getPrepIcon = (iconName) => {
    switch (iconName) {
      case 'PackageOpen': return <PackageOpen className="w-8 h-8 text-amber-600" />;
      case 'Flame': return <Flame className="w-8 h-8 text-rose-600" />;
      default: return <Smile className="w-8 h-8 text-emerald-600" />;
    }
  };

  const getSupplyIcon = (iconName, isSelected) => {
    const iconClass = `w-5 h-5 ${isSelected ? 'text-white' : 'text-slate-700'}`;
    switch (iconName) {
      case 'Wheat': return <Wheat className={iconClass} />;
      case 'Boxes': return <Boxes className={iconClass} />;
      case 'Cog': return <Cog className={iconClass} />;
      case 'ShieldCheck': return <ShieldCheck className={iconClass} />;
      case 'PackageCheck': return <PackageCheck className={iconClass} />;
      case 'Warehouse': return <Warehouse className={iconClass} />;
      case 'Truck': return <Truck className={iconClass} />;
      case 'Heart': return <Heart className={iconClass} />;
      default: return <Sparkles className={iconClass} />;
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-16">
      
      {/* Page Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-1.5 bg-amber-100 text-amber-900 border border-amber-300 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
          <Layers className="w-3.5 h-3.5" />
          <span>Product & Operations Architecture</span>
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-dark font-serif tracking-tight">
          How It Works & Supply Chain
        </h1>
        <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
          From verified grain harvest to a quick 5-minute wholesome morning breakfast on the consumer's table.
        </p>
      </div>


      {/* SECTION 1: 3-STEP PREPARATION PROCESS */}
      <section className="bg-gradient-to-b from-[#FAF6F0] to-white rounded-3xl p-8 sm:p-12 border border-brand-border shadow-soft space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-brand-border pb-6">
          <div>
            <span className="text-xs font-bold text-emerald-800 uppercase tracking-wider block">
              Consumer Kitchen Experience
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-dark font-serif mt-1">
              3-Step Simple Preparation
            </h2>
          </div>
          <button
            onClick={() => {
              addToCart(1);
              setIsCartOpen(true);
            }}
            className="bg-brand-primary hover:bg-brand-dark text-white font-bold px-6 py-2.5 rounded-xl text-xs shadow-sm transition flex items-center gap-2 self-start sm:self-auto"
          >
            <span>Order Mix (₹169)</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PREPARATION_STEPS.map((step) => (
            <div
              key={step.step}
              className="bg-white rounded-3xl p-8 border border-brand-border/80 shadow-soft hover:shadow-soft-lg hover:-translate-y-1 transition-all duration-300 relative space-y-4"
            >
              <div className="flex items-center justify-between">
                <div className="w-16 h-16 rounded-2xl bg-amber-50 flex items-center justify-center border border-amber-100">
                  {getPrepIcon(step.icon)}
                </div>
                <span className="text-4xl font-serif font-black text-slate-200">
                  0{step.step}
                </span>
              </div>

              <div>
                <span className="text-xs font-bold text-amber-700 uppercase tracking-wider block mb-1">
                  Step {step.step}
                </span>
                <h3 className="text-xl font-bold text-slate-900">
                  {step.title}
                </h3>
              </div>

              <p className="text-xs text-slate-600 leading-relaxed">
                {step.subtitle}
              </p>

              <div className="pt-2 flex items-center gap-1 text-[11px] font-semibold text-emerald-700">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Ready in 5 minutes</span>
              </div>
            </div>
          ))}
        </div>
      </section>


      {/* SECTION 2: END-TO-END SUPPLY CHAIN OPERATING FLOW */}
      <section className="space-y-8">
        <div className="border-b border-slate-200 pb-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div>
            <span className="text-xs font-bold text-brand-grain uppercase tracking-wider block">
              Operations & Unit Cost Structure (₹92 / Unit)
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-dark font-serif mt-0.5">
              Supply Chain Operating Flow
            </h2>
          </div>
          <span className="text-xs font-mono font-bold bg-slate-100 text-slate-700 px-3 py-1 rounded-full self-start sm:self-auto">
            Supplier → Customer (8 Stages)
          </span>
        </div>

        {/* Interactive Step Track (Desktop & Mobile) */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-brand-border shadow-soft space-y-8">
          
          <p className="text-xs text-slate-500">
            Click or hover any supply chain milestone to inspect operational controls and cost efficiency safeguards:
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2">
            {SUPPLY_CHAIN_STEPS.map((st) => {
              const isSelected = st.id === activeStepId;
              return (
                <button
                  key={st.id}
                  onClick={() => setActiveStepId(st.id)}
                  onMouseEnter={() => setActiveStepId(st.id)}
                  className={`p-3 rounded-2xl flex flex-col items-center text-center transition-all duration-200 ${
                    isSelected
                      ? 'bg-brand-primary text-white shadow-md scale-105 ring-2 ring-amber-400'
                      : 'bg-[#FAF6F0] text-slate-700 hover:bg-slate-100 border border-brand-border'
                  }`}
                >
                  <div className={`w-9 h-9 rounded-xl flex items-center justify-center mb-1.5 ${
                    isSelected ? 'bg-amber-400 text-slate-950' : 'bg-white border border-slate-200'
                  }`}>
                    {getSupplyIcon(st.icon, isSelected)}
                  </div>
                  <span className="text-[9px] font-mono font-bold block text-slate-400">0{st.id}</span>
                  <span className="text-xs font-bold truncate max-w-full">{st.title}</span>
                </button>
              );
            })}
          </div>

          {/* Detailed Inspector Card */}
          <div className="bg-[#FAF6F0] rounded-3xl p-6 sm:p-8 border border-brand-border space-y-4 animate-in fade-in duration-200">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-brand-border pb-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-brand-primary text-white flex items-center justify-center font-black">
                  0{activeSupplyStep.id}
                </div>
                <div>
                  <span className="text-[10px] font-bold text-brand-grain uppercase tracking-wider block">
                    Supply Chain Milestone 0{activeSupplyStep.id}
                  </span>
                  <h3 className="text-xl font-bold text-slate-900">
                    {activeSupplyStep.title}: {activeSupplyStep.subtitle}
                  </h3>
                </div>
              </div>

              <span className="inline-flex items-center gap-1.5 text-xs font-semibold bg-white border border-slate-200 px-3 py-1.5 rounded-xl text-emerald-800">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>{activeSupplyStep.focus}</span>
              </span>
            </div>

            <p className="text-sm text-slate-700 leading-relaxed max-w-3xl">
              {activeSupplyStep.details}
            </p>

            <div className="pt-2 flex items-center justify-between text-xs text-slate-500">
              <span>Supports the ₹92 production cost target for {BRAND_DATA.initialPacks.toLocaleString()} initial packs.</span>
              <button
                onClick={() => {
                  const nextId = (activeSupplyStep.id % SUPPLY_CHAIN_STEPS.length) + 1;
                  setActiveStepId(nextId);
                }}
                className="text-brand-primary font-bold hover:underline flex items-center gap-1"
              >
                <span>Next Stage</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
};
