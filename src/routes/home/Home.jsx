import React from 'react'
import CategoryList from '../../components/category__list/CategoryList.jsx'
import MainProducrs from '../../components/main__products/MainProducrs.jsx'
import Search from '../../components/search/Search.jsx'
const Home = () => {
  return (
    <>
    <main>
        <Search/>
        <CategoryList/>
        <MainProducrs/>
        
    </main>
   
    </>
  )
}

export default Home