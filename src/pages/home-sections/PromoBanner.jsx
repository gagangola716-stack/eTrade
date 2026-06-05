import React from 'react';
import useCountdown from '../../hooks/useCountdown';

const PromoBanner = () => {
  // Set target date for 5 days from now
  const targetDate = new Date().getTime() + 5 * 24 * 60 * 60 * 1000;
  const timerData = useCountdown(targetDate);

  return (
    <section className="container py-4">
      <div className="bg-dark text-white rounded p-4 p-md-5 position-relative overflow-hidden">
        <div className="row align-items-center position-relative z-1">
          <div className="col-md-6 mb-4 mb-md-0">
            <span className="text-success fw-bold mb-3 d-inline-block">Categories</span>
            <h2 className="display-5 fw-bold mb-4" style={{ lineHeight: '1.2' }}>Enhance Your<br/>Music Experience</h2>
            
            <div className="d-flex gap-3 mb-4">
              <div className="bg-white text-dark rounded-circle d-flex flex-column justify-content-center align-items-center" style={{ width: '60px', height: '60px' }}>
                <span className="fw-bold lh-1 mb-1">{timerData.days}</span>
                <span style={{ fontSize: '0.65rem' }}>Days</span>
              </div>
              <div className="bg-white text-dark rounded-circle d-flex flex-column justify-content-center align-items-center" style={{ width: '60px', height: '60px' }}>
                <span className="fw-bold lh-1 mb-1">{timerData.hours}</span>
                <span style={{ fontSize: '0.65rem' }}>Hours</span>
              </div>
              <div className="bg-white text-dark rounded-circle d-flex flex-column justify-content-center align-items-center" style={{ width: '60px', height: '60px' }}>
                <span className="fw-bold lh-1 mb-1">{timerData.minutes}</span>
                <span style={{ fontSize: '0.65rem' }}>Minutes</span>
              </div>
              <div className="bg-white text-dark rounded-circle d-flex flex-column justify-content-center align-items-center" style={{ width: '60px', height: '60px' }}>
                <span className="fw-bold lh-1 mb-1">{timerData.seconds}</span>
                <span style={{ fontSize: '0.65rem' }}>Seconds</span>
              </div>
            </div>

            <button className="btn btn-success px-4 py-2 text-white fw-medium">Buy Now!</button>
          </div>
          
          <div className="col-md-6 text-center position-relative">
            {/* Soft glow effect behind image */}
            <div className="position-absolute top-50 start-50 translate-middle rounded-circle bg-light opacity-25 blur-glow" style={{ width: '80%', paddingBottom: '80%', filter: 'blur(40px)' }}></div>
            <img 
              src="https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=600&q=80" 
              alt="Promo Product" 
              className="img-fluid position-relative z-2 promo-img drop-shadow"
              style={{ maxHeight: '350px', transform: 'scaleX(-1)' }} 
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromoBanner;
