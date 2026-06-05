import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../store/slices/cartSlice';
import { toggleWishlist } from '../../store/slices/wishlistSlice';

const ProductDetails = (props) => {
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState('blue');
  const [selectedSize, setSelectedSize] = useState('M');

  // Hardcoded product for demonstration
  const product = {
    id: 'ella-tote-01',
    title: 'Ella Everyday Tote',
    price: 155.00,
    image: 'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?q=80&w=600&auto=format&fit=crop', // Placeholder bag
  };

  const images = Array(8).fill(product.image);

  const handleDecrease = () => {
    if (quantity > 0) {
      setQuantity(prev => prev - 1);
    }
  };

  const handleIncrease = () => {
    setQuantity(prev => prev + 1);
  };

  const handleAddToCart = () => {
    if (quantity > 0) {
      dispatch(addToCart({ ...product, quantity }));
    }
  };

  const handleToggleWishlist = () => {
    dispatch(toggleWishlist(product));
  };

  return (
    <section className="py-5" style={{ backgroundColor: '#f9f3f0' }}>
      <div className="container">
        <div className="row position-relative">
          
          {/* Left Column - Images */}
          <div className="col-lg-7 mb-4 mb-lg-0">
            <div className="row g-3">
              {images.map((img, idx) => (
                <div className="col-sm-6" key={idx}>
                  <img src={img} alt={`Product ${idx}`} className="img-fluid rounded w-100 object-fit-cover" style={{ height: '450px' }} />
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Sticky Info */}
          <div className="col-lg-5">
            <div className="product-info-sticky" style={{ position: 'sticky', top: '100px' }}>
              <h2 className="fw-bold mb-2">{product.title}</h2>
              <h4 className="fw-bold mb-3">$155.00 - $255.00</h4>
              
              <div className="d-flex align-items-center mb-4">
                <div className="text-warning me-2">
                  {[...Array(5)].map((_, i) => (
                    <i key={i} className="fa-solid fa-star small"></i>
                  ))}
                </div>
                <span className="text-muted small">(12 customer reviews)</span>
              </div>

              <ul className="list-unstyled mb-4 small text-muted">
                <li className="mb-2"><i className="fa-solid fa-check text-primary me-2"></i> In stock</li>
                <li className="mb-2"><i className="fa-solid fa-check text-primary me-2"></i> Free delivery available</li>
                <li className="mb-2"><i className="fa-solid fa-check text-primary me-2"></i> Sales 30% Off Use Code: MOTIVE30</li>
              </ul>

              <p className="text-muted small mb-4">
                In venenatis eu mi at euismod. Phasellus est mauris, rhoncus et ex in, hendrerit dui.
                Nullam quis elementum egestas magna. Pellentesque sagittis dictum libero, eu dignissim tellus.
              </p>

              <div className="mb-4 d-flex align-items-center">
                <span className="fw-bold me-3">Colors:</span>
                <div className="d-flex gap-2">
                  <div 
                    onClick={() => setSelectedColor('cyan')}
                    className={`rounded-circle border ${selectedColor === 'cyan' ? 'border-primary p-1' : 'border-transparent'}`} 
                    style={{ width: '24px', height: '24px', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <div className="rounded-circle w-100 h-100" style={{ backgroundColor: '#00bcd4' }}></div>
                  </div>
                  <div 
                    onClick={() => setSelectedColor('blue')}
                    className={`rounded-circle border ${selectedColor === 'blue' ? 'border-primary p-1' : 'border-transparent'}`} 
                    style={{ width: '24px', height: '24px', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <div className="rounded-circle w-100 h-100" style={{ backgroundColor: '#1976d2' }}></div>
                  </div>
                </div>
              </div>

              <div className="mb-4 d-flex align-items-center">
                <span className="fw-bold me-3">Size:</span>
                <div className="d-flex gap-2">
                  {['XS', 'S', 'M', 'L', 'XL'].map(size => (
                    <button 
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`btn btn-sm border rounded-5 ${selectedSize === size ? 'bg-primary text-white border-primary' : 'bg-white text-dark'}`}
                      style={{ width: '40px' }}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              <div className="d-flex gap-3 align-items-center mt-4 mb-5">
                <div className="input-group" style={{ width: '120px', height: '48px' }}>
                  <button className="btn btn-danger border-end-0 fw-bold fs-5 px-3" type="button" onClick={handleDecrease}>-</button>
                  <input type="text" className="form-control text-center fw-bold bg-white p-0" value={quantity} readOnly />
                  <button className="btn btn-danger fw-bold fs-5 px-3" type="button" onClick={handleIncrease}>+</button>
                </div>
                
                <button 
                  className="btn btn-danger flex-grow-1 fw-medium" 
                  style={{ height: '48px' }}
                  onClick={handleAddToCart}
                >
                  Add To Cart
                </button>
                
                <button 
                  className="btn btn-outline-secondary px-3 rounded d-flex align-items-center justify-content-center" 
                  style={{ height: '48px', width: '48px' }}
                  onClick={handleToggleWishlist}
                >
                  <i className="fa-regular fa-heart fs-5"></i>
                </button>
              </div>

              {/* Accordion or Tabs replacement for Description (just flat list as per design) */}
              <div className="mt-5">
                <h5 className="text-primary fw-bold mb-3">Description</h5>
                <h6 className="fw-bold mb-2">Specifications:</h6>
                <p className="text-muted small mb-4">
                  We've created a full-stack structure for our working workflow processes, were from the funny the century initial all the made, have spare to negatives. But the structure was from the funny the century rather, initial all the made, have spare to negatives.
                </p>
                
                <h6 className="fw-bold mb-2">Care & Maintenance:</h6>
                <p className="text-muted small mb-4">
                  Use warm water to describe us as a product team that creates amazing UI/UX experiences, by crafting top-notch user experience.
                </p>

                <div className="d-flex justify-content-between mt-4">
                  <div className="text-center">
                    <div className="bg-white rounded-circle d-flex align-items-center justify-content-center mx-auto mb-2" style={{ width: '50px', height: '50px' }}>
                      <i className="fa-solid fa-arrow-rotate-left text-primary fs-4"></i>
                    </div>
                    <small className="fw-bold">Easy Returns</small>
                  </div>
                  <div className="text-center">
                    <div className="bg-white rounded-circle d-flex align-items-center justify-content-center mx-auto mb-2" style={{ width: '50px', height: '50px' }}>
                      <i className="fa-solid fa-medal text-primary fs-4"></i>
                    </div>
                    <small className="fw-bold">Quality Service</small>
                  </div>
                  <div className="text-center">
                    <div className="bg-white rounded-circle d-flex align-items-center justify-content-center mx-auto mb-2" style={{ width: '50px', height: '50px' }}>
                      <i className="fa-solid fa-shield-halved text-primary fs-4"></i>
                    </div>
                    <small className="fw-bold">Original Product</small>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
