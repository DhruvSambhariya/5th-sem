import React from "react";
import "./App.css";

const Header = () => {
  return (
    <div className="header">
      <img
        className="header-logo"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/905px-Amazon_logo.svg.png"
        alt="Amazon logo"
      />
      <h2>Amazon Webpage</h2>
      <ul className="nav-list">
        <li>Home</li>
        <li>Cart</li>
        <li>About</li>
      </ul>
    </div>
  );
};

const Search = () => {
  return (
    <div className="search">
      <input type="text" name="search" id="search" placeholder="Search..." />
      <button type="button">Search</button>
    </div>
  );
};

const Product = () => {
  return (
    <div className="product">
      <img
        className="prod-img"
        src="https://via.placeholder.com/150"
        alt="Product"
      />
      <h4>Title</h4>
      <h5>$99.99</h5>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body-container">
      <Search />
      <div className="product-container">
        {[...Array(7)].map((_, i) => (
          <Product key={i} />
        ))}
      </div>
    </div>
  );
};

const Footer = () => {
  return (
    <div className="footer">
      <p>© 2025 Amazon Clone | All rights reserved</p>
    </div>
  );
};

const App = () => {
  return (
    <div className="app">
      <Header />
      <Body />
      <Footer />
    </div>
  );
};

export default App;
