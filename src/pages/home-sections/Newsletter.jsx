import React from 'react';

const Newsletter = () => {
  return (
    <section className="container py-5  ">
      {/* Newsletter Section */}
      <div className="container mb-5">
        <div className="rounded-4 p-5 position-relative overflow-hidden" style={{ background: '#f3f4f6' }}>
          <div className="row position-relative" style={{ zIndex: 2 }}>
            <div className="col-lg-6">
              <div className="d-flex align-items-center gap-2 mb-3">
                <i className="fa-solid fa-envelope-open-text text-primary fs-4"></i>
                <span className="text-primary fw-bold">Newsletter</span>
              </div>
              <h2 className="fw-bold mb-4 display-6">Get weekly update</h2>
              <div className="d-flex gap-2 p-2 bg-white rounded-2 shadow-sm" style={{ maxWidth: '400px' }}>
                <div className="d-flex align-items-center px-3 text-muted">
                  <i className="fa-regular fa-envelope"></i>
                </div>
                <input type="email" className="form-control border-0 px-0 shadow-none" placeholder="example@gmail.com" />
                <button className="btn btn-dark px-4 fw-bold rounded-2">Subscribe</button>
              </div>
            </div>
          </div>
          <img src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&q=80" alt="Newsletter Background" className="position-absolute top-0 end-0 h-100 object-fit-cover" style={{ width: '50%', opacity: '0.8', maskImage: 'linear-gradient(to right, transparent, black)', WebkitMaskImage: 'linear-gradient(to right, transparent, black)' }} />
        </div>
      </div>

      {/* Service Features */}
      <div className="container mb-5 pb-4">
        <div className="row g-4 border-top pt-5">
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
    </section>
  );
};

export default Newsletter;
