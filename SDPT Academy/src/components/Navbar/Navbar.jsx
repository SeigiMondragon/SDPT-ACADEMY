import Logo from '../../assets/SDPT Nav Logo.svg'
import HomeIcon from '../../assets/Home Icon.svg'
import AboutIcon from '../../assets/AboutUs Icon.svg'
import CoursesIcon from '../../assets/Courses Icon.svg'
import ProfileIcon from '../../assets/Profile Icon.svg'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Navbar.css'

import { Link } from 'react-router-dom'


function NavBar({ useHomeBG }) {
  return (
  //   <div className="header">
  //       {useHomeBG && <div className="header-bg"></div>}

  //     <div className="navbar">
  //     <div className="container">
  //       <a href="#"><img className="navbar-brand" src={Logo} alt="Logo" /></a>
  //       <div className="navlinks-container">
  //       <Link className="navlink" to="/Home">
  //          <a href="#" className='nav-link active'> <img className="nav-icon" src={HomeIcon} alt="Home" />HOME</a>
  //        </Link>
  //           <a href="#" className='nav-link active'><img className="nav-icon" src={AboutIcon} alt="About Us" />About Us</a>
  //          <a href="#" className='nav-link active'><img className="nav-icon" src={CoursesIcon} alt="Courses" />Courses</a>
  //         <a href="#" className='nav-link active'><img className="nav-icon-profile" src={ProfileIcon} alt="Profile" /></a> 
  //       </div>
  //     </div>
  //     </div> 
  //   </div>
  // );

<>{useHomeBG && <div className="header-bg"></div>}
<Navbar collapseOnSelect expand="lg" className="bg-body-dark">
        <Container>
          <Navbar.Brand className="text-light nav-link d-flex flex-column align-items-center" href="#home">
            <img src={Logo} width="200" height="40" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto"></Nav>
            <Nav className="d-flex">
              
              <Nav.Link as={Link} to="/Home" className="text-light nav-link d-flex flex-column align-items-center me-3">
                <img src={HomeIcon} width="20" height="20" />
                <span style={{ fontSize: "12px" }}>Home</span>
              </Nav.Link>

              <Nav.Link as={Link} to="/AboutUs" className="text-light nav-link d-flex flex-column align-items-center me-3">
                <img src={AboutIcon} width="20" height="20" />
                <span style={{ fontSize: "12px" }}>About Us</span>
              </Nav.Link>

              <Nav.Link as={Link} to="/Courses" className="text-light nav-link d-flex flex-column align-items-center me-3">
                <img src={CoursesIcon} width="20" height="20" />
                <span style={{ fontSize: "12px" }}>Courses</span>
              </Nav.Link>

              <Nav.Link as={Link} to="/Profile" className="text-light nav-link d-flex flex-column align-items-center">
                <img src={ProfileIcon} width="55" height="35" />
              </Nav.Link>
              
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
</>
  )
}

export default NavBar;