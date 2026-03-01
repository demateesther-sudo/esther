"use client";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-logo">UnoMart</div>
      <ul className={`nav-links${menuOpen ? " open" : ""}`}>
        <li>Home</li>
        <li>Shop</li>
        <li>Blog</li>
        <li>Pages</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div className="nav-icons">
        <button className="icon-btn" aria-label="Search"><i className="fa fa-search"></i></button>
        <button className="icon-btn" aria-label="Wishlist"><i className="fa-regular fa-heart"></i></button>
        <button className="icon-btn" aria-label="Cart"><i className="fa fa-cart-shopping"></i></button>
        <button className="icon-btn" aria-label="Account"><i className="fa-regular fa-user"></i></button>
      </div>
      <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">&#9776;</button>
    </nav>
  );
}