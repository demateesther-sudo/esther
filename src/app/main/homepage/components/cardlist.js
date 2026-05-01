import React, { useState } from 'react';

const PRODUCTS = [
  { id: 1, name: 'Nordic Sofa', price: 12500, original: null, rating: 4.5, reviews: 42, badge: 'NEW', category: 'new', image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&q=80' },
  { id: 2, name: 'Oak Dining Table', price: 8999, original: null, rating: 4.8, reviews: 87, badge: 'BEST SELLER', category: 'bestseller', image: 'https://images.unsplash.com/photo-1617806118233-18e1de247200?w=400&q=80' },
  { id: 3, name: 'Ergonomic Chair', price: 4999, original: 6500, rating: 4.3, reviews: 54, badge: 'TOP RATED', category: 'toprated', image: 'https://images.unsplash.com/photo-1592078615290-033ee584e267?w=400&q=80' },
  { id: 4, name: 'Wooden Cabinet', price: 6999, original: null, rating: 4.6, reviews: 31, badge: null, category: 'new', image: 'https://i.pinimg.com/736x/67/cb/5f/67cb5fb75ee71a011bc2a302053b141e.jpg' },
  { id: 5, name: 'Bedside Lamp', price: 1299, original: 1800, rating: 4.1, reviews: 28, badge: 'SALE', category: 'bestseller', image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=400&q=80' },
  { id: 6, name: 'Minimalist Desk', price: 5499, original: null, rating: 4.4, reviews: 76, badge: 'NEW', category: 'new', image: 'https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=400&q=80' },
  { id: 7, name: 'Velvet Armchair', price: 7800, original: 9200, rating: 4.7, reviews: 89, badge: 'TOP RATED', category: 'toprated', image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&q=80' },
  { id: 8, name: 'Floor Shelf Unit', price: 3200, original: null, rating: 4.2, reviews: 44, badge: null, category: 'bestseller', image: 'https://media.diy.com/is/image/KingfisherDigital/3-tier-free-standing-wood-shelving-unit-bookcase-shelf-for-home-710mm-h-~0735940234580_06c_MP?$MOB_PREV$&$width=600&$height=600' },
];

const TABS = [
  { key: 'all', label: 'All' },
  { key: 'new', label: 'New Arrivals' },
  { key: 'bestseller', label: 'Best Seller' },
  { key: 'toprated', label: 'Top Rated' },
];

function Stars({ rating }) {
  return (
    <span className="stars">
      {[1,2,3,4,5].map(i => (
        <svg key={i} width="12" height="12" viewBox="0 0 24 24"
          fill={i <= Math.round(rating) ? '#f59e0b' : 'none'}
          stroke="#f59e0b" strokeWidth="2">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
        </svg>
      ))}
    </span>
  );
}

export default function CardList({ onAddToCart }) {
  const [activeTab, setActiveTab] = useState('all');

  const filtered = activeTab === 'all'
    ? PRODUCTS
    : PRODUCTS.filter(p => p.category === activeTab);

  return (
    <section className="products container">
      <h2 className="section-title center">Our Trendy Products</h2>

      <div className="product-tabs">
        {TABS.map(tab => (
          <button
            key={tab.key}
            className={`tab-btn${activeTab === tab.key ? ' active' : ''}`}
            onClick={() => setActiveTab(tab.key)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="products-grid">
        {filtered.map(product => (
          <div key={product.id} className="product-card">
            {product.badge && (
              <span className={`product-badge badge-${product.badge.toLowerCase().replace(' ', '-')}`}>
                {product.badge}
              </span>
            )}
            <div className="product-img-wrap">
              <img src={product.image} alt={product.name} />
              <div className="product-hover-overlay">
                <button className="quick-view-btn">Quick View</button>
              </div>
            </div>
            <div className="product-info">
              <h4 className="product-name">{product.name}</h4>
              <div className="product-rating">
                <Stars rating={product.rating} />
                <span className="review-count">({product.reviews})</span>
              </div>
              <div className="product-price-row">
                <span className="product-price">₱{product.price.toLocaleString()}</span>
                {product.original && (
                  <span className="product-original">₱{product.original.toLocaleString()}</span>
                )}
              </div>
              <button
                className="add-to-cart-btn"
                onClick={() => onAddToCart && onAddToCart(product)}
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="browse-all-wrap">
        <button className="browse-all-btn">Browse All Products</button>
      </div>
    </section>
  );
}