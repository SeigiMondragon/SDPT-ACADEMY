import Logo from '../../assets/SDPT Nav Logo.svg'
import HomeIcon from '../../assets/Home Icon.svg'
import AboutIcon from '../../assets/About Icon.svg'
import CoursesIcon from '../../assets/Courses Icon.svg'
import ProfileIcon from '../../assets/Profile Icon.svg'
import './Navbar.css'

import { Link } from 'react-router-dom'


function NavBar({ useHomeBG }) {
  return (
    <div className="header">
        {useHomeBG && <div className="header-bg"></div>}

      <div className="navbar">
      <div className="container">
        <a href="#"><img className="navbar-brand" src={Logo} alt="Logo" /></a>
        <div className="navlinks-container">
        <Link className="navlink" to="/Home">
            <img className="nav-icon" src={HomeIcon} alt="Home" />
          </Link>
            <img className="nav-icon" src={AboutIcon} alt="About Us" />      
            <img className="nav-icon" src={CoursesIcon} alt="Courses" />        
            <img className="nav-icon-profile" src={ProfileIcon} alt="Profile" />  
        </div>
      </div>
      </div> 
    </div>
  );
}

export default NavBar;