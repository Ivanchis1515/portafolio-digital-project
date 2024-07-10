//importaciones de react
import React from 'react';

//layouts
import Navbar from '../../components/layouts/Navbar';
import BannerHeader from '../../components/layouts/BannerHeader';
// import ImagesComponent from '../../components/common/ImagesComponent';


const Home = () => {
    return (
        <>
            <Navbar />
            <BannerHeader/>
            {/* <ImagesComponent /> */}
        </>
    )
}

export default Home