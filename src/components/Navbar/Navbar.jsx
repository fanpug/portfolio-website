import { useEffect, useState } from 'react';
import './Navbar.scss';
import { navLinks, socialMedia } from '../../constants';
import { HiMenuAlt4, HiX } from 'react-icons/hi';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [menuToggle, setMenuToggle] = useState(false);
  const [scroll, setScroll] = useState(false);

  const menuVariants = {
    hidden: {
      scale: 0
    },
    visible: {
      scale: 50,
      transition: {
        type: "tween",
        duration: 0.1,
      },
    },
  }
  
  const navLinkVariants = {
    hidden: {
      display: "none",
      opacity: 0,
    },
    visible: {
      opacity: 1,
      y: -30,
      transition: {
        delay: 0.1,
      },
    },
  }

  useEffect(() => {
    window.addEventListener("scroll", () => setScroll(window.scrollY > 10));
  }, [])

  return (
    <motion.header 
      initial={{
        y:-25
      }}
      animate={{
        y:-5
      }}
      transition={{
        duration: 0.4
      }}
      className={scroll ? "header active" : "header"}
    >
      <nav className='nav-container'>
        <a href='#' className='logo'>
          <h3>HN</h3>
        </a>

        <ul className='nav-links'>
          {navLinks.map((navLink, index) => (
            <li key={navLink.id}>
              <a href={`#${navLink.id}`}>
                {navLink.title}
              </a>
            </li>
          ))}
        </ul>

        <div className='social-icons'>
            {socialMedia.map((icon, index) => (
              <a href={icon.link} key={index} target='_blank'>
                {icon.icon}
              </a>
            ))}
        </div>

        {/* Mobile Menu */}
        <div className="menu">
          <HiMenuAlt4 onClick={() => setMenuToggle(true)} />
        </div>

        <motion.div className="closeMenu"
          variants={menuVariants}
          initial="hidden"
          animate={menuToggle ? "visible" : "hidden"}
        ></motion.div>

        <motion.div className="menuX"
          variants={navLinkVariants}
          animate={menuToggle ? "visible" : "hidden"}
        >
          <HiX onClick={() => setMenuToggle(false)} />
          {navLinks.map((navLink, index) => (
            <li key={navLink.id}>
              <a href={`#${navLink.id}`} onClick={() => setMenuToggle(false)}>
                {navLink.title}
              </a>
            </li>
          ))}
        </motion.div>
      </nav>
    </motion.header>
  )
}

export default Navbar