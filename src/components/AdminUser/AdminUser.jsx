import React, { useState, useContext } from 'react';
import { OffcanvasBody } from 'react-bootstrap';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Form, Button, Col, Row, Alert } from 'react-bootstrap';
import { cfg } from '../../cfg/cfg';
import useAuth from '../../hooks/useAuth';
import { AppContext } from '../../context/AppContext';

function AdminUser() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [validated, setValidated] = useState(false);
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const { token, setToken } = useAuth();
  const { showLogin, setShowLogin } = useContext(AppContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setValidated(true);
    const form = e.currentTarget;

    if (!form.checkValidity()) return;
    console.log(userName, password);

    try {
      setLoading(true);
      if (error) setError(false);

      const response = await fetch(`${cfg.API.HOST}/user/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username: userName, password }),
      });

      if (!response.ok) throw new Error('Username or password is incorrect');

      const user = await response.json();
      console.log(user);

      if (user?.token) setToken(user.token);
    handleClose();
    } catch (error) {
      console.log(error.message);
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  const handleClose = () => {
    setShowLogin(false);
    setValidated(false);
    setUserName('');
    setPassword('');
  };
  const handleShow = () => setShowLogin(true);

  return (
    <>
      <div onClick={handleShow}>AdminUser</div>

      <Offcanvas
        className="offcanvas"
        show={showLogin}
        onHide={handleClose}
        placement="end"
      >
        {token ? (
          <Offcanvas.Header closeButton closeVariant="white">
            <Offcanvas.Title>Welcome Admin</Offcanvas.Title>
          </Offcanvas.Header>
        ) : (
          <>
            {' '}
            <Offcanvas.Header closeButton closeVariant="white">
              <Offcanvas.Title>
                {token ? 'You are logged in' : 'Login'}
              </Offcanvas.Title>
            </Offcanvas.Header>
            <OffcanvasBody>
              {error && (
                <Alert variant="danger">
                  Username or password is incorrect
                </Alert>
              )}
              <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <Row>
                  <Form.Group as={Col} controlId="validationCustom04">
                    <Form.Label>User name</Form.Label>
                    <Form.Control
                      required
                      type="text"
                      placeholder="name"
                      value={userName}
                      onChange={(e) => setUserName(e.target.value)}
                    />
                    <Form.Control.Feedback type="invalid">
                      User name is required
                    </Form.Control.Feedback>
                  </Form.Group>
                </Row>
                <Row>
                  <Form.Group as={Col} controlId="validationCustom05">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      required
                      type="password"
                      placeholder="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <Form.Control.Feedback type="invalid">
                      Password is required
                    </Form.Control.Feedback>
                  </Form.Group>
                </Row>
                <Button disabled={loading} type="submit">
                  Log in
                </Button>
                {loading && <p>...</p>}
              </Form>
            </OffcanvasBody>
          </>
        )}
      </Offcanvas>
    </>
  );
}

export default AdminUser;
