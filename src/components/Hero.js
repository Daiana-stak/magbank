import React from 'react';
import { Row, Col, Jumbotron, Button, Image, } from 'react-bootstrap';
import logo from '../assests/Logo_MagicPay__Mobile.png';
import logoDesktop from '../assests/logo__magic-pay.png';
import './Hero.scss'; 

const Hero = () => (
<Jumbotron className= 'text-center text-light hero'>
    <Row className='my-lg-5'>
        <Col lg className='text-lg-right my-lg-5'>
         <Image className='d-lg-none' src={logo} />
         <Image className='d-none d-lg-inline-block' src={logoDesktop} />
        </Col>
        <Col lg className='text-lg-left'>
         <p>Pague suas contas pelo nosso App</p>
         <Button variant='outline-light'>Abra sua conta</Button>
        </Col>
    </Row> 
</Jumbotron>
);

export default Hero;
