import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  Check, 
  ArrowRight, 
  Clock, 
  ChefHat, 
  Sparkles, 
  Zap, 
  Package, 
  Store, 
  IndianRupee,
  ShieldCheck,
  Briefcase,
  Users,
  GraduationCap,
  Flame,
  BarChart3,
  Layers,
  ChevronRight
} from 'lucide-react';
import { ProductPackMockup } from '../components/ProductPackMockup';
import { 
  BRAND_DATA, 
  PROBLEM_STATEMENTS, 
  VALUE_PROPOSITIONS, 
  TARGET_CUSTOMERS, 
  PREPARATION_STEPS 
} from '../data/caseStudyData';
import { useApp } from '../context/AppContext';

export const Home = () => {
  const navigate = useNavigate();
  const { addToCart, setIsCartOpen } = useApp();

  const handleBuyNow = () => {
    addToCart(1);
    setIsCartOpen(true);
  };

  const getProblemIcon = (name) => {
    switch (name) {
      case 'Clock': return <Clock className="w-6 h-6 text-[#D97706]" />;
      case 'ChefHat': return <ChefHat className="w-6 h-6 text-[#D97706]" />;
      default: return <Sparkles className="w-6 h-6 text-[#1E7B42]" />;
    }
  };

  const getValueIcon = (name) => {
    switch (name) {
      case 'Zap': return <Zap className="w-6 h-6 text-emerald-600" />;
      case 'Package': return <Package className="w-6 h-6 text-amber-600" />;
      case 'Store': return <Store className="w-6 h-6 text-blue-600" />;
      case 'IndianRupee': return <IndianRupee className="w-6 h-6 text-emerald-600" />;
      default: return <Sparkles className="w-6 h-6 text-amber-600" />;
    }
  };

  const getTargetIcon = (name) => {
    switch (name) {
      case 'Briefcase': return <Briefcase className="w-5 h-5 text-[#162D50]" />;
      case 'Users': return <Users className="w-5 h-5 text-[#1E7B42]" />;
      case 'GraduationCap': return <GraduationCap className="w-5 h-5 text-[#D97706]" />;
      default: return <Users className="w-5 h-5 text-[#162D50]" />;
    }
  };

  return (
    <div className="space-y-20 pb-16 overflow-hidden">
      
      {/* 1. HERO SECTION */}
      <section className="relative pt-6 sm:pt-12 pb-12 sm:pb-20 overflow-hidden bg-gradient-to-b from-[#FAF6F0] via-[#FDFBF7] to-white border-b border-brand-border/60">
        
        {/* Subtle decorative grain background elements */}
        <div className="absolute top-10 right-10 w-96 h-96 bg-amber-200/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-emerald-100/30 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Copy & Actions */}
            <div className="lg:col-span-7 space-y-6 text-left">
              
              {/* Top Tagline Badge */}
              <div className="inline-flex items-center gap-2 bg-amber-50 border border-amber-200/80 px-3.5 py-1.5 rounded-full text-xs font-semibold text-brand-dark shadow-xs">
                <span className="w-2 h-2 rounded-full bg-[#1E7B42] animate-pulse" />
                <span>Ready-to-Cook Millet Breakfast Mix</span>
                <span className="text-slate-400">•</span>
                <span className="text-brand-grain font-bold">500 g Pack</span>
              </div>

              {/* Main Headline */}
              <div className="space-y-3">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-brand-dark tracking-tight leading-[1.12] font-serif">
                  Quick Breakfast.{' '}
                  <span className="relative inline-block text-brand-primary">
                    Better Mornings.
                    <span className="absolute bottom-1 left-0 w-full h-3 bg-amber-200/60 -z-10 rounded-sm transform -rotate-1" />
                  </span>
                </h1>
                
                <p className="text-lg sm:text-xl text-slate-600 font-normal leading-relaxed max-w-2xl">
                  {BRAND_DATA.subheadline}
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  onClick={handleBuyNow}
                  className="bg-brand-primary hover:bg-brand-dark text-white px-7 py-3.5 rounded-2xl font-bold text-base shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200 flex items-center gap-2.5 active:scale-95 group"
                >
                  <span>Buy Now</span>
                  <span className="bg-white/20 text-amber-200 text-xs px-2 py-0.5 rounded-lg font-mono">₹169</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>

                <Link
                  to="/product"
                  className="bg-white hover:bg-slate-50 text-slate-800 border border-slate-300/80 px-6 py-3.5 rounded-2xl font-semibold text-base shadow-xs hover:border-slate-400 transition-all duration-200 flex items-center gap-2"
                >
                  <span>Explore Product</span>
                  <ChevronRight className="w-4 h-4 text-slate-400" />
                </Link>
              </div>

              {/* Trust & Value Indicators Grid */}
              <div className="pt-6 border-t border-slate-200/80">
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  
                  <div className="flex items-center gap-2 text-xs font-semibold text-slate-700 bg-white/80 p-2.5 rounded-xl border border-slate-200/60 shadow-xs">
                    <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center shrink-0">
                      <Check className="w-3.5 h-3.5 text-emerald-700" />
                    </div>
                    <span>Ready to Cook</span>
                  </div>

                  <div className="flex items-center gap-2 text-xs font-semibold text-slate-700 bg-white/80 p-2.5 rounded-xl border border-slate-200/60 shadow-xs">
                    <div className="w-5 h-5 rounded-full bg-amber-100 flex items-center justify-center shrink-0">
                      <Check className="w-3.5 h-3.5 text-amber-700" />
                    </div>
                    <span>500 g Pack</span>
                  </div>

                  <div className="flex items-center gap-2 text-xs font-semibold text-slate-700 bg-white/80 p-2.5 rounded-xl border border-slate-200/60 shadow-xs">
                    <div className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
                      <Check className="w-3.5 h-3.5 text-blue-700" />
                    </div>
                    <span>Easy Preparation</span>
                  </div>

                  <div className="flex items-center gap-2 text-xs font-semibold text-slate-700 bg-white/80 p-2.5 rounded-xl border border-slate-200/60 shadow-xs">
                    <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center shrink-0">
                      <Check className="w-3.5 h-3.5 text-emerald-700" />
                    </div>
                    <span className="text-brand-dark font-bold">₹169 MRP</span>
                  </div>

                </div>
              </div>

            </div>

            {/* Right Product Pack Mockup Visual */}
            <div className="lg:col-span-5 flex justify-center items-center">
              <ProductPackMockup size="lg" />
            </div>

          </div>
        </div>
      </section>


      {/* 2. THE PROBLEM SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-1.5 bg-rose-50 text-rose-700 border border-rose-200 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
            <span>The Consumer Dilemma</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-dark tracking-tight font-serif">
            Busy Mornings Need a Better Breakfast
          </h2>
          <p className="text-slate-600 text-base leading-relaxed">
            Every morning, millions of Indian households and working professionals struggle with limited breakfast preparation time. Traditional nutritious breakfasts take too long, leaving consumers torn between skipping meals or settling for low-nutrition alternatives.
          </p>
        </div>

        {/* 3 Problem Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PROBLEM_STATEMENTS.map((card, idx) => (
            <div
              key={card.title}
              className="bg-white rounded-3xl p-7 border border-brand-border hover:border-amber-300 shadow-soft hover:shadow-soft-lg transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-2xl bg-amber-50 group-hover:bg-amber-100 flex items-center justify-center transition-colors">
                    {getProblemIcon(card.icon)}
                  </div>
                  <span className="text-2xl font-black text-slate-200 font-mono">0{idx + 1}</span>
                </div>

                <div>
                  <span className="text-xs font-bold text-amber-700 uppercase tracking-wider block mb-1">
                    {card.title}
                  </span>
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-brand-primary transition-colors">
                    {card.headline}
                  </h3>
                </div>

                <p className="text-sm text-slate-600 leading-relaxed">
                  {card.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-1.5 text-xs font-semibold text-brand-primary">
                <span>Case study core driver</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </div>
            </div>
          ))}
        </div>
      </section>


      {/* 3. VALUE PROPOSITION SECTION */}
      <section className="bg-[#FAF6F0] py-16 border-y border-brand-border/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
            <div className="inline-flex items-center gap-1.5 bg-emerald-100/80 text-emerald-900 border border-emerald-300/80 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
              <span>Positioning & Solution</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-dark tracking-tight font-serif">
              Why MilletMorn?
            </h2>
            <p className="text-slate-600 text-base">
              A carefully balanced ready-to-cook breakfast mix engineered for fast-paced urban lifestyles without sacrificing traditional wholesome nutrition.
            </p>
          </div>

          {/* 4 Feature Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {VALUE_PROPOSITIONS.map((prop) => (
              <div
                key={prop.title}
                className="bg-white rounded-3xl p-6 border border-brand-border/90 shadow-soft hover:shadow-soft-lg hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="w-12 h-12 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center">
                    {getValueIcon(prop.icon)}
                  </div>
                  <div>
                    <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                      Feature {prop.number}
                    </span>
                    <h3 className="text-lg font-bold text-slate-900 mt-0.5">
                      {prop.title}
                    </h3>
                  </div>
                  <p className="text-xs font-semibold text-brand-accent">
                    {prop.tagline}
                  </p>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {prop.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Strong Value CTA Banner */}
          <div className="bg-gradient-to-r from-brand-primary to-brand-dark rounded-3xl p-8 sm:p-10 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2 text-center md:text-left">
              <span className="text-xs font-bold text-amber-300 uppercase tracking-widest">
                Introductory Launch Offer
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold font-serif">
                Try MilletMorn for Just ₹169
              </h3>
              <p className="text-slate-300 text-sm max-w-xl">
                Get 500g of ready-to-cook nutritious millet mix (10–12 wholesome breakfast servings) delivered with zero fuss.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <button
                onClick={handleBuyNow}
                className="bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-slate-950 font-bold px-7 py-3.5 rounded-2xl text-sm shadow-md hover:shadow-lg transition-all active:scale-95"
              >
                Try MilletMorn (₹169)
              </button>
              <Link
                to="/product"
                className="bg-white/10 hover:bg-white/20 text-white border border-white/20 font-semibold px-5 py-3.5 rounded-2xl text-sm transition"
              >
                View Details
              </Link>
            </div>
          </div>

        </div>
      </section>


      {/* 4. TARGET CUSTOMER SEGMENTS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-1.5 bg-blue-50 text-blue-900 border border-blue-200 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
            <span>Market Segmentation</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-dark tracking-tight font-serif">
            Target Customers
          </h2>
          <p className="text-slate-600 text-base">
            Designed to address breakfast friction across three core urban demographic cohorts.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TARGET_CUSTOMERS.map((target) => (
            <div
              key={target.id}
              className="bg-white rounded-3xl p-6 sm:p-8 border border-brand-border shadow-soft flex flex-col justify-between hover:border-slate-300 transition"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-2xl bg-amber-50 flex items-center justify-center">
                    {getTargetIcon(target.icon)}
                  </div>
                  <span className="text-xs font-bold bg-slate-100 text-slate-700 px-2.5 py-1 rounded-full">
                    {target.ageGroup}
                  </span>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-slate-900">
                    {target.title}
                  </h3>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                    {target.description}
                  </p>
                </div>

                <div className="space-y-2 pt-3 border-t border-slate-100 text-xs">
                  <div className="p-2.5 rounded-xl bg-rose-50/70 border border-rose-100 text-rose-900">
                    <strong className="block font-semibold text-[11px] text-rose-700 uppercase">Friction:</strong>
                    <span>{target.painPoint}</span>
                  </div>

                  <div className="p-2.5 rounded-xl bg-emerald-50/70 border border-emerald-100 text-emerald-900">
                    <strong className="block font-semibold text-[11px] text-emerald-700 uppercase">MilletMorn Fit:</strong>
                    <span>{target.benefit}</span>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-3 flex items-center justify-between text-[11px] font-semibold text-slate-500">
                <span>Segment Profile</span>
                <span className="text-brand-primary">{target.badge}</span>
              </div>
            </div>
          ))}
        </div>
      </section>


      {/* 5. QUICK 3-STEP PREPARATION PREVIEW */}
      <section className="bg-[#FAF6F0] py-16 border-y border-brand-border/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-12">
            <div>
              <div className="inline-flex items-center gap-1.5 bg-amber-100 text-amber-900 border border-amber-300 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-2">
                <span>Frictionless Morning Flow</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-dark tracking-tight font-serif">
                How It Works: 3 Simple Steps
              </h2>
            </div>
            
            <Link
              to="/how-it-works"
              className="inline-flex items-center gap-2 text-sm font-bold text-brand-primary hover:text-brand-dark transition"
            >
              <span>Explore Supply Chain & Operations</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {PREPARATION_STEPS.map((step) => (
              <div
                key={step.step}
                className="bg-white rounded-3xl p-7 border border-brand-border shadow-soft relative overflow-hidden"
              >
                <div className="w-10 h-10 rounded-xl bg-brand-primary text-white font-black text-sm flex items-center justify-center mb-4">
                  0{step.step}
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {step.subtitle}
                </p>
                <div className="absolute top-4 right-4 text-slate-200 font-black text-4xl font-serif select-none pointer-events-none">
                  #{step.step}
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>


      {/* 6. CASE STUDY STRATEGY & ECONOMICS SNAPSHOT */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-[#0F1E36] to-[#162D50] rounded-3xl p-8 sm:p-12 text-white border border-[#254472] shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 bg-amber-400/20 text-amber-300 border border-amber-400/30 px-3 py-1 rounded-full text-xs font-semibold">
                <BarChart3 className="w-3.5 h-3.5" />
                <span>Go-To-Market Unit Economics Model</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold font-serif">
                Solid Contribution Margin of 45.6%
              </h2>
              <p className="text-slate-300 text-sm leading-relaxed">
                Priced at ₹169 per 500g pack against a ₹92 production cost, generating a healthy ₹77 gross contribution per unit to support sampling and channel growth.
              </p>

              <div className="grid grid-cols-3 gap-3 pt-2">
                <div className="bg-white/5 p-3 rounded-2xl border border-white/10 text-center">
                  <span className="text-[10px] text-slate-400 block uppercase">Selling Price</span>
                  <span className="text-xl font-bold text-white font-mono">₹169</span>
                </div>
                <div className="bg-white/5 p-3 rounded-2xl border border-white/10 text-center">
                  <span className="text-[10px] text-slate-400 block uppercase">Unit Cost</span>
                  <span className="text-xl font-bold text-amber-300 font-mono">₹92</span>
                </div>
                <div className="bg-white/5 p-3 rounded-2xl border border-white/10 text-center">
                  <span className="text-[10px] text-slate-400 block uppercase">Contribution</span>
                  <span className="text-xl font-bold text-emerald-400 font-mono">₹77</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 flex flex-col sm:flex-row lg:flex-col gap-3 justify-center">
              <Link
                to="/business-metrics"
                className="bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold px-6 py-3.5 rounded-2xl text-center text-sm shadow-md transition flex items-center justify-center gap-2"
              >
                <span>View Full Financial Model</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/journey"
                className="bg-white/10 hover:bg-white/20 text-white border border-white/20 font-semibold px-6 py-3.5 rounded-2xl text-center text-sm transition flex items-center justify-center gap-2"
              >
                <Layers className="w-4 h-4" />
                <span>Explore 7-Stage Customer Journey</span>
              </Link>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};
