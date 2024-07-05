import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import './SizeSelector.css';

const SizeSelector: React.FC = () => {
    const [selectedSize, setSelectedSize] = useState<number | null>(null);
    const shoes = useSelector((state: RootState) => state.shoe.shoes);
    const selectedShoeId = useSelector((state: RootState) => state.shoe.selectedShoeId);
    const selectedShoe = shoes.find(shoe => shoe.id === selectedShoeId);

    const handleSizeClick = (size: number) => {
        setSelectedSize(size);
        console.log(`Selected size: ${size}`);
    };

    return (
        <div className="size-selector">
            {selectedShoe ? (
                selectedShoe.size.map((size, index) => (
                    <div
                        key={index}
                        className={`size-option ${size === selectedSize ? 'selected' : ''}`}
                        onClick={() => handleSizeClick(size)}
                    >
                        {size}
                    </div>
                ))
            ) : (
                <p>Select a shoe to see available sizes</p>
            )}
        </div>
    );
}

export default SizeSelector;
