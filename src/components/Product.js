import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch } from 'react-redux';
import { addProductToCart } from '../Redux/actions/products';
import './Product.css';

const Product = ({id,title,image,description,price}) => {
    const dispatch = useDispatch()

    const addToCart = (e) => {
        if(e.target?.id)
        dispatch(addProductToCart(e.target?.id))
    }

    return (
        <Card style={
            {width: '15rem',margin: '30px'}
        }>
            <Card.Img variant="top" style={{height:'20rem'}} src={image}/>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>{price}</Card.Text>
                {/* <Card.Text>
                    {description}
                </Card.Text> */}
                {/* <Button variant="primary" id={id} onClick={addToCart}>Add To Cart</Button> */}
            </Card.Body>
        </Card>
    )
}

export default Product;
