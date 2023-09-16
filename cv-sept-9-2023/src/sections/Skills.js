import React from "react";

function Skills() {
  return (
    <section className="skills" id="skills">
      <div className="container">
        <p>Skills</p>
        <div className="skills-grid">
          <div className="skillset ui-ux">
            <h4 className="skillset-title">UX/UI Design</h4>
            <ul className="skillset-list">
              <li className="skillset-list-item">
                  <span className="fa-solid fa-check"></span>
                  <div className="text-content">
                <span className="text-bold">
                Wireframing and Prototyping
                </span>
                <span class="skill-description">
                  Proficient in creating sketches, wireframes, and interactive
                  prototypes to visualize and validate design concepts.
                </span>
                </div>
              </li>
              <li className="skillset-list-item">
                  <span className="fa-solid fa-check"></span>
                  <div className="text-content">
                <span className="text-bold">
                Visual Design
                </span>
                <span class="skill-description">
                  Skillful in developing visually engaging digital products,
                  including layout design, color schemes, typography selection,
                  and graphics creation.
                </span>
                </div>
              </li>
              <li className="skillset-list-item">
                  <span className="fa-solid fa-check"></span>
                  <div className="text-content">
                <span className="text-bold">
                Interaction Design
                </span>
                <span class="skill-description">
                  Expertise in defining user interactions through the creation
                  of user flows, navigation systems, and interactive elements.
                </span>
                </div>
              </li>
              <li className="skillset-list-item">
                  <span className="fa-solid fa-check"></span>
                  <div className="text-content">
                <span className="text-bold">
                Collaboration
                </span>
                <span class="skill-description">
                  Collaborating effectively with cross-functional teams,
                  including developers, product managers, and stakeholders, to
                  ensure the seamless implementation of design concepts that
                  align with project objectives.
                </span>
                </div>
              </li>
            </ul>
          </div>
          <div className="skillset front-end">
            <h4 className="skillset-title">Front-End Development</h4>
            <ul className="skillset-list">
              <li className="skillset-list-item">
                  <span className="fa-solid fa-check"></span>
                  <div className="text-content">
                <span className="text-bold">
                Web Development
                </span>
                <span class="skill-description">
                  Proficient in coding and building interactive and visually
                  appealing websites using HTML, CSS, and JavaScript.
                </span>
                </div>
              </li>
              <li className="skillset-list-item">
                  <span className="fa-solid fa-check"></span>
                  <div className="text-content">
                <span className="text-bold">
                Responsive Design
                </span>
                <span class="skill-description">
                  Skilled in creating responsive web designs that ensure optimal
                  user experiences across various devices and screen sizes.
                </span>
                </div>
              </li>
              <li className="skillset-list-item">
                  <span className="fa-solid fa-check"></span>
                  <div className="text-content">
                <span className="text-bold">
                Frameworks and Libraries
                </span>
                <span class="skill-description">
                  Experience working with frontend frameworks and libraries such
                  as React, Angular, and Vue.js to streamline development and
                  enhance user interactivity.
                </span>
                </div>
              </li>
              <li className="skillset-list-item">
                  <span className="fa-solid fa-check"></span>
                  <div className="text-content">
                <span className="text-bold">
                Cross-Browser Compatibility
                </span>
                <span class="skill-description">
                  Ensuring that web applications are compatible with various web
                  browsers, addressing compatibility issues, and optimizing
                  performance.
                </span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
