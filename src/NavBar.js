import React, {Component} from 'react';
import { Nav, Navbar, Form, FormControl, Button } from "react-bootstrap";


class Navigation extends Component {
  render() {
    return (
     <div>
       <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">
          <img src="https://res.cloudinary.com/dluw1enan/image/upload/c_scale,w_30/v1567989092/project3/cat-icon_kpljby.png" alt="meow logo"/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home"><strong>Meowstagram</strong></Nav.Link>
            <Nav.Link href="">Profile</Nav.Link>
            <Form inline>
            <FormControl type="text" placeholder="Search" />
              <Button variant="outline-success">Search</Button>
            </Form>
            
            {
              localStorage.getItem("jwt") ?
                <li className="nav-item"><Nav.Link exact className="nav-link" to="/logout">Log Out</Nav.Link></li>
              :
                <li className="nav-item"><Nav.Link exact className="nav-link" activeClassName="active" to="/login">Log In</Nav.Link></li>
            }
          </Nav>
        </Navbar.Collapse>
      </Navbar>
     </div>

    )
  }
}
  
    

export default Navigation;


