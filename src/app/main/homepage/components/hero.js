export default function Hero() {
  return (
    <section className="hero">
      <img
        className="hero-bg"
        src="https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=1400&q=85"
        alt="Luxury furniture room"
      />
      <div className="hero-overlay"></div>
      <div className="hero-text">
        <span className="hero-tag">New Collection 2025</span>
        <h1>Design Your<br /><em>Dream Home</em></h1>
        <p>Discover handcrafted furniture that brings warmth, style, and comfort to every room.</p>
        <div className="hero-actions">
          <button className="btn-primary">SHOP NOW</button>
          <button className="btn-outline">VIEW LOOKBOOK</button>
        </div>
      </div>
      <div className="hero-badge">
        <span className="badge-num">500+</span>
        <span className="badge-label">Products</span>
      </div>
    </section>
  );
}