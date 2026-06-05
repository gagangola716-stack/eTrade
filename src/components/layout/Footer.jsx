import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-dark text-white pt-5 pb-3">
      <div className="container">
        <div className="row gy-4 mb-5">
          
          <div className="col-lg-3 col-md-6">
            <h4 className="fw-bold mb-4">Exclusive</h4>
            <h6 className="mb-3">Subscribe</h6>
            <p className="text-white-50 small mb-3">Get 10% off your first order</p>
            <div className="input-group">
              <input type="email" className="form-control bg-transparent text-white border-secondary rounded-start ps-3" placeholder="Enter your email" />
              <button className="btn btn-outline-secondary rounded-end px-3" type="button">
                <i className="fa-regular fa-paper-plane text-white"></i>
              </button>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <h5 className="fw-bold mb-4">Support</h5>
            <ul className="list-unstyled text-white-50 small">
              <li className="mb-3">111 Bijoy sarani, Dhaka,<br/>DH 1515, Bangladesh.</li>
              <li className="mb-3">exclusive@gmail.com</li>
              <li className="mb-3">+88015-88888-9999</li>
            </ul>
          </div>

          <div className="col-lg-3 col-md-6">
            <h5 className="fw-bold mb-4">Account</h5>
            <ul className="list-unstyled text-white-50 small">
              <li className="mb-2"><Link to="#" className="text-white-50 text-decoration-none">My Account</Link></li>
              <li className="mb-2"><Link to="#" className="text-white-50 text-decoration-none">Login / Register</Link></li>
              <li className="mb-2"><Link to="#" className="text-white-50 text-decoration-none">Cart</Link></li>
              <li className="mb-2"><Link to="#" className="text-white-50 text-decoration-none">Wishlist</Link></li>
              <li className="mb-2"><Link to="#" className="text-white-50 text-decoration-none">Shop</Link></li>
            </ul>
          </div>

          <div className="col-lg-3 col-md-6">
            <h5 className="fw-bold mb-4">Quick Link</h5>
            <ul className="list-unstyled text-white-50 small">
              <li className="mb-2"><Link to="#" className="text-white-50 text-decoration-none">Privacy Policy</Link></li>
              <li className="mb-2"><Link to="#" className="text-white-50 text-decoration-none">Terms Of Use</Link></li>
              <li className="mb-2"><Link to="#" className="text-white-50 text-decoration-none">FAQ</Link></li>
              <li className="mb-2"><Link to="#" className="text-white-50 text-decoration-none">Contact</Link></li>
            </ul>
          </div>

        </div>

        <div className="row border-top border-secondary pt-4 text-white-50 small">
          <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
            &copy; Copyright Rimel 2022. All right reserved
          </div>
          <div className="col-md-6 text-center text-md-end fs-5">
             <a href="#" className="text-white-50 me-3"><i className="fa-brands fa-facebook-f"></i></a>
             <a href="#" className="text-white-50 me-3"><i className="fa-brands fa-twitter"></i></a>
             <a href="#" className="text-white-50 me-3"><i className="fa-brands fa-instagram"></i></a>
             <a href="#" className="text-white-50"><i className="fa-brands fa-linkedin-in"></i></a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
