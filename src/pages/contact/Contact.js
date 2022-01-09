import React from 'react'
import Footer from '../../components/footer/Footer'
import './Contact.css'
import ContactForm from './ContactForm'

const Contact = () => {
    return (
        <>
        <div className='contact'>
            <div className='cl-0'>
                <div className='cl-0-1'>
                <img src={require('../../assets/customer-support.png')} alt="support" />
                </div>
            </div>
            <div className='cl-1'>
            <h3 className='page-title'>Get in Touch. <br/>We will be happy to hear from you.</h3>
                <div className='form-card'>
                    <ContactForm />
                </div>
            </div>
            
        </div>
        <Footer />
        </>
    )
}

export default Contact
