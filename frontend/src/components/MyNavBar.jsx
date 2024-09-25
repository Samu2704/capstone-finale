
import Home from './pages/Home';
import {
  Button,
  Form,
  Modal,
  Navbar,
  NavDropdown,
  Nav,
  Container,
  Image,
} from "react-bootstrap";
import { useContext, useState } from "react";
import { UserContext } from "./contexts/UserContextProvider";
import { Link, useNavigate } from "react-router-dom";
import { register } from "../fetchUrls";


function MyNavBar() {
  const { selectedUser, token, setToken, setSelectedUser } =
  useContext(UserContext);
const navigate = useNavigate();
const [showReg, setShowReg] = useState(false);
const handleCloseReg = () => setShowReg(false);
const handleShowReg = () => setShowReg(true);

const initialRegistrationFormValue = {
  name: "",
  surname: "",
  email: "",
  password: "",
  avatar: null,
  /* age: "" */
};
const [regFormValue, setRegFormValue] = useState(
  initialRegistrationFormValue
);
const [avatar, setAvatar] = useState(null);

const handleChangeRegistration = (event) => {
  setRegFormValue({
    ...regFormValue,
    [event.target.name]: event.target.value,
  });
};

const handleChangeImage = (event) => {
  setAvatar(event.target.files[0]);
};

const handleRegister = async () => {
  if (!avatar) {
    alert("Per favore, carica un avatar.");
    return;
  }

  const res = await register(regFormValue, avatar);
  if (res) {
    handleCloseReg();
    setRegFormValue(initialRegistrationFormValue);
    setAvatar(null);
    alert("Registrazione effettuata");
  } else {
    alert(
      "Errore durante la registrazione: " +
        (res.error || "Errore sconosciuto")
    );
  }
};

const handleLogout = () => {
  setToken(null);
  setSelectedUser(null);
  localStorage.removeItem("token");
  navigate("/");
};

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#">Samuele's Padel Accademy</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">Link</Nav.Link>
            <NavDropdown title="More for you" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Esplora la nostra accademy</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Vieni a trovarci
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Provaci subito
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#" disabled>
              Link
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
          <Home/>
          <Modal show={showReg} onHide={handleCloseReg}>
          <Modal.Header closeButton>
            <Modal.Title>REGISTER</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput3"
              >
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  value={regFormValue.email}
                  onChange={handleChangeRegistration}
                  placeholder="name@example.com"
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput4"
              >
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  name="password"
                  value={regFormValue.password}
                  onChange={handleChangeRegistration}
                  placeholder="your password"
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput5"
              >
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="name"
                  name="name"
                  value={regFormValue.name}
                  onChange={handleChangeRegistration}
                  placeholder="your name"
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput6"
              >
                <Form.Label>Surname</Form.Label>
                <Form.Control
                  type="surname"
                  name="surname"
                  value={regFormValue.surname}
                  onChange={handleChangeRegistration}
                  placeholder="your surname"
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput7"
              >
                <Form.Label>Avatar</Form.Label>
                <Form.Control
                  type="file"
                  name="avatar"
                  onChange={handleChangeImage}
                />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseReg}>
              Close
            </Button>
            <Button variant="primary" onClick={handleRegister}>
              Register now
            </Button>
          </Modal.Footer>
        </Modal>

        <div className="d-flex">
          {!token && (
            <Button
              className="ms-3"
              variant="secondary"
              onClick={handleShowReg}
            >
              Register
            </Button>
          )}
          {token && (
            <Button
              className="ms-2 me-2 logout"
              variant="primary"
              onClick={handleLogout}
            >
              Logout
            </Button>
          )}
          {/* {selectedUser && <Image src={selectedUser.avatar} className="userAvatar me-2" />} */}
        </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNavBar;
