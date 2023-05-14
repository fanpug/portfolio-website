import { useState } from 'react';
import './Navbar.scss';
import { navLinks, socialMedia } from '../../constants';
import { HiMenuAlt4, HiX } from 'react-icons/hi';
import { animate, motion } from 'framer-motion';

const Navbar = () => {
  const [menuToggle, setMenuToggle] = useState(false);
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

  return (
    <header className='header'>
      <nav className='nav-container'>
        <div className='logo'>
          <h3>HN</h3>
        </div>

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
              <div key={index}>
                {icon}
              </div>
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
    </header>
  )
}

export default Navbar