import React from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  X, 
  ShoppingBag, 
  Plus, 
  Minus, 
  Trash2, 
  ArrowRight, 
  ShieldCheck, 
  Sparkles,
  Truck
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { BRAND_DATA } from '../data/caseStudyData';

export const CartDrawer = () => {
  const { 
    cart, 
    isCartOpen, 
    setIsCartOpen, 
    updateQuantity, 
    clearCart, 
    cartSubtotal,
    cartItemCount
  } = useApp();
  
  const navigate = useNavigate();

  if (!isCartOpen) return null;

  const handleCheckout = () => {
    setIsCartOpen(false);
    navigate('/checkout');
  };

  const hasItems = cart.quantity > 0;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div 
        onClick={() => setIsCartOpen(false)}
        className="absolute inset-0 bg-black/50 backdrop-blur-xs transition-opacity animate-in fade-in duration-300"
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#FAF6F0] text-slate-800 shadow-2xl flex flex-col justify-between border-l border-brand-border animate-in slide-in-from-right duration-300">
          
          {/* Header */}
          <div className="p-5 bg-white border-b border-brand-border flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-amber-100 flex items-center justify-center text-brand-grain">
                <ShoppingBag className="w-4 h-4" />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 text-base">Your Cart</h3>
                <span className="text-xs text-slate-500">
                  {hasItems ? `${cartItemCount} item${cartItemCount > 1 ? 's' : ''}` : 'Cart is empty'}
                </span>
              </div>
            </div>

            <button
              onClick={() => setIsCartOpen(false)}
              className="p-2 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition"
              aria-label="Close cart"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Cart Content Body */}
          <div className="flex-1 overflow-y-auto p-5 space-y-4">
            {hasItems ? (
              <div className="space-y-4">
                
                {/* Free Delivery Banner Indicator */}
                <div className="bg-emerald-50 border border-emerald-200/80 rounded-2xl p-3 flex items-center gap-2.5 text-xs text-emerald-900">
                  <Truck className="w-4 h-4 text-emerald-700 shrink-0" />
                  <span><strong>Free Standard Delivery</strong> unlocked for this demo order!</span>
                </div>

                {/* Product Line Item Card */}
                <div className="bg-white rounded-2xl p-4 border border-brand-border shadow-xs">
                  <div className="flex gap-3">
                    
                    {/* Pack Mini Icon */}
                    <div className="w-16 h-18 bg-[#162D50] rounded-xl flex flex-col items-center justify-center text-white shrink-0 p-2 text-center border border-amber-400/20">
                      <span className="text-[9px] font-bold text-amber-400 uppercase">500g</span>
                      <span className="text-xs font-serif font-black text-white">MM</span>
                      <span className="text-[8px] text-emerald-300">Ready</span>
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-1">
                        <div>
                          <h4 className="font-bold text-sm text-slate-900 leading-snug">
                            {BRAND_DATA.name}
                          </h4>
                          <p className="text-xs text-slate-500 truncate">
                            {BRAND_DATA.productName}
                          </p>
                        </div>
                        <button
                          onClick={clearCart}
                          className="text-slate-400 hover:text-rose-500 p-1 transition"
                          title="Remove item"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>

                      <div className="mt-1 flex items-center gap-2 text-xs">
                        <span className="bg-amber-100 text-amber-900 font-bold px-1.5 py-0.5 rounded">
                          {BRAND_DATA.packSize}
                        </span>
                        <span className="text-slate-500">
                          ₹{BRAND_DATA.price} per pack
                        </span>
                      </div>

                      {/* Quantity Stepper & Line Price */}
                      <div className="mt-3 flex items-center justify-between pt-2 border-t border-slate-100">
                        <div className="flex items-center gap-2 bg-slate-100 p-1 rounded-xl border border-slate-200">
                          <button
                            onClick={() => updateQuantity(cart.quantity - 1)}
                            className="w-7 h-7 bg-white rounded-lg flex items-center justify-center text-slate-700 hover:bg-slate-50 shadow-xs font-bold transition"
                            aria-label="Decrease quantity"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="w-6 text-center font-bold text-sm text-slate-900">
                            {cart.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(cart.quantity + 1)}
                            className="w-7 h-7 bg-white rounded-lg flex items-center justify-center text-slate-700 hover:bg-slate-50 shadow-xs font-bold transition"
                            aria-label="Increase quantity"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>

                        <div className="text-right">
                          <span className="text-xs text-slate-400 block line-through">
                            ₹{cart.quantity * 199}
                          </span>
                          <span className="text-base font-extrabold text-brand-dark">
                            ₹{cartSubtotal}
                          </span>
                        </div>
                      </div>

                    </div>
                  </div>
                </div>

                {/* Case Study Value Breakdown */}
                <div className="bg-amber-50/60 rounded-2xl p-3.5 border border-amber-200/80 text-xs space-y-1.5">
                  <div className="flex items-center justify-between text-slate-700 font-medium">
                    <span>Calculation:</span>
                    <span>{cart.quantity} pack × ₹{BRAND_DATA.price}</span>
                  </div>
                  <div className="flex items-center justify-between text-emerald-800 font-semibold">
                    <span>Estimated Servings:</span>
                    <span>~{cart.quantity * 10} Healthy Bowls</span>
                  </div>
                </div>

              </div>
            ) : (
              <div className="py-12 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-slate-100 flex items-center justify-center mx-auto text-slate-400">
                  <ShoppingBag className="w-8 h-8" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-800 text-base">Your cart is empty</h4>
                  <p className="text-xs text-slate-500 mt-1 max-w-xs mx-auto">
                    Try the 500g Ready-to-Cook Millet Breakfast Mix for ₹169 and experience quick 5-min wholesome mornings.
                  </p>
                </div>
                <button
                  onClick={() => {
                    updateQuantity(1);
                  }}
                  className="bg-brand-primary text-white text-xs font-semibold px-4 py-2.5 rounded-xl hover:bg-brand-dark transition shadow-sm"
                >
                  Add 1 Pack (₹169)
                </button>
              </div>
            )}
          </div>

          {/* Footer & Checkout Button */}
          {hasItems && (
            <div className="p-5 bg-white border-t border-brand-border space-y-3">
              <div className="space-y-1.5 text-xs text-slate-600">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="font-semibold text-slate-900">₹{cartSubtotal}</span>
                </div>
                <div className="flex justify-between text-emerald-700">
                  <span>Demo Shipping</span>
                  <span className="font-bold">FREE</span>
                </div>
                <div className="flex justify-between text-sm font-bold text-slate-900 pt-2 border-t border-slate-100">
                  <span>Total Amount</span>
                  <span className="text-lg text-brand-dark font-black">₹{cartSubtotal}</span>
                </div>
              </div>

              <button
                onClick={handleCheckout}
                className="w-full bg-gradient-to-r from-brand-primary to-brand-dark hover:from-[#1E3A5F] hover:to-[#162D50] text-white py-3.5 px-4 rounded-xl font-bold flex items-center justify-center gap-2 shadow-lg transition active:scale-98"
              >
                <span>Proceed to Demo Checkout</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="flex items-center justify-center gap-1 text-[11px] text-slate-400 text-center">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                <span>College Demo • No Real Payment Charged</span>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};
