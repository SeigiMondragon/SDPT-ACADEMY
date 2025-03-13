import React from 'react';
import NavBar from '../Navbar/Navbar.jsx'
import HomeBody from '../Home/HomeBody.jsx'
import '../../global.css';

function Home() {
    return (
        <>
          <NavBar useHomeBG={true}/>
        <HomeBody/>
         
        </>
    );
}
export default Home;