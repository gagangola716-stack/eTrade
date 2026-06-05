import React from 'react';
import ProductDetails from '../components/shop/ProductDetails';
import ViewedItems from '../components/shop/ViewedItems';
import Newsletter from './home-sections/Newsletter'; // Using existing Newsletter

const Shop = () => {
  return (
    <div className="shop-page">
      <ProductDetails />
      <ViewedItems />
      <Newsletter />
    </div>
  );
};

export default Shop;
