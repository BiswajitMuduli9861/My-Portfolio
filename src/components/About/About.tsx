import { Container } from "./styles";
import Biswajit from "../../assets/profileImgage.jpg";
import htmlIcon from "../../assets/html-icon.svg";
import cssIcon from "../../assets/css-icon.svg";
import jsIcon from "../../assets/js-icon.svg";
import nodeIcon from "../../assets/node-icon.svg";
import reactIcon from "../../assets/react-icon.svg";
import boostrapIcon from "../../assets/bootstrap-icon.svg";
import nextJsIcon from "../../assets/nextjs.png";
import mongoDbIcon from "../../assets/icons8-mongodb.svg";
import reduxToolkitIcon from "../../assets/icons8-redux.svg";
import gitIcons from "../../assets/icons8-git.svg";
import gitHubIcons from "../../assets/icons8-github.svg";
import mongooseIcon from "../../assets/Mongoose.png";
import expressJsIcon from "../../assets/express.png";
import mysqlIcon from "../../assets/icons8-mysql.svg";
import tailwindIcon from "../../assets/icons8-tailwind-css.svg";
import { Fade } from 'react-awesome-reveal';


export function About() {
  return (
    <Container id="about">
      <div className="about-text">
        <Fade direction="left">
          <h2>About me</h2>
        </Fade>
        <Fade direction="left" delay={100}>
          <p>
            Hi there! I'm Biswajit, a dedicated MERN stack developer with a strong foundation in building modern, responsive, and high-performance web applications. My expertise includes MongoDB, Express.js, React.js, and Node.js, allowing me to develop full-stack projects from front-end UI to back-end APIs and databases. I have worked on a variety of applications where performance, scalability, and user experience were critical.
          </p>
        </Fade>
        <Fade direction="left" delay={100} style={{ marginTop: "2rem", marginBottom: "2rem" }}>
          <p>
          In addition to the core MERN stack, I actively use Next.js, a powerful React framework, to enhance application performance through features like server-side rendering (SSR), static site generation (SSG), and route optimization. Next.js is essential in today’s web development as it improves load times, SEO, and overall user engagement—making it a must-have for building production-ready apps.</p>
        </Fade>
        <Fade direction="left" delay={100}>
          <p>
            My technical skill set also includes Redux Toolkit for efficient state management, Git and GitHub for version control, and strong front-end technologies like HTML, CSS, and JavaScript. By combining these tools, I build robust, maintainable, and scalable web solutions that align with both user needs and business goals.</p>
        </Fade>
        <Fade direction="left" delay={100}>
          <h3>Here are my main skills:</h3>
        </Fade>
        <div className="hard-skills">
          <div className="hability">
            <Fade direction="left" delay={100}>
              <img src={htmlIcon} alt="Wordpress" />
            </Fade>
          </div>
          <div className="hability">
            <Fade direction="left" delay={100}>
              <img src={cssIcon} alt="shopify" />
            </Fade>
          </div>
          <div className="hability">
            <Fade direction="left" delay={100}>
              <img src={jsIcon} alt="React" />
            </Fade>
          </div>
          <div className="hability">
            <Fade direction="left" delay={100}>
              <img src={boostrapIcon} alt="Typescript" />
            </Fade>
          </div>
          <div className="hability">
            <Fade direction="left" delay={100}>
              <img src={tailwindIcon} alt="Vue" />
            </Fade>
          </div>
          <div className="hability">
            <Fade direction="left" delay={100}>
              <img src={reactIcon} alt="Node" />
            </Fade>
          </div>
          <div className="hability">
            <Fade direction="left" delay={100}>
              <img src={nextJsIcon} alt="Node" />
            </Fade>
          </div>
          <div className="hability">
            <Fade direction="left" delay={100}>
              <img src={nodeIcon} alt="Html" />
            </Fade>
          </div>
          <div className="hability">
            <Fade direction="left" delay={100}>
              <img src={expressJsIcon} alt="Css" />
            </Fade>
          </div>
          <div className="hability">
            <Fade direction="left" delay={100}>
              <img src={mongoDbIcon} alt="bootstrap" />
            </Fade>
          </div>
          <div className="hability">
            <Fade direction="left" delay={100}>
              <img src={mongooseIcon} alt="JavaScript" />
            </Fade>
          </div>
          <div className="hability">
            <Fade direction="left" delay={100}>
              <img src={mysqlIcon} alt="JavaScript" />
            </Fade>
          </div>
          <div className="hability">
            <Fade direction="left" delay={100}>
              <img src={reduxToolkitIcon} alt="JavaScript" />
            </Fade>
          </div>
          <div className="hability">
            <Fade direction="left" delay={100}>
              <img src={gitIcons} alt="JavaScript" />
            </Fade>
          </div>
          <div className="hability">
            <Fade direction="left" delay={100}>
              <img src={gitHubIcons} alt="JavaScript" />
            </Fade>
          </div>
        </div>
      </div>
      <div className="about-image">
        <Fade direction="left" delay={100}>
          <img src={Biswajit} alt="Biswajit Muduli" />
        </Fade>
      </div>
    </Container>
  )
}
