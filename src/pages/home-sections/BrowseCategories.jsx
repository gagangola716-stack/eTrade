import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import SectionHeader from '../../components/SectionHeader';

const CategoryCard = ({ icon, label }) => (
  <div className="card h-100 border text-center py-4 category-card hover-bg-danger transition-all cursor-pointer">
    <div className="card-body">
      <i className={`fa-solid ${icon} fs-1 mb-3`}></i>
      <h6 className="card-title fw-normal mb-0">{label}</h6>
    </div>
  </div>
);

const BrowseCategories = () => {
  const swiperRef = useRef(null);

  const categories = [
    { icon: 'fa-mobile-screen', label: 'Phones' },
    { icon: 'fa-desktop', label: 'Computers' },
    { icon: 'fa-stopwatch', label: 'SmartWatch' },
    { icon: 'fa-camera', label: 'Camera' },
    { icon: 'fa-headphones', label: 'HeadPhones' },
    { icon: 'fa-gamepad', label: 'Gaming' },
    { icon: 'fa-vr-cardboard', label: 'VR Sets' },
  ];

  return (
    <section className="container py-5 border-bottom">
      <div className="mb-4">
        <div className="d-flex align-items-center gap-3 mb-3">
          <div className="bg-danger rounded" style={{ width: '20px', height: '40px' }}></div>
          <span className="text-danger fw-bold">Categories</span>
        </div>
        <div className="d-flex align-items-end justify-content-between flex-wrap gap-3">
          <h2 className="fw-bold mb-0 me-3">Browse By Category</h2>
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
          slidesPerView={2}
          onBeforeInit={(swiper) => {
            swiperRef.current = swiper;
          }}
          breakpoints={{
            576: { slidesPerView: 3 },
            768: { slidesPerView: 4 },
            1024: { slidesPerView: 6 },
          }}
        >
          {categories.map((cat, index) => (
            <SwiperSlide key={index}>
              <CategoryCard icon={cat.icon} label={cat.label} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default BrowseCategories;
