import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store';
import { removeItemFromCart, updateCartItemQuantity } from '../../store/cartSlice';
import './CartPage.css';

const CartPage: React.FC = () => {
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const dispatch = useDispatch();

  const handleRemove = (id: number) => {
    dispatch(removeItemFromCart(id));
  };

  const handleQuantityChange = (id: number, quantity: number) => {
    dispatch(updateCartItemQuantity({ id, quantity }));
  };

  return (
    <div className="cart-page">
      <h1>Your Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <ul className="cart-items">
          {cartItems.map((item) => (
            <li key={item.id} className="cart-item">
              <div className="item-details">
                <img src={item.imageUrl} alt={item.name} className="item-image" />
                <span className="item-name">{item.name}</span>
                <span className="item-price">${item.price?.toFixed(2)}</span>
              </div>
              <div className="item-actions">
                <input
                  type="number"
                  value={item.quantity}
                  min="1"
                  onChange={(e) =>
                    handleQuantityChange(item.id, parseInt(e.target.value, 10))
                  }
                />
                <button onClick={() => handleRemove(item.id)}>  <FontAwesomeIcon icon={faTrash} /></button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CartPage;
