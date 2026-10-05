import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Plus, 
  Minus, 
  ShoppingBag, 
  ShieldCheck, 
  Sparkles, 
  Clock, 
  CheckCircle2, 
  PackageOpen, 
  Flame, 
  Smile, 
  Leaf, 
  Check, 
  ChevronRight,
  ArrowRight
} from 'lucide-react';
import { ProductPackMockup } from '../components/ProductPackMockup';
import { BRAND_DATA, PREPARATION_STEPS } from '../data/caseStudyData';
import { useApp } from '../context/AppContext';

export const ProductPage = () => {
  const [selectedTab, setSelectedTab] = useState('overview');
  const [quantity, setQuantity] = useState(1);
  const { addToCart, setIsCartOpen } = useApp();
  const navigate = useNavigate();

  const handleAddToCart = () => {
    addToCart(quantity);
    setIsCartOpen(true);
  };

  const handleBuyNow = () => {
    addToCart(quantity);
    navigate('/checkout');
  };

  const getStepIcon = (iconName) => {
    switch (iconName) {
      case 'PackageOpen': return <PackageOpen className="w-5 h-5 text-amber-600" />;
      case 'Flame': return <Flame className="w-5 h-5 text-rose-600" />;
      default: return <Smile className="w-5 h-5 text-emerald-600" />;
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-12">
      
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-xs text-slate-500 font-medium">
        <button onClick={() => navigate('/')} className="hover:text-brand-primary">Home</button>
        <ChevronRight className="w-3 h-3 text-slate-400" />
        <span className="text-slate-900 font-semibold">Ready-to-Cook Millet Breakfast Mix</span>
      </nav>

      {/* Main Product Showcase Section */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* Left: Interactive Visual Pack Mockup */}
        <div className="lg:col-span-6 bg-gradient-to-b from-[#FAF6F0] to-[#F5EFEB] rounded-3xl p-8 sm:p-12 border border-brand-border flex flex-col items-center justify-center relative">
          <ProductPackMockup size="lg" />
          
          <div className="mt-8 flex items-center justify-center gap-4 text-xs text-slate-600 font-medium">
            <span className="flex items-center gap-1">
              <ShieldCheck className="w-4 h-4 text-emerald-600" /> 100% Quality Checked
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Sparkles className="w-4 h-4 text-amber-600" /> 500g Moisture Seal
            </span>
          </div>
        </div>

        {/* Right: Product Details, Price, Quantity & CTA */}
        <div className="lg:col-span-6 space-y-6">
          
          {/* Category & Badge */}
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="bg-[#E8F5E9] text-[#1E7B42] border border-[#1E7B42]/30 px-2.5 py-0.5 rounded-full text-xs font-bold">
                READY-TO-COOK
              </span>
              <span className="bg-amber-100 text-amber-900 px-2.5 py-0.5 rounded-full text-xs font-bold">
                500 g PACK
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl font-extrabold text-brand-dark tracking-tight font-serif">
              {BRAND_DATA.name}
            </h1>
            <p className="text-lg text-slate-600 font-medium">
              {BRAND_DATA.productName}
            </p>
          </div>

          {/* Pricing Box */}
          <div className="p-5 rounded-2xl bg-[#FAF6F0] border border-brand-border flex items-baseline justify-between">
            <div>
              <span className="text-xs text-slate-500 uppercase tracking-wider block">Special Launch Price</span>
              <div className="flex items-baseline gap-2 mt-0.5">
                <span className="text-3xl sm:text-4xl font-black text-brand-dark">
                  ₹{BRAND_DATA.price}
                </span>
                <span className="text-sm text-slate-400 line-through">₹199</span>
                <span className="text-xs font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded">
                  Save ₹30
                </span>
              </div>
            </div>

            <div className="text-right">
              <span className="text-xs text-slate-500 block">Unit Net Weight</span>
              <span className="text-base font-bold text-slate-800">{BRAND_DATA.packSize}</span>
            </div>
          </div>

          {/* Quick Value Points */}
          <div className="grid grid-cols-2 gap-2 text-xs text-slate-700">
            <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white border border-slate-200">
              <Check className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Quick 5-Minute Cook</span>
            </div>
            <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white border border-slate-200">
              <Check className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>10–12 Healthy Servings</span>
            </div>
            <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white border border-slate-200">
              <Check className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Zero Complicated Prep</span>
            </div>
            <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white border border-slate-200">
              <Check className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Airtight Resealable Pouch</span>
            </div>
          </div>

          {/* Quantity Selector & Action Buttons */}
          <div className="space-y-3 pt-2">
            <label className="text-xs font-bold text-slate-700 uppercase tracking-wider block">
              Quantity (Packs)
            </label>

            <div className="flex flex-wrap items-center gap-3">
              {/* Stepper */}
              <div className="flex items-center gap-3 bg-slate-100 p-1.5 rounded-2xl border border-slate-200">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-9 h-9 bg-white rounded-xl flex items-center justify-center text-slate-700 hover:bg-slate-50 shadow-xs font-bold transition disabled:opacity-50"
                  disabled={quantity <= 1}
                  aria-label="Decrease quantity"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="w-8 text-center font-bold text-base text-slate-900">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-9 h-9 bg-white rounded-xl flex items-center justify-center text-slate-700 hover:bg-slate-50 shadow-xs font-bold transition"
                  aria-label="Increase quantity"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>

              {/* Add to Cart Button */}
              <button
                onClick={handleAddToCart}
                className="flex-1 bg-amber-100 hover:bg-amber-200 text-brand-dark border border-amber-300/80 font-bold py-3.5 px-6 rounded-2xl text-sm transition flex items-center justify-center gap-2 shadow-xs"
              >
                <ShoppingBag className="w-4 h-4 text-brand-grain" />
                <span>Add to Cart (₹{quantity * BRAND_DATA.price})</span>
              </button>

              {/* Buy Now Button */}
              <button
                onClick={handleBuyNow}
                className="w-full sm:w-auto bg-brand-primary hover:bg-brand-dark text-white font-bold py-3.5 px-8 rounded-2xl text-sm shadow-md hover:shadow-lg transition flex items-center justify-center gap-2"
              >
                <span>Buy Now</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* College Case Study Highlight Note */}
          <div className="p-4 rounded-2xl bg-amber-50/70 border border-amber-200/60 text-xs text-slate-700 space-y-1">
            <span className="font-bold text-brand-dark flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-brand-grain" /> Case Study Pricing Logic:
            </span>
            <p className="text-slate-600 leading-relaxed">
              At ₹169 selling price with ₹92 unit production cost, each pack delivers ₹77 contribution margin (45.6%) supporting omnichannel distribution.
            </p>
          </div>

        </div>

      </div>


      {/* Tabbed Specifications Section */}
      <section className="bg-white rounded-3xl border border-brand-border p-6 sm:p-10 shadow-soft">
        
        {/* Tab Headers */}
        <div className="flex flex-wrap items-center gap-2 border-b border-slate-200 pb-4 mb-8">
          {[
            { id: 'overview', label: 'Overview' },
            { id: 'ingredients', label: 'Ingredients' },
            { id: 'preparation', label: 'Preparation (3 Steps)' },
            { id: 'storage', label: 'Storage' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setSelectedTab(tab.id)}
              className={`px-5 py-2.5 rounded-2xl text-sm font-bold transition-all ${
                selectedTab === tab.id
                  ? 'bg-brand-primary text-white shadow-md'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab 1: Overview */}
        {selectedTab === 'overview' && (
          <div className="space-y-6 animate-in fade-in duration-200">
            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-2 font-serif">
                Product Overview
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed max-w-3xl">
                {BRAND_DATA.subheadline} Developed as a wholesome, hassle-free morning food option, MilletMorn combines the natural goodness of millets in a convenient 500g ready-to-cook pack suitable for busy individuals and families.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4">
              <div className="p-4 rounded-2xl bg-[#FAF6F0] border border-brand-border">
                <span className="text-xs font-bold text-amber-800 uppercase block mb-1">Target Need</span>
                <p className="text-xs text-slate-600">Quick, convenient breakfast ready without extensive soaking or grinding.</p>
              </div>
              <div className="p-4 rounded-2xl bg-[#FAF6F0] border border-brand-border">
                <span className="text-xs font-bold text-emerald-800 uppercase block mb-1">Pack Size & Yield</span>
                <p className="text-xs text-slate-600">500 g net weight yielding approximately 10 to 12 hearty breakfast bowls.</p>
              </div>
              <div className="p-4 rounded-2xl bg-[#FAF6F0] border border-brand-border">
                <span className="text-xs font-bold text-blue-800 uppercase block mb-1">Price Point</span>
                <p className="text-xs text-slate-600">₹169 trial price to encourage rapid adoption and recurring weekly orders.</p>
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: Ingredients */}
        {selectedTab === 'ingredients' && (
          <div className="space-y-6 animate-in fade-in duration-200">
            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-2 font-serif">
                Ingredients
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed max-w-3xl">
                MilletMorn is prepared with a proprietary blend of wholesome Indian millets and natural grain seasonings designed for optimal taste and rapid cooking.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="p-4 rounded-2xl border border-slate-200 bg-slate-50/60">
                <div className="w-8 h-8 rounded-xl bg-amber-100 flex items-center justify-center text-brand-grain mb-2">
                  <Leaf className="w-4 h-4" />
                </div>
                <h4 className="font-bold text-sm text-slate-900">Selected Millet Grains</h4>
                <p className="text-xs text-slate-600 mt-1">Carefully roasted and milled whole millets.</p>
              </div>

              <div className="p-4 rounded-2xl border border-slate-200 bg-slate-50/60">
                <div className="w-8 h-8 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-700 mb-2">
                  <Leaf className="w-4 h-4" />
                </div>
                <h4 className="font-bold text-sm text-slate-900">Natural Seasoning Blend</h4>
                <p className="text-xs text-slate-600 mt-1">Light spices formulated for gentle morning digestion.</p>
              </div>

              <div className="p-4 rounded-2xl border border-slate-200 bg-slate-50/60">
                <div className="w-8 h-8 rounded-xl bg-blue-100 flex items-center justify-center text-blue-700 mb-2">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <h4 className="font-bold text-sm text-slate-900">Zero Artificial Fillers</h4>
                <p className="text-xs text-slate-600 mt-1">100% wholesome dry breakfast mix.</p>
              </div>
            </div>
          </div>
        )}

        {/* Tab 3: Preparation */}
        {selectedTab === 'preparation' && (
          <div className="space-y-6 animate-in fade-in duration-200">
            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-2 font-serif">
                3-Step Simple Preparation
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed max-w-3xl">
                Enjoy a hearty breakfast in three effortless steps without complicated kitchen steps.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {PREPARATION_STEPS.map((step) => (
                <div
                  key={step.step}
                  className="bg-[#FAF6F0] rounded-2xl p-6 border border-brand-border space-y-3"
                >
                  <div className="w-10 h-10 rounded-xl bg-white shadow-xs flex items-center justify-center border border-slate-200">
                    {getStepIcon(step.icon)}
                  </div>
                  <span className="text-xs font-bold text-brand-grain uppercase tracking-wider block">
                    Step {step.step}
                  </span>
                  <h4 className="text-base font-bold text-slate-900">
                    {step.title}
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {step.subtitle}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 4: Storage */}
        {selectedTab === 'storage' && (
          <div className="space-y-6 animate-in fade-in duration-200">
            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-2 font-serif">
                Storage & Shelf Care
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed max-w-3xl">
                Maintain optimal freshness and aroma for your 500g pouch.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 rounded-2xl bg-[#FAF6F0] border border-brand-border">
                <h4 className="font-bold text-sm text-slate-900 mb-1">Cool & Dry Place</h4>
                <p className="text-xs text-slate-600">Store in a cool, dry place away from direct sunlight and moisture.</p>
              </div>
              <div className="p-4 rounded-2xl bg-[#FAF6F0] border border-brand-border">
                <h4 className="font-bold text-sm text-slate-900 mb-1">Airtight Freshness</h4>
                <p className="text-xs text-slate-600">Reseal the zipper pouch tightly after each use or transfer to a clean airtight container.</p>
              </div>
            </div>
          </div>
        )}

      </section>

    </div>
  );
};
