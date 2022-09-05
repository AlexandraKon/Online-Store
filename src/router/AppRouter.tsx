import {useContext} from 'react';
import { Route, Routes } from 'react-router-dom';
import { Homepage } from "../pages/HomePage";
import { AuthContext } from '../context/AuthContext';
import FavoritesPage from '../pages/FavoritesPage';
import ProductPage from '../pages/ProductPage';
import SearchPage from '../pages/SearchPage';
import { SigninPage } from '../pages/Auth/SigninPage/SigninPage';
import { LoginPage } from '../pages/Auth/LoginPage/LoginPage';
import {RequireAuth } from './RequireAuth';
import {ProtectedAuth } from './ProtectedAuth';

const AppRouter = () => {
    const { value } = useContext(AuthContext);

    return (
        <Routes>
                <Route path='/signin' 
                element={<SigninPage />} />

                <Route path='/' element={<Homepage />} />

                <Route path='/search' element={<SearchPage/>}/>
                
                <Route path='/favorites' element={<FavoritesPage/>}/>
                
                <Route path='/product/:id' element={<ProductPage/>}/>
                
                <Route path='/signup' element={<LoginPage />} />
                </Routes>
    );
};

export default AppRouter;