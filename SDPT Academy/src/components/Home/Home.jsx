import React from 'react';
import NavBar from '../Navbar/Navbar.jsx'
import HomeBody from '../Home/HomeBody.jsx'
import picture from '../../assets/'

function Home() {
    return (
        <>
          <NavBar useHomeBG={true}/>
          <HomeBody/>
        </>
    );
}

export default Home;