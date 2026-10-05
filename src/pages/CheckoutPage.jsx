import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  ShieldCheck, 
  ShoppingBag, 
  ArrowRight, 
  CheckCircle2, 
  Sparkles, 
  MapPin, 
  Mail, 
  User, 
  Phone, 
  Building,
  CreditCard,
  Truck
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { useApp } from '../context/AppContext';
import { BRAND_DATA } from '../data/caseStudyData';

export const CheckoutPage = () => {
  const { cart, cartSubtotal, placeOrder } = useApp();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: 'Ananya Sharma',
    email: 'ananya.sharma@example.com',
    phone: '+91 98765 43210',
    address: 'Flat 304, Green Heights, Indiranagar',
    city: 'Bengaluru',
    pinCode: '560038',
    paymentMethod: 'cod_demo'
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formErrors, setFormErrors] = useState({});

  const qty = cart.quantity > 0 ? cart.quantity : 1;
  const currentTotal = qty * BRAND_DATA.price;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (formErrors[name]) {
      setFormErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validate = () => {
    const errors = {};
    if (!formData.fullName.trim()) errors.fullName = 'Full name is required';
    if (!formData.email.trim()) errors.email = 'Email address is required';
    if (!formData.phone.trim()) errors.phone = 'Phone number is required';
    if (!formData.address.trim()) errors.address = 'Delivery address is required';
    if (!formData.city.trim()) errors.city = 'City is required';
    if (!formData.pinCode.trim()) errors.pinCode = 'PIN code is required';
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handlePlaceOrder = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    setTimeout(() => {
      const order = placeOrder(formData);
      
      // Celebrate with confetti
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 }
        });
      } catch (err) {}

      setIsSubmitting(false);
      navigate(`/order-success/${order.id}`);
    }, 600);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      
      {/* Top Banner Notice */}
      <div className="bg-amber-50 border border-amber-200/80 rounded-2xl p-4 flex items-center justify-between gap-3 text-xs text-amber-900">
        <div className="flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-amber-700 shrink-0" />
          <span><strong>College Case Study Demo Checkout:</strong> Simulated purchase flow for the MilletMorn Go-To-Market project.</span>
        </div>
        <span className="hidden sm:inline-block font-mono bg-white px-2 py-0.5 rounded border border-amber-300 font-bold text-amber-800">
          DEMO MODE
        </span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        
        {/* Left: Customer & Delivery Address Form */}
        <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 border border-brand-border shadow-soft space-y-6">
          <div>
            <h2 className="text-2xl font-bold text-brand-dark font-serif">
              Delivery Details
            </h2>
            <p className="text-xs text-slate-500 mt-1">
              Enter recipient shipping details for the 500g Ready-to-Cook pack demo delivery.
            </p>
          </div>

          <form onSubmit={handlePlaceOrder} className="space-y-4">
            
            {/* Full Name */}
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                Full Name *
              </label>
              <div className="relative">
                <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="e.g. Ananya Sharma"
                  className={`w-full pl-10 pr-4 py-2.5 rounded-xl border text-sm focus:outline-none focus:ring-2 focus:ring-brand-primary/20 ${
                    formErrors.fullName ? 'border-rose-400 bg-rose-50/20' : 'border-slate-200 bg-slate-50/50'
                  }`}
                />
              </div>
              {formErrors.fullName && <p className="text-[11px] text-rose-600 mt-1">{formErrors.fullName}</p>}
            </div>

            {/* Email & Phone Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Email Address *
                </label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="name@example.com"
                    className={`w-full pl-10 pr-4 py-2.5 rounded-xl border text-sm focus:outline-none focus:ring-2 focus:ring-brand-primary/20 ${
                      formErrors.email ? 'border-rose-400 bg-rose-50/20' : 'border-slate-200 bg-slate-50/50'
                    }`}
                  />
                </div>
                {formErrors.email && <p className="text-[11px] text-rose-600 mt-1">{formErrors.email}</p>}
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Phone Number *
                </label>
                <div className="relative">
                  <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 98765 43210"
                    className={`w-full pl-10 pr-4 py-2.5 rounded-xl border text-sm focus:outline-none focus:ring-2 focus:ring-brand-primary/20 ${
                      formErrors.phone ? 'border-rose-400 bg-rose-50/20' : 'border-slate-200 bg-slate-50/50'
                    }`}
                  />
                </div>
                {formErrors.phone && <p className="text-[11px] text-rose-600 mt-1">{formErrors.phone}</p>}
              </div>
            </div>

            {/* Address */}
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                Delivery Address *
              </label>
              <div className="relative">
                <MapPin className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                <textarea
                  name="address"
                  rows="2"
                  value={formData.address}
                  onChange={handleChange}
                  placeholder="House/Flat No., Apartment, Street, Locality"
                  className={`w-full pl-10 pr-4 py-2.5 rounded-xl border text-sm focus:outline-none focus:ring-2 focus:ring-brand-primary/20 ${
                    formErrors.address ? 'border-rose-400 bg-rose-50/20' : 'border-slate-200 bg-slate-50/50'
                  }`}
                />
              </div>
              {formErrors.address && <p className="text-[11px] text-rose-600 mt-1">{formErrors.address}</p>}
            </div>

            {/* City & PIN Code */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  City *
                </label>
                <div className="relative">
                  <Building className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    placeholder="e.g. Bengaluru"
                    className={`w-full pl-10 pr-4 py-2.5 rounded-xl border text-sm focus:outline-none focus:ring-2 focus:ring-brand-primary/20 ${
                      formErrors.city ? 'border-rose-400 bg-rose-50/20' : 'border-slate-200 bg-slate-50/50'
                    }`}
                  />
                </div>
                {formErrors.city && <p className="text-[11px] text-rose-600 mt-1">{formErrors.city}</p>}
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  PIN Code *
                </label>
                <input
                  type="text"
                  name="pinCode"
                  value={formData.pinCode}
                  onChange={handleChange}
                  placeholder="e.g. 560038"
                  className={`w-full px-4 py-2.5 rounded-xl border text-sm focus:outline-none focus:ring-2 focus:ring-brand-primary/20 ${
                    formErrors.pinCode ? 'border-rose-400 bg-rose-50/20' : 'border-slate-200 bg-slate-50/50'
                  }`}
                />
                {formErrors.pinCode && <p className="text-[11px] text-rose-600 mt-1">{formErrors.pinCode}</p>}
              </div>
            </div>

            {/* Demo Payment Method Selection */}
            <div className="pt-4 border-t border-slate-100">
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                Payment Method (Case Study Demo)
              </label>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <label className="flex items-center gap-3 p-3.5 rounded-2xl border border-brand-primary bg-amber-50/40 cursor-pointer">
                  <input 
                    type="radio" 
                    name="paymentMethod" 
                    value="cod_demo"
                    checked={formData.paymentMethod === 'cod_demo'} 
                    onChange={handleChange}
                    className="text-brand-primary focus:ring-brand-primary"
                  />
                  <div>
                    <span className="text-xs font-bold text-slate-900 block">Cash on Delivery (Demo)</span>
                    <span className="text-[10px] text-slate-500">Pay upon product arrival</span>
                  </div>
                </label>

                <label className="flex items-center gap-3 p-3.5 rounded-2xl border border-slate-200 bg-white cursor-pointer hover:bg-slate-50">
                  <input 
                    type="radio" 
                    name="paymentMethod" 
                    value="upi_demo"
                    checked={formData.paymentMethod === 'upi_demo'} 
                    onChange={handleChange}
                    className="text-brand-primary focus:ring-brand-primary"
                  />
                  <div>
                    <span className="text-xs font-bold text-slate-900 block">UPI / QR Demo</span>
                    <span className="text-[10px] text-slate-500">Simulated 1-click scan</span>
                  </div>
                </label>
              </div>
            </div>

            {/* Submit Action */}
            <div className="pt-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-brand-primary to-brand-dark hover:from-[#1E3A5F] hover:to-[#162D50] text-white py-4 px-6 rounded-2xl font-bold text-base shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 active:scale-98 disabled:opacity-75"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    <span>Processing Demo Order...</span>
                  </>
                ) : (
                  <>
                    <span>Place Demo Order (₹{currentTotal})</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </div>

          </form>
        </div>


        {/* Right: Order Summary */}
        <div className="lg:col-span-5 bg-[#FAF6F0] rounded-3xl p-6 sm:p-8 border border-brand-border space-y-6">
          
          <div className="border-b border-brand-border pb-4">
            <h3 className="text-lg font-bold text-brand-dark font-serif">
              Order Summary
            </h3>
            <span className="text-xs text-slate-500">
              Case study product checkout preview
            </span>
          </div>

          {/* Line Item */}
          <div className="bg-white rounded-2xl p-4 border border-brand-border shadow-xs flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-14 bg-[#162D50] rounded-xl flex flex-col items-center justify-center text-white text-center p-1 font-mono">
                <span className="text-[8px] text-amber-400 font-bold">500g</span>
                <span className="text-xs font-black">MM</span>
              </div>

              <div>
                <h4 className="font-bold text-sm text-slate-900">
                  {BRAND_DATA.name} ({BRAND_DATA.packSize})
                </h4>
                <p className="text-xs text-slate-500">
                  {qty} × ₹{BRAND_DATA.price}
                </p>
              </div>
            </div>

            <span className="text-base font-black text-brand-dark">
              ₹{currentTotal}
            </span>
          </div>

          {/* Price Breakdown */}
          <div className="space-y-2.5 text-xs text-slate-600 border-b border-brand-border pb-4">
            <div className="flex justify-between">
              <span>Item Subtotal ({qty} pack{qty > 1 ? 's' : ''})</span>
              <span className="font-bold text-slate-900">₹{currentTotal}</span>
            </div>
            <div className="flex justify-between text-emerald-800">
              <span>Demo Standard Delivery</span>
              <span className="font-bold">FREE</span>
            </div>
            <div className="flex justify-between">
              <span>Taxes & GST (Included)</span>
              <span>₹0</span>
            </div>
          </div>

          {/* Total Amount */}
          <div className="flex items-baseline justify-between pt-1">
            <span className="text-sm font-bold text-slate-900">Total Payable</span>
            <div className="text-right">
              <span className="text-2xl font-black text-brand-dark">₹{currentTotal}</span>
              <span className="text-[10px] text-slate-500 block">All taxes included</span>
            </div>
          </div>

          {/* Case Study Operations Annotation */}
          <div className="bg-white rounded-2xl p-4 border border-amber-200/80 text-xs space-y-2">
            <span className="font-bold text-amber-900 flex items-center gap-1">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Case Study Margin Note:
            </span>
            <p className="text-slate-600 text-[11px] leading-relaxed">
              Order Value: <strong>₹{currentTotal}</strong> | Unit Cost: <strong>₹{qty * BRAND_DATA.cost}</strong> | Gross Contribution: <strong className="text-emerald-700">₹{qty * BRAND_DATA.contribution}</strong> (45.6%)
            </p>
          </div>

        </div>

      </div>

    </div>
  );
};
