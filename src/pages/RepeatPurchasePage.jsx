import React from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  RefreshCw, 
  Sparkles, 
  ShoppingBag, 
  CheckCircle2, 
  ArrowRight, 
  Calendar, 
  Heart, 
  TrendingUp,
  Package,
  Layers
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { BRAND_DATA } from '../data/caseStudyData';

export const RepeatPurchasePage = () => {
  const { orders, addToCart, setIsCartOpen } = useApp();
  const navigate = useNavigate();

  const handleReorder = (qty = 1) => {
    addToCart(qty);
    setIsCartOpen(true);
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-1.5 bg-amber-100 text-amber-900 border border-amber-300 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
          <RefreshCw className="w-3.5 h-3.5" />
          <span>Stage 07: Customer Retention</span>
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-dark font-serif tracking-tight">
          Repeat Purchase Hub
        </h1>
        <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
          Demonstrating how satisfied consumers transition from initial ₹169 trial to high-frequency weekly pantry replenishments.
        </p>
      </div>

      {/* Main Feature Reorder Card */}
      <div className="bg-gradient-to-br from-[#0F1E36] via-[#162D50] to-[#254472] rounded-3xl p-8 sm:p-12 text-white shadow-2xl relative overflow-hidden">
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          
          <div className="md:col-span-8 space-y-4">
            <div className="inline-flex items-center gap-2 bg-amber-400/20 text-amber-300 border border-amber-400/40 px-3 py-1 rounded-full text-xs font-semibold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Pantry Restock Protocol</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl font-extrabold font-serif">
              Enjoyed MilletMorn?
            </h2>
            
            <p className="text-slate-300 text-sm max-w-xl leading-relaxed">
              Never run out of your quick 5-minute morning fuel. Reorder your 500g Ready-to-Cook pouch with 1 click or stock up for the whole family.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={() => handleReorder(1)}
                className="bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-slate-950 font-bold px-7 py-3.5 rounded-2xl text-sm shadow-lg transition active:scale-95 flex items-center gap-2"
              >
                <RefreshCw className="w-4 h-4" />
                <span>Order Again (1 Pack • ₹169)</span>
              </button>

              <button
                onClick={() => handleReorder(2)}
                className="bg-white/10 hover:bg-white/20 text-white border border-white/20 font-semibold px-6 py-3.5 rounded-2xl text-sm transition flex items-center gap-2"
              >
                <span>Order 2-Pack Bundle (₹338)</span>
              </button>
            </div>
          </div>

          <div className="md:col-span-4 bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 text-center space-y-3">
            <span className="text-xs uppercase tracking-wider text-amber-300 font-bold block">
              Case Study Value
            </span>
            <span className="text-4xl font-black text-white font-mono block">
              ₹77
            </span>
            <p className="text-xs text-slate-300">
              Contribution added per repeat order at zero additional customer acquisition cost (CAC).
            </p>
          </div>

        </div>
      </div>


      {/* Past Demo Orders Quick Reorder Section */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-brand-border shadow-soft space-y-6">
        <div className="flex items-center justify-between border-b border-slate-100 pb-4">
          <div>
            <h3 className="text-lg font-bold text-slate-900 font-serif">
              Recent Demo Order History
            </h3>
            <p className="text-xs text-slate-500">
              Select any past order to simulate instant 1-click reordering.
            </p>
          </div>
          <span className="text-xs font-mono font-bold bg-slate-100 text-slate-700 px-3 py-1 rounded-full">
            {orders.length} Past Orders
          </span>
        </div>

        <div className="divide-y divide-slate-100">
          {orders.map((ord) => (
            <div key={ord.id} className="py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-amber-50 flex items-center justify-center text-brand-grain font-mono text-xs font-bold shrink-0">
                  <Package className="w-5 h-5" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-sm text-slate-900">{ord.id}</span>
                    <span className="text-[10px] bg-emerald-100 text-emerald-800 font-bold px-1.5 py-0.2 rounded">
                      {ord.status}
                    </span>
                  </div>
                  <p className="text-xs text-slate-500">
                    {ord.customerName} • {ord.quantity} × {BRAND_DATA.packSize} (₹{ord.totalPrice})
                  </p>
                </div>
              </div>

              <button
                onClick={() => handleReorder(ord.quantity || 1)}
                className="bg-slate-100 hover:bg-brand-primary hover:text-white text-slate-800 font-bold px-4 py-2 rounded-xl text-xs transition flex items-center gap-1.5 self-start sm:self-auto"
              >
                <RefreshCw className="w-3.5 h-3.5" />
                <span>Reorder This Pack</span>
              </button>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};
