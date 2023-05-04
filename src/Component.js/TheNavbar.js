import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { FaPhone, FaMailBulk } from "react-icons/fa";


function BasicExample() {
  return (
    <Navbar expand='lg' className='navbar'>
      <Container>
        <Navbar.Brand text='light' href='/' className='text-light fw-bold fs-3'>
          Portfolio
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav'/>
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='ms-auto'>
            <Nav.Link href='/aboutme' className='text-light fw-semibold fs-6'>
              About Me
            </Nav.Link>
            <Nav.Link href='/skills' className='text-light fw-semibold fs-6'>
              Skills
            </Nav.Link>
            <Nav.Link href='/projects' className='text-light fw-semibold fs-6'>
              Projects
            </Nav.Link>
            <Nav.Link href='/contact' className='text-light fw-semibold fs-6'>
              Contact
            </Nav.Link>
            <NavDropdown
              title='Olayinka'
              id='basic-nav-dropdown'
              className='text-light fw-semibold fs-6 bg-light'
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
