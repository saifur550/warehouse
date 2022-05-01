import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Item from '../Item/Item';


const Items = () => {
    const [items, setItems] = useState([]);

    useEffect( ()=>{
        fetch('fake.json')
        .then( res=> res.json())
        .then(data=>setItems(data))
    }, [])



    return (
        <>
            <div className="container" id='items'>
                <div className="row">
                <h4 className="fw-bolder text-primary mb-2 display-6 text-center">Our Stock Items</h4>
            <p className="text-muted text-center py-2 ">
            SmileBuilders is equipped to handle all your dental needs,   from a regular cleaning to a full-mouth reconstruction. <br /> Learn more about some of the common services we offer at our office.
            </p>
                    {
                        items.map( item =><Item
                        item={item}
                        >
                        </Item>)
                    }
                </div>
            </div>
        </>
    );
};

export default Items;