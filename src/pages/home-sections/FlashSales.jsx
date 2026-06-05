import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import SectionHeader from '../../components/SectionHeader';
import ProductCard from '../../components/ProductCard';
import useCountdown from '../../hooks/useCountdown';

const FlashSales = () => {
  const swiperRef = useRef(null);
  
  // Set target date for 3 days from now
  const targetDate = new Date().getTime() + 3 * 24 * 60 * 60 * 1000;
  const timerData = useCountdown(targetDate);

  const products = [
    { id: 1, title: "HAVIT HV-G92 Gamepad", price: "120", originalPrice: "160", rating: "5", reviews: "88", discount: "40", image: "https://images.unsplash.com/photo-1600080972464-8e5f35f63d08?auto=format&fit=crop&w=300&q=80" },
    { id: 2, title: "AK-900 Wired Keyboard", price: "96", originalPrice: "116", rating: "4", reviews: "75", discount: "35", image: "https://images.unsplash.com/photo-1595225476474-87563907a212?auto=format&fit=crop&w=300&q=80" },
    { id: 3, title: "IPS LCD Gaming Monitor", price: "370", originalPrice: "400", rating: "5", reviews: "99", discount: "30", image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=300&q=80" },
    { id: 4, title: "S-Series Comfort Chair", price: "375", originalPrice: "400", rating: "4.5", reviews: "99", discount: "25", image: "https://images.unsplash.com/photo-1505843490538-5133c6c7d0e1?auto=format&fit=crop&w=300&q=80" },
    { id: 5, title: "Razer DeathAdder Mouse", price: "80", originalPrice: "120", rating: "4.8", reviews: "150", discount: "33", image: "https://images.unsplash.com/photo-1527814050087-3793815479fa?auto=format&fit=crop&w=300&q=80" },
  ];

  return (
    <section className="container py-5 border-bottom">
      {/* Section Header with Custom Swiper Navigation Buttons */}
      <div className="mb-4">
        <div className="d-flex align-items-center gap-3 mb-3">
          <div className="bg-danger rounded" style={{ width: '20px', height: '40px' }}></div>
          <span className="text-danger fw-bold">Today's</span>
        </div>

        <div className="d-flex align-items-end justify-content-between flex-wrap gap-3">
          <div className="d-flex align-items-end gap-5 flex-wrap">
            <h2 className="fw-bold mb-0 me-3">Flash Sales</h2>
            <div className="d-flex align-items-center gap-3">
              <div className="text-center">
                <div className="small fw-bold">Days</div>
                <h3 className="fw-bold mb-0">{timerData.days}</h3>
              </div>
              <h3 className="text-danger mb-0">:</h3>
              <div className="text-center">
                <div className="small fw-bold">Hours</div>
                <h3 className="fw-bold mb-0">{timerData.hours}</h3>
              </div>
              <h3 className="text-danger mb-0">:</h3>
              <div className="text-center">
                <div className="small fw-bold">Minutes</div>
                <h3 className="fw-bold mb-0">{timerData.minutes}</h3>
              </div>
              <h3 className="text-danger mb-0">:</h3>
              <div className="text-center">
                <div className="small fw-bold">Seconds</div>
                <h3 className="fw-bold mb-0">{timerData.seconds}</h3>
              </div>
            </div>
          </div>

          <div className="d-flex gap-2 align-items-center">
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
          {products.map(product => (
            <SwiperSlide key={product.id}>
              <ProductCard {...product} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="text-center mt-5">
        <button className="btn btn-danger px-5 py-3 rounded text-white fw-medium">View All Products</button>
      </div>
    </section>
  );
};

export default FlashSales;
