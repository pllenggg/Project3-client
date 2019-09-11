import React, {Component} from 'react';
import { Nav, Navbar, Form, FormControl, Button } from "react-bootstrap";


class Navigation extends Component {
  render() {
    return (
     <div>

       
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
               <img src="https://res.cloudinary.com/dluw1enan/image/upload/c_scale,w_30/v1568179422/project3/search_icon_crfdts.png"/>
             </Nav.Link>
             <Nav.Link href="#/add">
             <img src="https://res.cloudinary.com/dluw1enan/image/upload/c_scale,w_30/v1568179420/project3/small_plus_icon_ojgk9c.png"/>
             </Nav.Link>
            </Nav>
        </Navbar.Collapse>
      </Navbar>
     </div>

    )
  }
}
  
    

export default Navigation;


