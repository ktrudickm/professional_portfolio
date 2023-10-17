import './index.scss'
import LogoTitle from '../../assets/images/logo-s.png'
import { Link } from 'react-router-dom'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faCalendar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Home = () => {
  return (
    <div className='container home-page'>
        <div className='text-zone'>
            <h1>Hi, <br /> I'm Kendall,
            {/* <img src={LogoTitle} alt='developer'/> */}
            <br />
            software engineer.
            </h1>
            <h2>Full Stack Developer / Los Angeles, CA</h2>
            <ul>
              <li>
                  <a
                      target='_blank'
                      rel='noreferrer'
                      href='https://www.linkedin.com/in/kendalltrudick'
                  >
                      <FontAwesomeIcon icon={faLinkedin} color='rgb(211, 0, 0)' />
                  </a>
              </li>
              <li>
                  <a
                      target='_blank'
                      rel='noreferrer'
                      href='https://www.github.com/ktrudickm'
                  >
                      <FontAwesomeIcon icon={faGithub} color='rgb(211, 0, 0)' />
                  </a>
              </li>
              <li>
                  <a
                      target='_blank'
                      rel='noreferrer'
                      href='https://calendly.com/ktrudickm'
                  >
                      <FontAwesomeIcon icon={faCalendar} color='rgb(211, 0, 0)' />
                  </a>
              </li>
           </ul>
            <Link to='/contact' className='flat-button'>CONTACT ME</Link>
        </div>
    </div>
  )
}

export default Home