import { useState } from 'react';
import productsData from '../../data/products';
import Product from '../Product/Product';
import shortId from 'shortid';

const Products = () => {
  const [products] = useState(productsData);

  return (
    <section>
      {products.map((product) => (
        <Product key={shortId()} {...product} />
      ))}
    </section>
  );
};

export default Products;
