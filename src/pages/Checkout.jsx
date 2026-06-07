import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Checkout = () => {
  const { items: cartItems, totalAmount } = useSelector((state) => state.cart);

  const [showLogin, setShowLogin] = useState(false);
  const [showCoupon, setShowCoupon] = useState(false);
  const [showDifferentAddress, setShowDifferentAddress] = useState(false);

  const [couponCode, setCouponCode] = useState('');
  const [discount, setDiscount] = useState(0);
  const [shippingMethod, setShippingMethod] = useState(35); // Default flat rate
  const [paymentMethod, setPaymentMethod] = useState('paypal');

  const handleApplyCoupon = () => {
    if (couponCode.toLowerCase() === 'please dedo') {
      setDiscount(totalAmount * 0.1); // 10% discount
    } else {
      setDiscount(0);
      alert('Invalid coupon code. Try "valid".');
    }
  };

  const finalTotal = totalAmount + shippingMethod - discount;

  return (
    <div className="container py-5">
      <div className="row">
        {/* Left Side */}
        <div className="col-lg-7 pe-lg-5">
          {/* Notices */}
          <div className="checkout-notice">
            <i className="fa-solid fa-user text-muted"></i>
            <span>Returning customer? <span className="checkout-link-hover" onClick={() => setShowLogin(!showLogin)}>Click here to login</span> <i className="fa-solid fa-chevron-down ms-1" style={{ fontSize: '12px' }}></i></span>
          </div>
          
          {showLogin && (
            <div className="checkout-dropdown mb-4 animate__animated animate__fadeIn">
              <p className="text-muted mb-4">If you have shopped with us before, please enter your details below. If you are a new customer, please proceed to the Billing section.</p>
              <div className="row g-3">
                <div className="col-md-6">
                  <input type="email" className="checkout-form-input" placeholder="Email" />
                </div>
                <div className="col-md-6">
                  <input type="password" className="checkout-form-input" placeholder="Password" />
                </div>
                <div className="col-12 mt-4 d-flex align-items-center gap-3">
                  <button className="btn btn-primary px-4 py-2">Sign in</button>
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" id="rememberMe" />
                    <label className="form-check-label text-muted" htmlFor="rememberMe">Remember me</label>
                  </div>
                </div>
                <div className="col-12 mt-2">
                  <Link to="/forgot-password" className="text-danger text-decoration-none small">Lost your password?</Link>
                </div>
              </div>
            </div>
          )}

          <div className="checkout-notice mt-3">
            <i className="fa-solid fa-pen text-muted"></i>
            <span>Have a coupon? <span className="checkout-link-hover" onClick={() => setShowCoupon(!showCoupon)}>Click here to enter your code</span> <i className="fa-solid fa-chevron-down ms-1" style={{ fontSize: '12px' }}></i></span>
          </div>

          {showCoupon && (
            <div className="checkout-dropdown mb-4 animate__animated animate__fadeIn">
              <p className="text-muted mb-4">If you have a coupon code, please apply it below.</p>
              <div className="d-flex gap-3">
                <input 
                  type="text" 
                  className="checkout-form-input w-50" 
                  placeholder="Coupon code" 
                  value={couponCode}
                  onChange={(e) => setCouponCode(e.target.value)}
                />
                <button className="btn btn-dark px-4 py-2" onClick={handleApplyCoupon}>Apply</button>
              </div>
            </div>
          )}

          <h4 className="fw-bold mt-5 mb-4">Billing details</h4>

          <div className="row g-4">
            <div className="col-md-6">
              <div className="checkout-input-group position-relative">
                <label className="checkout-label-float">First Name <span className="required-star">*</span></label>
                <input type="text" className="checkout-form-input" placeholder="Adam" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="checkout-input-group position-relative">
                <label className="checkout-label-float">Last Name <span className="required-star">*</span></label>
                <input type="text" className="checkout-form-input" placeholder="John" />
              </div>
            </div>
            <div className="col-12">
              <div className="checkout-input-group position-relative">
                <label className="checkout-label-float">Company Name</label>
                <input type="text" className="checkout-form-input" />
              </div>
            </div>
            <div className="col-12">
              <div className="checkout-input-group position-relative">
                <label className="checkout-label-float">Country/ Region <span className="required-star">*</span></label>
                <select className="checkout-form-input form-select">
                  <option>Australia</option>
                  <option>United States</option>
                  <option>United Kingdom</option>
                </select>
              </div>
            </div>
            <div className="col-12">
              <div className="checkout-input-group position-relative mb-3">
                <label className="checkout-label-float">Street Address <span className="required-star">*</span></label>
                <input type="text" className="checkout-form-input" placeholder="House number and street name" />
              </div>
              <div className="checkout-input-group position-relative">
                <input type="text" className="checkout-form-input" placeholder="Apartment, suite, unit, etc. (optional)" />
              </div>
            </div>
            <div className="col-12">
              <div className="checkout-input-group position-relative">
                <label className="checkout-label-float">Town/ City <span className="required-star">*</span></label>
                <input type="text" className="checkout-form-input" />
              </div>
            </div>
            <div className="col-12">
              <div className="checkout-input-group position-relative">
                <label className="checkout-label-float">Country</label>
                <input type="text" className="checkout-form-input" />
              </div>
            </div>
            <div className="col-12">
              <div className="checkout-input-group position-relative">
                <label className="checkout-label-float">Phone <span className="required-star">*</span></label>
                <input type="tel" className="checkout-form-input" />
              </div>
            </div>
            <div className="col-12">
              <div className="checkout-input-group position-relative">
                <label className="checkout-label-float">Email Address <span className="required-star">*</span></label>
                <input type="email" className="checkout-form-input" />
              </div>
            </div>
            <div className="col-12 mb-3">
              <div className="form-check">
                <input className="form-check-input" type="checkbox" id="createAccount" />
                <label className="form-check-label fw-medium" htmlFor="createAccount">Create an account</label>
              </div>
            </div>
          </div>

          <div className="d-flex justify-content-between align-items-center mt-4 mb-3">
            <h4 className="fw-bold mb-0">Ship to a different address?</h4>
            <div className="form-check form-switch mb-0">
              <input 
                className="form-check-input" 
                type="checkbox" 
                role="switch" 
                id="shipDifferentAddress" 
                checked={showDifferentAddress}
                onChange={() => setShowDifferentAddress(!showDifferentAddress)}
                style={{ width: '2rem', height: '1rem' }}
              />
            </div>
          </div>

          {showDifferentAddress && (
            <div className="row g-4 mb-4 animate__animated animate__fadeIn">
              <div className="col-12">
                <div className="checkout-input-group position-relative">
                  <label className="checkout-label-float">Country <span className="required-star">*</span></label>
                  <select className="checkout-form-input form-select">
                    <option>Australia</option>
                    <option>United States</option>
                    <option>United Kingdom</option>
                  </select>
                </div>
              </div>
              <div className="col-12">
                <div className="checkout-input-group position-relative">
                  <label className="checkout-label-float">Street Address <span className="required-star">*</span></label>
                  <input type="text" className="checkout-form-input" placeholder="House number and street name" />
                </div>
              </div>
              <div className="col-12">
                <div className="checkout-input-group position-relative">
                  <label className="checkout-label-float">City <span className="required-star">*</span></label>
                  <input type="text" className="checkout-form-input" />
                </div>
              </div>
              <div className="col-12">
                <div className="checkout-input-group position-relative">
                  <label className="checkout-label-float">Phone <span className="required-star">*</span></label>
                  <input type="tel" className="checkout-form-input" />
                </div>
              </div>
            </div>
          )}

          <div className="checkout-input-group position-relative mt-4">
            <label className="checkout-label-float bg-white">Other Notes (optional)</label>
            <textarea className="checkout-form-input pt-4" rows="4" placeholder="Notes about your order, e.g. special notes for delivery."></textarea>
          </div>

        </div>

        {/* Right Side */}
        <div className="col-lg-5 mt-5 mt-lg-0">
          <div className="checkout-right-bg">
            <h4 className="fw-bold mb-4">Your Order</h4>
            
            <div className="bg-white p-4 rounded mb-4">
              <div className="d-flex justify-content-between border-bottom pb-3 mb-3 fw-bold">
                <span>Product</span>
                <span>Subtotal</span>
              </div>
              
              {cartItems.length > 0 ? (
                cartItems.map((item) => (
                  <div key={item.id} className="d-flex justify-content-between border-bottom pb-3 mb-3">
                    <span className="text-muted">{item.title} <span className="text-dark">x{item.quantity}</span></span>
                    <span className="fw-medium">${item.totalPrice.toFixed(2)}</span>
                  </div>
                ))
              ) : (
                <div className="text-center text-muted border-bottom pb-3 mb-3">Your cart is empty</div>
              )}
              
              <div className="d-flex justify-content-between border-bottom pb-3 mb-3">
                <span className="fw-bold">Subtotal</span>
                <span className="fw-bold">${totalAmount.toFixed(2)}</span>
              </div>
              
              <div className="border-bottom pb-3 mb-3">
                <span className="fw-bold d-block mb-3">Shipping Method</span>
                <div className="form-check mb-2">
                  <input className="form-check-input" type="radio" name="shipping" id="shippingFree" checked={shippingMethod === 0} onChange={() => setShippingMethod(0)} />
                  <label className="form-check-label d-flex justify-content-between w-100" htmlFor="shippingFree">
                    <span>Free Shipping</span>
                    <span>$0.00</span>
                  </label>
                </div>
                <div className="form-check mb-2">
                  <input className="form-check-input" type="radio" name="shipping" id="shippingLocal" checked={shippingMethod === 20} onChange={() => setShippingMethod(20)} />
                  <label className="form-check-label d-flex justify-content-between w-100" htmlFor="shippingLocal">
                    <span>Local</span>
                    <span>$20.00</span>
                  </label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="radio" name="shipping" id="shippingFlat" checked={shippingMethod === 35} onChange={() => setShippingMethod(35)} />
                  <label className="form-check-label d-flex justify-content-between w-100" htmlFor="shippingFlat">
                    <span>Flat rate</span>
                    <span>$35.00</span>
                  </label>
                </div>
              </div>

              {discount > 0 && (
                <div className="d-flex justify-content-between border-bottom pb-3 mb-3 text-success">
                  <span className="fw-bold">Discount (10%)</span>
                  <span className="fw-bold">-${discount.toFixed(2)}</span>
                </div>
              )}

              <div className="d-flex justify-content-between pt-2">
                <span className="fw-bold fs-5">Total</span>
                <span className="fw-bold fs-5">${finalTotal.toFixed(2)}</span>
              </div>
            </div>

            <div className="payment-methods mb-4">
              <div className="form-check mb-4">
                <input className="form-check-input mt-2" type="radio" name="payment" id="paymentBank" checked={paymentMethod === 'bank'} onChange={() => setPaymentMethod('bank')} />
                <label className="form-check-label payment-method-label" htmlFor="paymentBank">
                  Direct bank transfer
                </label>
                {paymentMethod === 'bank' && (
                  <p className="text-muted small mt-2 mb-0">Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.</p>
                )}
              </div>
              
              <div className="form-check mb-4">
                <input className="form-check-input mt-2" type="radio" name="payment" id="paymentCod" checked={paymentMethod === 'cod'} onChange={() => setPaymentMethod('cod')} />
                <label className="form-check-label payment-method-label" htmlFor="paymentCod">
                  Cash on delivery
                </label>
                {paymentMethod === 'cod' && (
                  <p className="text-muted small mt-2 mb-0">Pay with cash upon delivery.</p>
                )}
              </div>

              <div className="form-check mb-4">
                <input className="form-check-input mt-2" type="radio" name="payment" id="paymentPaypal" checked={paymentMethod === 'paypal'} onChange={() => setPaymentMethod('paypal')} />
                <label className="form-check-label payment-method-label d-flex justify-content-between w-100 align-items-center" htmlFor="paymentPaypal">
                  <span>Paypal</span>
                  <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" alt="PayPal" height="20" className="ms-2 opacity-75" />
                </label>
                {paymentMethod === 'paypal' && (
                  <p className="text-muted small mt-2 mb-0">Pay via PayPal; you can pay with your credit card if you don’t have a PayPal account.</p>
                )}
              </div>
            </div>

            <button className="btn btn-primary w-100 py-3 fw-bold">Process to Checkout</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
