import React from 'react';

export default function PromoBanner() {
  return (
    <section className="promo-banner container">
      <div className="promo-content">
        <span className="promo-tag">Sale of the Year</span>
        <h2 className="promo-title">
          Up to 40% Off<br />
          <span>on Selected Items</span>
        </h2>
        <p className="promo-desc">Limited time offer — don't miss out on our biggest annual sale.</p>
        <button className="promo-btn">Shop the Sale</button>
      </div>
      <div className="promo-image">
        <img
          src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&q=80"
          alt="Sale promotion"
        />
      </div>
    </section>
  );
}