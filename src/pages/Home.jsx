import React from 'react';
import HeroSection from './home-sections/HeroSection';
import FlashSales from './home-sections/FlashSales';
import BrowseCategories from './home-sections/BrowseCategories';
import BestSelling from './home-sections/BestSelling';
import PromoBanner from './home-sections/PromoBanner';
import ExploreProducts from './home-sections/ExploreProducts';
import UsersFeedback from './home-sections/UsersFeedback';
import NewArrivals from './home-sections/NewArrivals';
import Newsletter from './home-sections/Newsletter';

const Home = () => {
  return (
    <div className="home-page">
      <HeroSection />
      <FlashSales />
      <BrowseCategories />
      <BestSelling />
      <PromoBanner />
      <ExploreProducts />
      <UsersFeedback />
      <NewArrivals />
      <Newsletter />
    </div>
  );
};

export default Home;
