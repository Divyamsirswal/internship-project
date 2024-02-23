import { Container, Nav, Navbar, InputGroup, Form } from "react-bootstrap";
import logo from "../../../public/ICONS/divinelogohorizontal.png";
import CasinoRoundedIcon from "@mui/icons-material/CasinoRounded";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import NotificationsRoundedIcon from "@mui/icons-material/NotificationsRounded";

function Header() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#home">
          <img
            className="ms-3"
            src={logo}
            alt="Divine Logo"
            style={{ height: "auto", maxHeight: "80px", width: "auto" }}
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home" className="me-3">
              Todays Luck <CasinoRoundedIcon />
            </Nav.Link>
            <Nav.Link href="#link" className="me-3">
              Shopping <ShoppingCartRoundedIcon />
            </Nav.Link>

            <InputGroup className="mb-1 me-3" style={{ width: "300px" }}>
              <Form.Control
                placeholder="Search Your Divine Connection"
                aria-label="Search here"
                aria-describedby="basic-addon2"
              />
              <InputGroup.Text id="basic-addon2">
                <SearchRoundedIcon />
              </InputGroup.Text>
            </InputGroup>

            <Form.Select
              className="me-3"
              style={{ height: "40px", width: "100px" }}
            >
              <option value="en">English</option>
              <option value="fr">French</option>
              <option value="es">Spanish</option>
              <option value="de">German</option>
            </Form.Select>

            <Nav.Link href="#home" className="me-3">
              Login/Registration
            </Nav.Link>
            <Nav.Link href="#link" className="me-3">
              <AccountCircleRoundedIcon />
            </Nav.Link>
            <Nav.Link href="#link" className="me-3">
              <NotificationsRoundedIcon />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
