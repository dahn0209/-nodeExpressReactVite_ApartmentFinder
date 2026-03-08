import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import { useUser } from "../context/UserContext";

export default function NavigationBar() {

  const user=useUser();
  
  return (
    <Navbar expand="md" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">Apartment Finder</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            {user? (
              <>
                {/* <Nav.Link href="/profile">Profile ({user.name})</Nav.Link> */}
                <div>Welcome, {user.name} !</div>
                <Nav.Link href="/api/auth/logout">Logout</Nav.Link>
              </>


            ):


    
            <Nav.Link href="/login">Login</Nav.Link>}

                        {/* <Nav.Link href="/login">Login</Nav.Link> */}


          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
