// Dependency Imports
import React from "react";
import PropTypes from "prop-types";

// Custom Imports
import Head from "../html/head/head.jsx";
import { APP_NAME, MAIN_LOGO } from "../../lib/config";
import CustomLink from "../../components/Link/Link.jsx";
import { LanguageSelector } from "../language/selector.jsx";

function MainHeader(props) {
  return (
    <header className="App-header">
      <Head
        ogTitle={APP_NAME}
        ogDescription={
          APP_NAME +
          " - Example boliterplate code for CRA stucture, By Appscrip. Just clone it and start on the go."
        }
      />
      <CustomLink url="/">
        <img src={MAIN_LOGO} alt="logo" />
      </CustomLink>
      <div className="float-left">
        <LanguageSelector {...props.language} dispatch={props.dispatch} />
      </div>

      {props.children}
    </header>
  );
}

// Create validations for Props, required or type etc.
MainHeader.propTypes = {
  children: PropTypes.any.isRequired,
  dispatch: PropTypes.any.isRequired,
  language: PropTypes.any.isRequired
};

export default MainHeader;
