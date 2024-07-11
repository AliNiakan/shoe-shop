import React from 'react'
import './ModelsPage.css'
import Shoe from '../../models/Shoe'
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import { useNavigate } from 'react-router-dom';

const ModelsPage: React.FC = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const shoes = useSelector((state: RootState) => state.shoe.shoes)

    const handleCardClick = (id: number) => {
        navigate(`/shoe?id=${id}`);
    }
    return (
        <div className='shoe-card-container'>
            {shoes.map((shoe: Shoe) => (
                <div
                    onClick={() => handleCardClick(shoe.id)}
                    key={shoe.id}
                    className='shoe-card'
                >
                    <h1>{shoe.name}</h1>
                    <img alt={shoe.name} src={shoe.imageUrl} />
                    <p>{shoe.price}$</p>
                </div>
            ))}
        </div>
    )
}

export default ModelsPage