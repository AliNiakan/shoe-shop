import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store';
import { updateUser } from '../../store/userSlice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'
import './UserSetting.css';

const UserSetting: React.FC = () => {
  const user = useSelector((state: RootState) => state.user.user);
  const dispatch = useDispatch();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    dispatch(updateUser({ [name]: value }));
  };

  const handleAddressChange = (index: number, value: string) => {
    const updatedAddresses = [...(user?.addresses || [])];
    updatedAddresses[index] = value;
    dispatch(updateUser({ addresses: updatedAddresses }));
  };

  const handleAddAddress = () => {
    const updatedAddresses = [...(user?.addresses || []), ''];
    dispatch(updateUser({ addresses: updatedAddresses }));
  };

  const handleDeleteAddress = (index: number) => {
    const updatedAddresses = user?.addresses.filter((_, i) => i !== index) || [];
    dispatch(updateUser({ addresses: updatedAddresses }));
  };

  if (!user) {
    return <div>No user logged in.</div>;
  }

  return (
    <div className="user-setting-container">
      <h2>User Settings</h2>
      <div className="user-setting-form">
        <label>
          First Name:
          <input
            type="text"
            name="first_name"
            value={user.first_name}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Last Name:
          <input
            type="text"
            name="last_name"
            value={user.last_name}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={user.email}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            name="password"
            value={user.password}
            onChange={handleInputChange}
          />
        </label>
        {user.addresses.map((address, index) => (
          <div key={index} className="address-container">
            <label>
              Address {index + 1}:
              <input
                type="text"
                value={address}
                onChange={(e) => handleAddressChange(index, e.target.value)}
              />
            </label>
            <button
              type="button"
              className="delete-address-button"
              onClick={() => handleDeleteAddress(index)}
            >
              <FontAwesomeIcon icon={faTrashCan} />
            </button>
          </div>
        ))}
        <button type="button" className="add-address-button" onClick={handleAddAddress}>
          Add New Address
        </button>
      </div>
    </div>
  );
};

export default UserSetting;
