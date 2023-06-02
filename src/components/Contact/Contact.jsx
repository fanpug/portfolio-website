import './Contact.scss';
import { contacts, socialMedia } from '../../constants';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <section className='container' id='contact'>
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
        <span>Ponte en contacto</span>
        <h1>Contáctame</h1>
      </motion.div>

      <div className="contact-form">
        <motion.div 
          className="contact-left-container"
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
          <h3 className='contact-title'>¡Mándame un correo!</h3>

          {contacts.map((contact) => 
            <div 
              className="contact-left"
              key={contact.id}
            >
              <a 
                href={`mailto:${contact.infoText}`} 
                className='contact-icon'
              >
                {contact.icon}
              </a>
              <a 
                href={`mailto:${contact.infoText}`}
                className='contact-text'
              >
                {contact.infoText}
              </a>
            </div>
          )}
        </motion.div>
        
        <motion.div 
          className="contact-right-container"
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
          <h3 className='contact-title'>¡O a través de redes sociales!</h3>
          <div className="contact-social-icons">
            {socialMedia.map((icon, idx) => 
              <a href={icon.link} key={idx} target='_blank'>
                {icon.icon}
              </a>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact