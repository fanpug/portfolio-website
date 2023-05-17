import './About.scss';
import { portfolio } from '../../assets';
import { bios } from '../../constants';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section className='container' id='about'>
      <div className='title'>
        <span>Who Am I?</span>
        <h1>About Me</h1>

      </div>
      <div className="about-container">
        <div className="about-left">
          <img src={portfolio} alt="About image" />
        </div>

        <div className="about-right">
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil sit nam itaque debitis fugit accusantium officia praesentium iusto reprehenderit soluta ad, delectus dolor voluptate. Id harum voluptatem consequuntur commodi sunt.
          </p>
          {bios.map((bio) => {
            return (
              <div className='bio' key={bio.id}>
                <span className='bioKey'>{bio.icon}{bio.key}</span>
                <span className='bioValue'>{bio.value}</span>
              </div>
            );
          })}
          <motion.a href="#" download=""
            whileHover={{scale: 1.1}}
            transition={{duration: 0.3}}
          >
            Download Resume
          </motion.a>
        </div>
      </div>
    </section>
  )
}

export default About