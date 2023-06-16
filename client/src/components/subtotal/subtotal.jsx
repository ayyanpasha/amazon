import React from 'react'
import './subtotal.css'
import { useStateValue } from '../../React-Context-API/StateProvider'

const Subtotal = () => {
    const [state, dispatch] = useStateValue();

    return (
        <div className='subtotal'>
            <p>SubTotal ({state.basket?.reduce((acc, cur) => acc += cur.quantity, 0)} items): <small>AED </small><strong>{state.basket?.reduce((acc, cur) => acc += cur.price * cur.quantity, 0)}</strong>
            </p>
            <small className="subtotal__gift">
                <input type="checkbox" /> This order contains a gift
            </small>
            <button>Proceed to Checkout</button>
        </div>
    )
}

export default Subtotal
