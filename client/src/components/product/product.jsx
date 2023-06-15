import React from 'react'
import './product.css'

const Product = (props) => {
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
            <button>Add to Basket</button>
        </div>
    )
}

export default Product
