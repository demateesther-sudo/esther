const socials = [
  { cls: "fb",  icon: "fab fa-facebook-f",   href: "#", label: "Facebook"  },
  { cls: "ig",  icon: "fab fa-instagram",    href: "#", label: "Instagram" },
  { cls: "tt",  icon: "fab fa-tiktok",       href: "#", label: "TikTok"    },
  { cls: "yt",  icon: "fab fa-youtube",      href: "#", label: "YouTube"   },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-brand">
          <h3>UnoMart</h3>
          <p>Bringing beautiful, quality furniture to every home since 2020.</p>
          <div className="social-links">
            {socials.map((s) => (
              <a key={s.label} className={`social-btn ${s.cls}`} href={s.href} aria-label={s.label}>
                <i className={s.icon}></i>
              </a>
            ))}
          </div>
        </div>
        <div className="footer-col">
          <h5>Shop</h5>
          <ul>
            <li>Living Room</li>
            <li>Bedroom</li>
            <li>Dining</li>
            <li>Office</li>
          </ul>
        </div>
        <div className="footer-col">
          <h5>Company</h5>
          <ul>
            <li>About Us</li>
            <li>Careers</li>
            <li>Blog</li>
            <li>Press</li>
          </ul>
        </div>
        <div className="footer-col">
          <h5>Help</h5>
          <ul>
            <li>FAQ</li>
            <li>Shipping Info</li>
            <li>Returns</li>
            <li>Contact Us</li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p><span>© 2025 UnoMart.</span> All Rights Reserved.</p>
      </div>
    </footer>
  );
}