import React from 'react';

const COLLECTIONS = [
  {
    id: 1,
    name: 'Living Room',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&q=80',
    size: 'large',
  },
  {
    id: 2,
    name: 'Bedroom',
    image: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=600&q=80',
    size: 'medium',
  },
  {
    id: 3,
    name: 'Dining',
    image: 'https://images.unsplash.com/photo-1617806118233-18e1de247200?w=600&q=80',
    size: 'small',
  },
  {
    id: 4,
    name: 'Office',
    image: 'https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=600&q=80',
    size: 'small',
  },
];

export default function Collections() {
  return (
    <section className="collections container">
      <h2 className="section-title">Shop by Collection</h2>
      <div className="collections-grid">
        {COLLECTIONS.map(col => (
          <div key={col.id} className={`collection-card collection-${col.size}`}>
            <img src={col.image} alt={col.name} />
            <div className="collection-overlay">
              <span className="collection-name">{col.name}</span>
              <button className="collection-btn">Shop Now →</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}