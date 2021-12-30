import { ADD_VISIT_PROFILE, SET_QUOTABLES } from "../actions/contants";

const initialState = {
    visit_characters: {},
    quotable_characters: []
};
  
function rootReducer(state = initialState, action) {
    if (action.type === ADD_VISIT_PROFILE) {
        const visits = Object.assign({}, state.visit_characters);
        const isIncluded = Object.keys(visits).includes(action.charId);
        if (!isIncluded) {
            visits[action.charId] = 1;
        }
        else {
            visits[action.charId] = visits[action.charId] + 1;
        }

        return {...state, visit_characters: visits };
    }

    if (action.type === SET_QUOTABLES) {
        return {...state, quotable_characters: action.quotables };
    }
    
    return state;
};
  
export default rootReducer;