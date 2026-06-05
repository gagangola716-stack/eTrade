import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Grid } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/grid';
import ProductCard from '../../components/ProductCard';

const ExploreProducts = () => {
  const swiperRef = useRef(null);

  const products = [
    { id: 10, title: "Breed Dry Dog Food", price: "100", rating: "3", reviews: "35", image: "https://images.unsplash.com/photo-1589924691995-400dc9ecc119?auto=format&fit=crop&w=300&q=80" },
    { id: 11, title: "CANON EOS DSLR Camera", price: "360", rating: "4", reviews: "95", image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=300&q=80" },
    { id: 12, title: "ASUS FHD Gaming Laptop", price: "700", rating: "5", reviews: "325", image: "https://images.unsplash.com/photo-1593640408182-31c70c8268f5?auto=format&fit=crop&w=300&q=80" },
    { id: 13, title: "Curology Product Set", price: "500", rating: "4", reviews: "145", image: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&w=300&q=80" },
    { id: 14, title: "Kids Electric Car", price: "960", rating: "5", reviews: "65", isNew: true, image: "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?auto=format&fit=crop&w=300&q=80" },
    { id: 15, title: "Jr. Zoom Soccer Cleats", price: "1160", rating: "5", reviews: "35", image: "https://images.unsplash.com/photo-1511556532299-8f662fc26c06?auto=format&fit=crop&w=300&q=80" },
    { id: 16, title: "GP11 Shooter USB Gamepad", price: "660", rating: "4.5", reviews: "55", isNew: true, image: "https://images.unsplash.com/photo-1593118247619-e2d6f056869e?auto=format&fit=crop&w=300&q=80" },
    { id: 17, title: "Quilted Satin Jacket", price: "660", rating: "4.5", reviews: "55", image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=300&q=80" }
  ];

  return (
    <section className="container py-5">
      <div className="mb-4">
        <div className="d-flex align-items-center gap-3 mb-3">
          <div className="bg-danger rounded" style={{ width: '20px', height: '40px' }}></div>
          <span className="text-danger fw-bold">Our Products</span>
        </div>
        <div className="d-flex align-items-end justify-content-between flex-wrap gap-3">
          <h2 className="fw-bold mb-0 me-3">Explore Our Products</h2>
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
      
      <div className="mt-2" style={{ height: '700px' }}>
        <Swiper
          modules={[Navigation, Grid]}
          spaceBetween={30}
          slidesPerView={1}
          grid={{ rows: 2, fill: 'row' }}
          onBeforeInit={(swiper) => {
            swiperRef.current = swiper;
          }}
          breakpoints={{
            576: { slidesPerView: 2, grid: { rows: 2 } },
            768: { slidesPerView: 3, grid: { rows: 2 } },
            1024: { slidesPerView: 4, grid: { rows: 2 } },
          }}
          className="h-100"
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

export default ExploreProducts;
