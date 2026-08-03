import React, { useState, useEffect } from 'react';

const ProductList = ({ products, addToCart, removeFromCart, category }) => {
  const [filter, setFilter] = useState('All');
  useEffect(() => {
    setFilter('All');
  }, [category]);
  const filteredProducts =
    filter === 'All'
      ? products
      : products.filter(
          (item) => item.gender.toLowerCase() === filter.toLowerCase()
        );

  return (
    <div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '15px',
          margin: '20px 0',
        }}
      >
        <button onClick={() => setFilter('All')}>All</button>
        <button onClick={() => setFilter('Men')}>Men</button>
        <button onClick={() => setFilter('Women')}>Women</button>
      </div>

      <div className="products">
        {filteredProducts.map((item) => (
          <div className="card" key={item.id}>
            <img src={item.image} alt={item.name} />
            <h3>{item.name}</h3>
            <p>₹{item.price}</p>

            <button className="button">
              <span onClick={() => removeFromCart(item)}>➖</span>
              Add to cart
              <span onClick={() => addToCart(item)}>➕</span>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
