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
        <span>¿Quién soy?</span>
        <h1>Acerca de mí</h1>
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
          Soy un estudiante de ingeniería en ciencias computacionales, graduación esperada en Septiembre 2023.

            <br /> <br />

            Mi objetivo es crecer y hacer un impacto en la industria. Seguir aprendiendo y creciendo profesionalmente, tomando cursos de desarrollo y capacitación para mantenerse actualizado con las últimas tecnologías y tendencias de la industria.
            Hablo inglés y español fluido.
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
            Descargar Curriculum
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

export default About