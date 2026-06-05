import React from 'react';
import SectionHeader from '../../components/SectionHeader';

const NewArrivals = () => {
  return (
    <section className="container py-5">
      <SectionHeader 
        subtitle="Featured" 
        title="New Arrival" 
      />
      
      <div className="row g-4 mt-2">
        {/* Main Large Image */}
        <div className="col-lg-6">
          <div className="position-relative bg-dark rounded h-100 overflow-hidden d-flex flex-column justify-content-end p-4 text-white p-lg-5">
            <img 
              src="https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?auto=format&fit=crop&w=800&q=80" 
              alt="PlayStation 5" 
              className="position-absolute top-0 start-0 w-100 h-100 object-fit-cover z-0 opacity-50"
            />
            <div className="position-relative z-1" style={{ maxWidth: '300px' }}>
              <h3 className="fw-bold mb-3">PlayStation 5</h3>
              <p className="text-white-50 mb-3">Black and White version of the PS5 coming out on sale.</p>
              <a href="#" className="text-white fw-medium border-bottom border-white pb-1 d-inline-block text-decoration-none">Shop Now</a>
            </div>
          </div>
        </div>

        {/* Right Side Grid */}
        <div className="col-lg-6">
          <div className="row g-4 h-100">
            {/* Top Wide Image */}
            <div className="col-12" style={{ height: '50%' }}>
              <div className="position-relative bg-dark rounded h-100 overflow-hidden d-flex flex-column justify-content-end p-4 text-white">
                <img 
                  src="https://images.unsplash.com/photo-1603189343302-e603f7add05a?auto=format&fit=crop&w=600&q=80" 
                  alt="Women's Collections" 
                  className="position-absolute top-0 start-0 w-100 h-100 object-fit-cover z-0 opacity-50"
                  style={{ objectPosition: 'center' }}
                />
                <div className="position-relative z-1" style={{ maxWidth: '250px' }}>
                  <h4 className="fw-bold mb-2">Women's Collections</h4>
                  <p className="text-white-50 mb-2 small">Featured woman collections that give you another vibe.</p>
                  <a href="#" className="text-white fw-medium border-bottom border-white pb-1 d-inline-block text-decoration-none">Shop Now</a>
                </div>
              </div>
            </div>

            {/* Bottom Two Images */}
            <div className="col-6" style={{ height: '50%' }}>
              <div className="position-relative bg-dark rounded h-100 overflow-hidden d-flex flex-column justify-content-end p-4 text-white">
                <img 
                  src="https://images.unsplash.com/photo-1543512214-318c7553f230?auto=format&fit=crop&w=400&q=80" 
                  alt="Speakers" 
                  className="position-absolute top-0 start-0 w-100 h-100 object-fit-cover z-0 opacity-50"
                />
                <div className="position-relative z-1">
                  <h5 className="fw-bold mb-1">Speakers</h5>
                  <p className="text-white-50 mb-2 small">Amazon wireless speakers</p>
                  <a href="#" className="text-white fw-medium border-bottom border-white pb-1 d-inline-block text-decoration-none">Shop Now</a>
                </div>
              </div>
            </div>
            
            <div className="col-6" style={{ height: '50%' }}>
              <div className="position-relative bg-dark rounded h-100 overflow-hidden d-flex flex-column justify-content-end p-4 text-white">
                <img 
                  src="https://images.unsplash.com/photo-1615655406736-b37c4fabf923?auto=format&fit=crop&w=400&q=80" 
                  alt="Perfume" 
                  className="position-absolute top-0 start-0 w-100 h-100 object-fit-cover z-0 opacity-50"
                />
                <div className="position-relative z-1">
                  <h5 className="fw-bold mb-1">Perfume</h5>
                  <p className="text-white-50 mb-2 small">GUCCI INTENSE OUD EDP</p>
                  <a href="#" className="text-white fw-medium border-bottom border-white pb-1 d-inline-block text-decoration-none">Shop Now</a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default NewArrivals;
