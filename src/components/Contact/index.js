import Loader from "react-loaders";
import "./index.scss";
import AnimatedLetters from "../AnimatedLetters";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
    const [letterClass, setLetterClass] = useState('text-animate');

    useEffect(() => {
        const timerId = setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 3000);
      
        return () => {
            clearTimeout(timerId);
        };
    }, []);

    return (
        <>
            <div className="container contact-page">
                <div className="text-zone">
                    <h1>
                        <AnimatedLetters letterClass={letterClass} strArray={"Contact me".split("")} idx={15} />
                    </h1>
                    <p>
                        Thank you for your interest in getting in touch!
                        <br />
                        <br />
                        I prioritize open communication and am always happy to answer questions, receive feedback, or explore collaboration opportunities. Please feel free to get in touch.
                    </p>
                    <div className="contact-links">
                        <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/karimbarhmed/">
                            <FontAwesomeIcon icon={faLinkedin} class="icon" color="#4d4d4e" />
                        </a>
                        <a target="_blank" rel="noreferrer" href="mailto:kbarhme@wgu.edu">
                            <FontAwesomeIcon icon={faEnvelope} class="icon" color="#4d4d4e" />
                        </a>
                    </div>
                </div>
            </div>
            <Loader type="pacman" />
        </>
    );
}

export default Contact;
