import {useContext} from 'react';
import { Route, Routes } from 'react-router-dom';
import { Homepage } from "../pages/HomePage";
import FavoritesPage from '../pages/FavoritesPage';
import ProductPage from '../pages/ProductPage';
import SearchPage from '../pages/SearchPage';
import { SigninPage } from '../pages/Auth/SigninPage/SigninPage';
import { LoginPage } from '../pages/Auth/LoginPage/LoginPage';
import {ProtectedAuth } from './ProtectedAuth';
import { Account } from '../pages/Account/Account';

const AppRouter = () => {

    return (
        <Routes>
                <Route path='/signin' 
                element={<SigninPage />} />

                <Route path='/' element={<Homepage />} />

                <Route path='/search' element={<SearchPage/>}/>
                
                <Route path='/favorites' element={<FavoritesPage/>}/>
                
                <Route path='/account' element={ 
                    <ProtectedAuth>
                        <Account />
                    </ProtectedAuth>
                }
                />

                <Route path='/product/:id' element={<ProductPage/>}/>
                
                <Route path='/signup' element={<LoginPage />} />
        </Routes>
    );
};

export default AppRouter;