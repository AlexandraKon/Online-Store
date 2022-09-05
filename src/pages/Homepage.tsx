import {Header} from "../components/Header/Header";
import {Main} from "../components/Main/Main";
import { Footer } from "../components/Footer/Footer";
import { Nav } from "../components/Nav/Nav";
import { SaleProd } from "../components/Sale/SaleProd";
import { requests } from "../api/config";
import { Shop } from '../components/Shop/Shop';

export const Homepage = () => {

    return (
        <>
            <Nav/>
            <Header/>
            <Main/>
            <SaleProd title='#MODNIKKY_Sale' fetchURL={requests.urlbase}/>
            <Shop/>
            <Footer/>
        </>
    );
}
