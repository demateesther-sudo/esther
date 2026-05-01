import React, { useState } from 'react';
import Navbar from './components/navbar';
import Hero from './components/hero';
import Collections from './components/collections';
import CardList from './components/cardlist';
import PromoBanner from './components/promobanner';
import Features from './components/features';
import Footer from './components/footer';
import './page.css';

export default function Page() {
  const [cart, setCart] = useState([]);
  const [toast, setToast] = useState({ show: false, msg: '' });
  const toastTimer = React.useRef(null);

  const showToast = (msg) => {
    clearTimeout(toastTimer.current);
    setToast({ show: true, msg });
    toastTimer.current = setTimeout(() => setToast({ show: false, msg: '' }), 2200);
  };

  const addToCart = (item) => {
    setCart(prev => {
      const existing = prev.find(i => i.id === item.id);
      if (existing) return prev.map(i => i.id === item.id ? { ...i, qty: i.qty + 1 } : i);
      return [...prev, { ...item, qty: 1 }];
    });
    showToast(`✓ ${item.name} added to cart!`);
  };

  const totalItems = cart.reduce((s, i) => s + i.qty, 0);

  return (
    <>
      <Navbar cartCount={totalItems} />
      <Hero />
      <Collections />
      <CardList onAddToCart={addToCart} />
      <PromoBanner />
      <Features />
      <Footer />
      <div className={`toast${toast.show ? ' show' : ''}`}>{toast.msg}</div>
    </>
  );
}