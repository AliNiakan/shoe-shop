import React from 'react'
import './ModelsPage.css'
import Shoe from '../../models/Shoe'
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';

const ModelsPage: React.FC = () => {
    const dispatch = useDispatch();
    const shoes = useSelector((state: RootState) => state.shoe.shoes)
    return (
        <div className='shoe-card-container'>
            {shoes.map((shoe: Shoe) => (
                <div key={shoe.id} className='shoe-card'  style={{ backgroundColor: shoe.colorHex }}>
                    <h1>{shoe.name}</h1>
                    <img alt={shoe.name} src={shoe.imageUrl}/>
                    <p>{shoe.price}$</p>
                </div>
            ))}
        </div>
    )
}

export default ModelsPage