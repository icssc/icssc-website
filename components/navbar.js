import { Nav, Navbar, NavDropdown, NavItem } from "react-bootstrap";

export default function NavBar() {
    return (
        <Navbar variant="dark" fixed="top" expand="lg" style={{ backgroundColor: "rgba(0, 0, 0, .2)" }}>
            <Navbar.Brand href="/index">
                <img 
                    src="/assets/img/nav/logo-white.png"
                    alt="ICSSC Logo" 
                    height={50}
                />
            </Navbar.Brand>

            <Navbar.Toggle aria-controls="collapsable-navbar" />
            <Navbar.Collapse id="collapsable-navbar">
                <Nav className="ml-auto mt2 mt-lg-0">
                    <NavDropdown title='About Us' id='about-us-dropdown' className="mr-4 mb-2 mb-lg-0">
                        <NavDropdown.Item href="/mission">Our Mission</NavDropdown.Item>
                        <NavDropdown.Item href="/awards">Awards and Recognitions</NavDropdown.Item>
                        <NavDropdown.Item href="/committees">Committees</NavDropdown.Item>
                        <NavDropdown.Item href="/board">Board Members</NavDropdown.Item>
                        <NavDropdown.Item href="/past-board">Past Board Members</NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title='Get Involved' id='get-involved-dropdown' className="mr-4 mb-2 mb-lg-0">
                        <NavDropdown.Item href="/events">Events</NavDropdown.Item>
                        <NavDropdown.Item href="/humans-of-ics/home">Humans of ICS</NavDropdown.Item>
                        <NavDropdown.Item href="/ics-podcast">ICS Podcast</NavDropdown.Item>
                        <NavDropdown.Item href="/discord">Join Our Discord</NavDropdown.Item>
                        <NavDropdown.Item href="/get-involved">Join Our Committees</NavDropdown.Item>
                        <NavDropdown.Item href="/newsletter">Join Our Newsletter</NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title='Election' id='election-dropdown' className="mr-4 mb-2 mb-lg-0">
                        <NavDropdown.Item href="/candidates">Candidates</NavDropdown.Item>
                        {/* <NavDropdown.Item href="">Vote!</NavDropdown.Item> */}
                    </NavDropdown>
                    <NavDropdown title='Our Partners' id='partners-dropdown' className="mr-4 mb-2 mb-lg-0">
                        <NavDropdown.Item href="/affiliates">Affiliates</NavDropdown.Item>
                        <NavDropdown.Item href="/sponsors">Sponsors</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Item title="Contact Us" className="mr-4 mb-2 mb-lg-0">
                        <Nav.Link href="/contacts">Contact Us</Nav.Link>
                    </Nav.Item>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}