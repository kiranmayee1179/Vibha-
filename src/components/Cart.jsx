import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import './Cart.css';

const Cart = ({ cart, removeFromCart }) => {
  const navigate = useNavigate();

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  const [showForm, setShowForm] = useState(false);
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [orderedItems, setOrderedItems] = useState([]);
  const [userData, setUserData] = useState({
    name: '',
    place: '',
    address: '',
    email: '',
  });

  const handleChange = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
  };

  const handleBuyNow = () => {
    if (userData.name && userData.place && userData.address && userData.email) {
      alert('✅ Order Placed Successfully!');

      setShowForm(false);
      setOrderPlaced(true);
      setOrderedItems(cart);

      cart.forEach((item) => removeFromCart(item));

      setUserData({
        name: '',
        place: '',
        address: '',
        email: '',
      });
    } else {
      alert('⚠️ Please fill all details!');
    }
  };

  return (
    <div className="cart-page">
      <button className="back-btn" onClick={() => navigate('/')}>
        ⬅ Back
      </button>

      <h2 className="cart-title">Your Cart</h2>

      {orderPlaced ? (
        <div className="order-success-box">
          <h2 style={{ color: 'black' }}>🎉Order Placed Successfully!</h2>

          <div className="order-items">
            {orderedItems.map((item) => (
              <div key={item.id} className="order-item">
                <img src={item.image} alt={item.name} />
                <div>
                  <h4>{item.name}</h4>
                  <p>₹{item.price}</p>
                </div>
              </div>
            ))}
          </div>

          <h3 className="order-total">
            Total Amount: ₹
            {orderedItems.reduce((sum, item) => sum + item.price, 0)}
          </h3>
        </div>
      ) : cart.length === 0 ? (
        <p className="empty">Your cart is empty</p>
      ) : (
        <>
          <div className="cart-container">
            {cart.map((item) => (
              <div className="cart-card" key={item.id}>
                <img src={item.image} alt={item.name} className="cart-img" />

                <div className="cart-details">
                  <h3>{item.name}</h3>
                  <p className="price">₹{item.price}</p>
                  <p className="discount">{item.discount}</p>
                  <button
                    className="remove-btn"
                    onClick={() => removeFromCart(item)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="cart-summary">
            <h3>Total: ₹{total}</h3>

            <button onClick={() => setShowForm(true)} className="buy-btn">
              Buy Now
            </button>
          </div>

          
          {showForm && (
            <div className="overlay">
              <div className="order-form">
                <h2 style={{ color: 'black' }}>Checkout</h2>
                <p className="subtitle">Enter delivery details</p>

                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  value={userData.name}
                  onChange={handleChange}
                  className="myntra-input"
                />

                <input
                  type="text"
                  name="place"
                  placeholder="City / Place"
                  value={userData.place}
                  onChange={handleChange}
                  className="myntra-input"
                />

                <input
                  type="text"
                  name="address"
                  placeholder="Full Address"
                  value={userData.address}
                  onChange={handleChange}
                  className="myntra-input"
                />

                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={userData.email}
                  onChange={handleChange}
                  className="myntra-input"
                />

                <button onClick={handleBuyNow} className="confirm-btn">
                  PLACE ORDER
                </button>

                <button
                  onClick={() => setShowForm(false)}
                  className="cancel-btn"
                >
                  Cancel
                </button>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Cart;
