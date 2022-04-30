import React from "react";
import "./Introduction.css";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { ThemeContext } from "../../Context/theme";
import profilePic from "../../assets/Profile-pic.png";


export const Introduction = () => {
  const [{ themename }] = React.useContext(ThemeContext);

  return (
    <>
      <section id="#about">
        <div className="section" data-aos="fade-right">
          <h2 className="section__title">
            Tentang <span className="different">Saya</span>
          </h2>
          <div className={"introduction " + themename}>
            <div className="introduction_logocontainer">
              <img src={profilePic} alt="Images" />
            </div>
            <div className="introduction_datacontainer">
              <h4>
               Halo Semuanya, Nama Saya{" "}
                <span className="different">Satrio Arif Wicaksono </span> dan saya berasal dari {" "}
                <span className="different">
                  {" "}
                 Indonesia
                </span>
                . Saya adalah seorang mahasiswa Jurusan Informatika di Universitas Amikom Yogyakarta dan saat ini saya sudah memasuki{" "}
                <span className="different">
                  Semester 4.
                </span>
                . Selain menjadi mahasiswa saya juga suka mendaki{" "}
                <span className="different">Puncak Gunung</span> sebagai hobby saya.
              </h4>
              <h4>Kelebihan saya</h4>
              <h4 className="different">
                <span className="icons">
                  <ExitToAppIcon />
                </span>
                Teamworks{" "}
              </h4>
              <h4 className="different">
                <span className="icons">
                  <ExitToAppIcon />
                </span>
                Time Management{" "}
              </h4>
              <h4 className="different">
                <span className="icons">
                  <ExitToAppIcon />
                </span>
                Flexibility{" "}
              </h4>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
