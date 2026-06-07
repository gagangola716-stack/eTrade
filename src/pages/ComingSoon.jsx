import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const ComingSoon = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {gi
    // Set a date 30 days from now for the countdown
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 30);

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate.getTime() - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        });
      } else {
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container py-5 my-5 text-center">
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <h1 className="fw-bold display-4 mb-4" style={{ color: '#3577f0' }}>We're Launching Soon</h1>
          <p className="lead text-muted mb-5">Our website is under construction. We're working hard to give you the best experience with our new eTrade platform.</p>
          
          <div className="d-flex justify-content-center gap-3 gap-md-4 mb-5">
            <div className="countdown-box text-center shadow-sm rounded p-3" style={{ minWidth: '90px', backgroundColor: '#f8f9fa' }}>
              <h2 className="fw-bold mb-0 text-dark">{timeLeft.days}</h2>
              <span className="text-muted small text-uppercase">Days</span>
            </div>
            <div className="countdown-box text-center shadow-sm rounded p-3" style={{ minWidth: '90px', backgroundColor: '#f8f9fa' }}>
              <h2 className="fw-bold mb-0 text-dark">{timeLeft.hours}</h2>
              <span className="text-muted small text-uppercase">Hours</span>
            </div>
            <div className="countdown-box text-center shadow-sm rounded p-3" style={{ minWidth: '90px', backgroundColor: '#f8f9fa' }}>
              <h2 className="fw-bold mb-0 text-dark">{timeLeft.minutes}</h2>
              <span className="text-muted small text-uppercase">Mins</span>
            </div>
            <div className="countdown-box text-center shadow-sm rounded p-3" style={{ minWidth: '90px', backgroundColor: '#f8f9fa' }}>
              <h2 className="fw-bold mb-0 text-dark">{timeLeft.seconds}</h2>
              <span className="text-muted small text-uppercase">Secs</span>
            </div>
          </div>

          <div className="mx-auto" style={{ maxWidth: '500px' }}>
            <h5 className="fw-bold mb-3">Notify me when it's ready</h5>
            <div className="input-group mb-3">
              <input type="email" className="form-control px-4 py-3 border-secondary" placeholder="Enter your email address" style={{ borderRight: 'none', borderRadius: '30px 0 0 30px' }} />
              <button className="btn btn-primary px-4 py-3" type="button" style={{ borderRadius: '0 30px 30px 0' }}>Subscribe</button>
            </div>
            <p className="text-muted small mt-2">We will only send you a single email when we launch. No spam!</p>
          </div>

          <div className="mt-5">
            <Link to="/" className="btn btn-outline-dark px-4 py-2 rounded-pill">
              <i className="fa-solid fa-arrow-left me-2"></i> Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComingSoon;
