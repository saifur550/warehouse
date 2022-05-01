import React from 'react';
import Footer from '../shared/Footer/Footer';
import Banner from './Banner/Banner';
import Items from './Items/Items';

const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <Items></Items>
           <Footer></Footer>
        </div>
    );
};

export default Home;