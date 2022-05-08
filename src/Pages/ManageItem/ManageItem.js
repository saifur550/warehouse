import React from 'react';
import UseItems from '../../Hooks/UseItems';

const ManageItem = () => {
    const [items, setItems] = UseItems();
    const handleDelete = id =>{
        const proceed = window.confirm('Are you sure?');
        if(proceed){
            const url = `http://localhost:5000/item/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                const remaining = items.filter(service => service._id !== id);
                setItems(remaining);
            })
        }
    }
    return (
        <div className='container'>
            <h4 className='text-center display-4 mt-3'>Manage  item</h4>
            
            {
                 items.map(item =>
                  <div key={item._id}>
                     <table class="table table-dark">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">price</th>
      <th scope="col">quantity</th>
      <th scope="col">Action</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">*</th>
      <td>{item.name}</td>
      <td>{item.price}</td>
      <td>{item.quantity}</td>
      <td>
          <button onClick={() => handleDelete(item._id)} className='btn btn-danger'>Delete</button>
      </td>
      <td>
          <button className='btn btn-info'> Update</button>
      </td>
    </tr>
  </tbody>
</table>
                    
                </div>)
            }
        </div>
    );
};

export default ManageItem;