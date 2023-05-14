import './Hero.scss';
import { portfolio } from '../../assets';

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
        <a href="contact">connect with me</a>
        <div className="web">Web Developer</div>
        <div className="ui">UI/UX Designer</div>
        <div className="freelance">Freelancer</div>
      </div>
    </section>
  )
}

export default Hero