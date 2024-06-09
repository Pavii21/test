import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import alanBtn from '@alan-ai/alan-sdk-web';

import './App.css';
import Navbar from './Components/Navbar/Navbar';
import ShopCategory from './Pages/ShopCategory';
import Cart from './Pages/Cart';
import LoginSignup from './Pages/LoginSignup';
import Shop from './Pages/Shop'; 
import Product from './Pages/Product';
import Footer from './Components/Footer/Footer';

import men_banner from './Components/Assets/banner_mens.png';
import women_banner from './Components/Assets/banner_women.png';
import kids_banner from './Components/Assets/banner_kids.png';

const alanKey = 'fabf976f5fd3acb0c0c54d5b0155a6ae2e956eca572e1d8b807a3e2338fdd0dc/stage'; // Replace with your Alan AI project key

function App() {
  useEffect(() => {
    const alanInstance = alanBtn({
      key: alanKey,
      onCommand: ({ command, category }) => {
        switch(command) {
          case 'login':
            window.location.href = '/login'; // Navigate to the login page
            break;
          case 'navigateToCategory':
            switch(category) {
              case 'women':
                window.location.href = '/womens';
                break;
              case 'men':
                window.location.href = '/mens';
                break;
              case 'kid':
                window.location.href = '/kids';
                break;
              default:
                break;
            }
            break;
          default:
            break;
        }
      }
    });

    return () => {
      alanInstance.remove();
    };
  }, []);

  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Shop />} />
          <Route path='/mens' element={<ShopCategory banner={men_banner} category="men" />} />
          <Route path='/womens' element={<ShopCategory banner={women_banner} category="women" />} />
          <Route path='/kids' element={<ShopCategory banner={kids_banner} category="kid" />} />
          <Route path='/product' element={<Product />}>
            <Route path=':productId' element={<Product />} />
          </Route>
          <Route path='/cart' element={<Cart />} />
          <Route path='/login' element={<LoginSignup />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;