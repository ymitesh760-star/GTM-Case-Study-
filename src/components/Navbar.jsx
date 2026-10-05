import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { 
  ShoppingBag, 
  Menu, 
  X, 
  Sparkles, 
  BarChart2, 
  ShieldCheck, 
  Layers, 
  ArrowRight,
  Flame
} from 'lucide-react';
import { useApp } from '../context/AppContext';

export const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { cartItemCount, setIsCartOpen, setIsTourOpen } = useApp();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Product', path: '/product' },
    { name: 'How It Works', path: '/how-it-works' },
    { name: 'Customer Journey', path: '/journey' },
    { name: 'GTM Strategy', path: '/gtm' },
    { name: 'About', path: '/about' },
    { name: 'Feedback', path: '/feedback' },
  ];

  const isActive = (path) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  const handleBuyNow = () => {
    navigate('/product');
  };

  return (
    <header className={`sticky top-0 z-40 transition-all duration-300 ${
      scrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-brand-border/80 py-2.5' 
        : 'bg-[#FDFBF7]/90 backdrop-blur-sm border-b border-brand-border/40 py-3.5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo & Tagline */}
          <Link to="/" className="flex items-center gap-2.5 group">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-[#162D50] to-[#254472] flex items-center justify-center text-amber-400 shadow-md group-hover:scale-105 transition-transform duration-300 border border-brand-primary/20">
              <Flame className="w-5 h-5 text-[#F59E0B] group-hover:rotate-12 transition-transform duration-300" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-xl font-black text-brand-dark tracking-tight font-serif">
                  Millet<span className="text-brand-grain">Morn</span>
                </span>
                <span className="text-[10px] font-bold bg-[#E8F5E9] text-[#1E7B42] px-1.5 py-0.5 rounded border border-[#1E7B42]/20">
                  500g
                </span>
              </div>
              <span className="text-[10px] text-brand-muted tracking-wide block -mt-0.5 hidden sm:block">
                Quick Breakfast. Better Mornings.
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-3 py-1.5 rounded-xl text-sm font-medium transition-colors duration-200 ${
                  isActive(link.path)
                    ? 'text-brand-primary font-semibold bg-amber-50/80 border border-amber-200/60 shadow-xs'
                    : 'text-slate-600 hover:text-brand-primary hover:bg-slate-100/70'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Right Action Icons & Buttons */}
          <div className="flex items-center gap-2 sm:gap-3">
            
            {/* Presentation Tour Trigger Button */}
            <button
              onClick={() => setIsTourOpen(true)}
              className="hidden md:flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl text-xs font-semibold text-brand-primary bg-amber-100/70 hover:bg-amber-200/70 border border-amber-300/60 transition"
              title="Presentation Demo Flow"
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-600 animate-spin" style={{ animationDuration: '6s' }} />
              <span>Demo Flow</span>
            </button>

            {/* Business Metrics Shortcut */}
            <Link
              to="/business-metrics"
              className={`hidden sm:flex items-center gap-1 px-2.5 py-1.5 rounded-xl text-xs font-semibold transition ${
                location.pathname === '/business-metrics'
                  ? 'bg-slate-900 text-white'
                  : 'text-slate-700 hover:bg-slate-100'
              }`}
              title="Business Metrics & Assumptions"
            >
              <BarChart2 className="w-3.5 h-3.5 text-emerald-600" />
              <span>₹169 Model</span>
            </Link>

            {/* Shopping Cart Trigger */}
            <button
              onClick={() => setIsCartOpen(true)}
              className="relative p-2.5 rounded-xl text-slate-700 hover:text-brand-primary hover:bg-amber-50 transition border border-transparent hover:border-amber-200"
              aria-label="Open Shopping Cart"
            >
              <ShoppingBag className="w-5 h-5" />
              {cartItemCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-brand-accent text-white text-[11px] font-bold w-5 h-5 rounded-full flex items-center justify-center shadow-md animate-soft-pulse">
                  {cartItemCount}
                </span>
              )}
            </button>

            {/* Buy Now CTA Button */}
            <button
              onClick={handleBuyNow}
              className="hidden sm:inline-flex items-center gap-2 bg-gradient-to-r from-brand-primary to-brand-dark hover:from-[#1E3A5F] hover:to-[#162D50] text-white px-4 py-2 rounded-xl text-sm font-semibold shadow-md hover:shadow-lg transition-all duration-200 active:scale-95"
            >
              <span>Buy Now</span>
              <span className="bg-white/20 text-[11px] px-1.5 py-0.5 rounded font-mono">₹169</span>
            </button>

            {/* Mobile Hamburger Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl text-slate-700 hover:bg-slate-100 focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden pt-4 pb-6 border-t border-slate-200 mt-3 animate-in fade-in slide-in-from-top-2 duration-200">
            <div className="space-y-1 mb-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`block px-3 py-2.5 rounded-xl text-base font-medium ${
                    isActive(link.path)
                      ? 'bg-amber-50 text-brand-primary font-bold border border-amber-200'
                      : 'text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            <div className="grid grid-cols-2 gap-2 pt-3 border-t border-slate-100">
              <Link
                to="/business-metrics"
                className="flex items-center justify-center gap-1.5 p-2.5 bg-slate-100 hover:bg-slate-200 rounded-xl text-xs font-semibold text-slate-800"
              >
                <BarChart2 className="w-4 h-4 text-emerald-600" />
                <span>Financials</span>
              </Link>

              <Link
                to="/admin"
                className="flex items-center justify-center gap-1.5 p-2.5 bg-slate-100 hover:bg-slate-200 rounded-xl text-xs font-semibold text-slate-800"
              >
                <ShieldCheck className="w-4 h-4 text-amber-600" />
                <span>Admin Demo</span>
              </Link>
            </div>

            <div className="mt-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  navigate('/product');
                }}
                className="w-full bg-brand-primary text-white py-3 rounded-xl font-bold text-center flex items-center justify-center gap-2 shadow-md"
              >
                <span>Buy Ready-to-Cook Mix</span>
                <span className="bg-white/20 text-xs px-2 py-0.5 rounded font-mono">₹169</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
