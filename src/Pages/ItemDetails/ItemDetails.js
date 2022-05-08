import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";

const ItemDetails = () => {
  const { itemsId } = useParams();
  const [items, setItems] = useState({});
 

  useEffect(() => {
    const url = `http://localhost:5000/item/${itemsId}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);


  const handleRestock =()=>{
    console.log("handleRestock");
  
  }

  const handleDelivered =()=>{
    console.log("handleDelivered");
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-10 w-50  mt-3 mx-auto">
          <h4 className="text-center py-2">ItemDetails </h4>
      </div>
      <div className="row">
          <div className="col-lg-10 mx-auto shadow border">
              <div className="d-flex align-items-center">
                  <div className="img-are w-100">
                      <img className="w-100" src={items.img} alt="" />
                  </div>
                  <div className="ms-2">
                      <h4 className="text-muted">{items.name}</h4>
                      <p>{items._id}</p>
                      <p className="w-75">{items.description}</p>
                      <p>Price: {items.price}</p>
                      <p>Quantity:{items.quantity}</p>
                      <p className="fw-bolder">Supplier:{items.supplier}</p>
                  <div className="d-flex">
                   <div className="">
                   <button onClick={handleDelivered} className="me-2 btn btn-outline-primary">Delivery</button> 
                   </div>
                  </div>
                  </div>

              </div>
          </div>
      </div>
      <div className="text-center">
      <input className="mt-4" type="number" name ="number" placeholder="Add New stock "  /> <br /> <br />
      <button  onClick={handleRestock}  className="btn btn-outline-success">Restock</button>
      </div>
      <div className="text-center mt-5">
      <Link to="/checkout"> <button className="btn   btn-primary"> processed checkout </button></Link>
      </div>
      </div>

    </div>

  );
};

export default ItemDetails;
