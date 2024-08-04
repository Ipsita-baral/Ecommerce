import './Contact.css';
import React from 'react';

const ContactUs = () => {
    return (
        <>
            <div className='cform'>
                <div>
                    <h1>Contact Us</h1>
                    <p>Need to get in touch with us? Fill the form</p>
                </div>
                <div className='contact'>
                    <div className='name'>
                        <div>
                           <p>First Name</p>
                            <input type="text" className='first'/>
                        </div>
                        <div>
                          <p>Last Name</p>
                            <input type="text" className='last'/>
                        </div>
                    </div>

                    <div className='mail'>
                        <p>  email</p>
                        <input type="text" />
                    </div>
                    <div className='texae'>
                        <p>what can i help u?</p>
                        <textarea className='textarea'></textarea>
                    </div>
                    <button className='submit'>Submit</button>

                </div>
            </div>
        </>
    )
}

export default ContactUs;
