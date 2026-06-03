// import React, { useState } from "react";
// import "./Header.css";
// import { FiSearch, FiHeart, FiShoppingCart, FiUser, FiMenu, FiX } from "react-icons/fi";

// const Header = () => {
//   const [menuOpen, setMenuOpen] = useState(false);

//   return (
//     <header className="header container">

//       {/* TOP BAR */}
//       <div className="top-bar">
//         <div className="logo">eTrade</div>

//         <div className="search-box">
//           <FiSearch className="icon" />
//           <input type="text" placeholder="What are you looking for..." />
//         </div>

//         <div className="right-controls">
//           <select>
//             <option>USD</option>
//           </select>

//           <select>
//             <option>EN</option>
//           </select>
//         </div>

//         {/* Mobile menu icon */}
//         <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
//           {menuOpen ? <FiX /> : <FiMenu />}
//         </div>
//       </div>

//       {/* BOTTOM BAR */}
//       <div className={`bottom-bar ${menuOpen ? "open" : ""}`}>
//         <div className="categories">
//           <FiMenu />
//           <span>Categories</span>
//         </div>

//         <nav className="nav-links">
//           <a href="#">Home</a>
//           <a href="#">Shop</a>
//           <a href="#">Pages</a>
//           <a href="#">About</a>
//           <a href="#">Blog</a>
//           <a href="#">Contact</a>
//         </nav>

//         <div className="icons">
//           <FiHeart />
//           <div className="cart">
//             <FiShoppingCart />
//             <span>3</span>
//           </div>
//           <FiUser />
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Header;



import React from "react";
import "./Header.css";

function Header() {
  return (
    <>
      {/* TOP HEADER */}
      <header className="top-header">
        <div className="container-fluid custom-container">
          <div className="header-wrapper">

            {/* Mobile Menu */}
            <button
              className="mobile-menu-btn d-xl-none"
              data-bs-toggle="offcanvas"
              data-bs-target="#mobileSidebar"
            >
              <i className="fa-solid fa-bars"></i>
            </button>

            {/* Logo */}
            <div className="logo">
              <i className="fa-solid fa-bag-shopping"></i>
              <span>eTrade</span>
            </div>

            {/* Search */}
            <div className="search-box">
              <i className="fa-solid fa-magnifying-glass"></i>
              <input
                type="text"
                placeholder="What are you looking for..."
              />
            </div>

            {/* Selects */}
            <div className="header-right">
              <select>
                <option>USD</option>
                <option>EUR</option>
              </select>

              <select>
                <option>EN</option>
                <option>UR</option>
              </select>
            </div>
          </div>
        </div>
      </header>

      {/* NAVBAR */}
      <nav className="navbar-section d-none d-xl-block">
        <div className="container-fluid custom-container nav-wrapper">

          <button className="categories-btn">
            <i className="fa-solid fa-bars"></i>
            <span>Categories</span>
          </button>

          <ul className="nav-links">

            <li className="dropdown">
              <a
                href="#"
                className="dropdown-toggle"
                data-bs-toggle="dropdown"
              >
                Home
              </a>

              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">Home One</a></li>
                <li><a className="dropdown-item" href="#">Home Two</a></li>
              </ul>
            </li>

            <li className="dropdown">
              <a
                href="#"
                className="dropdown-toggle"
                data-bs-toggle="dropdown"
              >
                Shop
              </a>

              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">Shop Grid</a></li>
                <li><a className="dropdown-item" href="#">Shop Details</a></li>
              </ul>
            </li>

            <li className="dropdown">
              <a
                href="#"
                className="dropdown-toggle"
                data-bs-toggle="dropdown"
              >
                Pages
              </a>

              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">About</a></li>
                <li><a className="dropdown-item" href="#">FAQ</a></li>
              </ul>
            </li>

            <li><a href="#">About</a></li>

            <li className="dropdown">
              <a
                href="#"
                className="dropdown-toggle"
                data-bs-toggle="dropdown"
              >
                Blog
              </a>

              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">Blog Grid</a></li>
                <li><a className="dropdown-item" href="#">Blog Details</a></li>
              </ul>
            </li>

            <li><a href="#">Contact</a></li>

          </ul>

          <div className="nav-icons">

            <a href="#">
              <i className="fa-regular fa-heart"></i>
            </a>

            <a href="#" className="cart-icon">
              <i className="fa-solid fa-cart-shopping"></i>
              <span>3</span>
            </a>

            <a href="#">
              <i className="fa-regular fa-user"></i>
            </a>

          </div>

        </div>
      </nav>

      {/* MOBILE OFFCANVAS */}
      <div
        className="offcanvas offcanvas-start"
        tabIndex="-1"
        id="mobileSidebar"
      >
        <div className="offcanvas-header">
          <h5>eTrade</h5>

          <button
            className="btn-close"
            data-bs-dismiss="offcanvas"
          ></button>
        </div>

        <div className="offcanvas-body">

          <div className="mobile-search">
            <input
              type="text"
              placeholder="Search products..."
            />
          </div>

          <ul className="mobile-links">
            <li><a href="#">Home</a></li>
            <li><a href="#">Shop</a></li>
            <li><a href="#">Pages</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Contact</a></li>
          </ul>

          <div className="mobile-icons">
            <i className="fa-regular fa-heart"></i>
            <i className="fa-solid fa-cart-shopping"></i>
            <i className="fa-regular fa-user"></i>
          </div>

        </div>
      </div>
    </>
  );
}

export default Header;