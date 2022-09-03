
import React from 'react';
import "./App.css";
import { Route, Routes } from 'react-router-dom';
import { Homepage } from "./pages/HomePage";
import { Nav } from './components/Nav/Nav';
import { AuthContext } from './context/AuthContext';
import FavoritesPage from './pages/FavoritesPage';
import ProductPage from './pages/ProductPage';
import SearchPage from './pages/SearchPage';
import { SigninPage } from './pages/Auth/SigninPage/SigninPage';
import { LoginPage } from './pages/Auth/LoginPage/LoginPage';

function App() {
    return (
            <>
                <Nav/>
                <Routes>
                    <Route path='/' element={<Homepage />} />
                    <Route path='/search' element={<SearchPage/>}/>
                    <Route path='/favorites' element={<FavoritesPage/>}/>
                    <Route path='/product' element={<ProductPage/>}/>
                    <Route path='/signin' element={<SigninPage />} />
                    <Route path='/signup' element={<LoginPage />} />
                </Routes>
            </>
    );
}

export default App;