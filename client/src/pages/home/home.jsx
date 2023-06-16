import React, { useState } from 'react'
import './home.css'
import Product from '../../components/product/product'

function Home() {
    const [products, setProducts] = useState([
        {
            id: "1",
            image: "https://images-eu.ssl-images-amazon.com/images/I/31joT8GifBL._AC_SX368_.jpg",
            title: "Microsoft Xbox Series X Gaming Console",
            price: "1868",
            rating: "5"
        },
        {
            id: "2",
            image: "https://images-eu.ssl-images-amazon.com/images/I/31MnK5vhA+L._AC_SX368_.jpg",
            title: "Logitech G Cloud Gaming Handheld",
            price: "2479",
            rating: "4.5"
        },
        {
            id: "3",
            image: "https://images-eu.ssl-images-amazon.com/images/I/3195j4ZHBGL._AC_SX368_.jpg",
            title: "VALVE Steam Deck 64GB eMMC",
            price: "1640",
            rating: "4.2"
        },
        {
            id: "4",
            image: "https://images-eu.ssl-images-amazon.com/images/I/416ZXLMGA6S._AC_SX368_.jpg",
            title: "Nintendo Switch (OLED Model)",
            price: "1047",
            rating: "4.6"
        }

    ])
    return (
        <div className="home">
            <div className="home__container">
                <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/Fashion/GW/Jun/OneCard/Group_8._CB603643966_.jpg" alt="" className="home__image" />
                <div className="home__row">
                    {products.map((product) =>
                        <Product id={product.id}
                            image={product.image}
                            title={product.title}
                            price={product.price}
                            rating={product.rating} />)}
                </div>
            </div>
        </div>
    )
}

export default Home