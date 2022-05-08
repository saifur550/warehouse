import React from "react";
import { useForm } from "react-hook-form";

const AddItems = () => {
  const { register, handleSubmit } = useForm();
    
    const onSubmit = data => {
        console.log(data);


        const url = `http://localhost:5000/item`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res=> res.json())
        .then(result =>{
            console.log(result);
        } )
    };

  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-10 mx-auto ">
          <h4 className="display text-center mt-5">New Item Add Here </h4>
          <form className="d-flex flex-column w-50 mx-auto" onSubmit={handleSubmit(onSubmit)}>
            <input className="mb-4 p-1" placeholder="Enter Name " {...register("name")}/>
            <input className="mb-4 p-1" placeholder="Description" {...register("description")} />
            <input className="mb-4 p-1" placeholder="price" type="number" {...register("price" )} />
            <input className="mb-4 p-1" placeholder="quantity" type="number" {...register("quantity" )} />
            <input className="mb-4 p-1" placeholder="supplier" type="text" {...register("supplier" )} />
            <input className="mb-4 p-1" placeholder=" photo url" type="text" {...register("img")} />
            <input className="btn btn-primary"  type="submit" value='New item' />
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddItems;
