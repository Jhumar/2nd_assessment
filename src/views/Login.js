import React, {useState, useEffect }from 'react';

import { Form, Button } from 'react-bootstrap';

import { Link, useNavigate } from 'react-router-dom'

function Login() {
  const [ email, setEmail ] = useState('')
  const [ password, setPassword ] = useState('')

  // there is an error in this code
  // const navigate = useNavigate();

  // useEffect(() => {
  //   if(localStorage.getItem('user-info')) {
  //     navigate('/products');
  //   }
  // }, [])


  const handleLogin = async (e) => {
    e.preventDefault();

    // console.log(email, password);

    let log_info = (email, password);
    let result = await fetch('https://fakestoreapi.com/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(log_info)
    })

    result = await result.json();
    localStorage.setItemItem('user-info', JSON.stringify(result))
    // navigate('/products'); error
  }

  return (
    <div className='d-flex justify-content-center align-items-center vh-100 flex-column'>
      <h2 className='h4 mb-3'>Login your account</h2>
      <Form onSubmit={handleLogin}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" onChange={ e => setEmail(e.target.value)} required />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} required />
        </Form.Group>
        <Link to='/products'>
          <Button variant="primary" type="submit" >
            Login
          </Button>
        </Link>
      </Form>
    </div>
  )
}

export default Login