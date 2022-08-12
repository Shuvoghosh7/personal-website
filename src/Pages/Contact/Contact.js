import React from 'react';
import './Contact.css'
const Contact = () => {
    return (
        <div className='my-12 lg:mx-28 mx-5 contact'>
            <h1 className='text-2xl mb-12 mt-10 ml-5 lg:flex justify-end font-cursive  lg:mr-10 about-title'>Contact Me.....</h1>

            <div className='contact-form lg:mx-20'>
                <h1 className='text-3xl uppercase text-center'>Get In Touch</h1>
                <div>
                    <form class="form lg:mx-32">

                        <div class="input-container ic1">
                            <input id="name" name='name' class="input" type="text" required/>
                            <div class="cut"></div>
                            <label for="name" class="placeholder">Name</label>
                        </div>
                        <div class="input-container ic2">
                            <input id="email" name='email'  class="input" type="text" required />
                            <div class="cut"></div>
                            <label for="email" class="placeholder">Email</label>
                        </div>
                        <div class="input-container ic2">
                            <input id="subject" name='subject' class="input" type="text" required />
                            <div class="cut cut-short"></div>
                            <label for="subject" class="placeholder">Subject</label>
                        </div>
                        <div class="input-container ic2">
                            <textarea id="comment" name='message' class="input textarea" type="text" required/>
                            <div class="cut cut-short"></div>
                            <label for="comment" class="placeholder">Message</label>
                        </div>
                        <button type="text" class="submit">submit</button>
                    </form>
                </div>

            </div>

        </div>
    );
};

export default Contact;