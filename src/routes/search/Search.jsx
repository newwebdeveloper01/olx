import React from 'react'
import { useParams } from 'react-router-dom'
import useFetchData from "../../hooks/useFetchData.jsx";
import { Container } from '../../utils/Container.jsx';
import { Link } from 'react-router-dom';
import "./Search.scss";
import SearchCom from "../../components/search/Search.jsx"
import {v4 as uuidv4} from 'uuid';
const Search = () => {
    const {productTitle}=useParams();
    const [data , isLoading]=useFetchData(`/products/?title=${productTitle}`)
    
    console.log(data);
  return (
    <main className='products'> 
    <SearchCom/>
        <Container>
           
            <div className="search__result__wrapper">
            {!isLoading ?
            data.map(product => 
              <article className='product-item' key={product.id}>
              <Link to={`/product/${product.id}`}>
                <img src={product.images.at(0)} alt="" />
              </Link>
                <div>
                  <h1>{product.title}</h1>
                  <p>{product.description}</p>
                  <strong>${product.price}</strong>
                </div>
              </article>  
            )
        : <h2>Loading...</h2> }
        
            </div>
        </Container>
    </main>
  )
}

export default Search