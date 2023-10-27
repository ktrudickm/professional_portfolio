import { Outlet } from 'react-router-dom';
import Sidebar from '../Sidebar';
import './index.scss';
import Footer from '../Footer';
import Div100vh from 'react-div-100vh'

const Layout = () => {
    return (
        <Div100vh>
        <div className='App'>
            <Sidebar />
                <Outlet />
            <Footer />
        </div>
        </Div100vh>
    )
}

export default Layout