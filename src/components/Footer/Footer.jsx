import './Footer.scss';
import { socialMedia } from '../../constants';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <motion.footer 
      className='footer'
      initial={{
        opacity: 0
      }}
      whileInView={{
        opacity: 1
      }}
      transition={{
        duration: 1.5
      }}
    >
      <div className="copyright">
        <p>Copyright &copy; 2023 All rights reserved | Made by <a href='https://github.com/fanpug' target='_blank'>Alex Navarro</a></p>
      </div>

      <div className="follow-me">
        <h4>Follow Me</h4>
        <div className="stick"></div>
        <div className="footer-social-icons">
          {socialMedia.map((icon, idx) => 
            <a href={icon.link} key={idx} target='_blank'>
              {icon.icon}
            </a>
          )}
        </div>
      </div>
    </motion.footer>
  )
}

export default Footer