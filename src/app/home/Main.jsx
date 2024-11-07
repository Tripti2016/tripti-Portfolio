import { AiOutlineDownload } from "react-icons/ai";

const Main = () => {
  return (
    <div>
      <section>
      <header className="header-content">
          <div className="left-header">
            <div className="h-shape"></div>
          </div>
          <div className="right-header">
            <h1 className="name">
              Hi, I am <span>Tripti Khandelwal</span> A UI / Frontend Developer
            </h1>
            <h3>Welcome to my Portfolio</h3>
            <p>
              Welcome to my portfolio! I am a dynamic and dedicated
              professional, embodying the qualities of hard work, creativity,
              enthusiasm, and focus. I possess a relentless drive to
              continuously learn and improve, always seeking to acquire new
              skills and stay on the cutting edge of technology. With a
              proficiency in React, Vue.js, HTML5, CSS3,Js ,Figma, Jquery
            </p>
            <p>
              I bring my technical and creative expertise to every project I
              undertake. I am passionate about crafting engaging and
              user-centric experiences that leave a lasting impact. I invite you
              to explore my work, and I am excited to connect with you to
              discuss potential collaborations and opportunities. Let's create
              something extraordinary together!
            </p>
            <div className="btn-con">
              <a href="https://drive.google.com/file/d/1rldGD7vciszmf_sdyJccDFfYkqsf1T8Z/view?usp=sharing" target="_blank" className="main-btn">
                <span className="btn-text">Download CV</span>
                <span className="btn-icon">
                  <AiOutlineDownload />
                </span>
              </a>
            </div>
          </div>
        </header>
      </section>
      
    </div>
  );
};

export default Main;
