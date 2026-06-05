import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Contact = () => {
  const [isScrolling, setIsScrolling] = useState(false);
  
  useEffect(() => {
    let scrollTimeout;

    const handleScroll = () => {
      setIsScrolling(true);
      
      // Clear the timeout if it's already set
      clearTimeout(scrollTimeout);
      
      // Set a timeout to determine when scrolling has stopped
      scrollTimeout = setTimeout(() => {
        setIsScrolling(false);
      }, 400); // 400ms after last scroll event
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(scrollTimeout);
    };
  }, []);

  return (
    <div className="contact-page">
      {/* Breadcrumb & Title Area */}
      <div className="container mt-4 mb-5">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb text-muted fs-6 mb-2">
            <li className="breadcrumb-item"><Link to="/" className="text-decoration-none text-muted">Home</Link></li>
            <li className="breadcrumb-item active" aria-current="page">Contact</li>
          </ol>
        </nav>
        <div className="d-flex align-items-center justify-content-between">
            <h1 className="fw-bold fs-2 mb-0">Contact With Us</h1>
            <div className="d-none d-md-block" style={{width: "80px", height: "80px", borderRadius: "50%", background: "linear-gradient(to right, #e0eafc, #cfdef3)"}}></div>
        </div>
      </div>

      <div className="container mb-5 pb-3">
        <div className="row g-5">
          {/* Form Area */}
          <div className="col-lg-8">
            <h3 className="fw-bold mb-2">We would love to hear from you.</h3>
            <p className="text-muted mb-4">If you've got great products your making or looking to work with us then drop us a line.</p>
            
            <form>
              <div className="row g-3">
                <div className="col-md-4">
                  <div className="contact-input-group">
                    <label>Name *</label>
                    <input type="text" required />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="contact-input-group">
                    <label>Phone *</label>
                    <input type="tel" required />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="contact-input-group">
                    <label>E-mail *</label>
                    <input type="email" required />
                  </div>
                </div>
                <div className="col-12 mt-4">
                  <div className="contact-input-group">
                    <label>Your Message</label>
                    <textarea rows="6" required></textarea>
                  </div>
                </div>
                <div className="col-12 mt-3">
                  <button type="button" className="btn btn-primary px-4 py-2 fw-bold rounded-2 shadow-sm">Send Message</button>
                </div>
              </div>
            </form>
          </div>

          {/* Info Area */}
          <div className="col-lg-4">
            <div className="mb-4">
              <h5 className="fw-bold mb-3">Our Store</h5>
              <p className="text-muted small mb-1">8212 E. Glen Creek Street Orchard Park, NY 14127, United States of America</p>
              <p className="text-muted small mb-0 mt-3">Phone: +123 456 7890</p>
              <p className="text-muted small mb-0">Email: Hello@etrade.com</p>
            </div>
            
            <div className="mb-4 mt-5">
              <h5 className="fw-bold mb-3">Careers</h5>
              <p className="text-muted small mb-0">Instead of buying six things, one that you really like.</p>
            </div>

            <div className="mt-5">
              <h5 className="fw-bold mb-3">Opening Hours:</h5>
              <p className="text-muted small mb-1">Monday to Saturday: 9am - 10pm</p>
              <p className="text-muted small mb-0">Sundays: 10am - 6pm</p>
            </div>
          </div>
        </div>
      </div>

      {/* Map Area */}
      <div className="container-fluid px-0 pb-5">
        <div className="position-relative w-100" style={{ height: '450px' }}>
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1m3!1d100940.16979606863!2d144.85108645!3d-37.7533816!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d4c2b349669%3A0x12b59f7d4b462c16!2sMelbourne%20VIC%2C%20Australia!5e0!3m2!1sen!2sus!4v1714150532594!5m2!1sen!2sus" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
          
          {/* Black overlay with white text that appears on scroll */}
          <div className={`map-overlay ${isScrolling ? 'active' : ''}`}>
             Use ctrl + scroll to zoom the map
          </div>
        </div>
      </div>

      {/* Service Features */}
      <div className="container border-bottom mb-5 pb-4">
        <div className="row g-4 pt-5">
          <div className="col-md-3">
            <div className="d-flex align-items-center gap-3">
              <img src="https://cdn-icons-png.flaticon.com/512/2769/2769339.png" alt="Fast" width="40" className="opacity-75" />
              <div>
                <h6 className="fw-bold mb-1">Fast & Secure Delivery</h6>
                <p className="text-muted small mb-0">Tell about your service.</p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="d-flex align-items-center gap-3">
              <img src="https://cdn-icons-png.flaticon.com/512/3596/3596091.png" alt="Guarantee" width="40" className="opacity-75" />
              <div>
                <h6 className="fw-bold mb-1">Money Back Guarantee</h6>
                <p className="text-muted small mb-0">Within 10 days.</p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="d-flex align-items-center gap-3">
              <img src="https://cdn-icons-png.flaticon.com/512/3502/3502601.png" alt="Return" width="40" className="opacity-75" />
              <div>
                <h6 className="fw-bold mb-1">24 Hour Return Policy</h6>
                <p className="text-muted small mb-0">No question ask.</p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="d-flex align-items-center gap-3">
              <img src="https://cdn-icons-png.flaticon.com/512/1067/1067566.png" alt="Support" width="40" className="opacity-75" />
              <div>
                <h6 className="fw-bold mb-1">Pro Quality Support</h6>
                <p className="text-muted small mb-0">24/7 Live support.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
