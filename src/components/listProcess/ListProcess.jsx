/* eslint-disable no-useless-constructor */
/* eslint-disable react/jsx-pascal-case */
import React from "react";
import style from "./ListProcess.module.css";
import Panel_one from "./panel/1st panel";
import AuthContext from "../../redux/auth-context";
import { Redirect, Switch } from "react-router-dom";


class Process extends React.Component {
  constructor(props) {
    super(props);
  }
  state = {
    events: null,
  };

  // renderPanel = () => {
  //   fetch("http://localhost:9090/graphql", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({
  //       query: processEvents(),
  //     }),
  //   })
  //     .then((r) => r.json())
  //     .then((data) => {
  //       this.setState({ events: data.data.events });
  //       console.log(data);
  //     });
  // };

  render() {
    let postEvents = this.props.events.events.map(event => {
      return <Panel_one props={event} />
    })
    return (
      <div className={style.back}>
        <AuthContext.Consumer>
          {(context) => {
            return (
              <Switch>
                {context.token &&
                  // (this.renderPanel(),
                  (
                    <div>
                      {postEvents}
                    </div>
                  )}
                {!context.token && (
                  <Redirect from="/Process" to="/login" exact />
                )}
              </Switch>
            );
          }}
        </AuthContext.Consumer>
      </div>
    );
  }
}

export default Process;
