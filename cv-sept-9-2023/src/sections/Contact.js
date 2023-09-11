import React from 'react'

function Contact() {
  return (
    <section className="contact" id="contact">
        <div className="container container-small">
        <p>Contact</p>
        <p className='contact-message'>
        I welcome the opportunity to collaborate on exciting projects or explore new career possibilities. Whether you're seeking a skilled Frontend Developer, a creative UI/UX Designer, or a versatile professional who can wear both hats, let's connect and discuss how I can contribute to your success. Feel free to reach out, and let's bring your digital visions to life!
        </p>
        <form>
            <div class="form-input">
                <label>Name</label>
                <input type="text" placeholder={"Jane Doe"} name="name"/>
            </div>
            <div class="form-input">
                <label>Email</label>
                <input type="email" placeholder={"you@you.com"} name="email" />
            </div>
            <div class="form-input">
                <label>Message</label>
                <textarea rows="3" placeholder='Your message...'></textarea>
            </div>
            <button type='submit' className='submit button'>Send Message</button>
        </form>
        </div>
        </section>
  )
}

export default Contact