import React from 'react'
import { FiSearch } from 'react-icons/fi'
import { Container } from '../../utils/Container'
import "./Search.scss"
const Search = () => {
  return (
    <section>
        <Container>
            <div className="search__wrapper">
                <form  className='search__form'>
                    <div>
                    <FiSearch/>
                <input type="text" placeholder='Mahsulotlarni qidiring' />
                    </div>
                    <button>Qidiruv</button>
                </form>
            </div>
        </Container>
    </section>
  )
}

export default Search