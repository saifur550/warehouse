import { signOut } from "firebase/auth";
import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../../firebase.init";


const Header = () => {
  const[user] =useAuthState(auth);
  const handleSignOut = ()=>{
    signOut(auth)
  }

  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to ="home">Furniture warehouse</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="home">Home</Nav.Link>
              <Nav.Link href="about">About</Nav.Link>
              <Nav.Link href="home#items">items</Nav.Link>
            </Nav>
            <Nav>
         {
           user ? 
           <button className="btn btn-link text-white text-decoration-none" onClick={handleSignOut}>SignOut</button>
           : 
           <Nav.Link as={Link} to ="login"> login  </Nav.Link>
         }
         </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
