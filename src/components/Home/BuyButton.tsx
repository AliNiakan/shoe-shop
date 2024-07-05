import React from 'react';
import './BuyButton.css';

const BuyButton: React.FC = () => {
    return (
        <div className="buy-button-container">
            <button className="buy-button">
            Add to Your Cart +
            </button>
        </div>
    )
}

export default BuyButton;
