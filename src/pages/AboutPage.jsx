import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Flame, 
  Target, 
  Users, 
  Award, 
  Sparkles, 
  ArrowRight, 
  ShieldCheck, 
  BookOpen,
  Briefcase,
  GraduationCap
} from 'lucide-react';
import { BRAND_DATA, TARGET_CUSTOMERS } from '../data/caseStudyData';

export const AboutPage = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-16">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-1.5 bg-amber-100 text-amber-900 border border-amber-300 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
          <BookOpen className="w-3.5 h-3.5" />
          <span>Case Study Background</span>
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-dark font-serif tracking-tight">
          About MilletMorn
        </h1>
        <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
          A Go-To-Market and Customer Operations case study simulating a modern FMCG brand addressing urban morning nutrition friction.
        </p>
      </div>

      {/* Brand Mission & Positioning Section */}
      <div className="bg-[#FAF6F0] rounded-3xl p-8 sm:p-12 border border-brand-border space-y-6">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-2xl bg-brand-primary text-amber-400 flex items-center justify-center">
            <Flame className="w-6 h-6" />
          </div>
          <div>
            <span className="text-xs font-bold text-brand-grain uppercase tracking-wider block">
              Core Brand Philosophy
            </span>
            <h2 className="text-2xl font-bold text-slate-900 font-serif">
              "{BRAND_DATA.tagline}"
            </h2>
          </div>
        </div>

        <p className="text-sm text-slate-700 leading-relaxed max-w-3xl">
          {BRAND_DATA.subheadline} Modern urban consumers face acute morning time scarcity. While awareness of millet health benefits is at an all-time high, traditional preparation requires hours of soaking, grinding, and slow cooking. <strong>MilletMorn</strong> solves this friction with an affordable ₹169 ready-to-cook 500g mix that delivers wholesome nutrition in under 5 minutes.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
          <div className="bg-white p-5 rounded-2xl border border-brand-border shadow-xs">
            <span className="text-xs font-bold text-slate-400 uppercase block mb-1">Product</span>
            <span className="font-bold text-sm text-slate-900 block">{BRAND_DATA.productName}</span>
            <span className="text-xs text-slate-500">500 g net weight</span>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-brand-border shadow-xs">
            <span className="text-xs font-bold text-slate-400 uppercase block mb-1">Trial Pricing</span>
            <span className="font-bold text-sm text-brand-dark block">₹169 per pack</span>
            <span className="text-xs text-slate-500">~₹15 per breakfast serving</span>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-brand-border shadow-xs">
            <span className="text-xs font-bold text-slate-400 uppercase block mb-1">Unit Contribution</span>
            <span className="font-bold text-sm text-emerald-700 block">₹77 Gross Margin</span>
            <span className="text-xs text-slate-500">45.6% contribution</span>
          </div>
        </div>
      </div>

      {/* Target Audiences Grid */}
      <div className="space-y-6">
        <div className="border-b border-slate-200 pb-3">
          <h3 className="text-xl font-bold text-brand-dark font-serif">
            Target Audience Focus
          </h3>
          <p className="text-xs text-slate-500">
            Three consumer segments prioritized during the pilot go-to-market launch.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TARGET_CUSTOMERS.map((cust) => (
            <div key={cust.id} className="bg-white rounded-3xl p-6 border border-brand-border shadow-soft space-y-3">
              <span className="text-xs font-bold text-brand-primary bg-amber-50 border border-amber-200 px-2.5 py-0.5 rounded-full">
                {cust.ageGroup}
              </span>
              <h4 className="text-lg font-bold text-slate-900">{cust.title}</h4>
              <p className="text-xs text-slate-600 leading-relaxed">{cust.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Academic Attribution & Next Actions */}
      <div className="bg-gradient-to-r from-brand-primary to-brand-dark text-white rounded-3xl p-8 sm:p-10 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
        <div className="space-y-2 text-center sm:text-left">
          <span className="text-xs font-bold text-amber-300 uppercase tracking-wider">
            Academic Demonstration
          </span>
          <h3 className="text-2xl font-bold font-serif">
            Ready to explore the case study?
          </h3>
          <p className="text-xs text-slate-300 max-w-md">
            Follow the complete product demo flow from product page to checkout, feedback, and supply chain.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <Link
            to="/product"
            className="bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold px-6 py-3 rounded-2xl text-xs shadow-md transition"
          >
            Explore Product (₹169)
          </Link>
          <Link
            to="/business-metrics"
            className="bg-white/10 hover:bg-white/20 text-white border border-white/20 font-semibold px-5 py-3 rounded-2xl text-xs transition"
          >
            View Economics
          </Link>
        </div>
      </div>

    </div>
  );
};
