import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Newsletter from './home-sections/Newsletter';

const Account = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [user, setUser] = useState({ name: 'Annie', email: 'annie@example.com' });
  const navigate = useNavigate();

  useEffect(() => {
    const storedData = localStorage.getItem('userData');
    if (storedData) {
      setUser(JSON.parse(storedData));
    }
  }, []);

  const handleLogout = () => {
    // Usually you'd clear currentUser here
    localStorage.removeItem('currentUser');
    navigate('/signin');
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return (
          <div>
            <p>Hello <strong>{user.name}</strong> (not <strong>{user.name}</strong>? <span className="text-danger fw-bold" style={{cursor: 'pointer'}} onClick={handleLogout}>Log Out</span>)</p>
            <p className="text-muted mt-3 lh-lg">From your account dashboard you can view your recent orders, manage your shipping and billing addresses, and edit your password and account details.</p>
          </div>
        );
      case 'orders':
        return (
          <div>
            <h5 className="fw-bold mb-4">Orders</h5>
            <div className="table-responsive">
              <table className="table table-borderless bg-light rounded">
                <thead className="border-bottom">
                  <tr>
                    <th className="py-3 px-4">Order</th>
                    <th className="py-3 px-4">Date</th>
                    <th className="py-3 px-4">Status</th>
                    <th className="py-3 px-4">Total</th>
                    <th className="py-3 px-4 text-end">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="py-3 px-4">#6523</td>
                    <td className="py-3 px-4">Sep 10, 2023</td>
                    <td className="py-3 px-4">Processing</td>
                    <td className="py-3 px-4">$326.63 for 3 items</td>
                    <td className="py-3 px-4 text-end"><button className="btn btn-sm btn-outline-primary">View</button></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        );
      case 'downloads':
        return (
          <div>
            <h5 className="fw-bold mb-4">Downloads</h5>
            <div className="alert alert-warning border-0 bg-light text-muted">
              <i className="fa-solid fa-circle-info me-2"></i> You don't have any downloads.
            </div>
          </div>
        );
      case 'addresses':
        return (
          <div>
            <h5 className="fw-bold mb-4">Addresses</h5>
            <p className="text-muted mb-4">The following addresses will be used on the checkout page by default.</p>
            <div className="row g-4">
              <div className="col-md-6">
                <div className="card border-0 shadow-sm h-100">
                  <div className="card-header bg-white border-bottom-0 pt-4 pb-0">
                    <h6 className="fw-bold mb-0">Billing Address</h6>
                  </div>
                  <div className="card-body">
                    <p className="mb-1">{user.name}</p>
                    <p className="mb-1 text-muted">123 Main Street</p>
                    <p className="mb-1 text-muted">Apt 4B</p>
                    <p className="mb-1 text-muted">New York, NY 10001</p>
                    <button className="btn btn-link px-0 text-decoration-none mt-2"><i className="fa-regular fa-pen-to-square me-2"></i>Edit</button>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="card border-0 shadow-sm h-100">
                  <div className="card-header bg-white border-bottom-0 pt-4 pb-0">
                    <h6 className="fw-bold mb-0">Shipping Address</h6>
                  </div>
                  <div className="card-body">
                    <p className="mb-1">{user.name}</p>
                    <p className="mb-1 text-muted">123 Main Street</p>
                    <p className="mb-1 text-muted">Apt 4B</p>
                    <p className="mb-1 text-muted">New York, NY 10001</p>
                    <button className="btn btn-link px-0 text-decoration-none mt-2"><i className="fa-regular fa-pen-to-square me-2"></i>Edit</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      case 'accountDetails':
        return (
          <div>
            <h5 className="fw-bold mb-4">Account Details</h5>
            <form>
              <div className="row g-3">
                <div className="col-md-12">
                  <div className="auth-input-group">
                    <label>Name</label>
                    <input type="text" className="form-control p-3 border rounded-2" defaultValue={user.name} />
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="auth-input-group">
                    <label>Email Address</label>
                    <input type="email" className="form-control p-3 border rounded-2" defaultValue={user.email} />
                  </div>
                </div>
                <div className="col-12 mt-4">
                  <h6 className="fw-bold mb-3">Password Change</h6>
                  <div className="auth-input-group mb-3">
                    <label>Current Password</label>
                    <input type="password" className="form-control p-3 border rounded-2" />
                  </div>
                  <div className="auth-input-group mb-3">
                    <label>New Password</label>
                    <input type="password" className="form-control p-3 border rounded-2" />
                  </div>
                  <div className="auth-input-group mb-3">
                    <label>Confirm New Password</label>
                    <input type="password" className="form-control p-3 border rounded-2" />
                  </div>
                </div>
                <div className="col-12 mt-3">
                  <button type="button" className="btn btn-primary px-4 py-2 fw-bold rounded-2">Save Changes</button>
                </div>
              </div>
            </form>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="account-page">
      {/* Breadcrumb & Title Area */}
      <div className="container mt-4 mb-5">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb text-muted fs-6 mb-2">
            <li className="breadcrumb-item"><Link to="/" className="text-decoration-none text-muted">Home</Link></li>
            <li className="breadcrumb-item active" aria-current="page">My Account</li>
          </ol>
        </nav>
        <div className="d-flex align-items-center justify-content-between">
            <h1 className="fw-bold fs-2 mb-0">Explore All Products</h1>
            <div className="d-none d-md-block" style={{width: "80px", height: "80px", borderRadius: "50%", background: "linear-gradient(to right, #e0eafc, #cfdef3)"}}></div>
        </div>
      </div>

      <div className="container mb-5 pb-5">
        <div className="row g-5">
          {/* Sidebar */}
          <div className="col-lg-3">
            <div className="d-flex align-items-center gap-3 mb-5">
              <img src="https://i.pravatar.cc/150?img=47" alt="Profile" className="rounded-circle" style={{ width: '60px', height: '60px', objectFit: 'cover' }} />
              <div>
                <h6 className="fw-bold mb-0">Hello {user.name}</h6>
                <small className="text-muted" style={{fontSize: '12px'}}>eTrade Member Since Sep 2020</small>
              </div>
            </div>
            
            <div className="border rounded-3 p-3">
              <button 
                className={`account-nav-link ${activeTab === 'dashboard' ? 'active' : ''}`}
                onClick={() => setActiveTab('dashboard')}
              >
                <i className="fa-solid fa-border-all"></i> Dashboard
              </button>
              <button 
                className={`account-nav-link ${activeTab === 'orders' ? 'active' : ''}`}
                onClick={() => setActiveTab('orders')}
              >
                <i className="fa-solid fa-basket-shopping"></i> Orders
              </button>
              <button 
                className={`account-nav-link ${activeTab === 'downloads' ? 'active' : ''}`}
                onClick={() => setActiveTab('downloads')}
              >
                <i className="fa-solid fa-download"></i> Downloads
              </button>
              <button 
                className={`account-nav-link ${activeTab === 'addresses' ? 'active' : ''}`}
                onClick={() => setActiveTab('addresses')}
              >
                <i className="fa-solid fa-house"></i> Addresses
              </button>
              <button 
                className={`account-nav-link ${activeTab === 'accountDetails' ? 'active' : ''}`}
                onClick={() => setActiveTab('accountDetails')}
              >
                <i className="fa-regular fa-user"></i> Account Details
              </button>
              <button 
                className="account-nav-link mt-2 border-top pt-3 rounded-0 text-danger"
                onClick={handleLogout}
              >
                <i className="fa-solid fa-arrow-right-from-bracket text-danger"></i> Logout
              </button>
            </div>
          </div>

          {/* Main Content */}
          <div className="col-lg-9 pt-lg-5 ps-lg-5">
            {renderContent()}
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
      <Newsletter />
    </div>
  );
};

export default Account;
