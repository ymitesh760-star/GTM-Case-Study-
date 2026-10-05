import React, { useState } from 'react';
import { 
  ShieldCheck, 
  ShoppingBag, 
  TrendingUp, 
  IndianRupee, 
  Users, 
  MessageSquare, 
  RefreshCw, 
  ShieldAlert, 
  CheckCircle2, 
  RotateCcw,
  Sparkles,
  Package,
  Layers,
  Star
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { BRAND_DATA } from '../data/caseStudyData';

export const AdminPage = () => {
  const { 
    orders, 
    feedbacks, 
    totalPacksSold, 
    totalEstimatedRevenue, 
    repeatOrdersCount, 
    resetAllDemoData,
    addToast
  } = useApp();

  const [activeTab, setActiveTab] = useState('orders');

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
      
      {/* Top Banner Notice */}
      <div className="bg-slate-900 text-white rounded-3xl p-6 sm:p-8 border border-slate-800 shadow-xl flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="space-y-1">
          <div className="inline-flex items-center gap-2 bg-amber-400/20 text-amber-300 border border-amber-400/30 px-3 py-0.5 rounded-full text-xs font-semibold">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Case Study Operations Control Panel</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold font-serif">
            Admin & Business Demo Dashboard
          </h1>
          <p className="text-xs text-slate-400">
            Simulated live command center for orders, sales telemetry, and customer feedback.
          </p>
        </div>

        <button
          onClick={resetAllDemoData}
          className="bg-white/10 hover:bg-white/20 border border-white/20 text-white text-xs font-bold px-4 py-2.5 rounded-xl transition flex items-center gap-2 self-start sm:self-auto"
        >
          <RotateCcw className="w-3.5 h-3.5 text-amber-400" />
          <span>Reset Demo Data</span>
        </button>
      </div>

      {/* Mandatory Demo Data Label */}
      <div className="bg-amber-50 border border-amber-300 rounded-2xl p-3.5 text-center text-xs font-bold text-amber-900 tracking-wider">
        DEMO DATA — NOT REAL BUSINESS DATA • COLLEGE CASE STUDY PROTOTYPE
      </div>

      {/* KPI METRIC CARDS (5 CARDS) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
        
        {/* Total Demo Orders */}
        <div className="bg-white rounded-2xl p-5 border border-brand-border shadow-soft space-y-2">
          <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
            Total Demo Orders
          </span>
          <span className="text-3xl font-black text-slate-900 font-mono block">
            {orders.length}
          </span>
          <span className="text-[10px] text-emerald-700 font-semibold block">Live tracked</span>
        </div>

        {/* Total Packs Sold */}
        <div className="bg-white rounded-2xl p-5 border border-brand-border shadow-soft space-y-2">
          <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
            Total Packs Sold
          </span>
          <span className="text-3xl font-black text-brand-primary font-mono block">
            {totalPacksSold}
          </span>
          <span className="text-[10px] text-slate-500 block">500g Ready Mix</span>
        </div>

        {/* Estimated Revenue */}
        <div className="bg-white rounded-2xl p-5 border border-brand-border shadow-soft space-y-2">
          <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
            Estimated Revenue
          </span>
          <span className="text-3xl font-black text-emerald-800 font-mono block">
            ₹{totalEstimatedRevenue.toLocaleString('en-IN')}
          </span>
          <span className="text-[10px] text-slate-500 block">@ ₹169 per pack</span>
        </div>

        {/* Customer Feedback */}
        <div className="bg-white rounded-2xl p-5 border border-brand-border shadow-soft space-y-2">
          <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
            Customer Feedback
          </span>
          <span className="text-3xl font-black text-amber-600 font-mono block">
            {feedbacks.length}
          </span>
          <span className="text-[10px] text-slate-500 block">Avg 4.9★ rating</span>
        </div>

        {/* Repeat Customers */}
        <div className="bg-white rounded-2xl p-5 border border-brand-border shadow-soft space-y-2">
          <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
            Repeat Customers
          </span>
          <span className="text-3xl font-black text-blue-800 font-mono block">
            {repeatOrdersCount}
          </span>
          <span className="text-[10px] text-blue-600 font-semibold block">Retention loop</span>
        </div>

      </div>


      {/* Tab Controls & Tables */}
      <div className="bg-white rounded-3xl border border-brand-border shadow-soft overflow-hidden">
        
        {/* Table Tabs */}
        <div className="flex items-center gap-4 px-6 pt-5 pb-3 border-b border-slate-100">
          <button
            onClick={() => setActiveTab('orders')}
            className={`text-sm font-bold pb-2 border-b-2 transition ${
              activeTab === 'orders'
                ? 'border-brand-primary text-brand-primary'
                : 'border-transparent text-slate-500 hover:text-slate-900'
            }`}
          >
            Demo Orders Log ({orders.length})
          </button>
          <button
            onClick={() => setActiveTab('feedback')}
            className={`text-sm font-bold pb-2 border-b-2 transition ${
              activeTab === 'feedback'
                ? 'border-brand-primary text-brand-primary'
                : 'border-transparent text-slate-500 hover:text-slate-900'
            }`}
          >
            Feedback Responses ({feedbacks.length})
          </button>
        </div>

        {/* Tab 1: Orders Table */}
        {activeTab === 'orders' && (
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-[#FAF6F0] text-slate-700 font-mono uppercase text-[10px] tracking-wider border-b border-brand-border">
                  <th className="py-3 px-6">Order ID</th>
                  <th className="py-3 px-6">Customer</th>
                  <th className="py-3 px-6">Quantity</th>
                  <th className="py-3 px-6">Total Value</th>
                  <th className="py-3 px-6">City</th>
                  <th className="py-3 px-6">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {orders.map((ord) => (
                  <tr key={ord.id} className="hover:bg-slate-50/70 transition">
                    <td className="py-3.5 px-6 font-mono font-bold text-slate-900">
                      {ord.id}
                    </td>
                    <td className="py-3.5 px-6">
                      <span className="font-bold text-slate-800 block">{ord.customerName}</span>
                      <span className="text-[11px] text-slate-400">{ord.email}</span>
                    </td>
                    <td className="py-3.5 px-6 font-semibold text-slate-700">
                      {ord.quantity} × 500g
                    </td>
                    <td className="py-3.5 px-6 font-mono font-bold text-brand-dark">
                      ₹{ord.totalPrice}
                    </td>
                    <td className="py-3.5 px-6 text-slate-600">
                      {ord.city || 'Bengaluru'}
                    </td>
                    <td className="py-3.5 px-6">
                      <span className="inline-flex items-center gap-1 text-[11px] font-semibold bg-emerald-50 text-emerald-800 border border-emerald-200 px-2 py-0.5 rounded-md">
                        <CheckCircle2 className="w-3 h-3 text-emerald-600" /> {ord.status || 'Received'}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* Tab 2: Feedback Table */}
        {activeTab === 'feedback' && (
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-[#FAF6F0] text-slate-700 font-mono uppercase text-[10px] tracking-wider border-b border-brand-border">
                  <th className="py-3 px-6">Customer</th>
                  <th className="py-3 px-6">Rating</th>
                  <th className="py-3 px-6">Feedback Comments</th>
                  <th className="py-3 px-6">Date</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {feedbacks.map((fb) => (
                  <tr key={fb.id} className="hover:bg-slate-50/70 transition">
                    <td className="py-3.5 px-6 font-bold text-slate-900">
                      {fb.name}
                      <span className="block font-normal text-slate-400 text-[10px]">{fb.email}</span>
                    </td>
                    <td className="py-3.5 px-6">
                      <div className="flex items-center gap-0.5">
                        {[...Array(fb.rating)].map((_, i) => (
                          <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                        ))}
                      </div>
                    </td>
                    <td className="py-3.5 px-6 text-slate-600 max-w-md italic">
                      "{fb.feedback}"
                    </td>
                    <td className="py-3.5 px-6 text-slate-400 font-mono text-[11px]">
                      {fb.date}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

      </div>

    </div>
  );
};
