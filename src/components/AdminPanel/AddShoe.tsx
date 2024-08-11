import React, { useState } from 'react';
import './AddShoe.css';
import { useDispatch } from 'react-redux';
import Shoe from '../../models/Shoe';
import { addShoe } from '../../store/shoeSlice';

const AddShoe: React.FC = () => {
    const dispatch = useDispatch();

    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [colorHex, setColorHex] = useState('');
    const [sizes, setSizes] = useState<string>('');
    const [imageUrl, setImageUrl] = useState('');

    const sizesArray = sizes.split(',').map(size => parseInt(size.trim()));

    const newShoe: Shoe = {
        id: Date.now(),
        name,
        price: parseFloat(price),
        colorHex,
        size: sizesArray,
        imageUrl
    };
    const handleAddShoe = () => {
        dispatch(addShoe(newShoe));
    };

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();

        handleAddShoe()

        setName('');
        setPrice('');
        setColorHex('');
        setSizes('');
        setImageUrl('');
    };

  

    return (
        <div className='add-shoe-container'>
            <h2>Add a New Shoe</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Shoe Name:</label>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="price">Price:</label>
                    <input
                        type="number"
                        id="price"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="colorHex">Color (Hex Code):</label>
                    <input
                        type="text"
                        id="colorHex"
                        value={colorHex}
                        onChange={(e) => setColorHex(e.target.value)}
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="sizes">Available Sizes (comma-separated):</label>
                    <input
                        type="text"
                        id="sizes"
                        value={sizes}
                        onChange={(e) => setSizes(e.target.value)}
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="imageUrl">Image URL:</label>
                    <input
                        type="text"
                        id="imageUrl"
                        value={imageUrl}
                        onChange={(e) => setImageUrl(e.target.value)}
                        required
                    />
                </div>

                <button type="submit" className="add-shoe-button">Add Shoe</button>
            </form>
        </div>
    );
};

export default AddShoe;
