import React, { useState } from 'react';

import educationData from '../../data/index.json';
import hobbiesData from '../../data/index.json';
import personalityData from '../../data/index.json';
import softwareData from '../../data/index.json';

export default function Resume() {
  const [showResume, setShowResume] = useState(false);

  const education = educationData.education;
  const softwareSkills = softwareData.software;
  const personalitySkills = personalityData.Personality;
  const hobbiesSkills = hobbiesData.Hobbies;

  // Function to toggle the display of the resume
  const toggleResumeDisplay = () => {
    setShowResume(!showResume);
  };

  return (
    <section id="Resume" className="container">
      <h1 className="resume--title">My Resume</h1>
      <button className="button--click" onClick={toggleResumeDisplay}>Click Here To Display My Resume</button>
      {showResume && ( // Conditional rendering of my resume
        <iframe
          src="img/KatuBirabwaCV (2025)..,.pdf"
          title="Resume"
          width="100%"
          height="900px"

        ></iframe>
      )}

      <div className="highlighted-info-container">
        <div className="container-wrapper">
          <div className="education-container">
            <h2>Education</h2>
            <br />
            {education.map(record => (
              <div className="box" key={record.id}>
                <br />
                <strong>{record.institution}</strong>
                <br />
                {record.degree}
                <br />
                {record.startDate} - {record.endDate}
                <br />
              </div>
            ))}
          </div>

          <div className="skills-container">
            <h2>Software Skills</h2>
            <ul>
              {softwareSkills.map(skill => (
                <li key={skill.id}>{skill.name}</li>
              ))}
            </ul>
          </div>

          <div className="Personality--container">
            <h2>Personality</h2>
            <ul>
              {personalitySkills.map(skill => (
                <li key={skill.id}>{skill.name}</li>
              ))}
            </ul>
          </div>

          <div className="hobbies--container">
            <h2>Hobbies</h2>
            <ul>
              {hobbiesSkills.map(skill => (
                <li key={skill.id}>{skill.name}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
