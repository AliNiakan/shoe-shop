import React from 'react';
import './BuyButton.css';
import { addItemToCart } from '../../store/cartSlice';
import { useDispatch, UseDispatch } from 'react-redux';
import Shoe from '../../models/Shoe';

interface BuyButtonProps {
    selectedShoe: Shoe | null;
}

const BuyButton: React.FC<BuyButtonProps> = ({ selectedShoe }) => {
    const dispatch = useDispatch();

    const handleAddToCart = () => {
        if (selectedShoe) {
            dispatch(addItemToCart({ ...selectedShoe, quantity: 1 }))
        }
    }
    return (
        <div className="buy-button-container">
            <button className="buy-button"  onClick={handleAddToCart}>
                Add to Your Cart +
            </button>
        </div>
    )
}

export default BuyButton;
