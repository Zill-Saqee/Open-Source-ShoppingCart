import { navigate } from 'gatsby'
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container , Jumbotron , Button} from 'react-bootstrap'
import './index.css'
export default function PaymentSuccess() {
    return (
        <Container>
            <Jumbotron>
                <h1>Thank You!</h1>
                <p>
                     For Shopping with Us ..
                </p>
                <p>
                    <Button onClick={()=> navigate('/')} variant="primary">Go to Store</Button>
                </p>
            </Jumbotron>
     
        </Container>
    )
}