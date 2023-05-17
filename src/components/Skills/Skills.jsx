import { useState } from "react";
import { icons, experiences, flavorNumbers } from "../../constants";
import "./Skills.scss";

const Skills = () => {
  const [activeButton, setActiveButton] = useState(1);

  return (
    <section className="container" id="skills">
      <div className="title">
        <span>What I Expert</span>
        <h1>Skills And Experience</h1>
      </div>

      <div className="select">
        <button
          onClick={() => setActiveButton(1)}
          className={activeButton === 1 ? "active" : ""}
        >
          Skills
        </button>

        <button
          onClick={() => setActiveButton(2)}
          className={activeButton === 2 ? "active" : ""}
        >
          Experience
        </button>
      </div>

      <div className='skills'>
        {activeButton === 1 && icons.map((icon, idx) => 
          <div key={idx} className='icon'>
            {icon}
          </div>
        )}
      </div>

      <div className='experiences'>
        {activeButton === 2 && experiences.map((experience) => 
          <div key={experience.id} className='experience'>
            <span>
              {experience.year}
            </span>
            <div className='position'>
              <h3>{experience.position}</h3>
              <p>{experience.company}</p>
            </div>
          </div>
        )}
      </div>

      <div className='flavor-numbers'>
        {flavorNumbers.map((number) => 
          <div key={number.id} className='flavor-number'>
            <div className='number'>
              {number.number}
            </div>
            <div className="flavor-name">
              {number.itemName}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Skills;
