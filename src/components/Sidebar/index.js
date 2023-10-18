import { Link, NavLink } from 'react-router-dom';
import './index.scss';
import LogoS from '../../assets/images/logo-s.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar, faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Sidebar = () => (
    <div className='nav-bar'>
        <Link className='logo' to='/'>KENDALL TRUDICK
        </Link>
        <nav>
            <NavLink exact='true' activeclassname='active' to='/'>
                HOME
            </NavLink>
            <NavLink exact='true' activeclassname='active' className="about-link" to='/about'>
                ABOUT
            </NavLink>
            <NavLink exact='true' activeclassname='active' className='contact-link' to='/contact'>
                CONTACT
            </NavLink>
        </nav>
        {/* <ul>
            <li>
                <a
                    target='_blank'
                    rel='noreferrer'
                    href='https://www.linkedin.com/in/kendalltrudick'
                >
                    <FontAwesomeIcon icon={faLinkedin} color='#4d4d4e' />
                </a>
            </li>
            <li>
                <a
                    target='_blank'
                    rel='noreferrer'
                    href='https://www.github.com/ktrudickm'
                >
                    <FontAwesomeIcon icon={faGithub} color='#4d4d4e' />
                </a>
            </li>
            <li>
                <a
                    target='_blank'
                    rel='noreferrer'
                    href='https://calendly.com/ktrudickm'
                >
                    <FontAwesomeIcon icon={faCalendar} color='#4d4d4e' />
                </a>
            </li>
        </ul> */}
    </div>
)

export default Sidebar