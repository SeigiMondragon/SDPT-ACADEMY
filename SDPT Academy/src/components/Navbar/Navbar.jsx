import Logo from '../../assets/sdpt.svg'
import HomeIcon from '../../assets/Home Icon.svg'
import AboutIcon from '../../assets/About Icon.svg'
import CoursesIcon from '../../assets/Courses Icon.svg'
import ProfileIcon from '../../assets/Profile Icon.svg'


function NavBar({ useHomeBG }) {
  return (
    <div className="header">
      
      <div className="nav-container">
        <img className="header-logo" src={Logo} alt="Logo" />
        <div className="navlinks-container">
            <img className="nav-icon" src={HomeIcon} alt="Home" />
            <img className="nav-icon" src={AboutIcon} alt="About Us" />      
            <img className="nav-icon" src={CoursesIcon} alt="Courses" />        
            <img className="nav-icon-profile" src={ProfileIcon} alt="Profile" />  
            <img src= {profile} alt="" />
        </div>
      </div>
    </div>
  );
}

export default NavBar;