import React from 'react';
import { useApp } from '../context/AppContext';
import { CheckCircle, Info, AlertTriangle, X } from 'lucide-react';

export const ToastContainer = () => {
  const { toasts, removeToast } = useApp();

  if (!toasts.length) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-2.5 max-w-sm w-full pointer-events-none">
      {toasts.map((toast) => {
        let bgColor = 'bg-slate-900 text-white border-slate-700';
        let icon = <Info className="w-5 h-5 text-blue-400 shrink-0" />;

        if (toast.type === 'success') {
          bgColor = 'bg-[#0F1E36] text-white border-[#1E7B42]/50 shadow-xl';
          icon = <CheckCircle className="w-5 h-5 text-[#4ADE80] shrink-0" />;
        } else if (toast.type === 'warning') {
          bgColor = 'bg-amber-950 text-amber-100 border-amber-500/40 shadow-xl';
          icon = <AlertTriangle className="w-5 h-5 text-amber-400 shrink-0" />;
        }

        return (
          <div
            key={toast.id}
            className={`pointer-events-auto flex items-center justify-between gap-3 p-3.5 rounded-2xl border ${bgColor} shadow-2xl animate-in slide-in-from-bottom-5 fade-in duration-300`}
          >
            <div className="flex items-center gap-2.5">
              {icon}
              <span className="text-xs sm:text-sm font-medium leading-snug">
                {toast.message}
              </span>
            </div>
            <button
              onClick={() => removeToast(toast.id)}
              className="p-1 rounded-lg hover:bg-white/10 text-slate-400 hover:text-white transition shrink-0"
              aria-label="Close notification"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        );
      })}
    </div>
  );
};
