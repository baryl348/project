import {addEventActionCreator} from "../../redux/events-reducer";
import {connect} from "react-redux";
import LoginForm from "./login";

let mapStateToProps = (state) => {
    return {
        events: state.events
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        newEvent: (newEvent) => {
            dispatch(addEventActionCreator(newEvent))
        }
    }
}

const LoginFormContainer = connect(mapStateToProps, mapDispatchToProps)(LoginForm)

export default LoginFormContainer;
