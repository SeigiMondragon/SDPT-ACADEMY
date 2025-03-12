import Logo from '../../assets/SDPT Nav Logo.svg'
import HomeIcon from '../../assets/Home Icon.svg'
import AboutIcon from '../../assets/AboutUs Icon.svg'
import CoursesIcon from '../../assets/Courses Icon.svg'
import ProfileIcon from '../../assets/Profile Icon.svg'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
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
  //         </Link>
  //           <a href="#" className='nav-link active'><img className="nav-icon" src={AboutIcon} alt="About Us" />About Us</a>
  //          <a href="#" className='nav-link active'><img className="nav-icon" src={CoursesIcon} alt="Courses" />Courses</a>
  //         <a href="#" className='nav-link active'><img className="nav-icon-profile" src={ProfileIcon} alt="Profile" /></a> 
  //       </div>
  //     </div>
  //     </div> 
  //   </div>
  // );

  <Navbar collapseOnSelect expand="lg" className="bg-body-dark">
  <Container>
    <Navbar.Brand className='text-light' href="#home">SDPT Solutions</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="me-auto">  
      </Nav>
      <Nav>
      <Nav.Link className='text-light nav-link' href="#"> 
        <img src= {HomeIcon}/>Home</Nav.Link>
      <Nav.Link className='text-light' href="#"><img src= {AboutIcon}/>About Us</Nav.Link>
      <Nav.Link className='text-light' href="#"><img src= {CoursesIcon}/>Courses</Nav.Link>
      <Nav.Link className='text-light' href="#"><img src= {ProfileIcon}/>Profile</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>

  )
}

export default NavBar;