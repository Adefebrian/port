import React from "react";
import "./Projects.css";
import { FaReact, FaHardHat } from "react-icons/fa";
import {
  SiCss3,
  SiBootstrap,
  SiBlockchaindotcom,
  SiHtml5,
  SiMaterialui,
  SiChai,
  SiEthereum,
  SiExpress,
  SiSocketdotio,
  SiTailwindcss,
  SiReactrouter,
  SiJavascript,
  SiMongodb,
  SiNodedotjs,
} from "react-icons/si";
import { DiCss3 } from "react-icons/di";
import { VscJson } from "react-icons/vsc";
import { IoLogoJavascript } from "react-icons/io";
import project1 from "../../assets/proj-1.png";
import project2 from "../../assets/proj-2.png";
import project3 from "../../assets/proj-3.png";
import project4 from "../../assets/proj-4.png";
export const Projects = () => {
  return (
    <>
      <div className="section">
        <h2 className="section__title different">Hobi</h2>
        <div className="allProjects">
          <div className="projects_container" data-aos="fade-right">
            <div className="project">
              <div className="project_videocontainer">
                <div>
                  <img src={project1} />
                </div>
              </div>
              <div className="project_information">
                <h2>Hiking</h2>
                <p>
                  Mendaki adalah salah satu kegiatan favorit saya dikala ada waktu senggang panjang
                </p>
                <div>
                </div>
              </div>
            </div>
          </div>
          <div className="projects_container" data-aos="fade-right">
            <div className="project">
              <div className="project_videocontainer">
                <div>
                  <img src={project2} />
                </div>
              </div>
              <div className="project_information">
                <h2>Gaming</h2>
                <p>
                 Dengan bermain game, saya dapat meluapkan rasa lelah saya dalam beraktivitas.
                </p>
                <div>
                </div>
              </div>
            </div>
          </div>
          <div className="projects_container" data-aos="fade-right">
            <div className="project">
              <div className="project_videocontainer">
                <div>
                  <img src={project3} />
                </div>
              </div>
              <div className="project_information">
                <h2>dancing</h2>
                <p>
                 Dance adalah opsi olahraga yang saya lakukan untuk terus dapat bergerak.
                </p>
                <div>
                </div>
              </div>
            </div>
          </div>
          <div className="projects_container" data-aos="fade-right">
            <div className="project">
              <div className="project_videocontainer">
                <div>
                  <img src={project4} />
                </div>
              </div>
              <div className="project_information">
                <h2>UI/UX</h2>
                <p>
                 Membuat design UI/UX adalah hobi yang linear dengan dream job saya.
                </p>
                <div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
