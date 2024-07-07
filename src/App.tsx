import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from './store';
import GlobalStyles from './styles/GlobalStyles';
import ShoeSelector from './components/Home/ShoeSelector';
import { createGlobalStyle } from 'styled-components';
import Header from './components/Home/Header';
import MainLogo from './components/Home/MainLogo';
import Shoe from './components/Home/Shoe';
import SizeSelector from './components/Home/SizeSelector';
import BuyButton from './components/Home/BuyButton';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './styles/reset.css'
import './styles/App.css'
import CartPage from './components/Cart/CartPage';

const DynamicBackground = createGlobalStyle<{ backgroundColor: string }>`
  body {
    background-color: ${(props) => props.backgroundColor};
    margin: 0;
    font-family: Arial, sans-serif;
    height: 100vh; 
    transition: background-color 0.5s ease;
  }
`;

const Home: React.FC = () => {
  const selectedShoe = useSelector((state: RootState) =>
    state.shoe.shoes.find((shoe) => shoe.id === state.shoe.selectedShoeId)
  );
  const backgroundColor = selectedShoe?.colorHex || '#ffffff';
  const imageUrl = selectedShoe?.imageUrl || '';

  return (
    <div >
      <DynamicBackground backgroundColor={backgroundColor} />
      <MainLogo />
      {selectedShoe && <Shoe imageUrl={imageUrl} />}
      <div className='selectors'>
        <SizeSelector />
        <ShoeSelector />
      </div>
      <BuyButton />
    </div>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<CartPage />} />

      </Routes>
    </Router>
  );
};

export default App;
