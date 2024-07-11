import React, { useState } from 'react';
import Login from './Login';
import Register from './Register';
import './Authentication.css';

const Authentication: React.FC = () => {
    const [isLogin, setIsLogin] = useState(true);

    const toggleAuthMode = () => {
        setIsLogin(!isLogin);
    };

    return (
        <div className="auth-page">
            {isLogin ? <Login /> : <Register />}
            <button onClick={toggleAuthMode} className="toggle-auth-button">
                {isLogin ? ' Register' : ' Login'}
            </button>
        </div>
    );
};

export default Authentication;
