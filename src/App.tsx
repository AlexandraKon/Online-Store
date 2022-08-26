import { Route, Routes } from 'react-router-dom';
import { Homepage } from "./pages/Homepage";
import { AuthContextProvider} from './context/AuthContext';
import { Nav } from './components/Nav/Nav';
import Login from './pages/Login';
import Signup from './pages/Signup';


function App() {
    return (
        <>
            <AuthContextProvider>
                <Nav/>
                <Routes>
                    <Route path='/' element={<Homepage />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/signup' element={<Signup />} />
                </Routes>
            </AuthContextProvider>
            
        </>
    );
}

export default App;