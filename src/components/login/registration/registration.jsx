import React from "react";
import { Field, reduxForm } from "redux-form";
import { NavLink, Redirect } from "react-router-dom";
import s from "./../login.module.css";
import {
  maxlengthCreator,
  minLengthCreator,
  alphaNumericCreator,
  emailCreator,
  requiredField,
  // match,
} from "../../../utils/validators/validators";
import { renderField } from "../../common/formsControl/Forms";
import eye from "../../../IMG/glaz.png";
import { register } from "../../common/API/query";
import proceset from "../../../IMG/Vector (1).png";

let maxLength = maxlengthCreator(15);
let minLength = minLengthCreator(4);
let alphaNumeric = alphaNumericCreator;
// let sucess = match;
// let email = emailCreator;

class RegistrationForm extends React.Component {
  state = {
    isPasswordShown: false,
    redirect: false,
  };

  togglePasswordVisibility = () => {
    const { isPasswordShown } = this.state;
    this.setState({ isPasswordShown: !isPasswordShown });
  };

  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
  }

  render() {
    const { redirect } = this.state;

    if (redirect) {
      return <Redirect to="/login" />;
    }

    const submit = (values) => {
      const mass = {
        name: values.name,
        secondName: values.surname,
        email: values.email,
        password: values.password,
      };
      fetch("http://localhost:9090/graphql", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          query: register(
            mass.email,
            mass.password,
            mass.name,
            mass.secondName
          ),
        }),
      })
        .then((r) => r.json())
        .then((data) => {
          if (data.data.createUser) {
            if (data.data.createUser.email) {
              this.setState({ redirect: true });
            }
          }
        });
    };
    const { isPasswordShown } = this.state;

    return (
      <div className={s.wrapper}>
        <div>
          <i className={s.item_processet}>
            <img src={proceset} alt="proceset" />
          </i>
        </div>
        <div className={s.panel}>
          <div className={s.text}>
            <h1>Регистрация</h1>
          </div>
          <form onSubmit={this.props.handleSubmit(submit)} className={s.login}>
            <div className={s.login_block}>
              <Field
                placeholder={"Имя"}
                component={renderField}
                type="text"
                name={"name"}
                validate={[requiredField, maxLength, minLength]}
                warn={alphaNumeric}
              />
            </div>
            <div className={s.login_block}>
              <Field
                placeholder={"Фамилия"}
                component={renderField}
                type="text"
                name={"surname"}
                validate={[requiredField, maxLength, minLength]}
                warn={alphaNumeric}
              />
            </div>
            <div className={s.login_block}>
              <Field
                placeholder={"Электронная почта"}
                component={renderField}
                type="text"
                name={"email"}
                validate={[emailCreator]}
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
                placeholder={"Ввeдите пароль"}
                component={renderField}
                type={isPasswordShown ? "text" : "password"}
                name={"password"}
                validate={[requiredField, maxLength, minLength]}
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
                placeholder={"Повторите пароль"}
                component={renderField}
                type={isPasswordShown ? "text" : "password"}
                name={"repeatPassword"}
                validate={[
                  requiredField,
                  maxLength,
                  minLength,
                  // sucess("Пароли"),
                ]}
              />
            </div>
            <div className={s.login_block}>
              <button type="submit" className="button_submit">
                Применить и войти
              </button>
            </div>
            <span>
              Уже зарегистрированы?
              <NavLink to="login" className={s.button_a}>
                Вход
              </NavLink>
            </span>
          </form>
        </div>
      </div>
    );
  }
}

RegistrationForm = reduxForm({
  // a unique name for the form
  form: "Registration",
})(RegistrationForm);

export default RegistrationForm;
