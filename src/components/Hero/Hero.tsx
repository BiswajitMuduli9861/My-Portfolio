import { BrowserRouter } from "react-router-dom"
import { Container } from "./styles"
import { Fade } from 'react-awesome-reveal';
import Illustration from "../../assets/illustration.svg"
import { NavHashLink } from "react-router-hash-link"
import linkedin from '../../assets/linkedin.svg'
import githubIcon from '../../assets/github.svg'
import whatsapp from '../../assets/whatsapp.svg'
import Hello from '../../assets/Hello.gif'
import mailIcon from '../../assets/icons8-gmail-logo.svg'
export function Hero() {
  return (
    <Container id="home">
      <div className="hero-text">
        <Fade direction="left">
          <p>Hello <img src={Hello} alt="Hello" width="20px"/>, I'm</p>
        </Fade>
        <Fade direction="left" delay={100}>
          <h1>Biswajit Muduli</h1>
        </Fade>
        <Fade direction="left" delay={100}>
          <h3>MERN Stack Developer</h3>
        </Fade>
        <Fade direction="left" delay={100}>
          <p className="small-resume">Fresher</p>
        </Fade>
        <Fade direction="left" delay={100}>
          <BrowserRouter>
            <NavHashLink smooth to="#contact" className="button">Contact</NavHashLink>
          </BrowserRouter>
        </Fade>
        <Fade direction="left" delay={100}>
      <div className="social-media"><a
        href="https://www.linkedin.com/in/biswajit-muduli-9a85a4267/"
        target="_blank"
        rel="noreferrer"
      >
        <img src={linkedin} alt="Linkedin" />
      </a>
        <a
          href="https://github.com/BiswajitMuduli9861"
          target="_blank"
          rel="noreferrer"
        >
          <img src={githubIcon} alt="GitHub" />
        </a>
        <a
          href="https://api.whatsapp.com/send/?phone=%2B919861591502&text=Hello+Biswajit"
          target="_blank"
          rel="noreferrer"
        >
          <img src={whatsapp} alt="Whatsapp" />
        </a>
        <a href="mailto:bmuduli126@gmail.com" target="_blank" rel="noopener noreferrer">
    <img src={mailIcon} alt="E-mail" />
  </a>
</div>
        </Fade>
      </div>
      <div className="hero-image">
        <Fade direction="left" delay={100}>
          <img src={Illustration} alt="Ilustração" />
        </Fade>
      </div>
    </Container>
  )
}