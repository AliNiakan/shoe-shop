import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { RootState } from '../../store';
import Shoe from '../../models/Shoe';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit } from '@fortawesome/free-solid-svg-icons'
import './DetailsPage.css';
import { selectShoe } from '../../store/shoeSlice';
import BuyButton from '../Home/BuyButton';
import SizeSelector from '../Home/SizeSelector';

const DetailsPage: React.FC = () => {
    const location = useLocation();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const searchParams = new URLSearchParams(location.search);
    const shoeId = searchParams.get('id');

    const shoe: Shoe | undefined = useSelector((state: RootState) =>
        state.shoe.shoes.find((shoe) => shoe.id === parseInt(shoeId || ''))
    );

    useEffect(() => {
        if (shoe) {
            dispatch(selectShoe(shoe.id));
            document.body.style.backgroundColor = shoe.colorHex;
        }
        return () => {
            document.body.style.backgroundColor = '';
        };
    }, [shoe, dispatch]);

    const handleEditClick = () => {
        navigate(`/edit?id=${shoeId}`);
      };

    return (
        <div className="details-container">
            <h1 className="details-title">Shoe Details</h1>
            {shoeId ? (
                <div>
                    {shoe ? (
                        <div>
                            <div className="shoe-details-container">
                                <h2 className="shoe-details-name">{shoe.name}</h2>
                                <img className="shoe-details-image" src={shoe.imageUrl} alt={shoe.name} />
                                <p className="shoe-details-price">Price: ${shoe.price}</p>
                            </div>
                            <div className='shoe-size-container'>
                                <h3 className="shoe-details-name">Available sizes</h3>
                                <SizeSelector />
                            </div>

                            {/* Only Admin access */}
                            <div onClick={handleEditClick} className='edit-button'>
                                <FontAwesomeIcon icon={faEdit} />
                            </div>
                            {/* Only Admin access */}

                            <hr />
                            <div className='shoe-caption'>
                                <p>The standard Lorem Ipsum passage, used since the 1500s
                                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                                    Section 1.10.32 of "de Finibus Bonorum et Malorum", written by Cicero in 45 BC
                                    "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur,
                                    vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"</p>
                            </div>
                            <BuyButton
                                selectedShoe={shoe}
                            />
                        </div>

                    )
                        :
                        (
                            <p className="shoe-not-found">Shoe not found.</p>
                        )
                    }

                </div>
            ) : (
                <p className="no-shoe-selected">No shoe selected</p>
            )}

        </div>
    );
};

export default DetailsPage;