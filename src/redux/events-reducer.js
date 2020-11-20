const ADD_EVENT = "add-event";
const GET_EVENTS = "get-events"

const initialState = {
    events: [

    ]
}

let count = 1;

const eventReducer = (state = initialState, action)  => {
    switch (action.type) {
        case ADD_EVENT: {
            let newEvent = {
                id: count++,
                title: action.newEventA.title,
                completed: action.newEventA.completed,
                executionTime: action.newEventA.executionTime,
                activeTime: action.newEventA.activeTime,
                employeesInProcess: action.newEventA.employeesInProcess,
                scriptsInProcess: action.newEventA.scriptsInProcess,
                start: action.newEventA.start,
                end: action.newEventA.end,
                loading: action.newEventA.loading
            };
            state.events.push(newEvent)
            return {...state, events: [...state.events]};
        }
        case GET_EVENTS: {
            return {...state.events}
        }
        default: {
            return state
        }
    }
}

export const addEventActionCreator = (newEvent) => ({type: ADD_EVENT, newEventA : newEvent})
export const getEventActionCreator = () => ({type: GET_EVENTS})

export default eventReducer;