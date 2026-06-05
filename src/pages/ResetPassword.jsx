import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const ResetPassword = () => {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();

  const handleResetPassword = (e) => {
    e.preventDefault();
    if (!newPassword || !confirmPassword) {
      alert("Please fill all fields.");
      return;
    }
    if (newPassword !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    const storedData = localStorage.getItem('userData');
    if (storedData) {
      const userData = JSON.parse(storedData);
      userData.password = newPassword;
      localStorage.setItem('userData', JSON.stringify(userData));
      alert("Password reset successfully! Please sign in with your new password.");
      navigate('/signin');
    } else {
      alert("No account found! Please sign up.");
      navigate('/signup');
    }
  };

  return (
    <div className="container-fluid p-0">
      <div className="row g-0" style={{minHeight: '100vh'}}>
        {/* Left Side */}
        <div className="col-lg-6 d-none d-lg-block auth-left-bg position-relative overflow-hidden">
          <div className="p-5 position-relative" style={{ zIndex: 2 }}>
            <Link to="/" className="text-decoration-none text-dark fs-3 fw-bold d-flex align-items-center gap-2 mb-5">
              <i className="fa-solid fa-bag-shopping text-primary"></i> <span><span className="text-primary">e</span>Trade</span>
            </Link>
            <h1 className="fw-bold display-5 mt-5" style={{ maxWidth: '400px' }}>We Offer the Best Products</h1>
          </div>
          <img src="https://images.unsplash.com/photo-1543269664-7eef42226a21?w=800&q=80" alt="Reset Password" className="position-absolute bottom-0 start-50 translate-middle-x w-100" style={{ height: '60%', objectFit: 'cover', opacity: 0.8 }} />
        </div>
        
        {/* Right Side */}
        <div className="col-lg-6 d-flex flex-column bg-white">
          <div className="text-end p-4">
            <Link to="/signin" className="btn btn-light px-4 fw-bold shadow-sm"><i className="fa-solid fa-angle-left me-2"></i> Back to Sign In</Link>
          </div>
          <div className="flex-grow-1 d-flex align-items-center justify-content-center p-4">
            <div style={{ maxWidth: '450px', width: '100%' }}>
              <h2 className="fw-bold mb-2">Reset Password</h2>
              <p className="text-muted mb-5">Enter your new password below.</p>
              
              <form onSubmit={handleResetPassword}>
                <div className="auth-input-group">
                  <label>New Password</label>
                  <input type="password" placeholder="********" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} required />
                </div>
                <div className="auth-input-group">
                  <label>Confirm Password</label>
                  <input type="password" placeholder="********" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
                </div>
                <button type="submit" className="btn btn-primary px-5 py-2 fw-bold mt-3 shadow w-100">Reset Password</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
