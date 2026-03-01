export default function Collections() {
  return (
    <section className="collections-section">
      <h2 className="section-title">Shop by Collection</h2>
      <div className="collections">
        <div className="left-card">
          <div className="collection-img-wrap">
            <img
              src="https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?w=500&q=80"
              alt="Living Room"
              onError={(e) => (e.target.src = "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=500&q=80")}
            />
            <div className="collection-label">
              <h4>Living Room</h4>
              <button className="shop-link">Shop Now →</button>
            </div>
          </div>
        </div>
        <div className="right-card">
          <div className="top-item">
            <div className="collection-img-wrap">
              <img
                src="https://i.ibb.co/qMSttkTH/Roundhill-Furniture-Maderne-Traditional-5-Piece-Wood-Bedroom-Furniture-Set-King-Size-Antique-Walnut.webp"
                alt="Bedroom"
                onError={(e) => (e.target.src = "https://images.unsplash.com/photo-1540518614846-7eded433c457?w=700&q=80")}
              />
              <div className="collection-label">
                <h4>Bedroom</h4>
                <button className="shop-link">Shop Now →</button>
              </div>
            </div>
          </div>
          <div className="bottom-items">
            <div className="small-item">
              <div className="collection-img-wrap">
                <img
                  src="https://i.ibb.co/RpH95dr3/Jeffie-6-Person-Dining-Set.webp"
                  alt="Dining"
                  onError={(e) => (e.target.src = "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&q=80")}
                />
                <div className="collection-label">
                  <h4>Dining</h4>
                  <button className="shop-link">Shop Now →</button>
                </div>
              </div>
            </div>
            <div className="small-item">
              <div className="collection-img-wrap">
                <img
                  src="https://i.ibb.co/0wX1wyz/office-furniture-supplier-1.jpg"
                  alt="Office"
                  onError={(e) => (e.target.src = "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=400&q=80")}
                />
                <div className="collection-label">
                  <h4>Office</h4>
                  <button className="shop-link">Shop Now →</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}