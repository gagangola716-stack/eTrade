import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const TestimonialCard = ({ name, title, text, avatar }) => (
  <div className="h-100">
    <div className="card h-100 border-0 bg-light p-4 shadow-sm position-relative mb-4">
      <div className="position-absolute bottom-0 start-50 translate-middle-x" style={{
        width: '0', 
        height: '0', 
        borderLeft: '15px solid transparent',
        borderRight: '15px solid transparent',
        borderTop: '15px solid #f8f9fa',
        marginBottom: '-15px'
      }}></div>

      <div className="card-body">
        <p className="card-text text-muted fst-italic">"{text}"</p>
      </div>
    </div>
    
    <div className="d-flex align-items-center justify-content-center gap-3">
      <img src={avatar} alt={name} className="rounded-circle" style={{ width: '50px', height: '50px', objectFit: 'cover' }} />
      <div className="text-start">
        <h6 className="mb-0 fw-bold">{name}</h6>
        <small className="text-muted">{title}</small>
      </div>
    </div>
  </div>
);

const UsersFeedback = () => {
  const swiperRef = useRef(null);

  const testimonials = [
    { name: "John Doe", title: "CEO & Founder", text: "Outstanding design, very easy to use! Highly recommended for any ecommerce business.", avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&q=80" },
    { name: "Jane Smith", title: "Marketing Manager", text: "The best ecommerce platform I've used. The offcanvas menu and responsive design are top-notch.", avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&q=80" },
    { name: "Mike Johnson", title: "Freelancer", text: "Super fast delivery and great quality products. The UI is completely seamless on my phone.", avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80" },
    { name: "Sarah Connor", title: "Developer", text: "Integration was a breeze, the code is very clean and the redux state is well managed.", avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80" }
  ];

  return (
    <section className="container py-5 bg-opacity-10 bg-danger rounded my-5">
      <div className="mb-4">
        <div className="d-flex align-items-center gap-3 mb-3">
          <div className="bg-danger rounded" style={{ width: '20px', height: '40px' }}></div>
          <span className="text-danger fw-bold">Testimonials</span>
        </div>
        <div className="d-flex align-items-end justify-content-between flex-wrap gap-3">
          <h2 className="fw-bold mb-0 me-3">Users Feedback</h2>
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
      
      <div className="mt-4">
        <Swiper
          modules={[Navigation]}
          spaceBetween={30}
          slidesPerView={1}
          onBeforeInit={(swiper) => {
            swiperRef.current = swiper;
          }}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {testimonials.map((testimonial, idx) => (
            <SwiperSlide key={idx} style={{ paddingBottom: '30px' }}>
              <TestimonialCard {...testimonial} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default UsersFeedback;
