import React, { useEffect, useState } from 'react';
import Spinner from 'react-bootstrap/Spinner';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUser,
  faEnvelope,
  faPhone,
  faGlobe,
} from '@fortawesome/free-solid-svg-icons';

import './user.scss';

function User() {
  const [user, setUser] = useState(null);
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          'https://jsonplaceholder.typicode.com/users/10'
        );
        if (!response.ok) throw new Error('Something went wrong');
        const data = await response.json();

        console.log(data);

        setUser(data);
      } catch (error) {
        console.log(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchUser();
  }, []);
  const handelClose = () => setShow(false);
  const handleShow = () => setShow(true);
  console.log(user);

  return (
    <>
      {loading && <Spinner className="circle-spinner" animation="grow" />}
      {!loading && user && (
        <>
          <div className="user" onClick={handleShow}>
            {user?.username[0]}
          </div>
          <Offcanvas
            className="offcanvas"
            show={show}
            onHide={handelClose}
            placement="end"
          >
            {' '}
            <Offcanvas.Header closeButton closeVariant="white">
              <Offcanvas.Title>{user.username}</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <p>
                <FontAwesomeIcon icon={faUser} /> {user.name}
              </p>

              <p>
                <FontAwesomeIcon icon={faEnvelope} /> {user.email}
              </p>
              <p>
                <FontAwesomeIcon icon={faPhone} />
                {user.phone}
              </p>
              <p>
                <FontAwesomeIcon icon={faGlobe} />
                {user.website}
              </p>
            </Offcanvas.Body>
          </Offcanvas>
        </>
      )}
      {!loading && !user && <h1>No user</h1>}
    </>
  );
}

export default User;
