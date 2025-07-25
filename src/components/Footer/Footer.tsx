import { Container } from './styles'
import reactIcon from '../../assets/react-icon.svg'
import linkedin from '../../assets/linkedin.svg'
import githubIcon from '../../assets/github.svg'
import whatsapp from '../../assets/whatsapp.svg'
import instagramIcon from '../../assets/instagram.svg'
import mailIcon from '../../assets/icons8-gmail-logo.svg'

export function Footer() {
  const date = new Date();
  const year = date.getFullYear();
 
  return (
    <Container className="footer">
     <span>© {year} Biswajit Portfolio | Built with passion and code.








</span>
      <div>
        <p>
          This Website was made with <img src={reactIcon} alt="React" />
          {/* <span>❤️</span> */}
        </p>
      </div>
      <div className="social-media">
        <a
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
        <a
          href="mailto:bmuduli126@gmail.com"
          target="_blank"
          rel="noreferrer"
        >
          <img src={mailIcon} alt="telegram" />
        </a>
        <a
          href="https://www.instagram.com/coder_biswajit/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={instagramIcon} alt="Instagram" />
        </a>
      </div>
    </Container>
  )
}
