import React, { createContext, useContext, useState, useEffect } from 'react';
import { BRAND_DATA, INITIAL_DEMO_ORDERS, INITIAL_DEMO_FEEDBACK } from '../data/caseStudyData';

const AppContext = createContext();

export const PRESENTATION_STEPS = [
  { id: 'home', label: '1. Home / Brand', path: '/' },
  { id: 'product', label: '2. Product & Specs', path: '/product' },
  { id: 'cart', label: '3. Cart & Pricing', path: '/cart' },
  { id: 'checkout', label: '4. Demo Checkout', path: '/checkout' },
  { id: 'journey', label: '5. Customer Journey', path: '/journey' },
  { id: 'feedback', label: '6. Customer Feedback', path: '/feedback' },
  { id: 'repeat', label: '7. Repeat Purchase', path: '/repeat-purchase' },
  { id: 'gtm', label: '8. GTM & Acquisition', path: '/gtm' },
  { id: 'operations', label: '9. Supply Chain', path: '/how-it-works' },
  { id: 'metrics', label: '10. Business Metrics', path: '/business-metrics' },
  { id: 'admin', label: '11. Admin Panel', path: '/admin' },
];

export const AppProvider = ({ children }) => {
  // Cart state persisted in LocalStorage
  const [cart, setCart] = useState(() => {
    try {
      const saved = localStorage.getItem('milletmorn_cart');
      return saved ? JSON.parse(saved) : { quantity: 1 };
    } catch (e) {
      return { quantity: 1 };
    }
  });

  const [isCartOpen, setIsCartOpen] = useState(false);

  // Demo Orders
  const [orders, setOrders] = useState(() => {
    try {
      const saved = localStorage.getItem('milletmorn_orders');
      return saved ? JSON.parse(saved) : INITIAL_DEMO_ORDERS;
    } catch (e) {
      return INITIAL_DEMO_ORDERS;
    }
  });

  // Demo Feedback
  const [feedbacks, setFeedbacks] = useState(() => {
    try {
      const saved = localStorage.getItem('milletmorn_feedback');
      return saved ? JSON.parse(saved) : INITIAL_DEMO_FEEDBACK;
    } catch (e) {
      return INITIAL_DEMO_FEEDBACK;
    }
  });

  // Last completed order for quick feedback / repeat purchase trigger
  const [lastOrder, setLastOrder] = useState(() => {
    try {
      const saved = localStorage.getItem('milletmorn_last_order');
      return saved ? JSON.parse(saved) : null;
    } catch (e) {
      return null;
    }
  });

  // Toast notifications
  const [toasts, setToasts] = useState([]);

  // Presentation Tour state
  const [isTourOpen, setIsTourOpen] = useState(false);
  const [currentTourIndex, setCurrentTourIndex] = useState(0);

  // Sync to LocalStorage
  useEffect(() => {
    try {
      localStorage.setItem('milletmorn_cart', JSON.stringify(cart));
    } catch (e) {}
  }, [cart]);

  useEffect(() => {
    try {
      localStorage.setItem('milletmorn_orders', JSON.stringify(orders));
    } catch (e) {}
  }, [orders]);

  useEffect(() => {
    try {
      localStorage.setItem('milletmorn_feedback', JSON.stringify(feedbacks));
    } catch (e) {}
  }, [feedbacks]);

  useEffect(() => {
    try {
      if (lastOrder) {
        localStorage.setItem('milletmorn_last_order', JSON.stringify(lastOrder));
      }
    } catch (e) {}
  }, [lastOrder]);

  // Toast handler
  const addToast = (message, type = 'success', duration = 3500) => {
    const id = Date.now() + Math.random().toString(36).substring(2, 6);
    setToasts(prev => [...prev, { id, message, type }]);
    setTimeout(() => {
      setToasts(prev => prev.filter(t => t.id !== id));
    }, duration);
  };

  const removeToast = (id) => {
    setToasts(prev => prev.filter(t => t.id !== id));
  };

  // Cart operations
  const addToCart = (qtyToAdd = 1) => {
    setCart(prev => {
      const currentQty = prev.quantity || 0;
      const newQty = currentQty + qtyToAdd;
      addToast(`Added ${qtyToAdd} × MilletMorn (500g) to cart!`, 'success');
      return { quantity: newQty };
    });
  };

  const updateQuantity = (newQty) => {
    if (newQty <= 0) {
      setCart({ quantity: 0 });
      addToast('Cart is now empty', 'info');
    } else {
      setCart({ quantity: newQty });
    }
  };

  const clearCart = () => {
    setCart({ quantity: 0 });
  };

  const placeOrder = (customerDetails) => {
    const qty = cart.quantity > 0 ? cart.quantity : 1;
    const randomSuffix = Math.floor(1000 + Math.random() * 9000);
    const newOrder = {
      id: `MM-2026-${randomSuffix}`,
      customerName: customerDetails.fullName,
      email: customerDetails.email,
      phone: customerDetails.phone,
      address: customerDetails.address,
      city: customerDetails.city,
      pinCode: customerDetails.pinCode,
      quantity: qty,
      packSize: BRAND_DATA.packSize,
      unitPrice: BRAND_DATA.price,
      totalPrice: qty * BRAND_DATA.price,
      date: new Date().toISOString(),
      status: 'Received (Demo)',
      channel: 'Brand Website',
      isRepeat: orders.some(o => o.email?.toLowerCase() === customerDetails.email?.toLowerCase())
    };

    setOrders(prev => [newOrder, ...prev]);
    setLastOrder(newOrder);
    clearCart();
    addToast(`Order ${newOrder.id} placed successfully!`, 'success', 4000);
    return newOrder;
  };

  const submitFeedback = (feedbackData) => {
    const newFeedback = {
      id: `fb-${Date.now()}`,
      name: feedbackData.name,
      email: feedbackData.email,
      rating: Number(feedbackData.rating),
      criteria: feedbackData.criteria,
      feedback: feedbackData.feedback,
      date: new Date().toISOString().split('T')[0]
    };

    setFeedbacks(prev => [newFeedback, ...prev]);
    addToast('Thank you! Your feedback has been recorded.', 'success', 4000);
    return newFeedback;
  };

  const resetAllDemoData = () => {
    setOrders(INITIAL_DEMO_ORDERS);
    setFeedbacks(INITIAL_DEMO_FEEDBACK);
    setCart({ quantity: 1 });
    setLastOrder(null);
    localStorage.removeItem('milletmorn_cart');
    localStorage.removeItem('milletmorn_orders');
    localStorage.removeItem('milletmorn_feedback');
    localStorage.removeItem('milletmorn_last_order');
    addToast('Demo data successfully reset to case study baseline!', 'info');
  };

  // Calculated values
  const cartSubtotal = (cart.quantity || 0) * BRAND_DATA.price;
  const cartItemCount = cart.quantity || 0;

  // Stats for Admin and Business pages
  const totalPacksSold = orders.reduce((sum, o) => sum + (o.quantity || 1), 0);
  const totalEstimatedRevenue = totalPacksSold * BRAND_DATA.price;
  const repeatOrdersCount = orders.filter(o => o.isRepeat).length;

  return (
    <AppContext.Provider
      value={{
        brand: BRAND_DATA,
        cart,
        cartSubtotal,
        cartItemCount,
        isCartOpen,
        setIsCartOpen,
        addToCart,
        updateQuantity,
        clearCart,
        orders,
        placeOrder,
        lastOrder,
        feedbacks,
        submitFeedback,
        toasts,
        addToast,
        removeToast,
        resetAllDemoData,
        totalPacksSold,
        totalEstimatedRevenue,
        repeatOrdersCount,
        isTourOpen,
        setIsTourOpen,
        currentTourIndex,
        setCurrentTourIndex,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};
