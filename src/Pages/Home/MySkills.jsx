import React from 'react';
import data from '../../data/index.json';

export default function MySkills() {
  return (
    <div id="Skills">
      <section className="skills--section" id="mySkills">
        <div className="portfolio--container">
          
          <h2 className="openingskills--section--">portfolio</h2>
          <h2 className="skills--section--heading">Knowledge of:</h2>
        </div>

        <div className="skills--section--container">
          {data?.skills?.map((item, index) => (
            <div key={index} className="skills--section--card">
              <div className="skills--section--img">
              <a href={item.url} target="_blank" rel="noopener noreferrer">
                <img src={item.src} alt={item.title} />
                </a>
              </div>
              <div className="skills--section--card--content">
                <h3 className="skills--section--title">{item.title}</h3>
                <p className="skills--section--description">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
