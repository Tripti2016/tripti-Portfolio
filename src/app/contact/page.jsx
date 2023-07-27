import {AiFillPhone ,AiFillLinkedin} from "react-icons/ai";
import {MdEmail, MdLocationOn } from "react-icons/md";
import{SiTeamspeak } from "react-icons/si";
const page = () => {
  return (
    <div>
      <section className="section sec4 contact" id="contact">
        <div className="contact-container">
          <div className="main-title">
            <h2>
              Contact<span>Me</span>
              <span className="bg-text">My Contact</span>
            </h2>
          </div>
          <div className="contact-content-con">
            <div className="left-contact">
              <h4>Contact me Here</h4>
              <p>
                I am an exceptionally hard-working and creative individual,
                driven by a passionate desire to acquire new skills and
                knowledge. You can easily reach out to me through any of the
                contact methods provided below. I am always eager to explore new
                opportunities and connect with like-minded individuals. Thank
                you for considering me!
              </p>

              <div className="contact-info">
                <div className="contact-item">
                  <div className="icon">
                    <MdLocationOn />
                    Location
                  </div>

                  <p>: Bangalore, India</p>
                </div>
                <div className="contact-item">
                  <div className="icon">
                  <AiFillPhone />
                    Phone No
                  </div>
                  <p>: +91 9980905142</p>
                </div>
                <div className="contact-item">
                  <div className="icon">
                    <MdEmail />
                    <span>Email</span>
                  </div>
                  <p>
                    <span>: triptikhandelwal1@gmail.com</span>
                  </p>
                </div>
                <div className="contact-item">
                  <div className="icon">
                  <AiFillLinkedin />
                    <span>Linkdin</span>
                  </div>
                  <p>
                    <span>
                      <a
                        href="https://www.linkedin.com/in/tripti-khandelwal-a2866b218/"
                        target="_blank"
                      >
                        : https://www.linkedin.com/in/tripti-khandelwal
                      </a>
                    </span>
                  </p>
                </div>
                <div className="contact-item">
                  <div className="icon">
                    <SiTeamspeak />
                     <span>Language</span>
                  </div>
                  <p>
                    <span>:English,Hindi</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default page;
