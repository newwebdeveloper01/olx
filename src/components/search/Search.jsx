import React, { useState } from 'react'
import { FiSearch } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import { instance } from '../../api/instance'
import { Container } from '../../utils/Container'
import "./Search.scss"
const Search = () => {
    const [searchDataResults , setSearchDataResults]= useState([]);
    const [searchInputValue , setSearchInputValue]= useState("");

    const getProductSuggestions=(e)=>{
        setSearchInputValue(e.target.value);
        instance.get(`/products/?title=${e.target.value}&offset=0&limit=10`)
        .then(response =>setSearchDataResults(response.data))
        .catch(err => console.log(err))
    }
    const getSearchResults=(e)=>{
        e.preventDefault();
        window.location.href=`/search/${searchInputValue}`
    }
  return (
    <section>
        <Container>
            <div className="search__wrapper">
                <form  className='search__form' onSubmit={getSearchResults}>
                    <div className='search__input__wrapper'>
                    <FiSearch/>
                <input onChange={getProductSuggestions} type="text" placeholder='Mahsulotlarni qidiring' />
                     {
                    searchDataResults.length >0 && searchInputValue.length>=3 ? 
                    <div className='search-suggestions'>
                        {searchDataResults.map( e=>
                            <Link to={`/product/${e.id}`} key={e.id} className='transarent__link search__result__item'>
                                <p>{e.title}</p>
                            </Link>
                        )}
                    </div>
                    :
                    <></>
                }
                </div>
                    <button type='submit'>Qidiruv</button>
                </form>
               
            </div>
        </Container>
    </section>
  )
}

export default Search