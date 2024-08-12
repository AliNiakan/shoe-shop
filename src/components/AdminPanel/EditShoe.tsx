import React, { useState, ChangeEvent } from 'react';
import './EditShoe.css';
import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Shoe from '../../models/Shoe';
import { RootState } from '../../store';
import { updateShoe } from '../../store/shoeSlice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faPlus, faCheck } from '@fortawesome/free-solid-svg-icons'

const EditShoe: React.FC = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const shoeId = searchParams.get('id');
  const navigate = useNavigate();
  const dispatch = useDispatch();

  console.log(shoeId);

  const shoe: Shoe | undefined = useSelector((state: RootState) =>
    state.shoe.shoes.find((shoe) => shoe.id === parseInt(shoeId || ''))
  );

  const [name, setName] = useState<string>(shoe?.name || '');
  const [price, setPrice] = useState<number>(shoe?.price || 0);
  const [sizes, setSizes] = useState<number[]>(shoe?.size || []);
  const [colorHex, setColorHex] = useState<string>(shoe?.colorHex || '');

  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => setName(e.target.value);
  const handlePriceChange = (e: ChangeEvent<HTMLInputElement>) => setPrice(parseFloat(e.target.value));
  const handleColorHexChange = (e: ChangeEvent<HTMLInputElement>) => setColorHex(e.target.value);

  const handleSizesChange = (index: number, newSize: number) => {
    const updatedSizes = [...sizes];
    updatedSizes[index] = newSize;
    setSizes(updatedSizes);
  };

  const addNewSize = () => setSizes([...sizes, 0]);
  const removeSize = (index: number) => setSizes(sizes.filter((_, i) => i !== index));

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (shoe) {
      const updatedShoe = { ...shoe, name, price, size: sizes, colorHex };
      dispatch(updateShoe(updatedShoe));
      navigate('/');
    }
  };

  return (
    <div className='edit-shoe-container'>
      <h1>Edit Shoe</h1>
      {shoe ? (
        <form onSubmit={handleFormSubmit} className='edit-shoe-form'>
          <div className='form-group'>
            <label htmlFor='name'>Name:</label>
            <input
              type='text'
              id='name'
              value={name}
              onChange={handleNameChange}
              required
            />
          </div>
          <div className='form-group'>
            <label htmlFor='price'>Price:</label>
            <input
              type='number'
              id='price'
              value={price}
              onChange={handlePriceChange}
              required
            />
          </div>
          <div className='form-group'>
            <label htmlFor='colorHex'>Color:</label>
            <input
              type='text'
              id='colorHex'
              value={colorHex}
              onChange={handleColorHexChange}
              required
            />
          </div>

          <div className='form-group'>
            <label>Sizes:</label>
            <div className='sizes-container'>
              {sizes.map((size, index) => (
                <div key={index} className='size-input'>
                  <input
                    type='number'
                    value={size}
                    onChange={(e) => handleSizesChange(index, parseInt(e.target.value))}
                    required
                  />
                  <button id='remove-size-button' type='button' onClick={() => removeSize(index)}>
                    <FontAwesomeIcon icon={faTrash} />
                  </button>
                </div>
              ))}
              <button type='button' id='add-size-button' onClick={addNewSize}>
                <FontAwesomeIcon icon={faPlus} />
              </button>
            </div>
          </div>

          <button type='submit' className='save-button'>
            <FontAwesomeIcon icon={faCheck} />
          </button>
        </form>
      ) : (
        <p>Shoe not found.</p>
      )}
    </div>
  );
};

export default EditShoe;
