import React, { useEffect, useState } from "react";
import "./footer.scss";

const Footer = () => {
  const [footerText, setFooterText] = useState("");

  useEffect(() => {
    const savedFooterText = sessionStorage.getItem("footerText");
    if (savedFooterText) {
      setFooterText(savedFooterText);
    }
  }, []);

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="name">
          <h1>House Shop</h1>
        </div>
        <div className="footer-links">
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/properties">Properties</a>
            </li>
            <li>
              <a href="/about">About Us</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </div>
        <div className="footer-social">
          <ul>
            <li>
              <a href="#">
                <i className="fab fa-facebook"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fab fa-twitter"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fab fa-instagram"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-info">
        <p>&copy; 2023 House Shop. All rights reserved.</p>
        <p>123 Main Street, City, Country</p>
        <p>Email: info@houseshop.com</p>
        <p>{footerText}</p>
      </div>
    </footer>
  );
};

export default Footer;
