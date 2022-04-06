import { Navbar, NavDropdown, NavItem } from "react-bootstrap";
import logoWhite from "/assets/img/logo-white.png";

// TODO: Right align text, get toggle working
export default function NavBar() {
    return (
        <Navbar variant="pills" style={{backgroundColor: "#4282fb", color: "#fff"}}>
            <Navbar.Brand href="/index">
                <img src={logoWhite.src} alt="ICSSC Logo" style={{ width: "100px" }} />
            </Navbar.Brand>

            <Navbar.Toggle aria-controls="collapsable-navbar" />
            <Navbar.Collapse id="collapsable-navbar">
                <NavDropdown title='About Us' id='about-us-dropdown'>
                    <NavDropdown.Item href="/mission">Our Mission</NavDropdown.Item>
                    <NavDropdown.Item href="/awards">Awards and Recognitions</NavDropdown.Item>
                    <NavDropdown.Item href="/committees">Committees</NavDropdown.Item>
                    <NavDropdown.Item href="/board">Board Members</NavDropdown.Item>
                    <NavDropdown.Item href="/past-board">Past Board Members</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title='Get Involved' id='get-involved-dropdown'>
                    <NavDropdown.Item href="/events">Events</NavDropdown.Item>
                    <NavDropdown.Item href="/humans-of-ics/home">Humans of ICS</NavDropdown.Item>
                    <NavDropdown.Item href="/ics-podcast">ICS Podcast</NavDropdown.Item>
                    <NavDropdown.Item href="/discord">Join Our Discord</NavDropdown.Item>
                    <NavDropdown.Item href="/get-involved">Join Our Committees</NavDropdown.Item>
                    <NavDropdown.Item href="/newsletter">Join Our Newsletter</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title='Election' id='election-dropdown'>
                    <NavDropdown.Item href="/candidates">Candidates</NavDropdown.Item>
                    {/* <NavDropdown.Item href="">Vote!</NavDropdown.Item> */}
                </NavDropdown>
                <NavDropdown title='Our Partners' id='partners-dropdown'>
                    <NavDropdown.Item href="/affiliates">Affiliates</NavDropdown.Item>
                    <NavDropdown.Item href="/sponsors">Sponsors</NavDropdown.Item>
                </NavDropdown>
                <NavItem title="Contact Us"></NavItem>
            </Navbar.Collapse>
        </Navbar>
    )
}