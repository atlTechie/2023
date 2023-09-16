import React from 'react'

function Home() {
  return (
    <section className="home" id="home">
        <div className="container">
        <div className='message-wrapper'>
            <h1>Crafting Seamless <span className='highlighted-text'> Digital Experiences</span></h1>
            <p className='byline'><span class="text-bold">E. Wright</span> | Frontend Developer & UI/UX Designer</p>
            <p>As a Frontend Developer and UI/UX Designer, I'm dedicated to seamlessly blending technology and design to create captivating, user-friendly, and engaging web interfaces.</p>
            <div className='button-group'>
                <button className='button button-primary'>View Work</button>
                <button className='button button-outline-primary'>Contact Me</button>
            </div>
        </div>
        <div className='img-wrapper home-bg-img'>
            <img src="https://images.pexels.com/photos/5326953/pexels-photo-5326953.jpeg?auto=compress&cs=tinysrgb" />
        </div>
        </div>
        </section>
  )
}

export default Home