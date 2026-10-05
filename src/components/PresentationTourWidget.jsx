import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { 
  Sparkles, 
  ChevronRight, 
  ChevronLeft, 
  X, 
  Layers, 
  Play, 
  CheckCircle2, 
  ExternalLink 
} from 'lucide-react';
import { useApp, PRESENTATION_STEPS } from '../context/AppContext';

export const PresentationTourWidget = () => {
  const { isTourOpen, setIsTourOpen } = useApp();
  const navigate = useNavigate();
  const location = useLocation();

  // Find active step index based on current path
  const currentStepIndex = PRESENTATION_STEPS.findIndex(
    step => step.path === location.pathname || (step.path !== '/' && location.pathname.startsWith(step.path))
  );

  const activeIndex = currentStepIndex >= 0 ? currentStepIndex : 0;

  const handleNext = () => {
    const nextIdx = (activeIndex + 1) % PRESENTATION_STEPS.length;
    navigate(PRESENTATION_STEPS[nextIdx].path);
  };

  const handlePrev = () => {
    const prevIdx = (activeIndex - 1 + PRESENTATION_STEPS.length) % PRESENTATION_STEPS.length;
    navigate(PRESENTATION_STEPS[prevIdx].path);
  };

  const handleJump = (path) => {
    navigate(path);
  };

  return (
    <>
      {/* Mini Floating Tour Launcher Button */}
      {!isTourOpen && (
        <button
          onClick={() => setIsTourOpen(true)}
          className="fixed bottom-6 left-6 z-40 bg-[#0F1E36] text-white px-4 py-2.5 rounded-2xl shadow-xl hover:shadow-2xl border border-amber-400/40 flex items-center gap-2 text-xs font-bold hover:bg-[#162D50] transition-all duration-300 group hover:scale-105 active:scale-95"
        >
          <div className="w-6 h-6 rounded-lg bg-amber-400/20 flex items-center justify-center text-amber-300 group-hover:rotate-12 transition-transform">
            <Sparkles className="w-3.5 h-3.5" />
          </div>
          <span>Case Study Presentation Tour</span>
          <span className="bg-amber-400 text-slate-950 px-1.5 py-0.5 rounded text-[10px]">
            {activeIndex + 1}/{PRESENTATION_STEPS.length}
          </span>
        </button>
      )}

      {/* Expanded Presentation Navigation Bar / Modal */}
      {isTourOpen && (
        <div className="fixed bottom-4 left-4 right-4 sm:left-6 sm:right-auto sm:max-w-xl z-50 bg-[#0F1E36]/95 backdrop-blur-md text-white p-4 rounded-3xl shadow-2xl border border-amber-500/40 animate-in slide-in-from-bottom-5 duration-300">
          
          {/* Header */}
          <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-3">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-[#D97706] flex items-center justify-center text-slate-950 font-bold">
                <Play className="w-3.5 h-3.5 fill-current" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-white tracking-wide">
                  MilletMorn Case Study Demo Tour
                </h4>
                <p className="text-[10px] text-amber-300 font-medium">
                  5–10 Min Structured College Presentation Guide
                </p>
              </div>
            </div>

            <button
              onClick={() => setIsTourOpen(false)}
              className="p-1.5 rounded-xl text-slate-400 hover:text-white hover:bg-white/10 transition"
              aria-label="Close tour"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Step Pill Grid */}
          <div className="grid grid-cols-3 sm:grid-cols-4 gap-1.5 mb-3 max-h-40 overflow-y-auto pr-1">
            {PRESENTATION_STEPS.map((step, idx) => {
              const isCurrent = idx === activeIndex;
              return (
                <button
                  key={step.id}
                  onClick={() => handleJump(step.path)}
                  className={`px-2 py-1.5 rounded-xl text-[11px] font-semibold text-left truncate transition flex items-center gap-1.5 ${
                    isCurrent
                      ? 'bg-amber-400 text-slate-950 font-bold shadow-md'
                      : 'bg-white/5 hover:bg-white/10 text-slate-300'
                  }`}
                  title={step.label}
                >
                  <span className={`w-1.5 h-1.5 rounded-full ${isCurrent ? 'bg-slate-900' : 'bg-slate-500'}`} />
                  <span className="truncate">{step.label}</span>
                </button>
              );
            })}
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-between pt-2 border-t border-white/10 text-xs">
            <button
              onClick={handlePrev}
              className="flex items-center gap-1 px-3 py-1.5 rounded-xl bg-white/10 hover:bg-white/20 text-slate-200 transition font-medium text-xs"
            >
              <ChevronLeft className="w-4 h-4" />
              <span>Previous</span>
            </button>

            <div className="text-[11px] text-slate-300 font-mono">
              Step <span className="text-amber-400 font-bold">{activeIndex + 1}</span> of {PRESENTATION_STEPS.length}: {PRESENTATION_STEPS[activeIndex].label.split('. ')[1]}
            </div>

            <button
              onClick={handleNext}
              className="flex items-center gap-1 px-3 py-1.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-400 hover:from-amber-400 hover:to-amber-300 text-slate-950 transition font-bold text-xs shadow-md"
            >
              <span>Next</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

        </div>
      )}
    </>
  );
};
