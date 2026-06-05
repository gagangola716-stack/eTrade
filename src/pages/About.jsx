import React from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import Newsletter from './home-sections/Newsletter';

const About = () => {
  const teamMembers = [
    { name: 'Rosalina D. William', role: 'Founder', img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500&h=500&fit=crop' },
    { name: 'Alonso M. Miklale', role: 'CEO', img: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?w=500&h=500&fit=crop' },
    { name: 'Alonso M. Miklale', role: 'Designer', img: 'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?w=500&h=500&fit=crop' },
    { name: 'Alonso M. Miklale', role: 'Designer', img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&h=500&fit=crop' },
    { name: 'Alonso M. Miklale', role: 'Designer', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=500&fit=crop' }
  ];

  return (
    <div className="about-page">
      {/* Breadcrumb Area */}
      <div className="container mt-4 mb-5">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb text-muted fs-6 mb-2">
            <li className="breadcrumb-item"><Link to="/" className="text-decoration-none text-muted">Home</Link></li>
            <li className="breadcrumb-item active" aria-current="page">About Us</li>
          </ol>
        </nav>
        <div className="d-flex align-items-center justify-content-between">
          <h1 className="fw-bold fs-2 mb-0">About Our Store</h1>
          <div className="d-none d-md-block" style={{ width: "80px", height: "80px", borderRadius: "50%", background: "linear-gradient(to right, #e0eafc, #cfdef3)" }}></div>
        </div>
      </div>

      {/* Store Info Area */}
      <div className="container mb-5 pb-5">
        <div className="row align-items-center mb-5 pb-4">
          <div className="col-lg-5 mb-4 mb-lg-0">
            <img src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80" alt="Store" className="img-fluid rounded shadow-sm object-fit-cover" style={{ minHeight: "400px" }} />
          </div>
          <div className="col-lg-6 offset-lg-1">
            <h6 className="text-primary fw-bold mb-3 d-flex align-items-center gap-2">
              <i className="fa-solid fa-store"></i> About Store
            </h6>
            <h2 className="fw-bold mb-4" style={{ lineHeight: "1.4" }}>Online shopping includes both buying things online.</h2>
            <p className="text-muted mb-4">Salesforce B2C Commerce can help you create unified, intelligent digital commerce experiences — both online and in the store.</p>
            <div className="row">
              <div className="col-md-6 mb-3">
                <p className="text-muted small">Empower your sales teams with industry tailored solutions that support manufacturers as they go digital, and adapt to changing markets & customers faster by creating new business.</p>
              </div>
              <div className="col-md-6 mb-3">
                <p className="text-muted small">Salesforce B2B Commerce offers buyers the seamless, self-service experience of online shopping with all the B2B.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Info Boxes */}
        <div className="row g-4 text-center pb-5 border-bottom">
          <div className="col-md-4">
            <div className="about-info-box p-4 rounded bg-white shadow-sm h-100 d-flex flex-column justify-content-center">
              <img src="https://cdn-icons-png.flaticon.com/512/1055/1055661.png" alt="Happy Customer" width="40" className="mx-auto mb-3 opacity-75" />
              <h4 className="fw-bold mb-2">40,000+ Happy Customer</h4>
              <p className="text-muted small mb-0">Empower your sales teams with industry tailored solutions that support.</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="about-info-box p-4 rounded bg-white shadow-sm h-100 d-flex flex-column justify-content-center">
              <img src="https://cdn-icons-png.flaticon.com/512/1055/1055644.png" alt="Experience" width="40" className="mx-auto mb-3 opacity-75" />
              <h4 className="fw-bold mb-2">16 Years of Experiences</h4>
              <p className="text-muted small mb-0">Empower your sales teams with industry tailored solutions that support.</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="about-info-box p-4 rounded bg-white shadow-sm h-100 d-flex flex-column justify-content-center">
              <img src="https://cdn-icons-png.flaticon.com/512/3176/3176294.png" alt="Awards" width="40" className="mx-auto mb-3 opacity-75" />
              <h4 className="fw-bold mb-2">12 Awards Won</h4>
              <p className="text-muted small mb-0">Empower your sales teams with industry tailored solutions that support.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Expert Management Team */}
      <div className="container mb-5 pb-5">
        <h6 className="text-primary fw-bold mb-3 d-flex align-items-center gap-2">
          <i className="fa-solid fa-people-group"></i> Our Team
        </h6>
        <div className="d-flex justify-content-between align-items-end mb-4">
          <h2 className="fw-bold mb-0">Expert Management Team</h2>
          <div className="d-flex gap-2">
            <button className="btn btn-light rounded-circle swiper-prev-team"><i className="fa-solid fa-arrow-left"></i></button>
            <button className="btn btn-light rounded-circle swiper-next-team"><i className="fa-solid fa-arrow-right"></i></button>
          </div>
        </div>

        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={24}
          slidesPerView={1}
          breakpoints={{
            576: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            992: { slidesPerView: 4 }
          }}
          autoplay={{ delay: 3000 }}
          loop={true}
          className="team-swiper"
        >
          {teamMembers.map((member, index) => (
            <SwiperSlide key={index}>
              <div className="card border-0 bg-light rounded-3 overflow-hidden">
                <img src={member.img} alt={member.name} className="card-img-top object-fit-cover" style={{ height: "300px" }} />
                <div className="card-body p-3">
                  <p className="text-muted small mb-1">{member.role}</p>
                  <h6 className="fw-bold mb-0">{member.name}</h6>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Solutions that work together - Section 1 */}
      <div className="container mb-5 pb-5">
        <div className="row align-items-center">
          <div className="col-lg-5 mb-4 mb-lg-0">
            <img src="https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?w=800&q=80" alt="Solutions" className="img-fluid rounded shadow-sm object-fit-cover" style={{ minHeight: "400px" }} />
          </div>
          <div className="col-lg-6 offset-lg-1">
            <h6 className="text-muted small fw-bold text-uppercase mb-2">Features #01</h6>
            <h2 className="fw-bold mb-4">Solutions that work together</h2>
            <p className="text-muted mb-4">Publish your eCommerce site quickly with our easy-to-use store builder— no coding required. Migrate your items from your point of sale system or turn your Instagram feed into a shopping site and start selling fast. Square Online works for all kinds of businesses—retail, restaurants, services.</p>
            <button className="btn btn-get-in-touch px-4 py-2 rounded-pill fw-bold">Get In Touch</button>
          </div>
        </div>
      </div>

      {/* Solutions that work together - Section 2 */}
      <div className="container mb-5 pb-5">
        <div className="row align-items-center flex-column-reverse flex-lg-row">
          <div className="col-lg-6 mb-4 mb-lg-0 pe-lg-5">
            <h6 className="text-muted small fw-bold text-uppercase mb-2">Features #02</h6>
            <h2 className="fw-bold mb-4">Solutions that work together</h2>
            <p className="text-muted mb-4">Publish your eCommerce site quickly with our easy-to-use store builder— no coding required. Migrate your items from your point of sale system or turn your Instagram feed into a shopping site and start selling fast. Square Online works for all kinds of businesses—retail, restaurants, services.</p>
            <button className="btn btn-get-in-touch px-4 py-2 rounded-pill fw-bold">Get In Touch</button>
          </div>
          <div className="col-lg-6 mb-4 mb-lg-0">
            <img src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80" alt="Solutions" className="img-fluid rounded shadow-sm object-fit-cover" style={{ minHeight: "400px" }} />
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
      <Newsletter />  
    </div>
  );
};

export default About;
