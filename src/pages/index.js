import React from "react"
import { graphql, useStaticQuery } from 'gatsby'
import 'bootstrap/dist/css/bootstrap.min.css';
import ProductList from '../components/productList'
import Header from "../components/Header";
import { Container, Row } from 'react-bootstrap'
import './index.css'

export default function Home() {

  const products = [];
  const data = useStaticQuery(
    graphql` 
       query ProductPrices {
          prices : allStripePrice {
              edges {
                node {
                  id
                  active
                  currency
                  unit_amount
                  product {
                    id
                    name
                    images
                    description
                  }
                }


              }



          }

       }
    
    `
  )
  const productData = data.prices.edges ? data.prices.edges : null;
  productData.forEach(function (item, index) {
    products.push({

      name: item.node.product.name,
      // Optional description to be shown on the Stripe Checkout page
      description: item.node.product.description,
      // A unique identifier for this item (stock keeping unit)
      sku: item.node.id,
      // price in smallest currency unit (e.g. cent for USD)
      price: item.node.unit_amount,
      currency: item.node.currency,
      // Optional image to be shown on the Stripe Checkout page
      image: item.node.product.images[0]

    })

  });
  return (
    <div>
      <Header />
      <Container>
        <Row>
          {
            products.map((product) => (
              <ProductList key={product.sku} product={product} />
            ))
          }
        </Row>
      </Container>

    </div>
  )
}
