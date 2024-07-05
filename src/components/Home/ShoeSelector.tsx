import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectShoe } from '../../store/shoeSlice';
import { RootState } from '../../store';
import Shoe from '../../models/Shoe';
import './ShoeSelector.css';

const ShoeSelector: React.FC = () => {
    const shoes = useSelector((state: RootState) => state.shoe.shoes); 
    const dispatch = useDispatch();

    const handleClick = (shoe: Shoe) => {
        dispatch(selectShoe(shoe.id));
    };

    return (
        <div className="color-circle-container">
            {shoes.map((shoe: Shoe) => (
                <div
                    key={shoe.id}
                    className="color-circle"
                    style={{ backgroundColor: shoe.colorHex }}
                    onClick={() => handleClick(shoe)}
                ></div>
            ))}
        </div>
    );
};

export default ShoeSelector;
