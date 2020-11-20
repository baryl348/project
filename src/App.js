import React from "react";
import "./App.css";
import Header from "./Header/Header";
import Main from "./components/main/Main";
import AuthContext from "./redux/auth-context";

class App extends React.Component {
  state = {
    token: null,
    userId: null,
    firstName: null,
    secondName: null,
    title: null,
    completed: null,
    executionTime: null,
    activeTime: null,
    employeesInProcess: null,
    scriptsInProcess: null,
    start: null,
    end: null,
    loading: null,
  };

  login = (token, userId, firstName, secondName) => {
    this.setState({
      token: token,
      userId: userId,
      firstName: firstName,
      secondName: secondName,
    });
  };

  logout = () => {
    this.setState({ token: null, userId: null });
  };
  update = (firstName, secondName) => {
    this.setState({ firstName: firstName, secondName: secondName });
  };

  process = (
    title,
    completed,
    executionTime,
    activeTime,
    employeesInProcess,
    scriptsInProcess,
    start,
    end,
    loading
  ) => {
    this.setState({
      title: title,
      completed: completed,
      executionTime: executionTime,
      activeTime: activeTime,
      employeesInProcess: employeesInProcess,
      scriptsInProcess: scriptsInProcess,
      start: start,
      end: end,
      loading: loading,
    });
  };

  render() {
    return (
      <div className="wrapper">
        <AuthContext.Provider
          value={{
            token: this.state.token,
            userId: this.state.userId,
            firstName: this.state.firstName,
            secondName: this.state.secondName,
            login: this.login,
            logout: this.logout,
          }}
        >
          <Header />
          <Main state={this.state.token} />
        </AuthContext.Provider>
      </div>
    );
  }
}

export default App;
