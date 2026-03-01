const features = [
  { icon: "fa-solid fa-truck-fast",    title: "Free Shipping",  desc: "On orders over ₱2,000" },
  { icon: "fa-solid fa-rotate-left",   title: "Easy Returns",   desc: "30-day return policy" },
  { icon: "fa-solid fa-shield-halved", title: "Secure Payment", desc: "100% secure checkout" },
  { icon: "fa-solid fa-headset",       title: "24/7 Support",   desc: "Dedicated customer care" },
];

export default function Features() {
  return (
    <section className="features">
      {features.map((f) => (
        <div className="feature-item" key={f.title}>
          <span className="feature-icon">
            <i className={f.icon}></i>
          </span>
          <h4>{f.title}</h4>
          <p>{f.desc}</p>
        </div>
      ))}
    </section>
  );
}