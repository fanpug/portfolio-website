import './Portfolio.scss';
import { workNavs, workImages } from '../../constants';
import { FiGithub, FiEye } from 'react-icons/fi';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Portfolio = () => {
  const [tab, setTab] = useState({ name: "all" });
  const [works, setWorks] = useState([]);
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (tab.name === "all") {
      setWorks(workImages)
    } else {
      const newWork = workImages.filter((workImage) => workImage.category.toLowerCase() === tab.name);
      setWorks(newWork);
    }
  }, [tab])

  const activeTab = (e, idx) => {
    setTab({ name: e.target.textContent.toLowerCase() });
    setActive(idx);
  }

  return (
    <section className='container' id='portfolio'>
      <motion.div 
        className="title"
        initial={{
          opacity: 0
        }}
        whileInView={{
          y: [-50, 0],
          opacity: 1
        }}
      >
        <span>My Work</span>
        <h1>Awesome Projects</h1>
      </motion.div>

      <motion.div 
        className="buttons"
        initial={{
          opacity: 0
        }}
        whileInView={{
          y: [-50, 0],
          opacity: 1
        }}
      >
        {workNavs.map((workNav, idx) =>
          <button
            key={idx}
            onClick={(e) => activeTab(e, idx)}
            className={`${active === idx ? "active" : ""}`}
          >
            {workNav}
          </button>
        )}
      </motion.div>

      <motion.div 
        className="workImages"
        initial={{
          x: 0,
          opacity: 0
        }}
        whileInView={{
          x: [-250, 0],
          opacity: 1
        }}
        transition={{
          duration: 1
        }}
      >
        {works.map((workImage) =>
          <div className="workImage" key={workImage.id}>

            <img src={workImage.img} alt={workImage.name} />
            <motion.div
              initial={{
                opacity: 0
              }}

              whileHover={{
                opacity: [0, 0.8]
              }}

              transition={{
                duration: 0.2,
                ease: "easeInOut"
              }}
              className="hoverLayer"
            >
              <motion.a
                whileInView={{
                  scale: [0, 1]
                }}

                whileHover={{
                  scale: [1, 1.1]
                }}

                transition={{
                  duration: 0.3
                }}
                href="#"
              >
                <FiGithub />
              </motion.a>

              <motion.a
                whileInView={{
                  scale: [0, 1]
                }}

                whileHover={{
                  scale: [1, 1.1]
                }}

                transition={{
                  duration: 0.3
                }}
                href="#"
              >
                <FiEye />
              </motion.a>
            </motion.div>
          </div>
        )}
      </motion.div>
      
      <motion.div 
        className="talk"
        initial={{
          x: 0,
          opacity: 0
        }}
        whileInView={{
          x: [250, 0],
          opacity: 1
        }}
        transition={{
          duration: 1
        }}
      >
        <div className="talk_left">
          <h3>so let's talk about <br /> <span>your next project</span></h3>
        </div>
        <motion.a
          href="#contact"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
          className="talk_right"
        >
          Contact Me
        </motion.a>
      </motion.div>
    </section>
  )
}

export default Portfolio