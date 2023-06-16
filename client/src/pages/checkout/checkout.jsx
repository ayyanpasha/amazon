import React from 'react'
import './checkout.css'
import Subtotal from '../../components/subtotal/subtotal'
import CheckoutProduct from '../../components/checkoutProduct/checkoutProduct'
import { useStateValue } from '../../React-Context-API/StateProvider'
const Checkout = () => {
    const [state, dispatch] = useStateValue();
    return (
        <div className='checkout'>
            <div className="checkout__left">
                <h2 className="checkout__title">Your Shopping Basket</h2>
                {state.basket?.map((product) =>
                    <CheckoutProduct id={product.id}
                        image={product.image}
                        title={product.title}
                        price={product.price}
                        rating={product.rating} />
                )}
            </div>
            <div className="checkout__right">
                <Subtotal />
            </div>
        </div>
    )
}

export default Checkout
