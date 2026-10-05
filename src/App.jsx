import React, { useState } from 'react';
import { 
  ShoppingBag, 
  Check, 
  Star, 
  ArrowRight, 
  Store, 
  Globe, 
  Clock, 
  Smile, 
  Package, 
  Utensils, 
  TrendingUp, 
  ShieldAlert,
  ChevronDown,
  X,
  Menu
} from 'lucide-react';

export function App() {
  // Simple cart state
  const [cartCount, setCartCount] = useState(0);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [quantity, setQuantity] = useState(1);

  // Simple feedback form state
  const [feedbackSubmitted, setFeedbackSubmitted] = useState(false);
  const [feedbackData, setFeedbackData] = useState({
    name: '',
    rating: 5,
    message: ''
  });

  // Mobile menu state
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Cart operations
  const handleAddToCart = () => {
    setCartCount(prev => prev + quantity);
    setIsCartOpen(true);
  };

  const handleBuyNow = () => {
    setCartCount(prev => (prev === 0 ? quantity : prev));
    setIsCartOpen(true);
  };

  // Feedback submit
  const handleFeedbackSubmit = (e) => {
    e.preventDefault();
    if (!feedbackData.name.trim() || !feedbackData.message.trim()) return;
    setFeedbackSubmitted(true);
  };

  const scrollToSection = (id) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#FDFBF7] text-[#0F172A] font-sans antialiased selection:bg-amber-100 selection:text-amber-900">
      
      {/* ========================================================
          NAVBAR
      ======================================================== */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-[#EAE4D9] shadow-xs">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2 group">
            <div className="w-9 h-9 rounded-xl bg-[#162D50] flex items-center justify-center text-amber-400 font-serif font-black text-lg shadow-xs">
              M
            </div>
            <div>
              <span className="text-xl font-extrabold text-[#162D50] font-serif tracking-tight">
                Millet<span className="text-[#D97706]">Morn</span>
              </span>
            </div>
          </a>

          {/* Navigation Links (Desktop) */}
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-600">
            <button onClick={() => scrollToSection('home')} className="hover:text-[#162D50] transition">Home</button>
            <button onClick={() => scrollToSection('about')} className="hover:text-[#162D50] transition">About</button>
            <button onClick={() => scrollToSection('product')} className="hover:text-[#162D50] transition">Product</button>
            <button onClick={() => scrollToSection('how-it-works')} className="hover:text-[#162D50] transition">How It Works</button>
            <button onClick={() => scrollToSection('journey')} className="hover:text-[#162D50] transition">Journey</button>
            <button onClick={() => scrollToSection('gtm')} className="hover:text-[#162D50] transition">GTM</button>
            <button onClick={() => scrollToSection('business-model')} className="hover:text-[#162D50] transition">Business Model</button>
            <button onClick={() => scrollToSection('swot')} className="hover:text-[#162D50] transition">SWOT</button>
            <button onClick={() => scrollToSection('feedback')} className="hover:text-[#162D50] transition">Feedback</button>
          </nav>

          {/* Right: Cart Button & Hamburger */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsCartOpen(true)}
              className="relative p-2.5 rounded-xl bg-slate-100 hover:bg-amber-50 hover:text-[#162D50] transition text-slate-700"
              aria-label="View Cart"
            >
              <ShoppingBag className="w-5 h-5" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-[#1E7B42] text-white text-[11px] font-bold w-5 h-5 rounded-full flex items-center justify-center shadow-xs">
                  {cartCount}
                </span>
              )}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-xl text-slate-700 hover:bg-slate-100"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>

        {/* Mobile Menu Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-b border-[#EAE4D9] px-4 py-4 space-y-2 text-sm font-medium">
            <button onClick={() => scrollToSection('home')} className="block w-full text-left py-2 text-slate-700 hover:text-[#162D50]">Home</button>
            <button onClick={() => scrollToSection('about')} className="block w-full text-left py-2 text-slate-700 hover:text-[#162D50]">About</button>
            <button onClick={() => scrollToSection('product')} className="block w-full text-left py-2 text-slate-700 hover:text-[#162D50]">Product</button>
            <button onClick={() => scrollToSection('how-it-works')} className="block w-full text-left py-2 text-slate-700 hover:text-[#162D50]">How It Works</button>
            <button onClick={() => scrollToSection('journey')} className="block w-full text-left py-2 text-slate-700 hover:text-[#162D50]">Customer Journey</button>
            <button onClick={() => scrollToSection('gtm')} className="block w-full text-left py-2 text-slate-700 hover:text-[#162D50]">Go-To-Market</button>
            <button onClick={() => scrollToSection('business-model')} className="block w-full text-left py-2 text-slate-700 hover:text-[#162D50]">Business Model</button>
            <button onClick={() => scrollToSection('swot')} className="block w-full text-left py-2 text-slate-700 hover:text-[#162D50]">SWOT</button>
            <button onClick={() => scrollToSection('feedback')} className="block w-full text-left py-2 text-slate-700 hover:text-[#162D50]">Feedback</button>
          </div>
        )}
      </header>


      {/* ========================================================
          1. HOME (HERO SECTION)
      ======================================================== */}
      <section id="home" className="py-16 sm:py-24 bg-gradient-to-b from-[#FAF6F0] to-[#FDFBF7] border-b border-[#EAE4D9]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <div className="inline-flex items-center gap-2 bg-emerald-50 text-[#1E7B42] border border-emerald-200 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                <span className="w-2 h-2 rounded-full bg-[#1E7B42]" />
                Ready-to-Cook Millet Breakfast Mix
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#162D50] font-serif tracking-tight leading-tight">
                Quick Breakfast. <br />
                <span className="text-[#D97706]">Better Mornings.</span>
              </h1>

              <p className="text-lg text-slate-600 max-w-xl leading-relaxed">
                A ready-to-cook millet breakfast mix for busy mornings.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <button
                  onClick={() => scrollToSection('product')}
                  className="bg-[#162D50] hover:bg-[#0F1E36] text-white font-bold px-8 py-3.5 rounded-xl text-base shadow-md transition flex items-center gap-2"
                >
                  <span>Buy Now</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={() => scrollToSection('about')}
                  className="bg-white hover:bg-slate-50 text-slate-800 border border-slate-300 font-semibold px-6 py-3.5 rounded-xl text-base transition"
                >
                  Learn More
                </button>
              </div>

              {/* Quick Key Badges */}
              <div className="pt-6 grid grid-cols-3 gap-3 text-xs text-slate-600 max-w-md">
                <div className="bg-white p-2.5 rounded-xl border border-slate-200 text-center font-medium">
                  ✓ 500 g Pack
                </div>
                <div className="bg-white p-2.5 rounded-xl border border-slate-200 text-center font-medium">
                  ✓ ₹169 MRP
                </div>
                <div className="bg-white p-2.5 rounded-xl border border-slate-200 text-center font-medium">
                  ✓ Ready to Cook
                </div>
              </div>
            </div>

            {/* Right: Real Product Packaging Visual */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative group max-w-sm w-full">
                {/* Soft backdrop glow */}
                <div className="absolute -inset-2 bg-gradient-to-tr from-amber-300/30 via-emerald-300/20 to-blue-400/20 rounded-3xl blur-xl opacity-70 group-hover:opacity-100 transition duration-500" />
                
                <div className="relative bg-white rounded-3xl p-4 sm:p-6 shadow-xl border border-[#EAE4D9] text-center space-y-4">
                  <div className="flex items-center justify-between px-2">
                    <span className="bg-[#1E7B42] text-white text-[11px] font-bold px-3 py-1 rounded-full shadow-xs">
                      100% Wholesome
                    </span>
                    <span className="bg-[#FAF6F0] text-[#D97706] font-extrabold text-xs px-3 py-1 rounded-full border border-amber-200">
                      500 g Pack
                    </span>
                  </div>

                  {/* Real Product Image */}
                  <div className="overflow-hidden rounded-2xl bg-[#FAF6F0] p-2 flex items-center justify-center">
                    <img
                      src="/milletmorn-product.png"
                      alt="MilletMorn Ready-to-Cook Millet Breakfast Mix 500g Pouch"
                      className="w-full h-auto object-contain max-h-72 drop-shadow-md hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  <div className="pt-1 flex items-baseline justify-between px-2">
                    <div className="text-left">
                      <span className="text-xs font-bold text-slate-900 block font-serif">MilletMorn</span>
                      <span className="text-[11px] text-slate-500">Ready-to-Cook Mix</span>
                    </div>
                    <div className="text-right">
                      <span className="text-2xl font-black text-[#162D50] font-mono">₹169</span>
                    </div>
                  </div>

                  <button
                    onClick={handleAddToCart}
                    className="w-full bg-[#162D50] hover:bg-[#0F1E36] text-white font-bold py-3 rounded-xl text-sm transition shadow flex items-center justify-center gap-2"
                  >
                    <ShoppingBag className="w-4 h-4 text-amber-400" />
                    <span>Add to Cart (₹169)</span>
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* ========================================================
          2. ABOUT
      ======================================================== */}
      <section id="about" className="py-16 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
          <h2 className="text-3xl font-extrabold text-[#162D50] font-serif">
            About MilletMorn
          </h2>
          <p className="text-sm text-slate-600">
            MilletMorn provides a convenient and easy-to-prepare breakfast option for:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          <div className="bg-white rounded-2xl p-6 border border-[#EAE4D9] shadow-xs text-center space-y-3">
            <div className="w-12 h-12 mx-auto rounded-xl bg-blue-50 text-[#162D50] flex items-center justify-center font-bold text-xl">
              1
            </div>
            <h3 className="text-lg font-bold text-slate-900">Working Professionals</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Quick and wholesome meal solution for busy mornings before work and commutes.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-[#EAE4D9] shadow-xs text-center space-y-3">
            <div className="w-12 h-12 mx-auto rounded-xl bg-emerald-50 text-[#1E7B42] flex items-center justify-center font-bold text-xl">
              2
            </div>
            <h3 className="text-lg font-bold text-slate-900">Health-conscious Families</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Nutrient-rich millet breakfast mix suitable for both children and elders.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-[#EAE4D9] shadow-xs text-center space-y-3">
            <div className="w-12 h-12 mx-auto rounded-xl bg-amber-50 text-[#D97706] flex items-center justify-center font-bold text-xl">
              3
            </div>
            <h3 className="text-lg font-bold text-slate-900">Students & Young Adults</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Affordable trial price and simple cooking steps ideal for hostelers and young adults.
            </p>
          </div>

        </div>
      </section>


      {/* ========================================================
          3. PRODUCT
      ======================================================== */}
      <section id="product" className="py-16 bg-[#FAF6F0] border-y border-[#EAE4D9]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-extrabold text-[#162D50] font-serif">
              Our Product
            </h2>
            <p className="text-xs text-slate-500 mt-1">Ready-to-Cook 500 g Mix</p>
          </div>

          <div className="bg-white rounded-3xl p-8 border border-[#EAE4D9] shadow-sm grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            
            <div className="bg-[#FAF6F0] rounded-2xl p-6 text-center border border-[#EAE4D9] flex flex-col items-center justify-center">
              <img
                src="/milletmorn-product.png"
                alt="MilletMorn Ready-to-Cook 500g Pack"
                className="w-full max-w-[260px] h-auto object-contain drop-shadow-md hover:scale-105 transition-transform duration-300"
              />
              <span className="mt-4 text-xs font-bold text-[#1E7B42] bg-emerald-100 px-3 py-1 rounded-full uppercase">
                500 g Pack • Ready to Cook
              </span>
            </div>

            <div className="space-y-4">
              <div>
                <span className="text-xs text-slate-400 uppercase font-mono font-bold">Product Name</span>
                <h3 className="text-2xl font-bold text-slate-900 font-serif">
                  Ready-to-Cook Millet Breakfast Mix
                </h3>
              </div>

              <div className="flex items-center gap-6 py-2 border-y border-slate-100 text-sm">
                <div>
                  <span className="text-xs text-slate-400 block">Pack Size</span>
                  <span className="font-bold text-slate-800">500 g</span>
                </div>
                <div>
                  <span className="text-xs text-slate-400 block">Price</span>
                  <span className="text-2xl font-extrabold text-[#162D50] font-mono">₹169</span>
                </div>
              </div>

              {/* Quantity Stepper */}
              <div className="flex items-center gap-3">
                <span className="text-xs font-bold text-slate-700">Quantity:</span>
                <div className="flex items-center border border-slate-200 rounded-lg overflow-hidden bg-slate-50">
                  <button 
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-3 py-1 font-bold text-slate-700 hover:bg-slate-200"
                  >
                    -
                  </button>
                  <span className="px-3 py-1 font-bold text-slate-900 bg-white min-w-[2rem] text-center">
                    {quantity}
                  </span>
                  <button 
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-3 py-1 font-bold text-slate-700 hover:bg-slate-200"
                  >
                    +
                  </button>
                </div>
              </div>

              <button
                onClick={handleAddToCart}
                className="w-full bg-[#162D50] hover:bg-[#0F1E36] text-white font-bold py-3.5 rounded-xl text-sm shadow transition flex items-center justify-center gap-2"
              >
                <ShoppingBag className="w-4 h-4" />
                <span>Add to Cart (₹{quantity * 169})</span>
              </button>
            </div>

          </div>
        </div>
      </section>


      {/* ========================================================
          4. HOW IT WORKS
      ======================================================== */}
      <section id="how-it-works" className="py-16 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
          <h2 className="text-3xl font-extrabold text-[#162D50] font-serif">
            How It Works
          </h2>
          <p className="text-sm text-slate-600">3 simple steps to a better breakfast</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          <div className="bg-white rounded-2xl p-6 border border-[#EAE4D9] shadow-xs text-center space-y-3">
            <div className="w-12 h-12 mx-auto rounded-xl bg-amber-100 text-[#D97706] flex items-center justify-center font-bold text-xl">
              1
            </div>
            <h3 className="text-lg font-bold text-slate-900">Buy the product</h3>
            <p className="text-xs text-slate-600">
              Get the 500 g MilletMorn pack online or from your local store.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-[#EAE4D9] shadow-xs text-center space-y-3">
            <div className="w-12 h-12 mx-auto rounded-xl bg-emerald-100 text-[#1E7B42] flex items-center justify-center font-bold text-xl">
              2
            </div>
            <h3 className="text-lg font-bold text-slate-900">Prepare the breakfast</h3>
            <p className="text-xs text-slate-600">
              Follow the quick preparation instructions in just a few minutes.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-[#EAE4D9] shadow-xs text-center space-y-3">
            <div className="w-12 h-12 mx-auto rounded-xl bg-blue-100 text-[#162D50] flex items-center justify-center font-bold text-xl">
              3
            </div>
            <h3 className="text-lg font-bold text-slate-900">Enjoy your meal</h3>
            <p className="text-xs text-slate-600">
              Enjoy a wholesome and delicious morning breakfast with ease.
            </p>
          </div>

        </div>
      </section>


      {/* ========================================================
          5. CUSTOMER JOURNEY
      ======================================================== */}
      <section id="journey" className="py-16 bg-[#FAF6F0] border-y border-[#EAE4D9]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 space-y-2">
            <h2 className="text-3xl font-extrabold text-[#162D50] font-serif">
              Customer Journey
            </h2>
            <p className="text-sm text-slate-600">End-to-end customer experience flow</p>
          </div>

          {/* Simple Clean Step-by-Step Flow */}
          <div className="bg-white rounded-3xl p-8 border border-[#EAE4D9] shadow-xs space-y-4 max-w-xl mx-auto">
            {[
              { stage: 'Awareness', desc: 'Customer discovers MilletMorn.' },
              { stage: 'Consideration', desc: 'Checks product, price (₹169), and suitability.' },
              { stage: 'Purchase', desc: 'Buys the 500 g pack.' },
              { stage: 'Preparation', desc: 'Prepares the breakfast quickly.' },
              { stage: 'Consumption', desc: 'Tastes and enjoys the breakfast.' },
              { stage: 'Feedback', desc: 'Shares experience and rating.' },
              { stage: 'Repeat Purchase', desc: 'Satisfied customer orders again.' },
            ].map((step, idx, arr) => (
              <React.Fragment key={step.stage}>
                <div className="flex items-center justify-between p-3.5 rounded-xl bg-[#FAF6F0] border border-[#EAE4D9]">
                  <div className="flex items-center gap-3">
                    <span className="w-6 h-6 rounded-full bg-[#162D50] text-white text-xs font-bold flex items-center justify-center">
                      {idx + 1}
                    </span>
                    <span className="font-bold text-sm text-slate-900">{step.stage}</span>
                  </div>
                  <span className="text-xs text-slate-500">{step.desc}</span>
                </div>
                {idx < arr.length - 1 && (
                  <div className="text-center text-[#D97706] font-bold text-lg -my-2">
                    ↓
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>


      {/* ========================================================
          6. GO-TO-MARKET
      ======================================================== */}
      <section id="gtm" className="py-16 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
          <h2 className="text-3xl font-extrabold text-[#162D50] font-serif">
            Go-To-Market Strategy
          </h2>
          <p className="text-sm text-slate-600">How we reach and distribute to customers</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Offline Column */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#EAE4D9] shadow-xs space-y-4">
            <div className="flex items-center gap-3 pb-3 border-b border-slate-100">
              <div className="w-10 h-10 rounded-xl bg-amber-100 text-[#D97706] flex items-center justify-center">
                <Store className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">Offline Channels</h3>
            </div>

            <ul className="space-y-3 text-sm text-slate-700">
              <li className="flex items-center gap-2.5 p-2 rounded-lg bg-slate-50">
                <span className="w-2 h-2 rounded-full bg-[#D97706]" />
                <span>Kirana Stores</span>
              </li>
              <li className="flex items-center gap-2.5 p-2 rounded-lg bg-slate-50">
                <span className="w-2 h-2 rounded-full bg-[#D97706]" />
                <span>Supermarkets</span>
              </li>
              <li className="flex items-center gap-2.5 p-2 rounded-lg bg-slate-50">
                <span className="w-2 h-2 rounded-full bg-[#D97706]" />
                <span>Health-food Stores</span>
              </li>
              <li className="flex items-center gap-2.5 p-2 rounded-lg bg-slate-50">
                <span className="w-2 h-2 rounded-full bg-[#D97706]" />
                <span>Product Sampling</span>
              </li>
            </ul>
          </div>

          {/* Online Column */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#EAE4D9] shadow-xs space-y-4">
            <div className="flex items-center gap-3 pb-3 border-b border-slate-100">
              <div className="w-10 h-10 rounded-xl bg-blue-100 text-[#162D50] flex items-center justify-center">
                <Globe className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">Online Channels</h3>
            </div>

            <ul className="space-y-3 text-sm text-slate-700">
              <li className="flex items-center gap-2.5 p-2 rounded-lg bg-slate-50">
                <span className="w-2 h-2 rounded-full bg-[#162D50]" />
                <span>Brand Website</span>
              </li>
              <li className="flex items-center gap-2.5 p-2 rounded-lg bg-slate-50">
                <span className="w-2 h-2 rounded-full bg-[#162D50]" />
                <span>WhatsApp Ordering</span>
              </li>
              <li className="flex items-center gap-2.5 p-2 rounded-lg bg-slate-50">
                <span className="w-2 h-2 rounded-full bg-[#162D50]" />
                <span>Social Media</span>
              </li>
              <li className="flex items-center gap-2.5 p-2 rounded-lg bg-slate-50">
                <span className="w-2 h-2 rounded-full bg-[#162D50]" />
                <span>Online Marketplaces</span>
              </li>
            </ul>
          </div>

        </div>
      </section>


      {/* ========================================================
          7. BUSINESS MODEL
      ======================================================== */}
      <section id="business-model" className="py-16 bg-[#FAF6F0] border-y border-[#EAE4D9]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h2 className="text-3xl font-extrabold text-[#162D50] font-serif">
              Business Model
            </h2>
            <div className="inline-block bg-amber-100 text-amber-900 border border-amber-300 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
              Case Study Assumptions
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            
            <div className="bg-white rounded-2xl p-5 border border-[#EAE4D9] shadow-xs text-center space-y-1">
              <span className="text-xs text-slate-400 uppercase font-bold block">Selling Price</span>
              <span className="text-2xl font-black text-slate-900 font-mono block">₹169</span>
              <span className="text-[10px] text-slate-500">Per 500g Pack</span>
            </div>

            <div className="bg-white rounded-2xl p-5 border border-[#EAE4D9] shadow-xs text-center space-y-1">
              <span className="text-xs text-amber-800 uppercase font-bold block">Production Cost</span>
              <span className="text-2xl font-black text-amber-900 font-mono block">₹92</span>
              <span className="text-[10px] text-slate-500">Per Pack</span>
            </div>

            <div className="bg-white rounded-2xl p-5 border border-emerald-200 shadow-xs text-center space-y-1">
              <span className="text-xs text-emerald-800 uppercase font-bold block">Contribution</span>
              <span className="text-2xl font-black text-emerald-800 font-mono block">₹77</span>
              <span className="text-[10px] text-emerald-700 font-semibold">45.6% Margin</span>
            </div>

            <div className="bg-white rounded-2xl p-5 border border-[#EAE4D9] shadow-xs text-center space-y-1">
              <span className="text-xs text-slate-400 uppercase font-bold block">Initial Production</span>
              <span className="text-2xl font-black text-[#162D50] font-mono block">2,000 Packs</span>
              <span className="text-[10px] text-slate-500">Pilot Batch</span>
            </div>

            <div className="bg-white rounded-2xl p-5 border border-[#EAE4D9] shadow-xs text-center space-y-1">
              <span className="text-xs text-slate-400 uppercase font-bold block">Total Revenue</span>
              <span className="text-2xl font-black text-slate-900 font-mono block">₹3,38,000</span>
              <span className="text-[10px] text-slate-500">2,000 × ₹169</span>
            </div>

          </div>

          <div className="bg-white rounded-2xl p-4 border border-amber-200 text-center text-xs text-slate-600 max-w-xl mx-auto">
            <strong>Note:</strong> Clearly labeled as <em>Case Study Assumptions</em> for college presentation purposes.
          </div>

        </div>
      </section>


      {/* ========================================================
          8. SWOT ANALYSIS
      ======================================================== */}
      <section id="swot" className="py-16 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
          <h2 className="text-3xl font-extrabold text-[#162D50] font-serif">
            SWOT Analysis
          </h2>
          <p className="text-sm text-slate-600">Strategic evaluation of MilletMorn</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          
          {/* Strengths */}
          <div className="bg-white rounded-2xl p-6 border-2 border-emerald-200 shadow-xs space-y-3">
            <h3 className="text-base font-extrabold text-emerald-800 uppercase tracking-wider font-mono">
              STRENGTHS
            </h3>
            <ul className="space-y-2 text-xs text-slate-700">
              <li className="flex items-center gap-2">✓ Millet-based</li>
              <li className="flex items-center gap-2">✓ Ready-to-cook</li>
              <li className="flex items-center gap-2">✓ Convenient</li>
            </ul>
          </div>

          {/* Weaknesses */}
          <div className="bg-white rounded-2xl p-6 border-2 border-amber-200 shadow-xs space-y-3">
            <h3 className="text-base font-extrabold text-amber-800 uppercase tracking-wider font-mono">
              WEAKNESSES
            </h3>
            <ul className="space-y-2 text-xs text-slate-700">
              <li className="flex items-center gap-2">⚠ New brand</li>
              <li className="flex items-center gap-2">⚠ Limited awareness</li>
            </ul>
          </div>

          {/* Opportunities */}
          <div className="bg-white rounded-2xl p-6 border-2 border-blue-200 shadow-xs space-y-3">
            <h3 className="text-base font-extrabold text-blue-800 uppercase tracking-wider font-mono">
              OPPORTUNITIES
            </h3>
            <ul className="space-y-2 text-xs text-slate-700">
              <li className="flex items-center gap-2">✦ Online sales</li>
              <li className="flex items-center gap-2">✦ Retail expansion</li>
            </ul>
          </div>

          {/* Threats */}
          <div className="bg-white rounded-2xl p-6 border-2 border-rose-200 shadow-xs space-y-3">
            <h3 className="text-base font-extrabold text-rose-800 uppercase tracking-wider font-mono">
              THREATS
            </h3>
            <ul className="space-y-2 text-xs text-slate-700">
              <li className="flex items-center gap-2">✕ FMCG competition</li>
              <li className="flex items-center gap-2">✕ Price competition</li>
            </ul>
          </div>

        </div>
      </section>


      {/* ========================================================
          9. FEEDBACK
      ======================================================== */}
      <section id="feedback" className="py-16 bg-[#FAF6F0] border-y border-[#EAE4D9]">
        <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 space-y-2">
            <h2 className="text-3xl font-extrabold text-[#162D50] font-serif">
              Customer Feedback
            </h2>
            <p className="text-sm text-slate-600">Share your thoughts on MilletMorn</p>
          </div>

          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#EAE4D9] shadow-xs">
            {!feedbackSubmitted ? (
              <form onSubmit={handleFeedbackSubmit} className="space-y-4">
                
                {/* Name */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    value={feedbackData.name}
                    onChange={(e) => setFeedbackData({ ...feedbackData, name: e.target.value })}
                    placeholder="Enter your name"
                    className="w-full p-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#162D50]/20 bg-slate-50"
                  />
                </div>

                {/* Rating */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Rating (1 to 5 Stars)
                  </label>
                  <div className="flex items-center gap-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        type="button"
                        onClick={() => setFeedbackData({ ...feedbackData, rating: star })}
                        className="p-1 hover:scale-110 transition text-amber-400"
                        aria-label={`Rate ${star} stars`}
                      >
                        <Star className={`w-6 h-6 ${star <= feedbackData.rating ? 'fill-amber-400 text-amber-400' : 'text-slate-300'}`} />
                      </button>
                    ))}
                  </div>
                </div>

                {/* Feedback Message */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Feedback
                  </label>
                  <textarea
                    rows="3"
                    required
                    value={feedbackData.message}
                    onChange={(e) => setFeedbackData({ ...feedbackData, message: e.target.value })}
                    placeholder="Write your feedback here..."
                    className="w-full p-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#162D50]/20 bg-slate-50"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-[#162D50] hover:bg-[#0F1E36] text-white font-bold py-3 rounded-xl text-sm transition shadow"
                >
                  Submit Feedback
                </button>
              </form>
            ) : (
              <div className="text-center py-6 space-y-3">
                <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
                  <Check className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">
                  Thank you for your feedback!
                </h3>
                <p className="text-xs text-slate-500">
                  We appreciate your response for the MilletMorn case study.
                </p>
                <button
                  onClick={() => {
                    setFeedbackSubmitted(false);
                    setFeedbackData({ name: '', rating: 5, message: '' });
                  }}
                  className="text-xs text-[#162D50] font-bold hover:underline pt-2"
                >
                  Submit another feedback
                </button>
              </div>
            )}
          </div>
        </div>
      </section>


      {/* ========================================================
          10. FOOTER
      ======================================================== */}
      <footer className="py-10 bg-[#162D50] text-white text-center space-y-3 border-t border-[#254472]">
        <div className="max-w-6xl mx-auto px-4 space-y-2">
          <h4 className="text-xl font-bold font-serif">MilletMorn</h4>
          <p className="text-xs text-slate-300">
            “Quick Breakfast. Better Mornings.”
          </p>
          <div className="pt-2">
            <span className="inline-block bg-white/10 text-amber-300 text-[11px] font-medium px-3 py-1 rounded-full border border-white/10">
              College Case Study Prototype
            </span>
          </div>
        </div>
      </footer>


      {/* ========================================================
          SIMPLE CART MODAL
      ======================================================== */}
      {isCartOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-xs animate-in fade-in">
          <div className="bg-white rounded-3xl p-6 max-w-sm w-full shadow-2xl border border-[#EAE4D9] space-y-4">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <h3 className="font-bold text-base text-slate-900">Your Cart</h3>
              <button 
                onClick={() => setIsCartOpen(false)}
                className="p-1 rounded-lg text-slate-400 hover:text-slate-700"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {cartCount > 0 ? (
              <div className="space-y-3 text-sm">
                <div className="flex items-center justify-between p-3 rounded-xl bg-[#FAF6F0] border border-[#EAE4D9]">
                  <div className="flex items-center gap-3">
                    <img 
                      src="/milletmorn-product.png" 
                      alt="MilletMorn" 
                      className="w-12 h-14 object-contain rounded-lg bg-white p-1 border border-slate-200"
                    />
                    <div>
                      <strong className="block text-slate-900 font-serif text-sm">MilletMorn (500 g)</strong>
                      <span className="text-xs text-slate-500">{cartCount} × ₹169</span>
                    </div>
                  </div>
                  <span className="font-bold text-slate-900 font-mono">
                    ₹{cartCount * 169}
                  </span>
                </div>

                <div className="pt-2 flex justify-between font-bold text-slate-900 border-t border-slate-100">
                  <span>Total</span>
                  <span className="font-mono text-base">₹{cartCount * 169}</span>
                </div>

                <button
                  onClick={() => {
                    alert('Demo Order Placed Successfully! (College Case Study Simulation)');
                    setCartCount(0);
                    setIsCartOpen(false);
                  }}
                  className="w-full bg-[#162D50] hover:bg-[#0F1E36] text-white font-bold py-3 rounded-xl text-sm transition"
                >
                  Place Demo Order
                </button>
              </div>
            ) : (
              <div className="text-center py-6 space-y-2">
                <p className="text-xs text-slate-500">Your cart is empty.</p>
                <button
                  onClick={() => {
                    setCartCount(1);
                  }}
                  className="bg-[#162D50] text-white text-xs font-bold px-4 py-2 rounded-xl"
                >
                  Add 1 Pack (₹169)
                </button>
              </div>
            )}
          </div>
        </div>
      )}

    </div>
  );
}

export default App;
