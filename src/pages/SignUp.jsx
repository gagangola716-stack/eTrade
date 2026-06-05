import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const SignUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignUp = (e) => {
    e.preventDefault();
    if (!name || !email || !password) {
      alert("Please fill all the fields.");
      return;
    }
    const userData = { name, email, password };
    localStorage.setItem('userData', JSON.stringify(userData));
    alert("Account created successfully!");
    navigate('/signin');
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
          <img src="https://images.unsplash.com/photo-1543269664-7eef42226a21?w=800&q=80" alt="Sign Up" className="position-absolute bottom-0 start-50 translate-middle-x w-100" style={{ height: '60%', objectFit: 'cover', opacity: 0.8 }} />
        </div>
        
        {/* Right Side */}
        <div className="col-lg-6 d-flex flex-column bg-white">
          <div className="text-end p-4">
            <span className="text-muted fw-medium me-3">Already a member?</span>
            <Link to="/signin" className="btn btn-primary px-4 fw-bold shadow-sm">Sign In</Link>
          </div>
          <div className="flex-grow-1 d-flex align-items-center justify-content-center p-4">
            <div style={{ maxWidth: '450px', width: '100%' }}>
              <h2 className="fw-bold mb-2">I'm New Here</h2>
              <p className="text-muted mb-5">Enter your detail below</p>
              
              <form onSubmit={handleSignUp}>
                <div className="auth-input-group">
                  <label>User Name</label>
                  <input type="text" placeholder="anniemario" value={name} onChange={(e) => setName(e.target.value)} />
                </div>
                <div className="auth-input-group">
                  <label>Email</label>
                  <input type="email" placeholder="annie@example.com" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="auth-input-group">
                  <label>Password</label>
                  <input type="password" placeholder="********" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <button type="submit" className="btn btn-primary px-5 py-2 fw-bold mt-3 shadow">Create Account</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
