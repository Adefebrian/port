import React from "react";
import { Navbar } from "../Navbar/Navbar";
import { ThemeContext } from "../../Context/theme";
import logo from "../../assets/logo.png";

import "./Header.css";
export const Header = () => {
  const [{ themename }] = React.useContext(ThemeContext);

  return (
    <>
      <header className={"header center " + themename}>
        <h3>
          <a href="#home" className="link">
            <span>
              <img src={logo} alt="" />{" "}
            </span>
            <span>Ajay Maurya</span>
          </a>
        </h3>
        <Navbar />
      </header>
    </>
  );
};
