import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Product from '../components/Product';

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/product');
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []); 

  return (
    <div className="container d-flex flex-row">
    <div className="row">
      {products.map((product) => (
        <div key={product.id} className="col-md-3 col-sm-6 mb-4">
          <Product {...product} />
        </div>
      ))}
    </div>
  </div>
  );
};

export default Home;
