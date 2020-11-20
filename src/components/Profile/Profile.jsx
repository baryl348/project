import React from "react";
import s from "./Profile.module.css";
import { submit, Form } from "redux-form";
import { reduxForm, Field } from "redux-form";
import {
  requiredField,
  maxlengthCreator,
  minLengthCreator,
  alphaNumericCreator,
  emailCreator,
  match,
} from "../../utils/validators/validators";
import { renderField } from "../common/formsControl/Forms";
import AuthContext from "../../redux/auth-context";
import { Redirect } from "react-router-dom";
import { render } from "@testing-library/react";
import { profileUpload } from "../common/API/query";

let maxLength = maxlengthCreator(15);
let minLength = minLengthCreator(5);
let alphaNumeric = alphaNumericCreator;
let sucess = match;

class Profile extends React.Component {
  constructor(props) {
    super(props);
  }
  state = {
    id: null,
  };

  submit = (values) => {
    console.log(values);
    const mass = {
      name: values.name,
      secondName: values.lastName,
      email: values.email,
      password: values.password,
    };

    fetch("http://localhost:9090/graphql", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: profileUpload(
          mass.email,
          mass.password,
          mass.name,
          mass.secondName,
          this.state.id
        ),
      }),
    })
      .then((r) => r.json())
      .then((data) => {
        console.log(data);
        if (data.data.updateUser) {
          if (data.data.updateUser.email) {
            window.location.reload();
          }
        }
      });

    console.log(this.state.id);
  };

  // const submit = (values) => {
  //   const mass = {
  //     name: values.name,
  //     secondName: values.surname,
  //     email: values.email,
  //     password: values.password,
  //   };
  //   console.log(mass);
  //   const request =
  //     'mutation{employeeCreate(name: "' +
  //     mass.name +
  //     '", secondName:"' +
  //     mass.secondName +
  //     '", email: "' +
  //     mass.email +
  //     '", password:"' +
  //     mass.password +
  //     '"){id, name, secondName, email}}';
  //   console.log(sendRequest(request));
  // };
  LoginForm = (props) => {};
  render() {
    const { pristine, reset, submitting } = this.props;

    return (
      <div className={s.wrapper}>
        <div>
          <AuthContext.Consumer>
            {(context) => {
              this.state.id = context.userId;
              return (
                <div>
                  {context.token && (
                    <div>
                      <div>
                        <div>
                          <h1 className={s.h1}>
                            {`${context.firstName} ${context.secondName}`}.
                            Редактирование
                          </h1>
                        </div>
                      </div>
                      <div className={s.panel}>
                        <form
                          onSubmit={this.props.handleSubmit(this.submit)}
                          className={s.panel_content}
                        >
                          <div className={s.login_block}>
                            <Field
                              placeholder={"Не задано"}
                              component={renderField}
                              type="text"
                              name={"name"}
                              className={s.panel_text}
                              label="Имя"
                              validate={[maxLength, minLength]}
                              warn={[alphaNumeric]}
                            />
                          </div>
                          <div className={s.login_block}>
                            <Field
                              placeholder={"Не задано"}
                              component={renderField}
                              type="text"
                              name={"lastName"}
                              className={s.panel_text}
                              label="Фамилия"
                              validate={[maxLength, minLength]}
                              warn={alphaNumeric}
                            />
                          </div>
                          <div className={s.login_block}>
                            <Field
                              placeholder={"Не задано"}
                              component={renderField}
                              type="text"
                              name={"email"}
                              className={s.panel_text}
                              label="Электронная почта"
                              validate={[emailCreator]}
                            />
                          </div>
                          <div className={s.login_block}>
                            <Field
                              placeholder={"Не задано"}
                              component={renderField}
                              type="password"
                              name={"password"}
                              className={s.panel_text}
                              label="Новый пароль"
                              validate={[maxLength, minLength]}
                              warn={alphaNumeric}
                            />
                          </div>
                          <div className={s.login_block}>
                            <Field
                              placeholder={"Не задано"}
                              component={renderField}
                              type="password"
                              name={"newPassword"}
                              className={s.panel_text}
                              label="Повторите пароль"
                              validate={
                                [maxLength, minLength]
                                // sucess("Пароли")]
                              }
                              warn={alphaNumeric}
                            />
                          </div>
                          <div className={s.button_save}>
                            <button type="submit" className="button_submit">
                              Сохранить
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                  )}
                  {!context.token && (
                    <Redirect from="/Process" to="/login" exact />
                  )}
                </div>
              );
            }}
          </AuthContext.Consumer>
        </div>
      </div>
    );
  }
}

Profile = reduxForm({
  // a unique name for the form
  form: "Profile",
})(Profile);

export default Profile;
