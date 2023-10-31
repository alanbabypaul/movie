import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function Header() {
  return (
   


    <div className='navbar'>

<Navbar expand="lg" className="bg-dark w-100 " >
      <Container >
        <Navbar.Brand     href="#home"><img  style={{width:'64px'}} src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/2560px-IMDB_Logo_2016.svg.png" alt="" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav "  >
          <Nav className="me-auto ">
            <Nav.Link  href="#home"></Nav.Link>
            <Nav.Link href="#link"></Nav.Link>
           
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    </div>
    






   
  )
}

export default Header