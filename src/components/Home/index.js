import './index.scss'
// import LogoTitle from '../../assets/images/logo-s.png'
import { Link } from 'react-router-dom'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faCalendar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import AnimatedLetters from '../AnimatedLetters';
import { useEffect, useState } from 'react';
import Logo from './Logo';

const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = [' ','K','e','n','d','a','l','l',',']
    const jobArray = ['s','o','f','t','w','a','r','e',' ','e','n','g','i','n','e','e','r','.']

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 4000)
    })

  return (
    <div className='container home-page'>
        <div className='text-zone'>
            <h1>
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>i,</span>
            <br />
            <span className={`${letterClass} _13`}>I</span>
            <span className={`${letterClass} _14`}>'m</span>
            {/* <img src={LogoTitle} alt='developer'/> */}
            <AnimatedLetters letterClass={letterClass} 
            strArray={nameArray}
            idx={15} />
            <br />
            <AnimatedLetters letterClass={letterClass} 
            strArray={jobArray}
            idx={22} />
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
        <Logo />
    </div>
  )
}

export default Home