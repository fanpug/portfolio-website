import { useState } from "react";
//import { icons, experiences, flavorNumbers } from "../../constants";
import { icons, experiences } from "../../constants";
import { motion } from "framer-motion";
import "./Skills.scss";

const Skills = () => {
  const [activeButton, setActiveButton] = useState(1);

  return (
    <section className="container" id="skills">
      <motion.div 
        className='title'
        initial={{
          opacity: 0
        }}
        whileInView={{
          y: [-50, 0],
          opacity: 1
        }}
      >
        <span>What I Expert</span>
        <h1>Skills And Experience</h1>
      </motion.div>

      <motion.div 
        className="select"
        initial={{
          opacity: 0
        }}
        whileInView={{
          y: [-50, 0],
          opacity: 1
        }}
      >
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
      </motion.div>

      <motion.div 
        className='skills'
        initial={{
          opacity: 0
        }}
        whileInView={{
          y: [-50, 0],
          opacity: 1
        }}
      >
        {activeButton === 1 && icons.map((icon, idx) => 
          <div key={idx} className='icon'>
            {icon}
          </div>
        )}
      </motion.div>

      <motion.div 
        className='experiences'
        initial={{
          opacity: 0
        }}
        whileInView={{
          y: [-50, 0],
          opacity: 1
        }}
      >
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
      </motion.div>

      {/* <motion.div 
        className='flavor-numbers'
        initial={{
          opacity: 0
        }}
        whileInView={{
          y: [-50, 0],
          opacity: 1
        }}
      >
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
      </motion.div> */}
    </section>
  );
};

export default Skills;
