import React from "react";
import { useNavigate } from "react-router-dom";

const Item = (props) => {
  const { name , img , _id ,  price, supplier } = props.item;
  console.log(props);
  const navigate = useNavigate()
  const navigateServiceDetail = itemsId =>{
      navigate(`/itemsDetails/${itemsId}`)
  }

  return (
    <div className="col-lg-4 col-md-6 col-12" >
      <div class="card-group mb-5">
        <div class="card">
          <img class=" mx-auto w-75 " src={img} alt="Card" />
          <div class="card-body ">
            <h5 class="card-title ">{name}</h5>
          
            <p class="card-text fw-normal">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
            <p className="text-muted fw-bolder">Price:{price}</p>
            <p className="fw-bolder">Supplier:{supplier}</p>
          </div>
          <div class="card-footer text-center ">
            <button onClick={()=>navigateServiceDetail(_id)} className="btn w-100 btn-primary">Item Details</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Item;
