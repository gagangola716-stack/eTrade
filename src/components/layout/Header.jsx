import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart } from '../../store/slices/cartSlice';
import { removeFromWishlist } from '../../store/slices/wishlistSlice';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const Header = () => {
  const dispatch = useDispatch();
  const { totalQuantity: cartCount, items: cartItems, totalAmount } = useSelector((state) => state.cart);
  const { totalQuantity: wishlistCount, items: wishlistItems } = useSelector((state) => state.wishlist);

  return (
    <>


      {/* Main Header */}
      <header className="sticky-top bg-white border-bottom py-3">
        <div className="container">
          <div className="row align-items-center">

            {/* Mobile Menu Toggle & Logo */}
            <div className="col-4 col-lg-2 d-flex align-items-center">
              <button
                className="btn btn-light d-lg-none me-2"
                type="button"
                data-bs-toggle="offcanvas"
                data-bs-target="#mobileMenu"
              >
                <i className="fa-solid fa-bars"></i>
              </button>
              <Link to="/" className="text-decoration-none text-dark fs-3 fw-bold">
                <span className="text-primary">e</span>Trade
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="col-lg-5 d-none d-lg-block">
              <nav className="nav justify-content-center fw-medium">
                <Link to="/" className="nav-link text-dark">Home</Link>
                <Link to="/shop" className="nav-link text-dark">Shop</Link>
                <div className="nav-item dropdown dropdown-hover">
                  <Link to="/pages" className="nav-link text-dark dropdown-toggle" role="button" aria-expanded="false">
                    Pages
                  </Link>
                  <ul className="dropdown-menu border-0 shadow-sm mt-0">
                    <li><Link className="dropdown-item" to="/checkout">Checkout</Link></li>
                    <li><Link className="dropdown-item" to="/account">Account</Link></li>
                    <li><Link className="dropdown-item" to="/signup">Sign Up</Link></li>
                    <li><Link className="dropdown-item" to="/signin">Sign In</Link></li>
                    <li><Link className="dropdown-item" to="/forgot-password">Forgot Password</Link></li>
                    <li><Link className="dropdown-item" to="/reset-password">Reset Password</Link></li>
                    <li><Link className="dropdown-item" to="/privacy-policy">Privacy Policy</Link></li>
                    <li><Link className="dropdown-item" to="/coming-soon">Coming Soon</Link></li>
                  </ul>
                </div>
                <Link to="/about" className="nav-link text-dark">About</Link>
                <Link to="/contact" className="nav-link text-dark">Contact</Link>
              </nav>
            </div>

            {/* Search and Icons */}
            <div className="col-8 col-lg-5 d-flex align-items-center justify-content-end gap-3 gap-lg-4">
              <div className="position-relative d-none d-md-block" style={{ width: '250px' }}>
                <input
                  type="text"
                  className="form-control rounded-pill bg-light border-0 ps-3 pe-5"
                  placeholder="What are you looking for?"
                />
                <button className="btn border-0 position-absolute end-0 top-50 translate-middle-y rounded-circle text-muted">
                  <i className="fa-solid fa-magnifying-glass"></i>
                </button>
              </div>

              <div className="d-flex align-items-center gap-3">
                <button className="btn border-0 text-dark fs-5 position-relative p-0" data-bs-toggle="offcanvas" data-bs-target="#wishlistOffcanvas">
                  <i className="fa-regular fa-heart"></i>
                  {wishlistCount > 0 && (
                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" style={{ fontSize: '0.6rem' }}>
                      {wishlistCount}
                    </span>
                  )}
                </button>
                <button className="btn border-0 text-dark fs-5 position-relative p-0 ms-2" data-bs-toggle="offcanvas" data-bs-target="#cartOffcanvas">
                  <i className="fa-solid fa-cart-shopping"></i>
                  {cartCount > 0 && (
                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" style={{ fontSize: '0.6rem' }}>
                      {cartCount}
                    </span>
                  )}
                </button>
                <div className="dropdown dropdown-click">
                  <Link to="#" className="text-dark fs-5 ms-2" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <i className="fa-regular fa-user"></i>
                  </Link>
                  <div className="dropdown-menu dropdown-menu-start p-3 shadow-sm border-0" style={{ width: '250px' }}>
                    <h6 className="dropdown-header px-0 text-dark fw-bold fs-6">Quicklinks</h6>
                    <Link className="dropdown-item px-0 py-2" to="/account">My Account</Link>
                    <Link className="dropdown-item px-0 py-2" to="#">Initiate Return</Link>
                    <Link className="dropdown-item px-0 py-2" to="#">Support</Link>
                    <Link className="dropdown-item px-0 py-2" to="#">Language</Link>
                    <div className="dropdown-divider my-2"></div>
                    <Link className="btn btn-primary w-100 mb-2 py-2" to="/signin">Login</Link>
                    <div className="text-center small mb-2">
                      No account yet? <Link to="/signup" className="register-link fw-bold">Register here</Link>
                    </div>
                    <div className="dropdown-divider my-2"></div>
                    <Link className="dropdown-item px-0 py-2 text-danger fw-medium" to="/signin">Log out</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Get Offer Swiper Section (moved after navigation) */}
      <div className="bg-primary text-white py-2 small d-none d-lg-block position-relative">
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-md-8 text-center position-relative px-5">
              <Swiper
                modules={[Navigation, Autoplay]}
                navigation={{
                  prevEl: '.topbar-prev',
                  nextEl: '.topbar-next',
                }}
                autoplay={{ delay: 3000 }}
                loop={true}
                className="topbar-swiper"
              >
                {[1, 2, 3].map((_, index) => (
                  <SwiperSlide key={index}>
                    <div className="text-center">
                      STUDENT NOW GET 10% OFF - <a href="#" className="text-white ms-2 fw-bold text-decoration-underline">GET OFFER</a>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
              <button className="btn btn-sm text-white position-absolute start-0 top-50 translate-middle-y topbar-prev" style={{ zIndex: 10 }}>
                <i className="fa-solid fa-chevron-left"></i>
              </button>
              <button className="btn btn-sm text-white position-absolute end-0 top-50 translate-middle-y topbar-next" style={{ zIndex: 10 }}>
                <i className="fa-solid fa-chevron-right"></i>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Offcanvas Menu */}
      <div className="offcanvas offcanvas-start" tabIndex="-1" id="mobileMenu">
        <div className="offcanvas-header border-bottom">
          <h5 className="offcanvas-title fw-bold"><span className="text-primary">e</span>Trade</h5>
          <button type="button" className="btn-close" data-bs-dismiss="offcanvas"></button>
        </div>
        <div className="offcanvas-body p-0">
          <div className="p-3 bg-light border-bottom">
            <div className="position-relative w-100">
              <input type="text" className="form-control rounded-pill bg-white border ps-3 pe-5" placeholder="Search..." />
              <button className="btn border-0 position-absolute end-0 top-50 translate-middle-y text-muted">
                <i className="fa-solid fa-magnifying-glass"></i>
              </button>
            </div>
          </div>
          <div className="list-group list-group-flush fw-medium">
            <Link to="/" className="list-group-item list-group-item-action py-3">Home</Link>
            <Link to="/shop" className="list-group-item list-group-item-action py-3">Shop</Link>
            <div className="list-group list-group-flush fw-medium nav-link dropdown dropdown-hover">
              <Link to="/pages" className="list-group-item list-group-item-action py-3 nav-link dropdown-toggle" role="button" aria-expanded="false">
                Pages
              </Link>
              <ul className="dropdown-menu border-0 shadow-sm mt-5 ms-5">
                <li><Link className="dropdown-item" to="/checkout">Checkout</Link></li>
                <li><Link className="dropdown-item" to="/account">Account</Link></li>
                <li><Link className="dropdown-item" to="/signup">Sign Up</Link></li>
                <li><Link className="dropdown-item" to="/signin">Sign In</Link></li>
                <li><Link className="dropdown-item" to="/forgot-password">Forgot Password</Link></li>
                <li><Link className="dropdown-item" to="/reset-password">Reset Password</Link></li>
                <li><Link className="dropdown-item" to="/privacy-policy">Privacy Policy</Link></li>
                <li><Link className="dropdown-item" to="/coming-soon">Coming Soon</Link></li>
              </ul>
            </div>
            <Link to="/about" className="list-group-item list-group-item-action py-3">About</Link>
            <Link to="/contact" className="list-group-item list-group-item-action py-3">Contact</Link>
          </div>
        </div>
      </div>

      {/* Cart Offcanvas */}
      <div className="offcanvas offcanvas-end" tabIndex="-1" id="cartOffcanvas">
        <div className="offcanvas-header border-bottom">
          <h5 className="offcanvas-title fw-bold">Your Cart ({cartCount})</h5>
          <button type="button" className="btn-close" data-bs-dismiss="offcanvas"></button>
        </div>
        <div className="offcanvas-body d-flex flex-column">
          {cartItems.length === 0 ? (
            <div className="text-center my-auto text-muted">
              <i className="fa-solid fa-cart-arrow-down fs-1 mb-3"></i>
              <p>Your cart is empty.</p>
            </div>
          ) : (
            <div className="flex-grow-1 overflow-auto">
              {cartItems.map((item) => (
                <div key={item.id} className="d-flex align-items-center gap-3 mb-3 pb-3 border-bottom">
                  <img src={item.image} alt={item.title} className="rounded border bg-light" style={{ width: '60px', height: '60px', objectFit: 'contain' }} />
                  <div className="flex-grow-1">
                    <h6 className="mb-0 text-truncate" style={{ maxWidth: '180px' }} title={item.title}>{item.title}</h6>
                    <small className="text-muted">${item.price} x {item.quantity}</small>
                  </div>
                  <div className="text-end">
                    <h6 className="mb-1 fw-bold">${item.totalPrice}</h6>
                    <button className="btn btn-sm text-danger p-0" onClick={() => dispatch(removeFromCart(item.id))}>
                      <i className="fa-solid fa-trash"></i>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
          {cartItems.length > 0 && (
            <div className="pt-3 border-top mt-auto">
              <div className="d-flex justify-content-between mb-3 fw-bold fs-5">
                <span>Total</span>
                <span>${totalAmount.toFixed(2)}</span>
              </div>
              <Link to="/checkout" className="btn btn-danger w-100 py-3 fw-bold">Checkout</Link>
            </div>
          )}
        </div>
      </div>

      {/* Wishlist Offcanvas */}
      <div className="offcanvas offcanvas-end" tabIndex="-1" id="wishlistOffcanvas">
        <div className="offcanvas-header border-bottom">
          <h5 className="offcanvas-title fw-bold">Wishlist ({wishlistCount})</h5>
          <button type="button" className="btn-close" data-bs-dismiss="offcanvas"></button>
        </div>
        <div className="offcanvas-body">
          {wishlistItems.length === 0 ? (
            <div className="text-center mt-5 text-muted">
              <i className="fa-regular fa-heart fs-1 mb-3"></i>
              <p>Your wishlist is empty.</p>
            </div>
          ) : (
            <div>
              {wishlistItems.map((item) => (
                <div key={item.id} className="d-flex align-items-center gap-3 mb-3 pb-3 border-bottom">
                  <img src={item.image} alt={item.title} className="rounded border bg-light" style={{ width: '60px', height: '60px', objectFit: 'contain' }} />
                  <div className="flex-grow-1">
                    <h6 className="mb-1 text-truncate" style={{ maxWidth: '200px' }} title={item.title}>{item.title}</h6>
                    <span className="text-danger fw-bold">${item.price}</span>
                  </div>
                  <button className="btn btn-sm text-muted p-0" onClick={() => dispatch(removeFromWishlist(item.id))}>
                    <i className="fa-solid fa-xmark fs-5"></i>
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

    </>
  );
};

export default Header;