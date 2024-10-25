
import { Outlet } from 'react-router-dom';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

const Main = () => {
    return (
        <div className='max-w-7xl mx-auto'>
            <NavBar />
            <Outlet></Outlet>
            <Footer />
        </div>
    );
};

export default Main;