import { useNavigate } from 'react-router-dom';
import Profile from './Profile';
const Navbar = ({ cartCount, setCategory, setSearch }) => {
  const navigate = useNavigate();

  const handleCategory = (c) => {
    setCategory(c);
    navigate('/');
  };

  return (
    <nav className="navbar">
      <h1
        style={{
          cursor: 'pointer',
          color: '#D4AF37',
          fontFamily: 'Cinzel, serif',
          letterSpacing: '3px',
          fontWeight: '600',
        }}
      >
        VIBHA
      </h1>

      <div className="nav-links">
        <button onClick={() => handleCategory('Footwear')}>Footwear</button>
        <button onClick={() => handleCategory('Accessories')}>
          Accessories
        </button>
        <button onClick={() => handleCategory('Watches')}>Watches</button>
        <button onClick={() => handleCategory('Clothing')}>Clothing</button>
        <button onClick={() => handleCategory('Offers')}>Offer Section</button>
      </div>

      <button onClick={() => navigate('/outfit')}>Outfit Suggestion</button>

      <button onClick={() => navigate('/cart')}>Cart ({cartCount})</button>
      <Profile />
    </nav>
  );
};

export default Navbar;
