
import React from 'react';
import "./App.css";
import { Route, Routes } from 'react-router-dom';
import { Homepage } from "./pages/HomePage";
import { Nav } from './components/Nav/Nav';
import Login from './pages/LoginPage';
import Signup from './pages/Signup';
import { AuthContext } from './context/AuthContext';
import FavoritesPage from './pages/FavoritesPage';
import ProductPage from './pages/ProductPage';
import SearchPage from './pages/SearchPage';

function App() {
    const appRef = React.createRef<HTMLDivElement>();
    return (
            <AuthContext.Provider value={appRef}>
                <Nav/>
                <Routes>
                    <Route path='/' element={<Homepage />} />
                    <Route path='/search' element={<SearchPage/>}/>
                    <Route path='/favorites' element={<FavoritesPage/>}/>
                    <Route path='/product' element={<ProductPage/>}/>
                    <Route path='/login' element={<Login />} />
                    <Route path='/signup' element={<Signup />} />
                </Routes>

            </AuthContext.Provider>
    );
}

export default App;