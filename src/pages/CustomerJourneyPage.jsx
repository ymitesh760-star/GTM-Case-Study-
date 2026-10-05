import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  Sparkles, 
  Eye, 
  Search, 
  ShoppingBag, 
  ChefHat, 
  Utensils, 
  MessageSquare, 
  Repeat, 
  ArrowRight, 
  CheckCircle2, 
  TrendingUp,
  Layers,
  ChevronRight,
  ExternalLink
} from 'lucide-react';
import { CUSTOMER_JOURNEY_STAGES, BRAND_DATA } from '../data/caseStudyData';
import { useApp } from '../context/AppContext';

export const CustomerJourneyPage = () => {
  const [activeStageId, setActiveStageId] = useState('awareness');
  const navigate = useNavigate();
  const { addToCart, setIsCartOpen } = useApp();

  const activeStage = CUSTOMER_JOURNEY_STAGES.find(s => s.id === activeStageId) || CUSTOMER_JOURNEY_STAGES[0];
  const activeIndex = CUSTOMER_JOURNEY_STAGES.findIndex(s => s.id === activeStageId);

  const getStageIcon = (id, isSelected) => {
    const iconClass = `w-5 h-5 ${isSelected ? 'text-white' : 'text-slate-700'}`;
    switch (id) {
      case 'awareness': return <Eye className={iconClass} />;
      case 'consideration': return <Search className={iconClass} />;
      case 'purchase': return <ShoppingBag className={iconClass} />;
      case 'preparation': return <ChefHat className={iconClass} />;
      case 'consumption': return <Utensils className={iconClass} />;
      case 'feedback': return <MessageSquare className={iconClass} />;
      case 'repeat_purchase': return <Repeat className={iconClass} />;
      default: return <Sparkles className={iconClass} />;
    }
  };

  const getActionForStage = (id) => {
    switch (id) {
      case 'awareness':
        return { label: 'Explore Value Proposition', action: () => navigate('/') };
      case 'consideration':
        return { label: 'View 500g Pack Details', action: () => navigate('/product') };
      case 'purchase':
        return { 
          label: 'Simulate Demo Purchase (₹169)', 
          action: () => {
            addToCart(1);
            navigate('/checkout');
          } 
        };
      case 'preparation':
        return { label: 'View 3-Step Kitchen Guide', action: () => navigate('/how-it-works') };
      case 'consumption':
        return { label: 'Check Target Cohorts', action: () => navigate('/about') };
      case 'feedback':
        return { label: 'Submit Product Feedback', action: () => navigate('/feedback') };
      case 'repeat_purchase':
        return { label: 'Simulate 1-Click Reorder', action: () => navigate('/repeat-purchase') };
      default:
        return { label: 'Next Stage', action: () => {} };
    }
  };

  const currentAction = getActionForStage(activeStage.id);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-1.5 bg-amber-100 text-amber-900 border border-amber-300 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
          <Layers className="w-3.5 h-3.5" />
          <span>7-Stage Lifecycle Framework</span>
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-dark font-serif tracking-tight">
          The MilletMorn Customer Journey
        </h1>
        <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
          From first tasting at a neighborhood store to becoming an essential daily breakfast habit, explore how we nurture customer lifetime value.
        </p>
      </div>

      {/* Interactive Flow Stepper / Progress Bar */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-brand-border shadow-soft space-y-8">
        
        {/* Progress Timeline Header */}
        <div className="relative">
          {/* Progress track line */}
          <div className="hidden lg:block absolute top-1/2 left-8 right-8 h-1 bg-slate-100 -translate-y-1/2 z-0" />
          <div 
            className="hidden lg:block absolute top-1/2 left-8 h-1 bg-gradient-to-r from-brand-primary to-brand-accent -translate-y-1/2 z-0 transition-all duration-500"
            style={{ width: `${(activeIndex / (CUSTOMER_JOURNEY_STAGES.length - 1)) * 90}%` }}
          />

          {/* Stepper Buttons Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3 relative z-10">
            {CUSTOMER_JOURNEY_STAGES.map((stage, idx) => {
              const isSelected = stage.id === activeStageId;
              const isPast = idx < activeIndex;

              return (
                <button
                  key={stage.id}
                  onClick={() => setActiveStageId(stage.id)}
                  className={`flex flex-col items-center text-center p-3 rounded-2xl transition-all duration-300 ${
                    isSelected
                      ? 'bg-brand-primary text-white shadow-lg scale-105 ring-2 ring-amber-400'
                      : isPast
                      ? 'bg-emerald-50 text-slate-800 hover:bg-emerald-100 border border-emerald-200'
                      : 'bg-slate-50 text-slate-600 hover:bg-slate-100 border border-slate-200'
                  }`}
                >
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-2 transition-colors ${
                    isSelected
                      ? 'bg-amber-400 text-slate-950'
                      : isPast
                      ? 'bg-emerald-600 text-white'
                      : 'bg-white border border-slate-200 text-slate-700'
                  }`}>
                    {getStageIcon(stage.id, isSelected)}
                  </div>

                  <span className={`text-[10px] font-bold uppercase tracking-wider block ${
                    isSelected ? 'text-amber-300' : 'text-slate-400'
                  }`}>
                    Stage {stage.stepNumber}
                  </span>
                  
                  <span className="text-xs font-bold truncate max-w-full mt-0.5">
                    {stage.name}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Selected Stage Detail Card */}
        <div className="bg-[#FAF6F0] rounded-3xl p-6 sm:p-10 border border-brand-border animate-in fade-in duration-300 space-y-6">
          
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-b border-brand-border pb-6">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="bg-brand-primary text-white text-xs font-bold px-2.5 py-0.5 rounded-full font-mono">
                  STAGE {activeStage.stepNumber} / 07
                </span>
                <span className="text-xs font-bold text-brand-grain uppercase tracking-wider">
                  {activeStage.name}
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-dark font-serif">
                {activeStage.headline}
              </h2>
            </div>

            <button
              onClick={currentAction.action}
              className="bg-brand-primary hover:bg-brand-dark text-white font-bold px-6 py-3 rounded-2xl text-xs shadow-md transition flex items-center gap-2 shrink-0 active:scale-95"
            >
              <span>{currentAction.label}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Description & Metrics Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            <div className="md:col-span-2 bg-white rounded-2xl p-6 border border-brand-border space-y-3">
              <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider">
                Operational Stage Mechanics
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                {activeStage.description}
              </p>
            </div>

            <div className="space-y-3">
              <div className="bg-white rounded-2xl p-4 border border-brand-border">
                <span className="text-[10px] text-slate-400 uppercase tracking-wider block">Primary Channel</span>
                <span className="text-xs font-bold text-brand-dark block mt-1">{activeStage.channel}</span>
              </div>

              <div className="bg-white rounded-2xl p-4 border border-brand-border">
                <span className="text-[10px] text-slate-400 uppercase tracking-wider block">Key Performance Metric</span>
                <span className="text-xs font-bold text-emerald-700 block mt-1">{activeStage.metric}</span>
              </div>
            </div>

          </div>

          {/* Step Controls (Prev / Next) */}
          <div className="flex items-center justify-between pt-4 border-t border-brand-border text-xs font-semibold text-slate-700">
            <button
              onClick={() => {
                const prevIdx = Math.max(0, activeIndex - 1);
                setActiveStageId(CUSTOMER_JOURNEY_STAGES[prevIdx].id);
              }}
              disabled={activeIndex === 0}
              className="px-4 py-2 rounded-xl bg-white border border-slate-200 hover:bg-slate-50 disabled:opacity-40 transition"
            >
              ← Previous Stage
            </button>

            <span className="text-slate-500 font-mono">
              Stage {activeIndex + 1} of {CUSTOMER_JOURNEY_STAGES.length}
            </span>

            <button
              onClick={() => {
                const nextIdx = Math.min(CUSTOMER_JOURNEY_STAGES.length - 1, activeIndex + 1);
                setActiveStageId(CUSTOMER_JOURNEY_STAGES[nextIdx].id);
              }}
              disabled={activeIndex === CUSTOMER_JOURNEY_STAGES.length - 1}
              className="px-4 py-2 rounded-xl bg-white border border-slate-200 hover:bg-slate-50 disabled:opacity-40 transition"
            >
              Next Stage →
            </button>
          </div>

        </div>

      </div>

      {/* Full 7-Stage Summary Cards View */}
      <div className="space-y-6">
        <h3 className="text-xl font-bold text-brand-dark font-serif text-center sm:text-left">
          All 7 Customer Journey Stages at a Glance
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CUSTOMER_JOURNEY_STAGES.map((st) => (
            <div
              key={st.id}
              onClick={() => setActiveStageId(st.id)}
              className={`bg-white rounded-3xl p-6 border transition-all cursor-pointer shadow-soft hover:shadow-soft-lg ${
                st.id === activeStageId 
                  ? 'border-brand-primary ring-2 ring-amber-400' 
                  : 'border-brand-border hover:border-slate-300'
              }`}
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-mono font-bold bg-slate-100 text-slate-700 px-2 py-0.5 rounded">
                  {st.stepNumber}
                </span>
                <span className="text-xs font-bold text-brand-grain">{st.name}</span>
              </div>
              <h4 className="font-bold text-slate-900 text-sm mb-2">{st.headline}</h4>
              <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">{st.description}</p>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};
