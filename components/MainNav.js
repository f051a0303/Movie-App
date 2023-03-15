
import { Container, Nav, Navbar, NavDropdown, Form, FormControl, Button, NavLink } from "react-bootstrap";
import Link from "next/link";
import {useState} from "react";
import { useRouter } from 'next/router';

export default function MainNav(){

  const router = useRouter();

  const [searchMovie, setSearchMovie] = useState('');

 
  async function handleSearchSubmit(e) {
    e.preventDefault();
    console.log(searchMovie);
    let title = searchMovie;
    // title = title.replace(/  +/g, " "); // replace multi spaces with one space
    // title = title.trim(); // remove leading and trailing space
    // title = title.toLowerCase(); // make all the character to lower case
    // const strArr = title.split(" ") //split the string by spaces
    title = title.replace(/  +/g, " ").trim().toLowerCase()
    const strArr = title.split(" ")
    for (let i = 0; i < strArr.length; ++i){
      strArr[i] = strArr[i].charAt(0).toUpperCase() + strArr[i].slice(1); // make the first character of every word uppercase to avoid case sensetive
    }
    const fixedTitle = strArr.join(" "); // add the space back after each word

    router.push(`/movies/${encodeURIComponent(fixedTitle)}`);

  }

  function handleClear(e){
    setSearchMovie('');
  }


    return (
      <div>
        <Navbar bg="light" expand="lg" className="fixed-top navbar-dark bg-dark">
          <Container>
            <Navbar.Brand>Chi Ming Lai</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Link href="/" passHref>
                  <Nav.Link>Movies</Nav.Link>
                </Link>
                <Link href="/about" passHref>
                  <Nav.Link>About</Nav.Link>
                </Link>
                <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                  <Link href="/about" passHref>
                    <NavDropdown.Item>About</NavDropdown.Item>
                  </Link>
                  <NavDropdown.Divider />
                  <Link href="/" passHref>
                    <NavDropdown.Item>Movies</NavDropdown.Item>
                  </Link>
                </NavDropdown>
              </Nav>
              {/* Add the search form */}
              <Form className="d-flex" onSubmit={handleSearchSubmit}>
                <FormControl
                  type="search"
                  placeholder="Search by title"
                  className="mr-2"
                  aria-label="Search"
                  value={searchMovie}
                  onChange={e => setSearchMovie(e.target.value)}
                />
                <Button variant="outline-light" type="submit">Search</Button>
                <Button variant="outline-light" onClick={e => handleClear(e)}>Clear</Button>
              </Form>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <br />
        <br />
      </div>
      );
}