import React from "react"
import { useShoppingCart } from "use-shopping-cart"
import { navigate } from "gatsby";

import { Card, ListGroup, ListGroupItem, Button , Col } from 'react-bootstrap'


export default function ProductList({ product }) {


   const buyNowClick = async() => {
    await addItem(product) ;
    navigate("/CartPage")
   }
  const { addItem} = useShoppingCart();
  return (
    <Col xs={8} md={6} lg={4}>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={product.image} />
        <Card.Body>
          <Card.Title>{product.name}</Card.Title>
          <Card.Text>
            {product.description}
          </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroupItem> Price  : $ {product.price / 100}</ListGroupItem>
        </ListGroup>
        <Card.Body>
          <Button onClick={() => addItem(product)} variant="primary">Add to Cart</Button>
          <Button onClick={() =>buyNowClick() } className='item-buynow' variant="danger">Buy Now</Button>

        </Card.Body>
      </Card>
    </Col>

  )
}
