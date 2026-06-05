import React from 'react';

const SkeletonLoader = () => {
  return (
    <div className="container py-5">
      <div className="skeleton skeleton-title mb-5"></div>
      
      <div className="row g-4 mb-5">
        <div className="col-md-6">
          <div className="skeleton skeleton-img"></div>
        </div>
        <div className="col-md-6 d-flex flex-column justify-content-center">
          <div className="skeleton skeleton-text mb-3"></div>
          <div className="skeleton skeleton-text mb-3"></div>
          <div className="skeleton skeleton-text mb-4"></div>
          <div className="skeleton skeleton-title" style={{ width: '30%' }}></div>
        </div>
      </div>

      <div className="row g-4">
        {[1, 2, 3, 4].map(i => (
          <div key={i} className="col-md-3">
            <div className="card border-0 shadow-sm">
              <div className="skeleton skeleton-img" style={{ height: '200px' }}></div>
              <div className="card-body">
                <div className="skeleton skeleton-text mb-2"></div>
                <div className="skeleton skeleton-text"></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkeletonLoader;
