import React from "react";
import s from "./Header.module.css";
import Dropdown from "./menuButton/ButtonContainer";
import AuthContext from "../redux/auth-context";

const Header = (props) => {
  return (
    <AuthContext.Consumer>
      {(context) => {
        return (
          <header className={s.head}>
            {context.token && (
              <div className={s.button_menu}>
                <Dropdown />
              </div>
            )}
          </header>
        );
      }}
    </AuthContext.Consumer>
  );
};

export default Header;
