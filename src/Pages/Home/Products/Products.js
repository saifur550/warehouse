import React from "react";
import img1 from '../../../img/other/img1.jpg'
import img2 from '../../../img/other/img2.jpg'
import img3 from '../../../img/other/img3.jpg'

const Products = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="text-center display-5 mb-4">Other Products</div>
        <div className="col-lg-4  mb-5">
          <div class="card">
            <img src={img1} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Bed 203</h5>
              <a href="/" class="btn btn-primary">
                stock Info
              </a>
            </div>
          </div>
        </div>
        <div className="col-lg-4  mb-5">
          <div class="card">
            <img src={img3} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Bed 204</h5>
              <a href="/" class="btn btn-primary">
                stock Info
              </a>
            </div>
          </div>
        </div>
        <div className="col-lg-4  mb-5">
          <div class="card">
            <img src={img2} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Bed 201</h5>
              <a href="/" class="btn btn-primary">
                stock Info
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
