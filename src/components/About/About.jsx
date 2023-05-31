import './About.scss';
import { portfolio, curriculum } from '../../assets';
import { bios } from '../../constants';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section className='container' id='about'>
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
        <span>Who Am I?</span>
        <h1>About Me</h1>
      </motion.div>
      <div className="about-container">
        <motion.div
          className="about-left"
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
          <img src={portfolio} alt="About image" />
        </motion.div>

        <motion.div
          className="about-right"
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
          <p>
            I am a computer science engineering student, expected to graduate in September 2023.

            <br /> <br />

            My goal is to grow and make an impact in the industry. I aim to continue learning and growing professionally by taking development courses and training to stay up-to-date with the latest technologies and industry trends.
          </p>
          {bios.map((bio) => {
            if (bio.key === "Email") {
              return (
                <div className='bio' key={bio.id}>
                  <span className='bioKey'>{bio.icon}{bio.key}</span>
                  <a href={`mailto:${bio.value}`} className='bioValue'>{bio.value}</a>
                </div>
              );
            } else {
              return (
                <div className='bio' key={bio.id}>
                  <span className='bioKey'>{bio.icon}{bio.key}</span>
                  <span className='bioValue'>{bio.value}</span>
                </div>
              );
            }
          })}
          <motion.a
            href={curriculum}
            download="Curriculum-Humberto"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          >
            Download Resume
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

export default About