"use client";
import { useState } from "react";
import Card from "../../../../components/ui/card";

const allProducts = [
  { id:0, tab:["all","new"],             title:"Nordic Sofa",      price:12500, originalPrice:15000, badge:"New",         rating:5, reviews:42,  image:"https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&q=80" },
  { id:1, tab:["all","bestseller"],      title:"Oak Dining Table", price:8999,  originalPrice:null,  badge:"Best Seller", rating:4, reviews:87,  image:"https://images.unsplash.com/photo-1604578762246-41134e37f9cc?w=400&q=80" },
  { id:2, tab:["all","new","toprated"],  title:"Ergonomic Chair",  price:4999,  originalPrice:6500,  badge:"Top Rated",   rating:5, reviews:134, image:"https://images.unsplash.com/photo-1592078615290-033ee584e267?w=400&q=80" },
  { id:3, tab:["all","toprated"],        title:"Wooden Cabinet",   price:6999,  originalPrice:null,  badge:null,          rating:4, reviews:56,  image:"https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=400&q=80" },
  { id:4, tab:["all","bestseller"],      title:"Bedside Lamp",     price:1299,  originalPrice:1800,  badge:"Sale",        rating:4, reviews:29,  image:"https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=400&q=80" },
  { id:5, tab:["all","new"],             title:"Minimalist Desk",  price:5499,  originalPrice:null,  badge:"New",         rating:5, reviews:18,  image:"https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?w=400&q=80" },
  { id:6, tab:["all","toprated"],        title:"Velvet Armchair",  price:7800,  originalPrice:9200,  badge:"Top Rated",   rating:5, reviews:61,  image:"https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=400&q=80" },
  { id:7, tab:["all","bestseller"],      title:"Floor Shelf Unit", price:3200,  originalPrice:null,  badge:null,          rating:4, reviews:44,  image:"https://images.unsplash.com/photo-1484101403633-562f891dc89a?w=400&q=80" },
];

const tabs = [
  { key: "all",        label: "All" },
  { key: "new",        label: "New Arrivals" },
  { key: "bestseller", label: "Best Seller" },
  { key: "toprated",   label: "Top Rated" },
];

export default function CardList() {
  const [activeTab, setActiveTab] = useState("all");

  const filtered = allProducts.filter((p) => p.tab.includes(activeTab));

  return (
    <section className="product-section">
      <h2>OUR TRENDY PRODUCTS</h2>
      <div className="product-tabs">
        {tabs.map((t) => (
          <button
            key={t.key}
            className={`tab-btn${activeTab === t.key ? " active" : ""}`}
            onClick={() => setActiveTab(t.key)}
          >
            {t.label}
          </button>
        ))}
      </div>
      <div className="grid">
        {filtered.map((item) => (
          <Card key={item.id} {...item} />
        ))}
      </div>
      <button className="browse-btn">Browse All Products</button>
    </section>
  );
}