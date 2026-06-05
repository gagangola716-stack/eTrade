import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import ProductCard from '../../components/ProductCard';

const BestSelling = () => {
  const swiperRef = useRef(null);

  const products = [
    { id: 6, title: "The north coat", price: "260", originalPrice: "360", rating: "5", reviews: "65", image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=300&q=80" },
    { id: 7, title: "Gucci duffle bag", price: "960", originalPrice: "1160", rating: "4.5", reviews: "65", image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=300&q=80" },
    { id: 8, title: "RGB liquid CPU Cooler", price: "160", originalPrice: "170", rating: "4.5", reviews: "65", image: "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?auto=format&fit=crop&w=300&q=80" },
    { id: 9, title: "Small BookSelf", price: "360", originalPrice: "", rating: "5", reviews: "65", image: "https://images.unsplash.com/photo-1594620302200-9a762244a156?auto=format&fit=crop&w=300&q=80" },
  ];

  return (
    <section className="container py-5">
      <div className="mb-4">
        <div className="d-flex align-items-center gap-3 mb-3">
          <div className="bg-danger rounded" style={{ width: '20px', height: '40px' }}></div>
          <span className="text-danger fw-bold">This Month</span>
        </div>
        <div className="d-flex align-items-end justify-content-between flex-wrap gap-3">
          <h2 className="fw-bold mb-0 me-3">Best Selling Products</h2>
          <div className="d-flex gap-2 align-items-center">
             <button className="btn btn-danger px-4 py-2 me-3">View All</button>
             <button className="btn btn-light rounded-circle" style={{ width: '46px', height: '46px' }} onClick={() => swiperRef.current?.slidePrev()}>
              <i className="fa-solid fa-arrow-left"></i>
            </button>
            <button className="btn btn-light rounded-circle" style={{ width: '46px', height: '46px' }} onClick={() => swiperRef.current?.slideNext()}>
              <i className="fa-solid fa-arrow-right"></i>
            </button>
          </div>
        </div>
      </div>
      
      <div className="mt-2">
        <Swiper
          modules={[Navigation]}
          spaceBetween={30}
          slidesPerView={1}
          onBeforeInit={(swiper) => {
            swiperRef.current = swiper;
          }}
          breakpoints={{
            576: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
          }}
        >
          {products.map((product) => (
            <SwiperSlide key={product.id}>
              <ProductCard {...product} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default BestSelling;
