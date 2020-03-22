import React from "react";
import { changeLanguage } from "../../redux/actions/language";
import { LanguageOptions } from "../../fixtures/language/language";

const initLanguageChange = (event, props) => {
  //   console.log("got the evenmt...", props, event.target.value);
  props.dispatch(changeLanguage(event.target.value));
};

export const LanguageSelector = props => {
  return (
    <select onChange={event => initLanguageChange(event, props)}>
      {LanguageOptions &&
        LanguageOptions.map((lang, index) => (
          <option key={"lang-" + index} value={lang.abbr}>
            {lang.name}
          </option>
        ))}
    </select>
  );
};
