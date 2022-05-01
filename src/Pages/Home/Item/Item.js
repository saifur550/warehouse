import React from "react";

const Item = (props) => {
  const { name, img } = props.item;

  return (
    <div className="col-lg-4 col-md-6 col-12" >
      <div class="card-group">
        <div class="card mb-5">
          <img class="card-img-top " src={img} alt="Card" />
          <div class="card-body mt-0">
            <h5 class="card-title">{name}</h5>
            <p class="card-text">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
          </div>
          <div class="card-footer text-center ">
            <button className="btn w-100 btn-primary">Update Items</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Item;
