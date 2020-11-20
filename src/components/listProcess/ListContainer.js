import {getEventActionCreator} from "../../redux/events-reducer";
import {connect} from "react-redux";
import ListProcess from "./ListProcess";

let mapStateToProps = (state) => {
    return {
        events: state.events
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        getEvents: () => {
            dispatch(getEventActionCreator())
        }
    }
}

const ListProcessContainer = connect(mapStateToProps, mapDispatchToProps)(ListProcess)

export default ListProcessContainer;