import { Link, NavLink } from 'react-router-dom';
import './index.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

const Sidebar = () => {
    const [open, setOpen] = useState(false);
    const handleMobileNavOnClick = () => setOpen(false);
    
    return (
    <>
    <div className='nav-bar'>
        <Link className='logo' to='/'>KENDALL TRUDICK
        </Link>
        <div className='mobile-nav' onClick={() => setOpen(!open)}>
            <FontAwesomeIcon icon={faBars} color='#4d4d4e' />
        </div>
        <nav>
            <NavLink exact='true' activeclassname='active' to='/'>
                HOME
            </NavLink>
            <NavLink exact='true' activeclassname='active' className="projects-link" to='/projects'>
                PROJECTS
            </NavLink>
            <NavLink exact='true' activeclassname='active' className="about-link" to='/about'>
                ABOUT
            </NavLink>
            <NavLink exact='true' activeclassname='active' className='contact-link' to='/contact'>
                CONTACT
            </NavLink>
        </nav>
    {open && 
        <div className='mobile-nav-container'>
            <nav className='mobile-nav-menu'>
                <NavLink exact='true' activeclassname='active' to='/' onClick={handleMobileNavOnClick}>
                    HOME
                </NavLink>
                <NavLink exact='true' activeclassname='active' className="projects-link" to='/projects' onClick={handleMobileNavOnClick}>
                    PROJECTS
                </NavLink>
                <NavLink exact='true' activeclassname='active' className="about-link" to='/about' onClick={handleMobileNavOnClick}>
                    ABOUT
                </NavLink>
                <NavLink exact='true' activeclassname='active' className='contact-link' to='/contact' onClick={handleMobileNavOnClick}>
                    CONTACT
                </NavLink>
            </nav>
        </div>
    }
    </div>
    </>
)}

export default Sidebar