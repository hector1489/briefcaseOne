import { Navbar, Container, Nav } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import './NavBar.css'


const NavBar = () => {

  return (
    <div className='box-NavBar d-flex justify-content-center mt-2'>
      <nav>
      <Navbar expand="lg" className="bg-black">
        <Container>
          <Navbar.Brand href="#home" className='text-uppercase text-white'>Briefcase</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto gap-4">
              <NavLink to="/">Home</NavLink>
              <NavLink to="/news">News</NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      </nav>
    </div>
  )
}

export default NavBar


