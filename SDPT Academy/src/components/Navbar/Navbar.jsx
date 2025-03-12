import Logo from '../../assets/SDPT Nav Logo.svg'
import HomeIcon from '../../assets/Home Icon.svg'
import AboutIcon from '../../assets/About Icon.svg'
import CoursesIcon from '../../assets/Courses Icon.svg'
import ProfileIcon from '../../assets/Profile Icon.svg'
import './Navbar.css'


function NavBar({ useHomeBG }) {
  return (
    <div className="header">
        {useHomeBG && <div className="header-bg"></div>}
      <div className="nav-container">
        <img className="header-logo" src={Logo} alt="Logo" />
        <div className="navlinks-container">
            <img className="nav-icon" src={HomeIcon} alt="Home" />
            <img className="nav-icon" src={AboutIcon} alt="About Us" />      
            <img className="nav-icon" src={CoursesIcon} alt="Courses" />        
            <img className="nav-icon-profile" src={ProfileIcon} alt="Profile" />  
        </div>
      </div>
    </div>
  );
}

export default NavBar;