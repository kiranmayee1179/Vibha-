import React from 'react';
import './OfferSection.css';

const OfferSection = ({ addToCart, removeFromCart }) => {
  const offers = [
    {
      id: 1,
      name: 'Festive Saree',
      price: 750,
      gender: 'Women',
      oldPrice: 2999,
      image:
        'https://i.pinimg.com/736x/3e/05/2f/3e052f24f234e330636ac4f5b685fcf2.jpg',
      discount: '75% OFF',
    },
    {
      id: 2,
      name: 'Stylish Heels',
      price: 750,
      oldPrice: 1499,
      gender: 'Women',
      image:
        'https://i.pinimg.com/736x/a2/d4/e9/a2d4e99578f2f63eca4122cd919e3e07.jpg',
      discount: '50% OFF',
    },
    {
      id: 3,
      name: 'Designer Handbag',
      price: 660,
      oldPrice: 1200,
      gender: 'Women',
      image:
        'https://i.pinimg.com/736x/d8/34/25/d8342503cf4b300e57bd16cd8e45f2dd.jpg',
      discount: '45% OFF',
    },
    {
      id: 4,
      name: 'Formal Grey Shirt',
      price: 780,
      oldPrice: 1200,
      gender: 'Men',
      image:
        'https://i.pinimg.com/1200x/99/37/b2/9937b226bbc3fc31b24f81633c7184ad.jpg',
      discount: '35% OFF',
    },
    {
      id: 5,
      name: "Men's Ethnic Linen Shirt kurta",
      price: 765,
      oldPrice: 900,
      gender: 'Men',
      image:
        'https://i.pinimg.com/736x/0e/c7/f3/0ec7f35c1ac08fef410300897ea89ed1.jpg',
      discount: '15% OFF',
    },
    {
      id: 6,
      name: 'Polo Shirt',
      price: 650,
      oldPrice: 950,
      gender: 'Men',
      image:
        'https://i.pinimg.com/1200x/04/3b/e1/043be1a7b65e57565f74e86299a71bc2.jpg',
      discount: '31% OFF',
    },
    {
      id: 6,
      name: 'Minimal Black Shirt + Beige Trouser Outfit Idea for Men',
      price: 999,
      oldPrice: 1200,
      gender: 'Men',
      image:
        'https://i.pinimg.com/736x/3b/67/54/3b6754140d1ad9bc7a5cdc2edbeae154.jpg',
      discount: '17% OFF',
    },
    {
      id: 7,
      name: "Men's Kurta",
      price: 750,
      oldPrice: 1500,
      gender: 'Men',
      image:
        'https://i.pinimg.com/1200x/d5/e4/b7/d5e4b7c06a92900029bdc810c20736be.jpg',
      discount: '35% OFF',
    },
    {
      id: 7,
      name: 'Orange Lehenga',
      price: 1500,
      oldPrice: 1800,
      gender: 'Women',
      image:
        'https://i.pinimg.com/736x/23/c3/ab/23c3ab555e6a23d62ab227b37f1e608b.jpg',
      discount: '16% OFF',
    },
    {
      id: 8,
      name: 'White maxi dress',
      price: 840,
      oldPrice: 1200,
      gender: 'Women',
      image:
        'https://res.cloudinary.com/dytooazwh/image/upload/v1778417648/WhatsApp_Image_2026-05-10_at_18.11.16_elhfv1.jpg',
      discount: '30% OFF',
    },
    {
      id: 9,
      name: 'Black Saree',
      price: 1200,
      oldPrice: 1500,
      gender: 'Women',
      image:
        'https://i.pinimg.com/1200x/fe/28/47/fe28471646fdd20e57c6c8fdc0afcc3f.jpg',
      discount: '20% OFF',
    },
    {
      id: 9,
      name: 'Navratri Fit',
      price: 1500,
      oldPrice: 2000,
      gender: 'Women',
      image:
        'https://i.pinimg.com/736x/a0/1b/de/a01bde9c3c6dd6d84cd1f452efa44038.jpg',
      discount: '25% OFF',
    },
    {
      id: 9,
      name: 'Garba Outfit',
      price: 1500,
      oldPrice: 1800,
      gender: 'Women',
      image:
        'https://i.pinimg.com/736x/0e/8e/29/0e8e299613df6d8306a0ba65b3e0b2e4.jpg',
      discount: '16% OFF',
    },
    {
      id: 10,
      name: 'Garba Outfit Men',
      price: 1500,
      oldPrice: 1800,
      gender: 'Men',
      image:
        'https://i.pinimg.com/736x/6f/20/a3/6f20a36b1729b443895ed793625a9ec4.jpg',
      discount: '16% OFF',
    },
    {
      id: 10,
      name: 'Guttapusalu Necklace',
      price: 2000,
      oldPrice: 2500,
      gender: ' Women',
      image:
        'https://i.pinimg.com/1200x/6d/43/da/6d43da56526054b42a4fdb267b1f3fb7.jpg',
      discount: '20% OFF',
    },
  ];

  return (
    <div className="offer-section">
      <h2> 🔥Special Offers</h2>

      <div className="offer-container">
        {offers.map((item) => (
          <div className="offer-card" key={item.id}>
            <img src={item.image} alt={item.name} />

            <h3>{item.name}</h3>

            <p className="price">
              ₹{item.price} <span>₹{item.oldPrice}</span>
            </p>

            <p className="discount">{item.discount}</p>

            <button className="button">
              {' '}
              <span onClick={() => removeFromCart(item)}> ➖ </span> Add to Cart{' '}
              <span onClick={() => addToCart(item)}>➕</span>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OfferSection;
