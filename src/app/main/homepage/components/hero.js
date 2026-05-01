import React from 'react';

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-overlay"/>
      <img
        className="hero-bg"
        src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=1400&q=85"
        alt="Living room furniture"
      />
      <div className="hero-content">
        <span className="hero-tag">New Collection 2025</span>
        <h1 className="hero-title">
          Design Your<br /><em>Dream Home</em>
        </h1>
        <p className="hero-desc">
          Discover handcrafted furniture that brings warmth,<br />
          style, and comfort to every room.
        </p>
        <div className="hero-btns">
          <button className="btn-primary">Shop Now</button>
          <button className="btn-outline">View Lookbook</button>
        </div>
      </div>
    </section>
  );
}