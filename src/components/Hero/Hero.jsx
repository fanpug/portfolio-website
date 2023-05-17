import './Hero.scss';
import { portfolio } from '../../assets';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className='container' id='home'>
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
        <motion.a href="#contact"
            whileHover={{scale: 1.1}}
            transition={{duration: 0.3}}
        >
          Connect With Me
        </motion.a>
        <div className="web">Web Developer</div>
        <div className="ui">UI/UX Designer</div>
        <div className="freelance">Freelancer</div>
      </div>
    </section>
  )
}

export default Hero