import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { 
  CheckCircle2, 
  Sparkles, 
  ArrowRight, 
  ShoppingBag, 
  MessageSquare, 
  RefreshCw, 
  MapPin, 
  Package, 
  Layers
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { BRAND_DATA } from '../data/caseStudyData';

export const OrderSuccessPage = () => {
  const { orderId } = useParams();
  const { orders, lastOrder } = useApp();
  const navigate = useNavigate();

  const currentOrder = orders.find(o => o.id === orderId) || lastOrder || {
    id: orderId || 'MM-2026-DEMO',
    customerName: 'Valued Customer',
    quantity: 1,
    totalPrice: 169,
    address: 'Demo Address',
    city: 'Bengaluru',
    pinCode: '560038',
    status: 'Received (Demo)'
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10">
      
      {/* Success Card Header */}
      <div className="bg-white rounded-3xl p-8 sm:p-12 border border-brand-border shadow-soft text-center space-y-6">
        
        <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto text-emerald-600 shadow-md animate-bounce">
          <CheckCircle2 className="w-10 h-10" />
        </div>

        <div className="space-y-2">
          <span className="text-xs font-bold text-emerald-800 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-full uppercase tracking-wider">
            DEMO ORDER CONFIRMATION
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-brand-dark font-serif">
            Order Placed Successfully!
          </h1>
          <p className="text-slate-600 text-sm max-w-md mx-auto">
            Thank you, <strong>{currentOrder.customerName}</strong>! Your demo order has been logged into the case study database.
          </p>
        </div>

        {/* Order ID Pill */}
        <div className="inline-flex items-center gap-2 bg-[#FAF6F0] border border-brand-border px-5 py-2.5 rounded-2xl">
          <span className="text-xs text-slate-500 font-medium">Demo Order ID:</span>
          <span className="text-base font-black text-brand-dark font-mono">{currentOrder.id}</span>
        </div>

        {/* Order Details Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-2xl mx-auto pt-4 text-left">
          <div className="p-3.5 bg-slate-50 rounded-2xl border border-slate-200 text-xs">
            <span className="text-slate-400 uppercase tracking-wider block text-[10px]">Item & Pack</span>
            <span className="font-bold text-slate-800 text-sm mt-0.5 block">{BRAND_DATA.name}</span>
            <span className="text-slate-500">{currentOrder.quantity} × {BRAND_DATA.packSize}</span>
          </div>

          <div className="p-3.5 bg-slate-50 rounded-2xl border border-slate-200 text-xs">
            <span className="text-slate-400 uppercase tracking-wider block text-[10px]">Total Paid (Demo)</span>
            <span className="font-bold text-slate-800 text-sm mt-0.5 block">₹{currentOrder.totalPrice}</span>
            <span className="text-emerald-700 font-semibold">Free Delivery</span>
          </div>

          <div className="p-3.5 bg-slate-50 rounded-2xl border border-slate-200 text-xs">
            <span className="text-slate-400 uppercase tracking-wider block text-[10px]">Status</span>
            <span className="font-bold text-emerald-800 text-sm mt-0.5 block">Received</span>
            <span className="text-slate-500">Fast simulated transit</span>
          </div>
        </div>

      </div>


      {/* Next Step in Customer Journey Interactive Stage */}
      <div className="bg-gradient-to-r from-[#0F1E36] to-[#162D50] rounded-3xl p-8 text-white shadow-xl space-y-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-white/10 pb-4">
          <div>
            <span className="text-xs font-bold text-amber-400 uppercase tracking-wider block">
              Case Study Lifecycle Progression
            </span>
            <h3 className="text-xl sm:text-2xl font-bold font-serif mt-1">
              Next in the Customer Journey: Feedback & Repeat Purchase
            </h3>
          </div>
          <Link
            to="/journey"
            className="text-xs text-amber-300 hover:text-white font-semibold flex items-center gap-1 shrink-0"
          >
            <Layers className="w-4 h-4" />
            <span>View 7-Stage Map</span>
          </Link>
        </div>

        <p className="text-xs sm:text-sm text-slate-300 max-w-2xl leading-relaxed">
          In our GTM case study, after a customer purchases and consumes the 500g mix, we engage them for product feedback and stimulate repeat orders through 1-click replenishment.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
          {/* Action 1: Submit Feedback */}
          <Link
            to="/feedback"
            className="bg-white/10 hover:bg-white/20 border border-white/20 rounded-2xl p-5 transition text-left flex items-start justify-between group"
          >
            <div className="space-y-1.5">
              <div className="w-8 h-8 rounded-xl bg-amber-400/20 text-amber-300 flex items-center justify-center">
                <MessageSquare className="w-4 h-4" />
              </div>
              <h4 className="font-bold text-sm text-white">Share Product Feedback</h4>
              <p className="text-xs text-slate-300">
                Rate taste, convenience, and preparation speed.
              </p>
            </div>
            <ArrowRight className="w-4 h-4 text-slate-400 group-hover:translate-x-1 transition-transform" />
          </Link>

          {/* Action 2: Repeat Purchase */}
          <Link
            to="/repeat-purchase"
            className="bg-gradient-to-r from-amber-500 to-amber-400 hover:from-amber-400 hover:to-amber-300 text-slate-950 rounded-2xl p-5 transition text-left flex items-start justify-between group shadow-md"
          >
            <div className="space-y-1.5">
              <div className="w-8 h-8 rounded-xl bg-slate-950/20 text-slate-950 flex items-center justify-center">
                <RefreshCw className="w-4 h-4" />
              </div>
              <h4 className="font-bold text-sm text-slate-950">Simulate Repeat Purchase</h4>
              <p className="text-xs text-slate-900 font-medium">
                Test the 1-click reorder loop for satisfied consumers.
              </p>
            </div>
            <ArrowRight className="w-4 h-4 text-slate-950 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>

    </div>
  );
};
