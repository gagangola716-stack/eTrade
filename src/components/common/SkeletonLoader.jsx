import React from 'react';

const SkeletonLoader = () => {
  return (
    <div className="container-fluid p-0">
      <div 
        className="skeleton" 
        style={{ 
          width: '100%', 
          height: 'calc(100vh - 150px)',
          borderRadius: '0'
        }}
      ></div>
    </div>
  );
};

export default SkeletonLoader;
