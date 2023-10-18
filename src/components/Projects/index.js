import { useEffect, useState } from 'react'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import { Link } from 'react-router-dom'
import Avo from '../../assets/images/avocado.png'
import Amp from '../../assets/images/amplify.png'
import ToDo from '../../assets/images/todo.png'
import Pass from '../../assets/images/password.png'

const Projects = () => {

  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    setTimeout(() => {
        setLetterClass('text-animate-hover');
    }, 3000)
}, [])

  return (
    <>
      <div className='mainContainer'>
        <div className='container projects-page'>
          <div className='text-zone'>
            <h1>
                <AnimatedLetters
                    letterClass={letterClass}
                    strArray={['P','R','O',"J",'E','C','T','S','.']}
                    idx={15}
                />
            </h1>
          </div>
          <div className='projects-container'>
            <div className='project project1'>
              <div className='text-content'>
                <Link to='/' className='proj-link'>Amplify</Link>
                <p>2023 - Ongoing</p>
              </div>
              <img src={Amp} alt='project'/>
            </div>
            <div className='project project2'>
              <div className='text-content'>
                <Link to='/' className='proj-link'>Avocado</Link>
                <p>2021 - Ongoing</p>
              </div>
              <img src={Avo} alt='project'/>
            </div>
            <div className='project project3'>
              <div className='text-content'>
                <Link to='/' className='proj-link'>To Do</Link>
                <p>2023</p>
              </div>
              <img src={ToDo} alt='project'/>
            </div>
            <div className='project project4'>
              <div className='text-content'>
                <Link to='/' className='proj-link'>Password</Link>
                <p>2021</p>
              </div>
              <img src={Pass} alt='project'/>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Projects