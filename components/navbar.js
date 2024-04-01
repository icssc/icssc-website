import { Nav, Navbar, NavDropdown, NavItem } from "react-bootstrap";

export default function NavBar() {
    return (
        <Navbar variant="light" fixed="top" expand="lg" style={{ backgroundColor: "#ffffff2e", backdropFilter: "blur(8px)",WebkitBackdropFilter:"blur(11.5px)",
        msFilter:"blur(11.5px)"}}>
            <Navbar.Brand href="/">
                <img
                    src="/assets/img/logo.svg"
                    alt="ICSSC Logo"
                    height="45px"
                />
            </Navbar.Brand>

            <Navbar.Toggle aria-controls="collapsable-navbar" />
            <Navbar.Collapse id="collapsable-navbar">
                <Nav className="ml-auto mt2 mt-lg-0">
                    <Nav.Item title="Events" className="mr-4 mb-2 mb-lg-0">
                        <Nav.Link href="/ics-week">ICS Week</Nav.Link>
                    </Nav.Item>
                    <NavDropdown title="Election" id="nav-dropdown" className="mr-4 mb-2 mb-lg-0 nav-unique-element" >
                        <NavDropdown.Item href="/election">Run For Executive Board!</NavDropdown.Item>
                        {/* <NavDropdown.Item href="/candidates">Candidates</NavDropdown.Item> */}
                    </NavDropdown>
                    <NavDropdown title="About" id="nav-dropdown" className="mr-4 mb-2 mb-lg-0" >
                        <NavDropdown.Item href="/about">About Us</NavDropdown.Item>
                        <NavDropdown.Item href="/committees">Committees</NavDropdown.Item>
                        <NavDropdown.Item href="/board">Board</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="/get-involved">Join Us</NavDropdown.Item>
                    </NavDropdown>
                    {/* <Nav.Item title="Events" className="mr-4 mb-2 mb-lg-0">
                        <Nav.Link href="/events">Events</Nav.Link>
                    </Nav.Item> */}
                    <NavDropdown title="Events" id="nav-dropdown" className="mr-4 mb-2 mb-lg-0" >
                        <NavDropdown.Item href="/events">Our Events</NavDropdown.Item>
                        <NavDropdown.Item href="/ics-week">ICS Week</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Item title="Projects" className="mr-4 mb-2 mb-lg-0">
                        <Nav.Link href="/projects">Projects</Nav.Link>
                    </Nav.Item>
                    <Nav.Item title="Sponsors" className="mr-4 mb-2 mb-lg-0">
                        <Nav.Link href="/sponsors">Sponsors</Nav.Link>
                    </Nav.Item>
                    {/* <NavDropdown title='Election' id='election-dropdown' className="mr-4 mb-2 mb-lg-0">
                        <NavDropdown.Item href="/candidates">Candidates</NavDropdown.Item>
                        <NavDropdown.Item href="">Vote!</NavDropdown.Item>
                    </NavDropdown> */}
                    <Nav.Item title="Contact Us" className="mr-4 mb-2 mb-lg-0">
                        <Nav.Link href="/contacts">Contact</Nav.Link>
                    </Nav.Item>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}