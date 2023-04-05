import Header from './Header';
import Footer from './Footer';
import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { useCookies } from "react-cookie";
import { Link, useNavigate } from "react-router-dom";


function Register() {
    const [validated, setValidated] = useState(false);
    const [cookies] = useCookies(["cookie-name"]);
  const navigate = useNavigate();
  useEffect(() => {
    if (cookies.jwt) {
      navigate("/");
    }
  }, [cookies, navigate]);

  const [values, setValues] = useState({ First_name: "", Last_name: "", user_name: "", email: "", password: "", city: "" });
  useEffect(() => console.log(values), [values])

  const generateError = (error) =>
    toast.error(error, {
      position: "bottom-right",
    });
  const handleSubmit = async (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
    event.preventDefault();
    console.log("registered values",values);

    try {
      console.log( process.env.REACT_APP_SERVER+'/auth/register')
      const { data } = await axios.post(
        process.env.REACT_APP_SERVER+'/auth/register',
        {
          ...values,
        },
        { withCredentials: true }

      );
      if (data) {
        if (data.errors) {
          const { email, password } = data.errors;
          if (email) generateError(email);
          else if (password) generateError(password);
        } else {
         
           navigate("/userprofile");
        }
      }
    } catch (ex) {
      console.log(ex);
    }
  }
  
    return (
      <div>
        <Header />
        <div className="container rounded shadow">
          <br/>
          <br/>
    <Form onSubmit={(e) => handleSubmit(e)}>
      <Row className="mb-3">
        <Form.Group as={Col} md="5" controlId="validationCustom01">
          <Form.Label>First name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="First name"
            name="First_name"
            onChange={(e) =>
              setValues({ ...values, [e.target.name]: e.target.value })
            }
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="5" controlId="validationCustom02">
          <Form.Label>Last name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Last name"
            name="Last_name"
            onChange={(e) =>
              setValues({ ...values, [e.target.name]: e.target.value })
            }
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        </Row>
        <Row className="mb-3">
        <Form.Group as={Col} md="10" controlId="validationCustomUsername">
        <br/>
          <Form.Label>Username</Form.Label>
          <InputGroup hasValidation>
            <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
            <Form.Control
              type="text"
              placeholder="Username"
              aria-describedby="inputGroupPrepend"
              name="user_name"
              required
              onChange={(e) =>
                setValues({ ...values, [e.target.name]: e.target.value })
              }
            />
            <Form.Control.Feedback type="invalid">
              Please choose a username.
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} md="6" controlId="validationCustom03">
        <br/>
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="email" name="email" required onChange={(e) =>
              setValues({ ...values, [e.target.name]: e.target.value })
            } />
          <Form.Control.Feedback type="invalid">
            Please provide a valid email.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustom04">
        <br/>
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" name="password" placeholder="password" required onChange={(e) =>
              setValues({ ...values, [e.target.name]: e.target.value })
            }/>
          <Form.Control.Feedback type="invalid">
            Please provide a valid password.
          </Form.Control.Feedback>
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} md="6" controlId="validationCustom03">
        <br/>
          <Form.Label>City</Form.Label>
          <Form.Control type="text" placeholder="city" name="city" required onChange={(e) =>
              setValues({ ...values, [e.target.name]: e.target.value })
            } />
          <Form.Control.Feedback type="invalid">
            Please provide a valid City.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustom04">
        <br/>
          <Form.Label>State</Form.Label>
          <Form.Control type="text" placeholder="State"  onChange={(e) =>
              setValues({ ...values, [e.target.name]: e.target.value })
            }/>
          <Form.Control.Feedback type="invalid">
            Please provide a valid state.
          </Form.Control.Feedback>
        </Form.Group>
      </Row>

      <Form.Group className="mb-3">
      <br/>
        <Form.Check
          required
          label="Agree to terms and conditions"
          feedback="You must agree before submitting."
          feedbackType="invalid"
          onChange={(e) =>
            setValues({ ...values, [e.target.name]: e.target.value })
          }
        />
      </Form.Group>
      <br/>
      <Button style={{ background: "#073648" }} type="submit">Submit form</Button>
    </Form>
    <br/>
    <ToastContainer />
    </div>
    <br/>
        <Footer/>
      </div>
    );
  }
  
  export default Register;
  