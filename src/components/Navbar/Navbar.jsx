import './Navbar.scss';
import { navLinks, socialMedia } from '../../constants';

const Navbar = () => {
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
      </nav>
    </header>
  )
}

export default Navbar