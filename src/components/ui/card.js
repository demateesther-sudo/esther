import "./card.css";

export default function Card({ image, title, price, originalPrice, badge, rating, reviews }) {
  return (
    <div className="card">
      <div className="card-img-wrapper">
        <img src={image} alt={title} className="card-img" />
        {badge && <span className="card-badge">{badge}</span>}
      </div>
      <div className="card-body">
        <h4>{title}</h4>
        <div className="card-rating">
          <span className="stars">{"★".repeat(rating || 4)}{"☆".repeat(5 - (rating || 4))}</span>
          <span className="review-count">({reviews || 0})</span>
        </div>
      </div>
      <div className="card-footer">
        <div>
          <span className="price">
            {typeof price === "number" ? `₱${price.toLocaleString()}` : price}
          </span>
          {originalPrice && (
            <span className="price-original">
              {typeof originalPrice === "number" ? `₱${originalPrice.toLocaleString()}` : originalPrice}
            </span>
          )}
        </div>
        <button className="add-btn">Add to Cart</button>
      </div>
    </div>
  );
}