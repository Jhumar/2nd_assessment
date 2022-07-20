import React, { useState, useEffect } from 'react';

import {Col, Card, Row, Container } from 'react-bootstrap'

function Products() {

  const [item, setItem] = useState([]);

  useEffect(() => {
    fetchProduct();
  }, [])

  const fetchProduct = async () => {
    await fetch('https://fakestoreapi.com/products')
    .then((res) => res.json())
    .then((data) => setItem(data))
    .catch((err) => {
      console.log(err)
    });
  }
  
  return (
    <Container>
      
      <h1 className='text-center mb-5'>Product list</h1>

      <Row>
        {item.map((x) => (
          <Col lg={3} className="mb-3">
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={x.image} width='100px' height='200px' />
              <Card.Body>
                <Card.Title>{x.title}</Card.Title>
                <Card.Text>
                  {x.price}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  )
}

export default Products