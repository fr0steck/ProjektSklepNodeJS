import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import './Product.css'

export default function Product() {
    const [product, setProduct] = useState([])
    const { category_name } = useParams()

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`http://localhost:9001/product/${category_name}`);
            const data = await response.json();
            setProduct(prevState => prevState = data)
        }

        fetchData();
    }, [])


    return (
        <div>
            <h1>{category_name}</h1>
            <div className='products'>
                {product.map((element) => (
                    <div key = {element.id}>
                        <img
                            src = {elemement.src_img}
                            alt="product_image"
                        />
                        <p>{element.name}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}
