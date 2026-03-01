export default function PromoBanner() {
  return (
    <section className="promo-banner">
      <div className="promo-text">
        <span className="promo-tag">Sale of the Year</span>
        <h2>Up to 40% Off<br />on Selected Items</h2>
        <p>Limited time offer — don't miss out on our biggest annual sale.</p>
        <button className="btn-primary">Shop the Sale</button>
      </div>
      <div className="promo-img">
        <img
          src="https://images.unsplash.com/photo-1538688423619-a81d3f23454b?w=600&q=80"
          alt="Sale promo"
        />
      </div>
    </section>
  );
}