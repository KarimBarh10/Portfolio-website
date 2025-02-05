import { useEffect, useState } from 'react';
import Loader from 'react-loaders';
import { Link } from 'react-router-dom';
import LogoE from '../../assets/images/E.png';
import AnimatedLetters from '../AnimatedLetters';
import './index.scss';
import Logo from './Logo';

const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
    const nameArray = "Karim Barhmed, ".split("");
    const jobArray = "Full Stack Developer.".split("");

    useEffect(() => {
        const timerId = setTimeout(() => {
          setLetterClass('text-animate-hover');
        }, 4000);
      
        return () => {
          clearTimeout(timerId);
        };
      }, []);

    return(
      <>
        <div className="container home-page">
            <div className="text-zone">
                <h1>
                <span className={`${letterClass} _8`}>H</span>
                <span className={`${letterClass} _9`}>i</span>
                <br /> 
                <span className={`${letterClass} _10`}>I</span>
                <span className={`${letterClass} _11`}>'m</span>
                <img src={LogoE} alt="developer" />
                <AnimatedLetters letterClass={letterClass} strArray={nameArray} idx={12} />
                <br /> 
                <AnimatedLetters letterClass={letterClass} strArray={jobArray} idx={15} /> 
                </h1>
                <h2>Software Engineering, 2024 at Western Governors University</h2>
                
                {/* Updated buttons */}
                <div className="button-container">
                    <Link to="/contact" className="flat-button">CONTACT ME</Link>
                    <a 
                        href="/portfolio/karim_barhmed_resume.pdf" 
                        className="flat-button"
                        target="_blank" 
                        rel="noopener noreferrer"
                    >
                        DOWNLOAD RESUME
                    </a>
                </div>
            </div>
            <Logo className="Home"/>
        </div>
        <Loader type="pacman" />
      </>
    )
}

export default Home;
