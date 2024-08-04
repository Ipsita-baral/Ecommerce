import React from 'react';
import { useLocation } from 'react-router-dom';
import HomePage from '../Home/HomePage';
import './Details.css';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/action/cartAction';

const DetailsPage = () => {

    const dispatch = useDispatch();
    const location = useLocation();

    const handleAddToCart = (product) => {
        dispatch(addToCart(product));
      };

      const product = location.state.item;

    return (


        <div className='d-flex justify-content-evenly pdetail'>

            <div className='details'>
                <div className='img'>
                    <img src={product.thumbnail} alt="" />
                </div>
                <div>
                    <p className='param'>{product.category}</p>
                    <h1 className='heading'>{product.title}</h1>
                    <p className='prud'>Rating {product.rating}<i class="fa-solid fa-star" style={{color:"#FFD43B"}}></i></p>
                    <h1>$ {product.price}</h1>
                    <p>{product.description}</p>
                    <button type="button" class="btn btn-outline-dark m-2" onClick={() => handleAddToCart(product)}>Add to Cart</button>
                    <button type="button" class="btn btn-dark">Buy Now</button>
                </div>

            </div>
        </div>
    )
}

export default DetailsPage
