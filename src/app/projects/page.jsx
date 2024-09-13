import { AiFillGithub } from "react-icons/ai";
import { CgWebsite } from "react-icons/cg";
import Image from "next/image";

const page = () => {
  const portfoiloData = [
    {
      img: "/proj-1.jpeg",
      projectSource: "https://github.com/Tripti2016/managelanding.git",
      websiteLink: "https://managelanding-six.vercel.app/",
    },
    {
            img: proImg4,
            projectSource: "https://github.com/Tripti2016/hulu-clone.git",
            websiteLink: "https://hulu-clone-seven-blond.vercel.app/",
        },
    {
      img: "/proj-2.jpeg",
      projectSource: "https://github.com/Tripti2016/React2.git",
      websiteLink: "https://react2-gamma.vercel.app/",
    },
    {
      img: "/proj-3.png",
      projectSource: "https://github.com/Tripti2016/comfy.git",
      websiteLink: "https://comfyprj.netlify.app/",
    },
    {
      img: "/proj-4.jpeg",
      projectSource: "https://github.com/Tripti2016/notification-new.git",
      websiteLink: "https://notification-new.vercel.app/",
    },
    {
      img: "/proj-5.jpeg",
      projectSource: "https://github.com/Tripti2016/PracticeNews.git",
      websiteLink: "https://practice-news.vercel.app/",
    },
    {
      img: "/proj-6.jpeg",
      projectSource: "https://github.com/Tripti2016/Quiz.git",
      websiteLink: "https://quiz-gamma-five.vercel.app/",
    },
    {
      img: "/proj-8.png",
      projectSource: "https://github.com/Tripti2016/bankist.git",
      websiteLink: "https://bankistprj.netlify.app/",
    },
    {
      img: "/prj5.png",
      projectSource: "https://github.com/Tripti2016/guessMyNo.git",
      websiteLink: "https://guessmynoprj.netlify.app/",
    },
  ];
  return (
    <div>
      <section className="section sec3 portfolio" id="portfolio">
        <div className="main-title">
          <h2>
            My <span>Portfolio</span>
            <span className="bg-text">My Work</span>
          </h2>
        </div>
        <p className="port-text">
          These dummy projects represent my learning journey as a web developer.
          They showcase innovation, interactivity, and user-friendliness. The
          projects feature modern designs, responsiveness, and high-quality
          implementations. I'm excited to present them as a testament to my
          growth and dedication in web development.
        </p>
        <div className="portfolios">
          {portfoiloData.map((item, index) => (
            <div className="portfolio-item" key={index}>
              <div className="image">
                <Image src={item.img} alt="" width={500} height={100} />
              </div>
              <div className="hover-item">
                <h3>Project Source</h3>
                <div className="icons">
                  <a href={item.projectSource} target="_blank" className="icon">
                    <AiFillGithub />
                  </a>
                  <a href={item.websiteLink} className="icon" target="_blank">
                    <CgWebsite />
                  </a>
                </div>
              </div>
            </div>
          ))}
          {/* <div className="portfolio-item">
            <div className="image">
              <img src="/image/prj2.png" alt="" />
            </div>
            <div className="hover-item">
              <h3>Project Source</h3>
              <div className="icons">
                <a
                  href="https://github.com/Tripti2016/bankist.git"
                  target="_blank"
                  className="icon"
                >
                  <AiFillGithub />
                </a>
                <a
                  href="https://bankistprj.netlify.app/"
                  className="icon"
                  target="_blank"
                >
                  <CgWebsite />
                </a>
              </div>
            </div>
          </div> */}
        </div>
      </section>
    </div>
  );
};

export default page;
