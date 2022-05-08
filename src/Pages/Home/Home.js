import React from 'react';

import Banner from './Banner/Banner';
import Items from './Items/Items';
import Products from './Products/Products';

const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <Items></Items>
           <Products></Products>
        </div>
    );
};

export default Home;