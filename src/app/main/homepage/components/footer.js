import React from 'react';

const FOOTER_DATA = {
  Shop: ['Living Room', 'Bedroom', 'Dining', 'Office'],
  Company: ['About Us', 'Careers', 'Blog', 'Press'],
  Help: ['FAQ', 'Shipping Info', 'Returns', 'Contact Us'],
};

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner container">

        {/* Left Side */}
        <div className="footer-brand">
          <h2 className="footer-logo">UnoMart</h2>
          <p>
            Bringing beautiful, quality furniture to every home since 2020.
          </p>
        </div>

        {/* 3 Columns — direct children ng footer-inner, walang wrapper div */}
        {Object.entries(FOOTER_DATA).map(([section, links]) => (
          <div className="footer-col" key={section}>
            <h5>{section}</h5>
            <ul>
              {links.map(link => (
                <li key={link}>
                  <button className="footer-link">{link}</button>
                </li>
              ))}
            </ul>
          </div>
        ))}

      </div>

      {/* Bottom */}
      <div className="footer-bottom">
        <p>© 2025 UnoMart. All Rights Reserved.</p>
      </div>
    </footer>
  );
}