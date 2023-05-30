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
        <span>Get in touch</span>
        <h1>Contact me</h1>
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
          <h3>Just Say Hi!</h3>
          <p className='contact-text'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem distinctio dolor quisquam eveniet quo praesentium nulla, earum delectus expedita ut enim pariatur facilis quibusdam minima vitae aliquam a nostrum deleniti?
          </p>

          {contacts.map((contact) => 
            <div 
              className="contact-left"
              key={contact.id}
            >
              <div className="contact-icon">{contact.icon}</div>
              <p>{contact.infoText}</p>
            </div>
          )}
          <div className="contact-social-icons">
            {socialMedia.map((socialIcon, idx) => 
              <div key={idx}>{socialIcon}</div>
            )}
          </div>
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
          <h3>Get In Touch</h3>
          <div className="row">
            <input type="text" placeholder='First Name'/>
          </div>
          <div className="row">
            <input type="text" placeholder='Last Name'/>
          </div>
          <div className="row">
            <input type="email" placeholder='Email'/>
          </div>
          <div className="row">
            <textarea placeholder='Message'></textarea>
          </div>
          <motion.div 
            className="btn"
            whileHover={{
              scale: 1.1
            }}
            transition={{
              duration: 0.2
            }}
          >
            <a href="#">Send</a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact