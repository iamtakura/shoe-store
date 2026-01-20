import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect, Suspense, lazy } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import CartDrawer from './components/CartDrawer';
import ScrollToTop from './components/ScrollToTop';
// import { CartProvider } from './context/CartContext';
// ... other imports

// Lazy load pages for performance
const HomePage = lazy(() => import('./pages/HomePage'));
const ShopPage = lazy(() => import('./pages/ShopPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const CheckoutPage = lazy(() => import('./pages/CheckoutPage'));

import { CartProvider } from './context/CartContext';
import { ToastProvider } from './context/ToastContext';
import './App.css';

// Loading Component
const PageLoader = () => (
  <div style={{
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'var(--color-primary)',
    color: 'var(--color-accent)'
  }}>
    Loading...
  </div>
);

function App() {
  useEffect(() => {
    // ... observer logic existing
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

    return () => observer.disconnect();
  });

  return (
    <Router>
      <ScrollToTop />
      <ToastProvider>
        <CartProvider>
          <div className="app">
            <Header />
            <Suspense fallback={<PageLoader />}>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/shop" element={<ShopPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/checkout" element={<CheckoutPage />} />
              </Routes>
            </Suspense>
            <Footer />
            <CartDrawer />
          </div>
        </CartProvider>
      </ToastProvider>
    </Router>
  );
}

export default App;
