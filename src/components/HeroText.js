import React from "react";
import '../App.css'

function HeroText() {
  return (
    <>
      <div className="text-start intro">
        <h1 className="display-4 fw-bold ">Innovative. Unorthodox.</h1>
        <h3 className="fw-normal mt-3 px-4">
          We're <span className="nowalls">Nowalls</span> PanAfrica.
        </h3>
        <div className="d-flex justify-content-start align-items-center mt-4">
          <hr className="line_a me-3" style={{ width: '60px', height: '4px', backgroundColor: 'rgba(205, 126, 80, 1)' }} />
          <p className="fw-bold main-web">Main website coming soon</p>
        </div>
      </div>
    </>
  );
}

export default HeroText;
