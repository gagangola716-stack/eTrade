import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import heroImg from '../../assets/hero.png';

const HeroSection = () => {
  return (
    <section className="container mb-5 pt-4">
      <div className="row">
        
        {/* Sidebar Categories */}
        <div className="col-lg-3 d-none d-lg-block border-end pe-4 pt-2">
          <div className="list-group list-group-flush fw-medium">
            <a href="#" className="list-group-item list-group-item-action d-flex justify-content-between align-items-center border-0 px-0 py-2">
              Woman's Fashion <i className="fa-solid fa-chevron-right small text-muted"></i>
            </a>
            <a href="#" className="list-group-item list-group-item-action d-flex justify-content-between align-items-center border-0 px-0 py-2">
              Men's Fashion <i className="fa-solid fa-chevron-right small text-muted"></i>
            </a>
            <a href="#" className="list-group-item list-group-item-action border-0 px-0 py-2">Electronics</a>
            <a href="#" className="list-group-item list-group-item-action border-0 px-0 py-2">Home & Lifestyle</a>
            <a href="#" className="list-group-item list-group-item-action border-0 px-0 py-2">Medicine</a>
            <a href="#" className="list-group-item list-group-item-action border-0 px-0 py-2">Sports & Outdoor</a>
            <a href="#" className="list-group-item list-group-item-action border-0 px-0 py-2">Baby's & Toys</a>
            <a href="#" className="list-group-item list-group-item-action border-0 px-0 py-2">Groceries & Pets</a>
            <a href="#" className="list-group-item list-group-item-action border-0 px-0 py-2">Health & Beauty</a>
          </div>
        </div>

        {/* Hero Banner Slider */}
        <div className="col-lg-9 ps-lg-5 pt-3">
          <Swiper
            modules={[Pagination, Autoplay]}
            pagination={{ clickable: true, el: '.swiper-custom-pagination', bulletClass: 'swiper-custom-bullet', bulletActiveClass: 'swiper-custom-bullet-active' }}
            autoplay={{ delay: 5000 }}
            loop={true}
            className="rounded overflow-hidden"
          >
            {[1, 2, 3].map((slide) => (
              <SwiperSlide key={slide}>
                <div className="bg-dark text-white position-relative w-100 d-flex align-items-center" style={{ minHeight: '350px' }}>
                  <div className="row w-100 m-0 p-5 align-items-center">
                    <div className="col-md-6 z-1">
                      <div className="d-flex align-items-center gap-3 mb-4">
                        <i className="fa-brands fa-apple fs-2"></i>
                        <span className="fs-5">iPhone 14 Series</span>
                      </div>
                      <h1 className="display-4 fw-bold mb-4" style={{ lineHeight: '1.2' }}>Up to 10%<br/>off Voucher</h1>
                      <a href="#" className="text-white text-decoration-none fw-medium border-bottom border-white pb-1 border-2 d-inline-flex align-items-center gap-2">
                        Shop Now <i className="fa-solid fa-arrow-right"></i>
                      </a>
                    </div>
                    <div className="col-md-6 position-relative z-0 h-100 d-none d-md-block">
                       <img src={heroImg || "https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?auto=format&fit=crop&w=600&q=80"} alt="Hero Banner" className="img-fluid position-absolute top-50 translate-middle-y end-0" style={{maxHeight: '120%'}} />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
            
            {/* Custom Pagination Container */}
            <div className="swiper-custom-pagination position-absolute bottom-0 start-50 translate-middle-x mb-3 d-flex justify-content-center align-items-center gap-2 z-3"></div>
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
