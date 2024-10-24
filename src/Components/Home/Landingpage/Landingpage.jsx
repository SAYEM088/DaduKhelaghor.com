import React from 'react';
import Navbar from '../Navbar/Navbar';
import Categories from '@/Components/Categories/Categories';
import HomeArrival from '@/Components/NewArrival/HomeArrival';
import ExtraCategories from '@/Components/Categories/ExtraCategories';

const Landingpage = () => {
    return (
        <div>
            <Navbar/>
            <ExtraCategories/>
            <Categories />
            <HomeArrival/>
        </div>
    );
};

export default Landingpage;