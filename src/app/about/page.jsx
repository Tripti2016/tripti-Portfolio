import { AiOutlineDownload } from "react-icons/ai";
import { BsBriefcaseFill } from "react-icons/bs";

const page = () => {
  return (
    <div>
      <section className="section about" id="about">
        <div className="main-title">
          <h2>
            About <span>me</span>
            <span className="bg-text">my stats</span>
          </h2>
        </div>
        <div className="about-container">
          <div className="left-about">
            <h4>Information About Me</h4>
            <p>
              "Hello, I'm Tripti Khandelwal, a dedicated Jr. frontend Developer at Han
              River Technology since January 2023. I have been working in the IT
              company as a UI Developer for the past 7 months, and during this
              time, I have been actively enhancing my skills and expertise.
            </p>
            <p>
              My journey into the tech world began with a 6-month internship in
              UI Developer/designer at KDK Software. Before venturing into web
              development, I pursued Textile Designing from 2005 to 2008 and
              gained valuable experience as a Textile Merchandiser for 5 years
              (2008-2012). However, my passion for coding led me to invest the
              last 2 years in continuous learning through platforms like
              YouTube, Udemy, and free code certifications.
            </p>
            <p>
              With a strong foundation in HTML5, CSS3, and JavaScript, I have
              expanded my skillset to include modern front-end technologies. I
              am proficient in working with frameworks like React and Vue.js,
              enabling me to build interactive and dynamic user interfaces
              effectively. Additionally, I am well-versed in using design tools
              like Figma, allowing me to collaborate seamlessly with design
              teams and transform their ideas into exceptional user experiences.
            </p>
            <p>
              Throughout my career, I have completed various certification
              courses to stay up-to-date with the latest industry trends and
              best practices, ensuring that I deliver top-notch solutions for
              every project I work on. In the past, I also explored my teaching
              skills as a freelance teacher, which further solidified my
              understanding of the subjects and helped me become a more
              effective communicator and problem solver. I'm thrilled about the
              endless possibilities in the tech world, and I'm eager to
              collaborate on exciting projects and contribute my expertise in
              creating exceptional user experiences."
            </p>
            <div className="btn-con">
              <a href="https://drive.google.com/file/d/1avcoCHyepKeGgliSSPQgZQ8YbMLWFLNp/view?usp=drive_link" target="_blank" className="main-btn">
                <span className="btn-text">Download CV</span>
                <span className="btn-icon">
                  <AiOutlineDownload />
                </span>
              </a>
            </div>
          </div>
          <div className="right-about">
            <div className="about-item">
              <div className="abt-text">
                <p className="large-text">Learner</p>
                <p className="small-text">
                  Team-worker
                  <br />
                </p>
              </div>
            </div>
            <div className="about-item">
              <div className="abt-text">
                <p className="large-text">Multi tasker</p>
                <p className="small-text">
                  Analytical thinking
                  <br />
                </p>
              </div>
            </div>
            <div className="about-item">
              <div className="abt-text">
                <p className="large-text">Innovative Problem Solver</p>
                <p className="small-text">
                  Effective Communicator
                  <br />
                </p>
              </div>
            </div>
            <div className="about-item">
              <div className="abt-text">
                <p className="large-text">Adaptable</p>
                <p className="small-text">
                  Detail-Oriented
                  <br />
                </p>
              </div>
            </div>
            <div className="about-item">
              <div className="abt-text">
                <p className="large-text">Creative Thinker</p>
                <p className="small-text">
                  Deadline-Driven
                  <br />
                </p>
              </div>
            </div>
            <div className="about-item">
              <div className="abt-text">
                <p className="large-text">Collaborative Problem Solver</p>
                <p className="small-text">
                  Time Management
                  <br />
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="about-stats">
          <h4 className="stat-title">My skills</h4>
          <div className="progress-bars">
            <div className="progress-bar">
              <p className="prog-title">React</p>
              <div className="progress-con">
                <p className="prog-text">60%</p>
                <div className="progress">
                  <span className="react"></span>
                </div>
              </div>
            </div>
            <div className="progress-bar">
              <p className="prog-title">Vue</p>
              <div className="progress-con">
                <p className="prog-text">50%</p>
                <div className="progress">
                  <span className="vue"></span>
                </div>
              </div>
            </div>
            <div className="progress-bar">
              <p className="prog-title">HTML5</p>
              <div className="progress-con">
                <p className="prog-text">80%</p>
                <div className="progress">
                  <span className="html"></span>
                </div>
              </div>
            </div>
            <div className="progress-bar">
              <p className="prog-title">CSS3</p>
              <div className="progress-con">
                <p className="prog-text">85%</p>
                <div className="progress">
                  <span className="css"></span>
                </div>
              </div>
            </div>
            <div className="progress-bar">
              <p className="prog-title">Java Script</p>
              <div className="progress-con">
                <p className="prog-text">50%</p>
                <div className="progress">
                  <span className="js"></span>
                </div>
              </div>
            </div>
            <div className="progress-bar">
              <p className="prog-title">Bootstrap</p>
              <div className="progress-con">
                <p className="prog-text">70%</p>
                <div className="progress">
                  <span className="bootStrap"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="experience">
          <div className="timeLine">
            <div className="timeLine-item">
              <div className="timeLine-icon">
                <BsBriefcaseFill />
              </div>
              <div className="tl-details">
                <div className="tl-details-top">
                  <p className="tl-duration">Jan-2023- currently working</p>
                  <p>
                    <span className="ui">Jr. UI devloper</span>
                    <span>Han river technology</span>
                  </p>
                </div>

                <p>
                  During my experience, I have actively contributed to diverse
                  projects, showcasing my proficiency in ReactJS, Vue.js, and
                  static HTML-based projects. I have adeptly handled complex
                  designs, effectively implementing advanced CSS techniques like
                  grid, flexbox, positioning, and responsive pseudo-elements.
                </p>
                <br />
                <p>
                  In both React and Vue.js, I have skillfully managed routing,
                  implemented accordion and toggle functionalities, created
                  sliders, and integrated tab components using vanilla
                  JavaScript functions. My comprehensive understanding of HTML
                  has allowed me to employ various HTML tags adeptly, ensuring
                  well-structured and semantic markup across projects.
                </p>
                <br />
                <p>
                  Throughout my journey, I have consistently delivered
                  high-quality work, driven by a passion for creating seamless
                  and visually appealing user experiences. My ability to adapt
                  to varying project requirements and apply my knowledge across
                  different technologies has been a key asset in achieving
                  project success. I am eager to leverage my skills and
                  expertise in future endeavors, aiming to continue making
                  impactful contributions in the web development domain.
                </p>
              </div>
            </div>
          </div>
          <hr />

          <div className="timeLine">
            <div className="timeLine-item">
              <div className="timeLine-icon">
                <BsBriefcaseFill />
              </div>
              <div className="tl-details">
                <div className="tl-details-top">
                  <p className="tl-duration">Mar 2022- Sep 2022</p>
                  <p>
                    {" "}
                    Intern <span className="ui">UI Designing</span>
                    <span>KDK Software</span>
                  </p>
                </div>

                <p>Worked on Various project and implemented skills such as:</p>
                <br />
                <p>
                  <u> HTML5</u>- All tags, Table, Element, Form, select,
                  Article/Section/Nav,fieldset any many more.
                </p>
                <br />
                <p>
                  <u> CSS3</u> -- Grid, Flex, position, Pseudo class/element,
                  Transition/Transform, margin/padding, Font Formatting and many
                  others
                </p>
                <br />
                <p>
                  <u>Bootstrap</u> : Table, Card, Accordion, Button, Tabs
                  ,Form-Control and many more.
                </p>
                <br />
                <p>
                  <u>JavaScript</u> : Events, function, Arrays, statements etc.
                </p>
              </div>
            </div>
            <div className="btn-con">
              <a
                href="https://drive.google.com/file/d/1HVzz7JMfE49kf8yV3cmIKh8NvE5DLXcM/view?usp=sharing"
                target="_blank"
                className="main-btn"
              >
                <span className="btn-text">Internship-Certificate</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default page;
