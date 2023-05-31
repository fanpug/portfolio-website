import './Hero.scss';
import { portfolio } from '../../assets';
import { motion } from 'framer-motion';

const Hero = () => {
  const moveVariants = {
    animation: {
      y: [0, -15],
      transition: {
        repeat: Infinity,
        repeatType: "mirror",
        duration: 1.5,
        delay: 1,
        ease: "easeInOut"
      }
    }
  }

  return (
    <motion.section 
      className='container container-flex' 
      id='home'
      initial={{
        y:-15,
        opacity: 0
      }}
      animate={{
        y: 0,
        opacity: 1
      }}
      transition={{
        duration: 1,
        delay: 0.2
      }}
    >
      <div className="profile">
        <img src={portfolio} alt="Portfolio image" />
      </div>
      <div className="profile-text">
        <h3 className='name'>
          Hi, I'm <span>Alex Navarro</span>
        </h3>  
        <h4 className='job'>Web Developer</h4>
        <p className='text'>
          Passionate <br />
          to craft innovative <br />
          web products.
        </p>
        <motion.a 
          href="#contact"
          variants={moveVariants}
          animate="animation"
          whileHover={{scale: 1.1}}
          transition={{duration: 0.3}}
        >
          Connect With Me
        </motion.a>
        <div className="web">Web Developer</div>
        <div className="ui">UI/UX Designer</div>
        <div className="freelance">Front-end</div>
      </div>
    </motion.section>
  )
}

export default Hero