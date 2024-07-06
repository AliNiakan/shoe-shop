import React, { useEffect, useState } from 'react';
import './Shoe.css';

interface ShoeProps {
    imageUrl: string;
}

const Shoe: React.FC<ShoeProps> = ({ imageUrl }) => {
    const [animate, setAnimate] = useState(false);

    useEffect(() => {
        setAnimate(true);
        const timer = setTimeout(() => setAnimate(false), 500);

        return () => clearTimeout(timer);
    }, [imageUrl]);

    return (
        <div className={`shoe-image-container ${animate ? 'animate' : ''}`}>
            <img className='shoe-image' src={imageUrl} alt="Selected Shoe" />
        </div>
    );
};

export default Shoe;
