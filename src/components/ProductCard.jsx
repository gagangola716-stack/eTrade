import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../store/slices/cartSlice';
import { toggleWishlist } from '../store/slices/wishlistSlice';
import ProductModal from './ProductModal';

const ProductCard = ({ id, image, title, price, originalPrice, rating, reviews, discount, isNew }) => {
  const dispatch = useDispatch();
  const wishlistItems = useSelector(state => state.wishlist.items);
  const isLiked = wishlistItems.some(item => item.id === id);
  const [showModal, setShowModal] = useState(false);

  const productData = { id, image, title, price, originalPrice, rating, reviews, discount, isNew };

  const handleAddToCart = () => {
    dispatch(addToCart(productData));
  };

  const handleToggleWishlist = () => {
    dispatch(toggleWishlist(productData));
  };

  const renderStars = () => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      if (i < Math.floor(rating || 5)) {
        stars.push(<i key={i} className="fa-solid fa-star text-warning"></i>);
      } else if (i < (rating || 5) && (rating || 5) % 1 !== 0) {
        stars.push(<i key={i} className="fa-solid fa-star-half-stroke text-warning"></i>);
      } else {
        stars.push(<i key={i} className="fa-regular fa-star text-secondary"></i>);
      }
    }
    return stars;
  };

  return (
    <>
      <div className="card border-0 product-card h-100 position-relative">
        <div className="position-relative bg-light rounded d-flex align-items-center justify-content-center p-4" style={{ height: '250px' }}>
          
          {/* Badges */}
          {discount && (
            <span className="badge bg-danger position-absolute top-0 start-0 m-3 px-2 py-1">
              -{discount}%
            </span>
          )}
          {isNew && (
            <span className="badge bg-success position-absolute top-0 start-0 m-3 px-2 py-1">
              NEW
            </span>
          )}

          {/* Action Icons */}
          <div className="position-absolute top-0 end-0 m-3 d-flex flex-column gap-2 z-2">
            <button className="btn btn-sm btn-white rounded-circle shadow-sm" style={{ width: '35px', height: '35px' }} onClick={handleToggleWishlist}>
              <i className={`${isLiked ? 'fa-solid text-danger' : 'fa-regular text-dark'} fa-heart`}></i>
            </button>
            <button className="btn btn-sm btn-white rounded-circle shadow-sm" style={{ width: '35px', height: '35px' }} onClick={() => setShowModal(true)}>
              <i className="fa-regular fa-eye text-dark"></i>
            </button>
          </div>

          {/* Image */}
          <img 
            src={image || "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=300&q=80"} 
            className="img-fluid position-relative z-1" 
            alt={title} 
            style={{ maxHeight: '180px', objectFit: 'contain' }}
          />

          {/* Add to Cart Overlay */}
          <button className="btn btn-dark w-100 position-absolute bottom-0 start-0 end-0 rounded-bottom add-to-cart-btn z-2" style={{ opacity: 0, transition: '0.3s' }} onClick={handleAddToCart}>
            Add To Cart
          </button>
        </div>

        <div className="card-body px-0">
          <h6 className="card-title fw-bold mb-1 text-truncate" title={title}>
            {title || "HAVIT HV-G92 Gamepad"}
          </h6>
          
          <div className="d-flex align-items-center gap-3 mb-2">
            <span className="text-danger fw-bold">${price || 120}</span>
            {originalPrice && (
              <span className="text-muted text-decoration-line-through">${originalPrice}</span>
            )}
          </div>
          
          <div className="d-flex align-items-center gap-2 small">
            <div className="d-flex">
              {renderStars()}
            </div>
            <span className="text-muted">({reviews || 88})</span>
          </div>
        </div>
      </div>
      
      {showModal && <ProductModal product={productData} onClose={() => setShowModal(false)} />}
    </>
  );
};

export default ProductCard;
