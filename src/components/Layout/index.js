import { Outlet } from 'react-router-dom';
import Sidebar from '../Sidebar';
import './index.scss';
import Footer from '../Footer';

const Layout = () => {
    return (
        <div className='App'>
            <Sidebar />
                <Outlet />
            <Footer />
        </div>
    )
}

export default Layout