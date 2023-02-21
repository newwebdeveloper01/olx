import React from 'react'
import { useParams } from 'react-router-dom'
import { Container , Button } from '../../utils/Container';
import "./SingleProduct.scss";
import {FiShoppingCart} from "react-icons/fi";

import useFetchData from '../../hooks/useFetchData';

const SingleProduct = () => {
    const {id}=useParams();
    const [data , isLoding]=useFetchData(`/products/${id}`);
  return (
    <main>
        <div className="single__product">
            
                <div className="single__product__wrapper">
                   <Container>
                   <div className='single__product__item'>
              {
                data.images?.length > 0 && data?.images[0].startsWith("https://") ?
                  <img className="single__product__image" src={data.images[0]} alt="" />
                  :
                  <img className="single__product__image" src="https://www.slntechnologies.com/wp-content/uploads/2017/08/ef3-placeholder-image.jpg" alt="" />
                }
                <div className='single__product__info'>
                  <h1>{data.title}</h1>
                  <p>{data.description}</p>
                  <strong>${data.price}</strong>
                  <Button type="button" title="Savatga qo'shish" icon={<FiShoppingCart/>}/>
                </div>
            </div>
                   </Container>
                </div>
            
        </div>
    </main>
  )
}

export default SingleProduct