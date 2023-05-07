import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { FaPhone, FaMailBulk } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";

function BasicExample() {
  return (
    <Navbar expand='lg' className='navbar'>
      <Container>
       <Link to="/" className="text-decoration-none"><Navbar.Brand text='light' className='text-light fw-bold fs-3'>
          Portfolio
        </Navbar.Brand></Link>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='ms-auto'>
            <NavLink
              to='/aboutme'
              className='text-light fw-semibold fs-6 text-decoration-none m-3'
            >
              About Me
            </NavLink>
            <NavLink
              to='/skills'
              className='text-light fw-semibold fs-6 text-decoration-none m-3'
            >
              Skills
            </NavLink>
            <NavLink
              to='/projects'
              className='text-light fw-semibold fs-6 text-decoration-none m-3'
            >
              Projects
            </NavLink>
            <NavLink
              to='/contact'
              className='text-light fw-semibold fs-6 text-decoration-none m-3'
            >
              Contact
            </NavLink>
            <NavDropdown
              title='Olayinka'
              id='basic-nav-dropdown'
              className='text-light fw-semibold fs-6 bg-light m-2 ms-3'
            >
              <NavDropdown.Item>
                {" "}
                <FaPhone className='phone' /> 08103373628
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item>
                <FaMailBulk /> olayinka4grace@gmail.com
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;
