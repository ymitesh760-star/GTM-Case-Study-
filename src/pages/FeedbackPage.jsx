import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  Star, 
  MessageSquare, 
  Send, 
  CheckCircle2, 
  Sparkles, 
  RefreshCw, 
  ThumbsUp, 
  Layers,
  ArrowRight,
  User,
  Mail
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { useApp } from '../context/AppContext';

export const FeedbackPage = () => {
  const { feedbacks, submitFeedback, addToCart, setIsCartOpen } = useApp();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: 'Siddharth Varma',
    email: 'siddharth.v@example.com',
    rating: 5,
    criteria: {
      taste: 5,
      convenience: 5,
      preparation: 5,
      overall: 5,
    },
    feedback: 'Loved the fast 5-minute prep! Tastes very fresh and keeps me energetic through morning meetings.',
  });

  const [submitted, setSubmitted] = useState(false);
  const [formErrors, setFormErrors] = useState({});

  const handleRatingClick = (category, value) => {
    if (category === 'overall') {
      setFormData(prev => ({
        ...prev,
        rating: value,
        criteria: { ...prev.criteria, overall: value }
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        criteria: { ...prev.criteria, [category]: value }
      }));
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = {};
    if (!formData.name.trim()) errors.name = 'Name is required';
    if (!formData.email.trim()) errors.email = 'Email is required';
    if (!formData.feedback.trim()) errors.feedback = 'Feedback comments are required';

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    submitFeedback(formData);
    setSubmitted(true);

    try {
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.6 }
      });
    } catch (e) {}
  };

  const handleOrderAgain = () => {
    addToCart(1);
    setIsCartOpen(true);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-1.5 bg-amber-100 text-amber-900 border border-amber-300 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
          <MessageSquare className="w-3.5 h-3.5" />
          <span>Customer Voice & Satisfaction</span>
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-dark font-serif tracking-tight">
          Customer Feedback
        </h1>
        <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
          In our case study framework, customer feedback fuels product iteration and drives repeat loyalty loops.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        
        {/* Left Form / Success Screen */}
        <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 border border-brand-border shadow-soft">
          
          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="border-b border-slate-100 pb-4">
                <h2 className="text-xl font-bold text-slate-900 font-serif">
                  Share Your Breakfast Experience
                </h2>
                <p className="text-xs text-slate-500 mt-0.5">
                  Evaluate MilletMorn on taste, speed, and convenience.
                </p>
              </div>

              {/* Name & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Your Name *
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Siddharth Varma"
                      className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-brand-primary/20 bg-slate-50/50"
                    />
                  </div>
                  {formErrors.name && <p className="text-[11px] text-rose-600 mt-1">{formErrors.name}</p>}
                </div>

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
                      className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-brand-primary/20 bg-slate-50/50"
                    />
                  </div>
                  {formErrors.email && <p className="text-[11px] text-rose-600 mt-1">{formErrors.email}</p>}
                </div>
              </div>

              {/* Criteria Star Ratings */}
              <div className="bg-[#FAF6F0] rounded-2xl p-5 border border-brand-border space-y-4">
                <span className="text-xs font-bold text-brand-dark uppercase tracking-wider block">
                  Rate by Experience Dimensions (1–5 Stars)
                </span>

                {[
                  { key: 'taste', label: 'Taste & Flavor' },
                  { key: 'convenience', label: 'Convenience' },
                  { key: 'preparation', label: 'Preparation (3-Step Ease)' },
                  { key: 'overall', label: 'Overall Experience' },
                ].map((item) => (
                  <div key={item.key} className="flex items-center justify-between gap-4">
                    <span className="text-xs font-medium text-slate-700">{item.label}</span>
                    <div className="flex items-center gap-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <button
                          key={star}
                          type="button"
                          onClick={() => handleRatingClick(item.key, star)}
                          className="p-1 text-amber-400 hover:scale-110 transition"
                          aria-label={`Rate ${star} stars`}
                        >
                          <Star
                            className={`w-5 h-5 ${
                              star <= (formData.criteria[item.key] || formData.rating)
                                ? 'fill-amber-400 text-amber-400'
                                : 'text-slate-300'
                            }`}
                          />
                        </button>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Feedback Textarea */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Feedback & Comments *
                </label>
                <textarea
                  name="feedback"
                  rows="3"
                  value={formData.feedback}
                  onChange={handleChange}
                  placeholder="How did MilletMorn fit your morning routine?"
                  className="w-full p-3.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-brand-primary/20 bg-slate-50/50"
                />
                {formErrors.feedback && <p className="text-[11px] text-rose-600 mt-1">{formErrors.feedback}</p>}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-brand-primary hover:bg-brand-dark text-white font-bold py-3.5 px-6 rounded-2xl text-sm shadow-md transition flex items-center justify-center gap-2 active:scale-95"
              >
                <span>Submit Feedback</span>
                <Send className="w-4 h-4" />
              </button>

            </form>
          ) : (
            /* Submission Success State with Repeat Purchase prompt */
            <div className="text-center py-8 space-y-6 animate-in fade-in duration-300">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto text-emerald-600 shadow-sm">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <div className="space-y-1">
                <h3 className="text-2xl font-bold text-brand-dark font-serif">
                  Thank You for Your Feedback!
                </h3>
                <p className="text-xs text-slate-600 max-w-sm mx-auto">
                  Your response has been saved to the case study demo storage.
                </p>
              </div>

              {/* REPEAT PURCHASE HIGHLIGHT SECTION */}
              <div className="bg-gradient-to-br from-amber-500 to-amber-400 text-slate-950 p-6 rounded-3xl text-left space-y-3 shadow-md">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-black uppercase tracking-wider bg-slate-950/10 px-2 py-0.5 rounded">
                    REPEAT PURCHASE STAGE
                  </span>
                  <Sparkles className="w-4 h-4 text-slate-950" />
                </div>
                
                <h4 className="text-xl font-extrabold font-serif">
                  Enjoyed MilletMorn?
                </h4>
                
                <p className="text-xs text-slate-900 font-medium">
                  Reorder your 500g ready-to-cook pack in 1 click and keep your morning routine seamless.
                </p>

                <div className="pt-2 flex flex-wrap gap-2">
                  <button
                    onClick={handleOrderAgain}
                    className="bg-slate-950 text-white font-bold px-5 py-2.5 rounded-xl text-xs shadow hover:bg-slate-900 transition flex items-center gap-1.5"
                  >
                    <RefreshCw className="w-3.5 h-3.5 text-amber-400" />
                    <span>Order Again (₹169)</span>
                  </button>

                  <button
                    onClick={() => setSubmitted(false)}
                    className="bg-white/40 hover:bg-white/60 text-slate-950 font-semibold px-4 py-2.5 rounded-xl text-xs transition"
                  >
                    Submit Another Review
                  </button>
                </div>
              </div>

            </div>
          )}

        </div>


        {/* Right: Live Customer Feedback Feed */}
        <div className="lg:col-span-5 space-y-4">
          <div className="flex items-center justify-between border-b border-slate-200 pb-3">
            <div>
              <h3 className="text-lg font-bold text-brand-dark font-serif">
                Community Feedback Feed
              </h3>
              <span className="text-xs text-slate-500">Live recorded demo testimonials</span>
            </div>
            <span className="text-xs font-mono font-bold bg-amber-100 text-amber-900 px-2.5 py-0.5 rounded-full">
              {feedbacks.length} Reviews
            </span>
          </div>

          <div className="space-y-3.5 max-h-[550px] overflow-y-auto pr-1">
            {feedbacks.map((item) => (
              <div key={item.id} className="bg-white rounded-2xl p-4 border border-brand-border shadow-xs space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-xs text-slate-900">{item.name}</span>
                  <div className="flex items-center gap-0.5">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed italic">
                  "{item.feedback}"
                </p>

                <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-[10px] text-slate-400">
                  <span>Verified Trial Buyer</span>
                  <span>{item.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

    </div>
  );
};
