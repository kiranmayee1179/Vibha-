import { useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Filters from './components/Filters';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import productsData from './data';
import OfferSection from './components/OfferSection';
import Outfit from './components/Outfit';
import Footer from './components/Footer';
import './App.css';

const App = () => {
  const [cart, setCart] = useState([]);
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('All');
  const navigate = useNavigate();

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (item) => {
    setCart((prevCart) => {
      const index = prevCart.findIndex((i) => i.id === item.id);
      if (index === -1) return prevCart;
      const newCart = [...prevCart];
      newCart.splice(index, 1);
      return newCart;
    });
  };
  const handleCategory = (cat) => {
    setCategory(cat);
    navigate('/');
  };

  const filteredProducts =
    category === 'Today'
      ? productsData.sort(() => 0.5 - Math.random()).slice(0, 8)
      : productsData.filter((item) => {
          return (
            (category === 'All' ||
              item.category.toLowerCase() === category.toLowerCase()) &&
            item.name.toLowerCase().includes(search.toLowerCase())
          );
        });

  return (
    <>
      <Navbar
        cartCount={cart.length}
        setCategory={setCategory}
        setSearch={setSearch}
      />

      <Routes>
        <Route
          path="/"
          element={
            <>
              {category === 'All' && (
                <>
                  {/* HERO */}
                  <div className="hero">
                    <div className="hero-content">
                      <h1>Discover Timeless Style</h1>
                      <p>Luxury fashion curated just for you</p>
                      <button onClick={() => setCategory('Accessories')}>
                        Shop Now
                      </button>
                    </div>
                  </div>
                  <div>
                    <button
                      className="circle"
                      onClick={() => handleCategory('Footwear')}
                      style={{ background: 'beige' }}
                    >
                      <img
                        src="https://res.cloudinary.com/dytooazwh/image/upload/v1777297230/Winter_High_Heels_Sexy_Women_Luxury_Shoes_Chunky_Ankle_Chelsea_Boots_F_z2fhhh.jpg"
                        style={{ height: 70, borderRadius: 40 }}
                      />
                    </button>
                    <button
                      className="circle"
                      onClick={() => handleCategory('Accessories')}
                      style={{ background: 'beige' }}
                    >
                      <img
                        src="https://i.pinimg.com/1200x/16/7f/3b/167f3be1a6d0e53b1bfcfafc3a6355a8.jpg"
                        style={{ height: 70, borderRadius: 40 }}
                      />
                    </button>
                    <button
                      className="circle"
                      onClick={() => handleCategory('Perfumes')}
                      style={{ background: 'beige' }}
                    >
                      <img
                        src="https://i.pinimg.com/736x/ee/b4/69/eeb469610be63b31f76fc7bc50c4d469.jpg"
                        style={{ height: 70, borderRadius: 40 }}
                      />
                    </button>
                    <button
                      className="circle"
                      onClick={() => handleCategory('Clothing')}
                      style={{ background: 'beige' }}
                    >
                      <img
                        src="https://i.pinimg.com/1200x/6f/d9/9b/6fd99b372a973748e29fd544b48b7ea0.jpg"
                        style={{ height: 70, borderRadius: 40 }}
                      />
                    </button>
                    <button
                      className="circle"
                      onClick={() => handleCategory('Watches')}
                      style={{ background: 'beige' }}
                    >
                      <img
                        src="https://res.cloudinary.com/dytooazwh/image/upload/v1776785755/homens_mulheres_1_pe%C3%A7a_preto_silicone_al%C3%A7a_desportivo_data_alarme_monitoramento_de_frequ%C3%AAncia_card%C3%ADaca_monitoramento_do_sono_multifuncional_quadrado_discar_compat%C3%ADvel_com_iphone_gye190.jpg"
                        style={{ height: 70, borderRadius: 40 }}
                      />
                    </button>
                    <button
                      className="circle"
                      onClick={() => handleCategory('Offers')}
                      style={{ background: 'beige' }}
                    >
                      <img
                        src="https://i.pinimg.com/736x/56/00/50/5600503a7d38ef1f6813e66b815d7d9a.jpg"
                        style={{ height: 70, borderRadius: 40 }}
                      />
                    </button>
                  </div>
                  {/* FOOTWEAR BANNER */}
                  <div className="hero-banner">
                    <div className="banner-left">
                      <h1>Footwear Collection</h1>
                      <p>Step into comfort & style</p>
                      <button onClick={() => setCategory('Footwear')}>
                        Shop Footwear
                      </button>
                    </div>

                    <div className="banner-right">
                      <img
                        src="https://images.unsplash.com/photo-1542291026-7eec264c27ff"
                        alt="footwear"
                      />
                    </div>
                  </div>
                  <div className="offer-banner">
                    <div className="offer-banner-left">
                      <h1>Special Offers</h1>
                      <p>Grab deals before they end</p>
                      <button onClick={() => setCategory('Offers')}>
                        View Offers
                      </button>
                    </div>

                    <div className="offer-banner-right">
                      <img
                        src="https://i.pinimg.com/736x/95/90/10/95901016ab046372a8c8d06ab6c7c046.jpg"
                        alt="offers"
                      />
                    </div>
                  </div>
                  {/* ⭐ TODAY'S PICKS BANNER */}
                  <div className="hero-banner">
                    <div className="banner-left">
                      <h1>Today’s Picks</h1>
                      <p>Handpicked styles just for you</p>

                      <button onClick={() => setCategory('Today')}>
                        Explore Picks
                      </button>
                    </div>

                    <div className="banner-right">
                      <img
                        src="https://images.unsplash.com/photo-1521334884684-d80222895322"
                        alt="todays picks"
                      />
                    </div>
                  </div>
                  <Footer path="/" />
                </>
              )}
              {category === 'Offers' && (
                <>
                  <button onClick={() => setCategory('All')}>
                    ⬅ Back to Home
                  </button>

                  <OfferSection
                    addToCart={addToCart}
                    removeFromCart={removeFromCart}
                  />
                </>
              )}
              {category !== 'All' && category !== 'Offers' && (
                <>
                  <Filters setSearch={setSearch} setCategory={setCategory} />

                  <button onClick={() => setCategory('All')}>
                    ⬅ Back to Home
                  </button>

                  <ProductList
                    products={filteredProducts}
                    addToCart={addToCart}
                    removeFromCart={removeFromCart}
                    category={category}
                  />
                </>
              )}
            </>
          }
        />
        <Route path="/outfit" element={<Outfit products={productsData} />} />
        <Route
          path="/cart"
          element={<Cart cart={cart} removeFromCart={removeFromCart} />}
        />
      </Routes>
    </>
  );
};

export default App;
