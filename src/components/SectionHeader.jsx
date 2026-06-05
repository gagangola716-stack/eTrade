import React from 'react';

const SectionHeader = ({ subtitle, title, showTimer, timerData, showArrows, showViewAll }) => {
  return (
    <div className="mb-4">
      {/* Subtitle with red block */}
      <div className="d-flex align-items-center gap-3 mb-3">
        <div className="bg-danger rounded" style={{ width: '20px', height: '40px' }}></div>
        <span className="text-danger fw-bold">{subtitle}</span>
      </div>

      {/* Title Row */}
      <div className="d-flex align-items-end justify-content-between flex-wrap gap-3">
        <div className="d-flex align-items-end gap-5 flex-wrap">
          <h2 className="fw-bold mb-0 me-3">{title}</h2>
          
          {/* Optional Timer */}
          {showTimer && (
            <div className="d-flex align-items-center gap-3">
              <div className="text-center">
                <div className="small fw-bold">Days</div>
                <h3 className="fw-bold mb-0">{timerData?.days || "03"}</h3>
              </div>
              <h3 className="text-danger mb-0">:</h3>
              <div className="text-center">
                <div className="small fw-bold">Hours</div>
                <h3 className="fw-bold mb-0">{timerData?.hours || "23"}</h3>
              </div>
              <h3 className="text-danger mb-0">:</h3>
              <div className="text-center">
                <div className="small fw-bold">Minutes</div>
                <h3 className="fw-bold mb-0">{timerData?.minutes || "19"}</h3>
              </div>
              <h3 className="text-danger mb-0">:</h3>
              <div className="text-center">
                <div className="small fw-bold">Seconds</div>
                <h3 className="fw-bold mb-0">{timerData?.seconds || "56"}</h3>
              </div>
            </div>
          )}
        </div>

        {/* Action Controls */}
        <div className="d-flex gap-2 align-items-center">
          {showArrows && (
            <>
              <button className="btn btn-light rounded-circle" style={{ width: '46px', height: '46px' }}>
                <i className="fa-solid fa-arrow-left"></i>
              </button>
              <button className="btn btn-light rounded-circle" style={{ width: '46px', height: '46px' }}>
                <i className="fa-solid fa-arrow-right"></i>
              </button>
            </>
          )}
          {showViewAll && (
            <button className="btn btn-danger px-4 py-2">View All</button>
          )}
        </div>
      </div>
    </div>
  );
};

export default SectionHeader;
