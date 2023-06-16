import React, { useState } from 'react'
import './product.css'
import { useStateValue } from '../../React-Context-API/StateProvider'

const Product = (props) => {

    const [{ basket }, dispatch] = useStateValue();
    const addToBasket = () => {
        //dispatch the item into the data layer
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                id: props.id,
                title: props.title,
                image: props.image,
                price: parseInt(props.price),
                rating: props.rating
            }
        })
    }
    return (
        <div className='product'>
            <img src={props.image} alt="" className="product__image" />
            <div className="product__info">
                <p className='product__name'>{props.title}</p>
                <p className="product__price">
                    <small>AED</small>
                    <strong>{props.price}</strong>
                </p>
                <div className="product__rating">
                    {props.rating} Star
                </div>
            </div>
            <button onClick={addToBasket}>Add to Basket</button>
        </div>
    )
}

export default Product
