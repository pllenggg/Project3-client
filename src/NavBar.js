import React from 'react';
import { Nav, Navbar} from "react-bootstrap";


const Navigation = ()  => {
    return(
      <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#/profile">
        <img src="https://res.cloudinary.com/dluw1enan/image/upload/c_scale,w_30/v1567989092/project3/cat-icon_kpljby.png" alt="meow logo"/>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
       <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#"><strong>Meowstagram</strong></Nav.Link>
          <Nav.Link href="#/profile">Profile</Nav.Link>
          <Nav.Link href="#/search">
            <img src="https://res.cloudinary.com/dluw1enan/image/upload/c_scale,w_30/v1568179422/project3/search_icon_crfdts.png" alt="search-icon"/>
          </Nav.Link>
          <Nav.Link href="#/add">
          <img src="https://res.cloudinary.com/dluw1enan/image/upload/c_scale,w_30/v1568179420/project3/small_plus_icon_ojgk9c.png" alt="add icon"/>
          </Nav.Link>
    {
        localStorage.getItem("jwt") ?
          <Nav.Link href="#/signout">Sign out</Nav.Link>
        :
          <Nav.Link href="/">Log In</Nav.Link>
      }
         </Nav>
     </Navbar.Collapse>
   </Navbar>
    )
  }

export default Navigation;


