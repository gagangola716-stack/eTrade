import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignIn = (e) => {
    e.preventDefault();
    const storedData = localStorage.getItem('userData');
    if (storedData) {
      const userData = JSON.parse(storedData);
      if (userData.email === email && userData.password === password) {
        alert(`Welcome back, ${userData.name}!`);
        // Store currentUser in localStorage to keep them logged in
        localStorage.setItem('currentUser', JSON.stringify(userData));
        navigate('/');
      } else {
        alert("Invalid email or password!");
      }
    } else {
      alert("No account found! Please sign up first.");
    }
  };

  return (
    <div className="container-fluid p-0">
      <div className="row g-0" style={{minHeight: '100vh'}}>
        {/* Left Side */}
        <div className="col-lg-6 d-none d-lg-block position-relative overflow-hidden" style={{backgroundColor: '#e6f4f1'}}>
          <div className="p-5 position-relative" style={{ zIndex: 2 }}>
            <Link to="/" className="text-decoration-none text-dark fs-3 fw-bold d-flex align-items-center gap-2 mb-5">
              <i className="fa-solid fa-bag-shopping text-primary"></i> <span><span className="text-primary">e</span>Trade</span>
            </Link>
            <h1 className="fw-bold display-5 mt-5" style={{ maxWidth: '400px' }}>We Offer the Best Products</h1>
          </div>
          {/* Changed image for SignIn */}
          <img src="https://images.unsplash.com/photo-1556742044-3c52d6e88c62?w=800&q=80" alt="Sign In" className="position-absolute bottom-0 start-50 translate-middle-x w-100" style={{ height: '60%', objectFit: 'cover', opacity: 0.8 }} />
        </div>
        
        {/* Right Side */}
        <div className="col-lg-6 d-flex flex-column bg-white">
          <div className="text-end p-4">
            <span className="text-muted fw-medium me-3">Not a member?</span>
            <Link to="/signup" className="btn btn-primary px-4 fw-bold shadow-sm">Sign Up</Link>
          </div>
          <div className="flex-grow-1 d-flex align-items-center justify-content-center p-4">
            <div style={{ maxWidth: '450px', width: '100%' }}>
              <h2 className="fw-bold mb-2">Sign in to etrade</h2>
              <p className="text-muted mb-5">Enter your detail below</p>
              
              <form onSubmit={handleSignIn}>
                <div className="auth-input-group">
                  <label>Email</label>
                  <input type="email" placeholder="annie@example.com" value={email} onChange={(e) => setEmail(e.target.value)} required />
                </div>
                <div className="auth-input-group">
                  <label>Password</label>
                  <input type="password" placeholder="********" value={password} onChange={(e) => setPassword(e.target.value)} required />
                </div>
                <div className="d-flex align-items-center justify-content-between mt-4">
                    <button type="submit" className="btn btn-primary px-5 py-2 fw-bold shadow">Sign In</button>
                    <Link to="/forgot-password" className="text-primary text-decoration-none fw-medium">Forgot Password?</Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
