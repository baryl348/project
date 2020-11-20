import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Process from "../listProcess/ListProcess";
import s from "./Main.module.css";
import Profile from "../Profile/Profile";
import Login from "../login/login";
import RegistrationForm from "../login/registration/registration";
import LoginFormContainer from "../login/loginContainer";
import ListProcessContainer from "../listProcess/ListContainer";

const Main = (props) => {
  return (
    <div className={s.main_content}>
      <Switch>
        <Redirect from="/" to="/login" exact />
        <Route path="/login" render={() => <LoginFormContainer />} />
        <Route path="/Registration" render={() => <RegistrationForm />} />
        <Route path="/Process" render={() =>
            <ListProcessContainer />
        } />
        <Route path="/Profile" render={() => <Profile />} />
      </Switch>
    </div>
  );
};

export default Main;
