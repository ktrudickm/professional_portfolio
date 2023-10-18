import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngular, faCss3, faGitAlt, faHtml5, faJsSquare, faReact } from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'
import Sidebar from '../Sidebar'
import Footer from '../Footer'

const About = () => {

  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    setTimeout(() => {
        setLetterClass('text-animate-hover');
    }, 3000)
})

  return (
    <>
    <div className='mainContainer'>
      <Sidebar />
      <div className='container about-page'>
        <div className='text-zone'>
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['A','b','o','u','t',' ','m','e']}
              idx={15}
              />
          </h1>
          <p>
            I'm Kendall, a driven, curious, and ambitious full-stack developer and software engineer. 
            Currently, I am seeking roles where I can contribute towards meaningful and challenging projects and ultimately 
            learn new technologies, utilize and strengthen my current skillsets, and collaborate alongside inspiring and driven individuals.
          </p>
          <p>
            Graduating with a degree in Chemical Engineering from the Ohio State University, I possess a solid foundation
            in problem-solving and analytical techniques, skills that have proved pivotal in my transition to Software Engineering. 
            I transitioned away from my previous profession after realizing I was lacking a passion and was yearning to bring a level of 
            creativity to my every-day. As a result, I enrolled in a Full Stack Web Development Bootcamp and ever since, I have not once looked back. 
            It is easy to say that Software Engineering has provided an incredible way to allow my left and right brain to function synergistically 
            and capitalize on my creativity. 
          </p>
          <p>
            I am someone who values balance, so when I am not working, I spend my time prioritizing being active, experimenting with cooking 
            new meals, reading books, meditating, and traveling whenever I possibly can. Thanks for stopping by!
          </p>
          <a
            target='_blank'
            rel='noreferrer'
            className='flat-button'
            href='https://docs.google.com/document/d/1xWUEfvdfXOPfOz7cLVVj1XDib8XkZJY-8qpGxM-y0tY/edit?usp=sharing'
            >RESUME</a>
        </div>

        <div className='stage-cube-cont'>
          <div className='cubespinner'>
            <div className='face1'>
              <FontAwesomeIcon icon={faAngular} color='#DD0031'/>
            </div>
            <div className='face2'>
              <FontAwesomeIcon icon={faHtml5} color='#F06529'/>
            </div>
            <div className='face3'>
              <FontAwesomeIcon icon={faCss3} color='#28A4D9'/>
            </div>
            <div className='face4'>
              <FontAwesomeIcon icon={faReact} color='#5ED4F4'/>
            </div>
            <div className='face5'>
              <FontAwesomeIcon icon={faJsSquare} color='#EFD81D'/>
            </div>
            <div className='face6'>
              <FontAwesomeIcon icon={faGitAlt} color='#EC4D28'/>
            </div>
          </div>
        </div>
      </div>
      <Loader type='line-scale-pulse-out'/>
      <Footer />
    </div>
    </>
  )
}

export default About