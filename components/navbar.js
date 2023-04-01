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
                    <Nav.Item title="Join" className="mr-4 mb-2 mb-lg-0">
                        <Nav.Link href="/get-involved">Join Us</Nav.Link>
                    </Nav.Item>
                    <Nav.Item title="Election" className="mr-4 mb-2 mb-lg-0">
                        <Nav.Link href="/election">Election</Nav.Link>
                    </Nav.Item>
                    <Nav.Item title="About" className="mr-4 mb-2 mb-lg-0">
                        <Nav.Link href="/about">About</Nav.Link>
                    </Nav.Item>
                    <Nav.Item title="Committees" className="mr-4 mb-2 mb-lg-0">
                        <Nav.Link href="/committees">Committees</Nav.Link>
                    </Nav.Item>
                    <Nav.Item title="Events" className="mr-4 mb-2 mb-lg-0">
                        <Nav.Link href="/events">Events</Nav.Link>
                    </Nav.Item>
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