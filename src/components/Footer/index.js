
import './index.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Footer = () => (
    <div className='footer-container'>
        <div className='placeholder'>
        </div>
        <div className='text-container'>
            <h1>© 2023 KENDALL TRUDICK.</h1>
            <h1>ALL RIGHTS RESERVED</h1>
        </div>
        <ul className='social-list'>
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
        </ul>
    </div>
)

export default Footer