import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  ShoppingBag, 
  Plus, 
  Minus, 
  Trash2, 
  ArrowRight, 
  ShieldCheck, 
  Truck, 
  Sparkles,
  ArrowLeft
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { BRAND_DATA } from '../data/caseStudyData';

export const CartPage = () => {
  const { cart, updateQuantity, clearCart, cartSubtotal, cartItemCount } = useApp();
  const navigate = useNavigate();

  const hasItems = cart.quantity > 0;

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      
      {/* Header */}
      <div className="flex items-center justify-between border-b border-slate-200 pb-4">
        <div>
          <h1 className="text-3xl font-extrabold text-brand-dark font-serif">
            Shopping Cart
          </h1>
          <p className="text-sm text-slate-600">
            Review your order for MilletMorn Ready-to-Cook Mix
          </p>
        </div>

        {hasItems && (
          <button
            onClick={clearCart}
            className="text-xs text-rose-600 hover:text-rose-700 font-semibold flex items-center gap-1"
          >
            <Trash2 className="w-3.5 h-3.5" />
            <span>Clear Cart</span>
          </button>
        )}
      </div>

      {hasItems ? (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Cart Items List (Left) */}
          <div className="lg:col-span-8 space-y-4">
            
            {/* Free Delivery Banner */}
            <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-4 flex items-center gap-3 text-sm text-emerald-900">
              <Truck className="w-5 h-5 text-emerald-600 shrink-0" />
              <span>You have qualified for <strong>Free Standard Demo Shipping</strong> on this order.</span>
            </div>

            {/* Line Item Card */}
            <div className="bg-white rounded-3xl p-6 border border-brand-border shadow-soft">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                
                {/* Product Info */}
                <div className="flex items-center gap-4">
                  <div className="w-16 h-18 bg-[#162D50] rounded-2xl flex flex-col items-center justify-center text-white shrink-0 p-2 text-center border border-amber-400/30">
                    <span className="text-[9px] font-bold text-amber-400">500g</span>
                    <span className="text-sm font-black font-serif">MM</span>
                    <span className="text-[8px] text-emerald-300">Mix</span>
                  </div>

                  <div>
                    <span className="text-[10px] font-bold text-[#1E7B42] bg-[#E8F5E9] px-2 py-0.5 rounded-full uppercase tracking-wider">
                      Ready-to-Cook
                    </span>
                    <h3 className="text-lg font-bold text-slate-900 mt-1">
                      {BRAND_DATA.name}
                    </h3>
                    <p className="text-xs text-slate-500">
                      {BRAND_DATA.productName} ({BRAND_DATA.packSize})
                    </p>
                    <span className="text-xs font-semibold text-brand-dark block mt-1">
                      ₹{BRAND_DATA.price} per pack
                    </span>
                  </div>
                </div>

                {/* Quantity Stepper & Calculation */}
                <div className="flex items-center justify-between sm:justify-end gap-6 w-full sm:w-auto pt-3 sm:pt-0 border-t sm:border-t-0 border-slate-100">
                  <div className="flex items-center gap-2 bg-slate-100 p-1.5 rounded-2xl border border-slate-200">
                    <button
                      onClick={() => updateQuantity(cart.quantity - 1)}
                      className="w-8 h-8 bg-white rounded-xl flex items-center justify-center text-slate-700 hover:bg-slate-50 shadow-xs font-bold transition"
                      aria-label="Decrease quantity"
                    >
                      <Minus className="w-3.5 h-3.5" />
                    </button>
                    <span className="w-8 text-center font-bold text-sm text-slate-900">
                      {cart.quantity}
                    </span>
                    <button
                      onClick={() => updateQuantity(cart.quantity + 1)}
                      className="w-8 h-8 bg-white rounded-xl flex items-center justify-center text-slate-700 hover:bg-slate-50 shadow-xs font-bold transition"
                      aria-label="Increase quantity"
                    >
                      <Plus className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  <div className="text-right">
                    <span className="text-xs text-slate-400 block line-through">
                      ₹{cart.quantity * 199}
                    </span>
                    <span className="text-xl font-black text-brand-dark">
                      ₹{cartSubtotal}
                    </span>
                  </div>
                </div>

              </div>

              {/* Mathematical breakdown line */}
              <div className="mt-4 pt-3 border-t border-slate-100 text-xs text-slate-500 flex items-center justify-between">
                <span>Calculation breakdown:</span>
                <span className="font-mono font-semibold text-slate-800">
                  {cart.quantity} pack × ₹{BRAND_DATA.price} = ₹{cartSubtotal}
                </span>
              </div>
            </div>

            {/* Case Study Callout */}
            <div className="p-4 rounded-2xl bg-[#FAF6F0] border border-brand-border text-xs text-slate-600 flex items-start gap-3">
              <Sparkles className="w-4 h-4 text-brand-grain shrink-0 mt-0.5" />
              <div>
                <strong className="text-slate-900 block font-semibold mb-0.5">
                  Case Study Unit Economics at Work:
                </strong>
                <span>
                  For this order of {cart.quantity} pack(s), the estimated gross contribution generated is <strong>₹{cart.quantity * BRAND_DATA.contribution}</strong> (at ₹77/pack, 45.6% margin).
                </span>
              </div>
            </div>

            <Link
              to="/product"
              className="inline-flex items-center gap-2 text-xs font-semibold text-brand-primary hover:text-brand-dark transition"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Continue exploring product details</span>
            </Link>

          </div>

          {/* Order Summary Box (Right) */}
          <div className="lg:col-span-4 bg-white rounded-3xl p-6 border border-brand-border shadow-soft space-y-6">
            <h3 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-3">
              Order Summary
            </h3>

            <div className="space-y-3 text-sm text-slate-600">
              <div className="flex justify-between">
                <span>Packs Quantity</span>
                <span className="font-semibold text-slate-900">{cart.quantity} × 500g</span>
              </div>
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span className="font-semibold text-slate-900">₹{cartSubtotal}</span>
              </div>
              <div className="flex justify-between text-emerald-700">
                <span>Demo Delivery</span>
                <span className="font-bold">FREE</span>
              </div>
              <div className="flex justify-between text-base font-bold text-slate-900 pt-3 border-t border-slate-100">
                <span>Total Amount</span>
                <span className="text-xl text-brand-dark font-black">₹{cartSubtotal}</span>
              </div>
            </div>

            <button
              onClick={() => navigate('/checkout')}
              className="w-full bg-gradient-to-r from-brand-primary to-brand-dark hover:from-[#1E3A5F] hover:to-[#162D50] text-white py-3.5 px-4 rounded-2xl font-bold flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition active:scale-95"
            >
              <span>Proceed to Checkout</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <div className="space-y-2 text-[11px] text-slate-500 pt-2 border-t border-slate-100">
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Simulated college checkout process</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-amber-600 shrink-0" />
                <span>Instant order confirmation demo</span>
              </div>
            </div>
          </div>

        </div>
      ) : (
        <div className="bg-white rounded-3xl p-12 text-center max-w-lg mx-auto border border-brand-border space-y-4 shadow-soft">
          <div className="w-16 h-16 rounded-full bg-slate-100 flex items-center justify-center mx-auto text-slate-400">
            <ShoppingBag className="w-8 h-8" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">Your cart is currently empty</h2>
          <p className="text-xs text-slate-600 max-w-sm mx-auto">
            Experience the 500g Ready-to-Cook Millet Breakfast Mix trial pack at ₹169.
          </p>
          <button
            onClick={() => {
              updateQuantity(1);
              navigate('/product');
            }}
            className="bg-brand-primary text-white font-bold px-6 py-3 rounded-2xl text-xs hover:bg-brand-dark transition shadow-sm"
          >
            Explore & Add to Cart
          </button>
        </div>
      )}

    </div>
  );
};
