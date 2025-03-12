import Logo from './assets/sdpt logo.png'
import HomeIcon from './assets/Home Icon.png'
import AboutIcon from './assets/About Icon.png'
import CoursesIcon from './assets/Courses Icon.png'
import ProfileIcon from './assets/Profile Icon.png'

import { Link } from 'react-router-dom'

function NavBar({ useHomeBG }) {
  return (
    <div className="header">
      {useHomeBG && <div className="header-bg"></div>}
      <div className="nav-container">
        <img className="header-logo" src={Logo} alt="Logo" />
        <div className="navlinks-container">
          <Link className="navlink" to="/Home">
            <img className="nav-icon" src={HomeIcon} alt="Home" />
          </Link>
          <Link className="navlink" to="/AboutUs">
            <img className="nav-icon" src={AboutIcon} alt="About Us" />
          </Link>
          <Link className="navlink" to="/Courses">
            <img className="nav-icon" src={CoursesIcon} alt="Courses" />
          </Link>
          <Link className="navlink" to="/Profile">
            <img className="nav-icon-profile" src={ProfileIcon} alt="Profile" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NavBar;