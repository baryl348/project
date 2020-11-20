/* eslint-disable no-useless-constructor */
import React from "react";
import s from "./login.module.css";
import { reduxForm, Field } from "redux-form";
import { NavLink, Redirect } from "react-router-dom";
import {
  requiredField,
  maxlengthCreator,
  minLengthCreator,
  alphaNumericCreator,
  emailCreator,
} from "../../utils/validators/validators";
import { renderField } from "../common/formsControl/Forms";
import AuthContext from "../../redux/auth-context";
import eye from "../../IMG/glaz.png";
import { login, processEvents } from "../common/API/query";
import proceset from "../../IMG/Vector (1).png";




let maxLength = maxlengthCreator(15);
let minLength = minLengthCreator(5);
let alphaNumeric = alphaNumericCreator;

class LoginForm extends React.Component {
  // потом перенести в store
  state = {
    isPasswordShown: false,
    redirect: false,
  };

  togglePasswordVisibility = () => {
    const { isPasswordShown } = this.state;
    this.setState({ isPasswordShown: !isPasswordShown });
  };

  constructor(props) {
    super(props);
  }

  static contextType = AuthContext;

  submit = (values) => {
    const mass = {
      email: values.email,
      password: values.password,
    };
    // console.log(mass);
    fetch("http://localhost:9090/graphql", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ query: login(mass.email, mass.password) }),
    })
      .then((r) => r.json())
      .then((data) => {
        if (data.data.login.token) {
          this.context.login(
            data.data.login.token,
            data.data.login.userId,
            data.data.login.firstName,
            data.data.login.secondName
          );
          this.setState({ redirect: true });
        }
      });
  };
  render() {
    const { redirect } = this.state;

    if (redirect) {

     let renderPanel = () => {
        fetch("http://localhost:9090/graphql", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            query: processEvents(),
          }),
        })
          .then((r) => r.json())
          .then((data) => {
            data.data.events.map(event => {
              this.props.newEvent(event)
            })
          });
      };
      renderPanel()
      return <Redirect to="/profile" />;
    }
    const { isPasswordShown } = this.state;
    return (
      <div className={s.wrapper}>
        <div>
          <i className={s.item_processet}>
            <img src={proceset} alt="proceset" />
          </i>
        </div>
        <div className={s.panel}>
          <form
            onSubmit={this.props.handleSubmit(this.submit)}
            className={s.login}
          >
            <div className={s.login_block}>
              <Field
                placeholder={"Имя пользователя"}
                component={renderField}
                type="text"
                name={"email"}
                validate={[emailCreator]}
                warn={alphaNumeric}
              />
            </div>
            <div className={s.login_block}>
              <i>
                <img
                  src={eye}
                  alt="eye"
                  onClick={this.togglePasswordVisibility}
                  className={s.passwordShown}
                />
              </i>
              <Field
                placeholder={"Пароль"}
                component={renderField}
                type={isPasswordShown ? "text" : "password"}
                name={"password"}
                validate={[requiredField, maxLength, minLength]}
              />
            </div>
            <div className={s.login_block}>
              <Field component="input" type="checkbox" name={"rememberME"} />
              remember me
            </div>
            <div className={s.login_block}>
              <button type="submit" className="button_submit">
                Войти в систему
              </button>
            </div>
            <div className={s.login_block}>
              <NavLink
                to="/registration"
                activeClassName={s.activeLink}
                className={s.button_a}
              >
                Зарегистрироваться
              </NavLink>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
LoginForm = reduxForm({
  // a unique name for the form
  form: "login",
})(LoginForm);



export default LoginForm;

