import React from 'react'

function Skills() {
  return (
    <section className="skills" id="skills">
        <div className="container">
        <p>Skills</p>
        <div className='skills-grid'>
            <div className='skillset ui-ux'>
                <h4 className='skillset-title'>UX/UI Design</h4>
                <ul className='skillset-list'>
                    <li className='skillset-list-item'><span className='text-bold'><span className='fa-solid fa-check'></span>Wireframing and Prototyping</span><span>Proficient in creating sketches, wireframes, and interactive prototypes to visualize and validate design concepts.</span></li>
                    <li className='skillset-list-item'><span className='text-bold'><span className='fa-solid fa-check'></span>Visual Design</span><span>Skillful in developing visually engaging digital products, including layout design, color schemes, typography selection, and graphics creation.</span></li>
                    <li className='skillset-list-item'><span className='text-bold'><span className='fa-solid fa-check'></span>Interaction Design</span><span>Expertise in defining user interactions through the creation of user flows, navigation systems, and interactive elements.</span></li>
                    <li className='skillset-list-item'><span className='text-bold'><span className='fa-solid fa-check'></span>Collaboration</span><span>Collaborating effectively with cross-functional teams, including developers, product managers, and stakeholders, to ensure the seamless implementation of design concepts that align with project objectives.</span></li>
                </ul>
            </div>
            <div className='skillset front-end'>
                <h4 className='skillset-title'>Front-End Development</h4>
                <ul className='skillset-list'>
                    <li className='skillset-list-item'><span className='text-bold'><span className='fa-solid fa-check'></span>Web Development</span><span>Proficient in coding and building interactive and visually appealing websites using HTML, CSS, and JavaScript.</span></li>
                    <li className='skillset-list-item'><span className='text-bold'><span className='fa-solid fa-check'></span>Responsive Design</span><span>Skilled in creating responsive web designs that ensure optimal user experiences across various devices and screen sizes.</span></li>
                    <li className='skillset-list-item'><span className='text-bold'><span className='fa-solid fa-check'></span>Frameworks and Libraries</span><span>Experience working with frontend frameworks and libraries such as React, Angular, and Vue.js to streamline development and enhance user interactivity.</span></li>
                    <li className='skillset-list-item'><span className='text-bold'><span className='fa-solid fa-check'></span>Cross-Browser Compatibility</span><span>Ensuring that web applications are compatible with various web browsers, addressing compatibility issues, and optimizing performance.</span></li>
                    
                </ul>
            </div>
            </div> 
        </div>
        </section>
  )
}

export default Skills