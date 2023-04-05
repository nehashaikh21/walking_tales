import React, { useState, useEffect, useContext } from 'react';
import Modal from 'react-bootstrap/Modal';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Form from 'react-bootstrap/Form';
import {Link, useNavigate} from 'react-router-dom';
import { Container, Button } from 'react-bootstrap'
import { useCookies } from "react-cookie";
import { ToastContainer, toast } from "react-toastify";
import axios from 'axios'
import {UserContext} from "../context/UserContext";


export default function Header() {
  const {user, setUser} = useContext(UserContext)
  //console.log("hello", user)
  const [show, setShow] = useState(false);
  const [cookies] = useCookies([]);
  const navigate = useNavigate();
  const [error, setError] = useState(null);

  useEffect(() => {
    if (cookies.jwt) {
      navigate("/");
    }
  }, [cookies, navigate]);

  const [values, setValues] = useState({ email: "", password: "" });
  const generateError = (error) =>
    toast.error(error, {
      position: "bottom-right",
    });
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      console.log(process.env.REACT_APP_SERVER+'/auth/login')

      const { data } = await axios.post(
        process.env.REACT_APP_SERVER+'/auth/login',
        {
          ...values,
        },
        { withCredentials: false }
      );
      if (data) {
        if (data.errors) {
          const { email, password } = data.errors;
          if (email) generateError(email);
          else if (password) generateError(password);
        } else {
        
           setUser(data.user)
          
          navigate("/userprofile");
        }
      }
    } catch (ex) {
      console.log(ex);
    }
  };

  useEffect(() => user?.username && setShow(false), [user])
  
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleLogout = async (e) => {
     e.preventDefault();
     if(user !== "null")
     setUser(null);
     navigate("/");
  }
  
    return (
        <section>
        <Navbar className="main-header" style={{ paddingLeft: "80px", paddingRight: "90px" }} expand="lg">
            <Container fluid>
            <Navbar.Brand href=""><img src="./images/bigfont-logo.png"/></Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
            <Nav className="me-auto my-2 my-lg-0 justify-content-end" style={{ maxHeight: '100px', gap: '40px'}} navbarScroll>
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/about">About</Nav.Link>
              <Nav.Link href="/blog">Blog</Nav.Link>
              <Nav.Link href="/contact">Contact</Nav.Link>
            </Nav>
            {user ? <Button className="login-button" style={{ color: "white", background: "#073648" }}  onClick={handleLogout}>Logout</Button> : <Button className="login-button" style={{ color: "white", background: "#073648" }}  onClick={handleShow}>Login</Button>}
            
            </Navbar.Collapse>
  </Container>
</Navbar>
<Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          
        </Modal.Header>
        <Modal.Body>
       



    <Form onSubmit={(e) => handleSubmit(e)}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control name="email" required onChange={(e) =>
              setValues({ ...values, [e.target.name]: e.target.value })
            } type="email" placeholder="Enter email" />
        
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
       
        <Form.Control name="password" required onChange={(e) =>
              setValues({ ...values, [e.target.name]: e.target.value })
            } type="password" placeholder="Password" />
      </Form.Group>
      
      <Button variant="default" style={{ color: "white", background: "#073648" }} type="submit">
       Login
      </Button>
    </Form>
 <br />
 <p>Not a member? <Link to='/register'>Register!</Link></p>
        </Modal.Body>
        
          
        
      </Modal>
      <ToastContainer />
</section>
  )
}