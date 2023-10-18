import Loader from 'react-loaders';
import AnimatedLetters from '../AnimatedLetters';
import './index.scss';
import { useEffect, useRef, useState } from 'react'
import emailjs from '@emailjs/browser';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import Sidebar from '../Sidebar';
import Footer from '../Footer';

const Contact = () => {

    const [letterClass, setLetterClass] = useState('text-animate')
    const refForm = useRef()

    useEffect(() => {
      setTimeout(() => {
          setLetterClass('text-animate-hover');
      }, 3000)
  }, [])

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
        .sendForm(
            'service_4ajj8q8',
            'template_cskgu4g', 
            refForm.current, 
            '3-9Kh0AMpAuOeKVX1'
        )
        .then (
            () => {
                alert('Message successfully sent!')
                window.location.reload(false)
            },
            () => {
                alert('Failed to send the message, please try again.')
            }
        )
  }

  return (
    <>
    <div className='mainContainer'>
        <Sidebar/>
        <div className='container contact-page'>
            <div className='text-zone'>
            <h1>
                <AnimatedLetters
                    letterClass={letterClass}
                    strArray={['L','E','T',"'",'S','  ','C','H','A','T']}
                    idx={15}
                />
            </h1>
            <p style={{fontSize: 14}}>Get in touch with me using the form below! I am always open to new connections, expanding 
                my network, and any and all potential opportunities.
            </p>
            <div className='contact-form'>
                <form ref={refForm} onSubmit={sendEmail}>
                    <ul>
                        <li className='half'>
                            <input type='text' name='name' placeholder='Name' required />
                        </li>
                        <li className='half'>
                            <input type='email' name='email' placeholder='Email' required />
                        </li>
                        <li>
                            <input placeholder="Subject" type="text" name='subject' required />
                        </li>
                        <li>
                            <textarea placeholder='Message' name='message' required></textarea>
                        </li>
                        <li>
                            <input type='submit' className='flat-button' value='SEND' />
                        </li>
                    </ul>
                </form>
            </div>
            </div>
                {/* <div className='map-wrap'>
                    <MapContainer center={[34.052235, -118.243683]} zoom={13}>
                        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
                        <Marker position={[34.052235, -118.243683]} >
                            <Popup>Based in Los Angeles, CA</Popup>
                        </Marker>
                    </MapContainer>
                </div> */}
        </div>
        <Loader type='line-scale-pulse-out'/>
    </div>
    <Footer />
    </>
  )
}

export default Contact