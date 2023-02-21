import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';
import useFetchData from '../../hooks/useFetchData';
import { Container } from '../../utils/Container';
import { shortenProductDescrption } from '../../helpers/product_content';
import "./CategoryList.scss";

const CategoryList = () => { 
   const [ data , isLoding ]=useFetchData("/categories")
  return (
   
    <section className='category__list'>
        <Container>
          <h2 className="category__list__title">Bosh Toifalar</h2>
        <div className="category__list__wrapper">
        { !isLoding ?
          data.map(({id , name , image}) =>
            <NavLink className='category__item d-flex'  key={id}>
              <div className='category__item__wrapper'>
                <img src={image} alt="catigory"/>
                <p>{shortenProductDescrption("wor", 10 ,name)}</p>
              </div>
            </NavLink>
          )
          :
          <p>Loding...</p>
        }
        </div>
        </Container>
    </section>
  )
}

export default CategoryList