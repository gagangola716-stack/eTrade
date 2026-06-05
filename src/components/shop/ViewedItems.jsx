import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import ProductCard from '../ProductCard';
import 'swiper/css';
import 'swiper/css/navigation';

const ViewedItems = () => {
  const viewedProducts = [
    {
      id: 'viewed-01',
      title: '3D™ wireless Headset',
      price: 30,
      image: 'https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?auto=format&fit=crop&w=300&q=80',
      discount: 30,
    },
    {
      id: 'viewed-02',
      title: 'Media remote',
      price: 50,
      image: 'https://images.unsplash.com/photo-1595225476474-87563907a212?auto=format&fit=crop&w=300&q=80',
      discount: 30,
    },
    {
      id: 'viewed-03',
      title: 'HD camera',
      price: 45,
      image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=300&q=80',
      discount: 30,
    },
    {
      id: 'viewed-04',
      title: 'PS Remote Control',
      price: 35,
      originalPrice: 70,
      image: 'https://images.unsplash.com/photo-1600080972464-8e5f35f63d08?auto=format&fit=crop&w=300&q=80',
      discount: 50,
    },
    {
      id: 'viewed-05',
      title: 'Wireless Keyboard',
      price: 65,
      image: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=300&q=80',
    }
  ];

  return (
    <section className="py-5 bg-white">
      <div className="container">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <div>
            <div className="d-flex align-items-center gap-2 mb-2">
              <div className="bg-primary rounded-circle" style={{ width: '20px', height: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <i className="fa-solid fa-box text-white" style={{ fontSize: '10px' }}></i>
              </div>
              <span className="text-primary fw-bold">Your recently</span>
            </div>
            <h3 className="fw-bold mb-0">Viewed Items</h3>
          </div>
          
          <div className="d-flex gap-2">
            <button className="btn btn-light rounded-circle viewed-prev" style={{ width: '46px', height: '46px' }}>
              <i className="fa-solid fa-arrow-left"></i>
            </button>
            <button className="btn btn-light rounded-circle viewed-next" style={{ width: '46px', height: '46px' }}>
              <i className="fa-solid fa-arrow-right"></i>
            </button>
          </div>
        </div>

        <Swiper
          modules={[Navigation]}
          navigation={{
            prevEl: '.viewed-prev',
            nextEl: '.viewed-next',
          }}
          spaceBetween={24}
          slidesPerView={1}
          breakpoints={{
            576: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            992: { slidesPerView: 4 },
          }}
        >
          {viewedProducts.map(product => (
            <SwiperSlide key={product.id}>
              <ProductCard {...product} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default ViewedItems;
