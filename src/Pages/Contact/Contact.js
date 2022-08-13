import React from 'react';
import './Contact.css'
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2'

const Contact = () => {
    const sendEmail = (event) => {
        event.preventDefault();

        emailjs.sendForm('service_lxld6ja', 'template_22q0k04', event.target, 'h8c9-PO5q7X9zDh7g')
            .then((result) => {
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Thanks for the your email',
                    showConfirmButton: false,
                    timer: 2000
                  })
                event.target.reset();
            }, (error) => {
                console.log(error.text);
            });
    };
    return (
        <div className='my-12 lg:mx-28 mx-5 contact' id='contact'>
            <h1 className='text-2xl mb-12 mt-12 ml-5 lg:flex justify-end font-cursive  lg:mr-10 about-title'>Contact Me.....</h1>

            <div className='contact-form lg:mx-20'>
                <h1 className='text-3xl uppercase text-center font-cursive'>Get In Touch</h1>
                <div>
                    <form onSubmit={sendEmail} class="form lg:mx-32">

                        <div class="form">
                            <div class="input-container ic1">
                                <input id="name" name='name' class="input" type="text" placeholder=" " required/>
                                <div class="cut"></div>
                                <label for="firstname" class="placeholder">Name<sup>*</sup></label>
                            </div>
                            <div class="input-container ic2">
                                <input id="email" name='email' class="input" type="text" placeholder=" " required/>
                                <div class="cut cut-short"></div>
                                <label for="email" class="placeholder">Email<sup>*</sup></label>
                                
                            </div>
                            <div class="input-container ic2">
                                <input id="subject" name='subject' class="input" type="text" placeholder=" " required/>
                                <div class="cut"></div>
                                <label for="lastname" class="placeholder">Subject<sup>*</sup></label>
                            </div>
                            
                            <div class="input-container ic2">
                                <textarea id="message" name='message' class="input text-area" type="text" placeholder=" " required/>
                                <div class="cut cut-short"></div>
                                <label for="email" class="placeholder">Message<sup>*</sup></label>
                                
                            </div>
                            <button type="text" class="submit">submit</button>
                        </div>
                    </form>
                </div>

            </div>

        </div>
    );
};

export default Contact;