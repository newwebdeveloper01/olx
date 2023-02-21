import React from 'react';

import useFetchData from '../../hooks/useFetchData';
import { Container } from '../../utils/Container';
import './MainProduct.scss';
import Product from '../product/Product';
const MainProducrs = () => {
    const [data , isLoding]=useFetchData("/products?offset=10&limit=20");
  return (
    <section className='main__products'>
        <Container>
            <h2 className='main__products__title'>Premium mahsulotlar</h2>
            <div className="main__products__wrapper">
                { !isLoding ?
                    data.map(product =>
                        <Product key={product.id} product={product} />
                    )
                    :
                    <p className='loding'>Loding...</p>
                }
            </div>
        </Container>
    </section>
  )
}

export default MainProducrs