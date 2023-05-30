import './Footer.scss';
import { socialMedia } from '../../constants';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className="copyright">
        <p>Copyright &copy; 2023 All rights reserved | Made by <span>Humberto Navarro</span></p>
      </div>

      <div className="follow-me">
        <h4>Follow Me</h4>
        <div className="stick"></div>
        <div className="footer-social-icons">
          {socialMedia.map((socialIcon, idx) => 
            <div key={idx}>
              {socialIcon}
            </div>
          )}
        </div>
      </div>
    </footer>
  )
}

export default Footer