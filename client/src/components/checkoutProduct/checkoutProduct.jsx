import React, { useState } from 'react'
import './checkoutProduct.css'
import { useStateValue } from '../../React-Context-API/StateProvider'

function CheckoutProduct(props) {
    const [state, dispatch] = useStateValue();

    //remove from cart
    const removeFromBasket = () => {
        dispatch({
            type: 'DELETE_FROM_BASKET',
            item: {
                id: props.id
            }
        })
    }
    return (
        <div className='checkoutProduct'>
            <img src={props.image} alt="Product Image" className="checkoutProduct__image" />
            <div className="checkoutProduct__info">
                <p className="checkoutProduct__title"><strong>{props.title}</strong></p>
                <p className="checkoutProduct__price">
                    <small>AED</small>
                    <strong>{props.price}</strong>
                    <input type="number" className='checkoutProduct__quantity'
                        value={state.basket?.find((item) => item.id === props.id).quantity}
                        onChange={(e) => dispatch({
                            type: 'UPDATE_BASKET',
                            item: {
                                id: props.id,
                                quantity: e.target.value
                            }
                        })} />
                </p>
                <div className="product__rating">
                    {props.rating} Star
                </div>
                <button onClick={removeFromBasket}>Remove from Basket</button>
            </div>
        </div>
    )
}

export default CheckoutProduct