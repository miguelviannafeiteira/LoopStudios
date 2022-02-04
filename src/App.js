import './App.css';
import facebook from './images/icon-facebook.svg';
import instagram from './images/icon-instagram.svg';
import twitter from './images/icon-twitter.svg';
import pinterest from './images/icon-pinterest.svg';
import vr from './images/desktop/image-interactive.jpg';
import earth from './images/desktop/image-deep-earth.jpg';
import night from './images/desktop/image-night-arcade.jpg';
import soccer from './images/desktop/image-soccer-team.jpg';
import grid from './images/desktop/image-grid.jpg';
import aboveVr from './images/desktop/image-from-above.jpg';
import pocket from './images/desktop/image-pocket-borealis.jpg';
import curiosity from './images/desktop/image-curiosity.jpg';
import fisheye from './images/desktop/image-fisheye.jpg';

function App() {
  return (
    <div className="container">
      <header className="header-bg">
        <section className="navegation">
          <nav>
            <a className="home" href="./">
              loopstudios
            </a>
            <ul>
              <li>
                <a href="./">About</a>
              </li>
              <li>
                <a href="./">Careers</a>
              </li>
              <li>
                <a href="./">Events</a>
              </li>
              <li>
                <a href="./">Products</a>
              </li>
              <li>
                <a href="./">Support</a>
              </li>
            </ul>
          </nav>
          <div className="title">
            <h2>IMMERSIVE EXPERIENCES THAT DELIVER</h2>
          </div>
        </section>
      </header>

      <section className="container-vr">
        <img src={vr} alt="" />
        <div className="text-vr">
          <h1>THE LEADER IN INTERACTIVE VR</h1>
          <p>
            Founded in 2011, Loopstudios has been producing world-class virtual
            reality projects for some of the best companies around the globe.
            Our award-winning creations have transformed businesses through
            digital experiences that bind to their brand.
          </p>
        </div>
      </section>

      <div className="creation">
        <h1>OUR CREATIONS</h1>
        <button>SEE ALL</button>
      </div>

      <section className="container-creations">
        <a href="./">
          <div>
            <img src={earth} alt="" />
            <h3>DEEP EARTH</h3>
          </div>
        </a>
        <a href="./">
          <div>
            <img src={night} alt="" />
            <h3>NIGHT ARCADE</h3>
          </div>
        </a>
        <a href="./">
          <div>
            <img src={soccer} alt="" />
            <h3>SOCCER TEAM VR</h3>
          </div>
        </a>
        <a href="./">
          <div>
            <img src={grid} alt="" />
            <h3>THE GRID</h3>
          </div>
        </a>
        <a href="./">
          <div>
            <img src={aboveVr} alt="" />
            <h3>FROM UP ABOVE VR</h3>
          </div>
        </a>
        <a href="./">
          <div>
            <img src={pocket} alt="" />
            <h3>POCKET BOREALIS</h3>
          </div>
        </a>
        <a href="./">
          <div>
            <img src={curiosity} alt="" />
            <h3>THE CURIOSITY</h3>
          </div>
        </a>
        <a href="./">
          <div>
            <img src={fisheye} alt="" />
            <h3>MAKE IT FISHEYE</h3>
          </div>
        </a>
      </section>

      <footer className="footer-bg">
        <section className="footer">
          <div className="first-line">
            <a href="./">loopstudios</a>
            <div className="redes">
              <a href="./">
                <img src={facebook} alt="" />
              </a>
              <a href="./">
                <img src={instagram} alt="" />
              </a>
              <a href="./">
                <img src={pinterest} alt="" />
              </a>
              <a href="./">
                <img src={twitter} alt="" />
              </a>
            </div>
          </div>

          <div className="second-line">
            <ul>
              <li>
                <a href="./">About</a>
              </li>
              <li>
                <a href="./">Careers</a>
              </li>
              <li>
                <a href="./">Events</a>
              </li>
              <li>
                <a href="./">Products</a>
              </li>
              <li>
                <a href="./">Support</a>
              </li>
            </ul>
            <p>₢ 2021 Loopstudios. All rights reserved.</p>
          </div>
        </section>
      </footer>
    </div>
  );
}

export default App;
