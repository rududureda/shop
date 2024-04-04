import React, { useState, useContext } from 'react';
import './admin.scss';
import {
  Form,
  Container,
  Button,
  Col,
  Row,
  Spinner,
  Alert,
} from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';
import { AppContext } from '../../context/AppContext';
import { cfg } from '../../cfg/cfg';

function Admin() {
  const [validated, setValidated] = useState(false);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [imgUrl, setImgUrl] = useState('');
  const [loading, setLoading] = useState('');
  const [status, setStatus] = useState({
    value: null,
    message: '',
  });
  const { token, setToken } = useAuth();
  const { fetchData, setShowLogin } = useContext(AppContext);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setValidated(true);

    const form = e.currentTarget;

    if (!form.checkValidity()) return;
    console.log('title', title);
    console.log('description', description);

    try {
      setLoading(true);
      const data = {
        title,
        description,
      };

      const response = await fetch(`${cfg.API.HOST}/product`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(data),
      });

      const product = await response.json();

      if (!response.ok) {
        if (response.status === 401) {
          setToken(null);
          setShowLogin(true);
          alert('Login expired, login again !');
        }

        throw new Error(product.error);
      }

      setStatus({
        value: 'success',
        message: 'Product created successfully !',
      });
      fetchData();
    } catch (error) {
      console.log('Error:', error.message);
      setStatus({
        value: 'danger',
        message: error.message || 'Failed creating product.',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div id="first-container">
      <h1>Add product</h1>
      <Container>
        {status.value && <Alert variant={status.value}>{status.message}</Alert>}
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Row>
            <Form.Group as={Col} md="4" controlId="validationCustom01">
              <Form.Label>Title</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
              <Form.Control.Feedback type="invalid">
                Title is required
              </Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Row>
            <Form.Group as={Col} md="4" controlId="validationCustom02">
              <Form.Label>Description</Form.Label>
              <Form.Control
                required
                as="textarea"
                placeholder="Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Row>
            <Form.Group as={Col} md="4" controlId="validationCustom03">
              <Form.Label>Img url</Form.Label>
              <Form.Control
                type="text"
                placeholder="Img url"
                value={imgUrl}
                onChange={(e) => setImgUrl(e.target.value)}
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Button type="submit" disabled={loading}>
            Create product
          </Button>
          {loading && <Spinner animation="border" variant="primary" />}
        </Form>
      </Container>
    </div>
  );
}

export default Admin;
