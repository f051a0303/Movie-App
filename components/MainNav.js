
import { Container, Nav, Navbar, NavDropdown, NavLink } from "react-bootstrap";
import Link from "next/link";

export default function MainNav(){
    return (
        <div>
        <Navbar bg="light" expand="lg" className="fixed-top  navbar-dark bg-dark">
          <Container>
            <Navbar.Brand>Chi Ming Lai</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Link href="/" passHref><Nav.Link>Movies</Nav.Link></Link>
                <Link href="/about" passHref><Nav.Link>About</Nav.Link></Link>
                <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                  <Link href="/about" passHref><NavDropdown.Item>About</NavDropdown.Item></Link>
                  <NavDropdown.Divider />
                  <Link href="/" passHref>
                    <NavDropdown.Item>
                        Movies
                    </NavDropdown.Item>
                  </Link>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <br/><br/>
        </div>
      );
}