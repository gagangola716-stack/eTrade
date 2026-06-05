import React from 'react';
import { createPortal } from 'react-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../store/slices/cartSlice';
import { toggleWishlist } from '../store/slices/wishlistSlice';

const ProductModal = ({ product, onClose, handleDecrease, handleIncrease, quantity }) => {
  const dispatch = useDispatch();

  if (!product) return null;
  
  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  const handleToggleWishlist = () => {
    dispatch(toggleWishlist(product));
  };

  return createPortal(
    <>
      <div className="modal fade show d-block" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }} tabIndex="-1">
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content border-0">
            <div className="modal-header border-0 pb-0 pt-4 pe-4">
              <button type="button" className="btn-close shadow-none" onClick={onClose} aria-label="Close"></button>
            </div>
            <div className="modal-body p-4 p-md-5 pt-0">
              <div className="row">
                {/* Product Image */}
                <div className="col-md-6 mb-4 mb-md-0 d-flex justify-content-center align-items-center bg-light rounded p-4">
                  <img src={product.image} alt={product.title} className="img-fluid" style={{ maxHeight: '350px', objectFit: 'contain' }} />
                </div>

                {/* Product Info */}
                <div className="col-md-6 ps-md-4">
                  <h3 className="fw-bold mb-3">{product.title}</h3>
                  <div className="d-flex align-items-center gap-2 mb-3">
                    <div className="text-warning">
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star-half-stroke"></i>
                    </div>
                    <span className="text-muted small">({product.reviews || 150} Reviews)</span>
                    <span className="text-success small ms-2 border-start ps-3 border-secondary border-opacity-25">In Stock</span>
                  </div>
                  <h4 className="fw-bold mb-4">${product.price}</h4>
                  <p className="text-muted small mb-4 pb-4 border-bottom">
                    PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal Pressure sensitive.
                  </p>

                  <div className="d-flex gap-3 align-items-center mt-4">
                    <div className="input-group" style={{ width: '120px' }}>
                      <button className="btn btn-danger border-end-0 fw-bold fs-5 px-3" type="button" onClick={handleDecrease}>-</button>
                      <input type="text" className="form-control text-center fw-bold bg-white p-0" value={quantity} readOnly />
                      <button className="btn btn-danger fw-bold fs-5 px-3" type="button" onClick={handleIncrease}>+</button>
                    </div>

                    <button className="btn btn-danger flex-grow-1 py-2 fw-medium" onClick={handleAddToCart}>
                      Add To Cart
                    </button>

                    <button className="btn btn-outline-secondary py-2 px-3 rounded" onClick={handleToggleWishlist}>
                      <i className="fa-regular fa-heart fs-5"></i>
                    </button>
                  </div>

                  {/* Delivery Info */}
                  <div className="border rounded mt-5">
                    <div className="d-flex align-items-center gap-3 p-3 border-bottom">
                      <i className="fa-solid fa-truck-fast fs-4"></i>
                      <div>
                        <h6 className="mb-1 fw-bold">Free Delivery</h6>
                        <a href="#" className="text-dark small">Enter your postal code for Delivery Availability</a>
                      </div>
                    </div>
                    <div className="d-flex align-items-center gap-3 p-3">
                      <i className="fa-solid fa-rotate fs-4"></i>
                      <div>
                        <h6 className="mb-1 fw-bold">Return Delivery</h6>
                        <span className="text-dark small">Free 30 Days Delivery Returns. <a href="#" className="text-dark">Details</a></span>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>,
    document.body
  );
};

export default ProductModal;
