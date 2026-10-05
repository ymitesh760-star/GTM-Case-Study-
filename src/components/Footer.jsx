import React from 'react';
import { Link } from 'react-router-dom';
import { Flame, Heart, ShieldAlert, Sparkles, ArrowUpRight, CheckCircle } from 'lucide-react';
import { BRAND_DATA } from '../data/caseStudyData';
import { useApp } from '../context/AppContext';

export const Footer = () => {
  const { setIsTourOpen } = useApp();

  return (
    <footer className="bg-[#0F1E36] text-white border-t border-[#254472] pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-2xl bg-[#D97706] flex items-center justify-center text-slate-950 font-bold shadow-md">
                <Flame className="w-5 h-5 text-[#0F1E36]" />
              </div>
              <span className="text-2xl font-black text-white tracking-tight font-serif">
                Millet<span className="text-[#F59E0B]">Morn</span>
              </span>
            </div>
            
            <p className="text-slate-300 text-sm max-w-sm leading-relaxed">
              “{BRAND_DATA.tagline}”
            </p>
            <p className="text-xs text-slate-400 max-w-sm leading-relaxed">
              {BRAND_DATA.subheadline}
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1 text-[11px] bg-emerald-950/80 border border-emerald-500/30 text-emerald-300 px-2.5 py-1 rounded-full">
                <CheckCircle className="w-3 h-3 text-emerald-400" /> Ready to Cook
              </span>
              <span className="inline-flex items-center gap-1 text-[11px] bg-amber-950/80 border border-amber-500/30 text-amber-300 px-2.5 py-1 rounded-full">
                <CheckCircle className="w-3 h-3 text-amber-400" /> 500 g Pack
              </span>
              <span className="inline-flex items-center gap-1 text-[11px] bg-blue-950/80 border border-blue-500/30 text-blue-300 px-2.5 py-1 rounded-full">
                <CheckCircle className="w-3 h-3 text-blue-400" /> ₹169 MRP
              </span>
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h4 className="text-xs font-bold text-amber-400 uppercase tracking-widest mb-4">
              Explore Product
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-300">
              <li>
                <Link to="/" className="hover:text-amber-400 transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/product" className="hover:text-amber-400 transition-colors">Product Details</Link>
              </li>
              <li>
                <Link to="/how-it-works" className="hover:text-amber-400 transition-colors">3-Step Preparation</Link>
              </li>
              <li>
                <Link to="/cart" className="hover:text-amber-400 transition-colors">Shopping Cart</Link>
              </li>
              <li>
                <Link to="/checkout" className="hover:text-amber-400 transition-colors">Demo Checkout</Link>
              </li>
            </ul>
          </div>

          {/* GTM & Operations Links */}
          <div>
            <h4 className="text-xs font-bold text-amber-400 uppercase tracking-widest mb-4">
              GTM & Operations
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-300">
              <li>
                <Link to="/journey" className="hover:text-amber-400 transition-colors">Customer Journey</Link>
              </li>
              <li>
                <Link to="/gtm" className="hover:text-amber-400 transition-colors">Channels & Acquisition</Link>
              </li>
              <li>
                <Link to="/how-it-works" className="hover:text-amber-400 transition-colors">Supply Chain Flow</Link>
              </li>
              <li>
                <Link to="/gtm" className="hover:text-amber-400 transition-colors">SWOT & Risk Matrix</Link>
              </li>
              <li>
                <Link to="/repeat-purchase" className="hover:text-amber-400 transition-colors">Repeat Purchase Hub</Link>
              </li>
            </ul>
          </div>

          {/* Case Study & Academic Controls */}
          <div>
            <h4 className="text-xs font-bold text-amber-400 uppercase tracking-widest mb-4">
              Case Study Tools
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-300">
              <li>
                <Link to="/business-metrics" className="hover:text-amber-400 transition-colors flex items-center gap-1">
                  <span>Unit Economics (₹77 Margin)</span>
                  <ArrowUpRight className="w-3 h-3 text-slate-400" />
                </Link>
              </li>
              <li>
                <Link to="/feedback" className="hover:text-amber-400 transition-colors">Customer Feedback</Link>
              </li>
              <li>
                <Link to="/admin" className="hover:text-amber-400 transition-colors flex items-center gap-1">
                  <span>Admin Demo Panel</span>
                  <ArrowUpRight className="w-3 h-3 text-slate-400" />
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-amber-400 transition-colors">About Project</Link>
              </li>
              <li>
                <button 
                  onClick={() => setIsTourOpen(true)}
                  className="text-amber-400 hover:text-amber-300 text-xs font-semibold flex items-center gap-1 pt-1"
                >
                  <Sparkles className="w-3 h-3" />
                  <span>Start 10-Min Demo Flow</span>
                </button>
              </li>
            </ul>
          </div>

        </div>

        {/* Disclaimer Callout Box */}
        <div className="mt-8 bg-white/5 rounded-2xl p-4 sm:p-5 border border-white/10 text-xs text-slate-300">
          <div className="flex items-start gap-3">
            <ShieldAlert className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
            <div>
              <span className="font-bold text-white block mb-0.5">
                College Case Study Prototype Notice
              </span>
              <p className="text-slate-400 leading-relaxed text-[11px]">
                This web application is an academic Go-To-Market & Customer Operations case-study simulation for the fictional brand <strong>MilletMorn</strong>. All figures (₹169 selling price, ₹92 unit production cost, ₹77 gross contribution, 2,000 pilot pack run) and customer interactions are educational models designed for classroom demonstration.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© 2026 MilletMorn Case Study Project. All rights reserved.</p>
          <div className="flex items-center gap-4 text-[11px]">
            <span>Ready-to-Cook Millet Mix</span>
            <span>•</span>
            <span>500 g Pack</span>
            <span>•</span>
            <span>₹169</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
