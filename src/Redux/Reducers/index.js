import changeNumber from "./updown";

import { combineReducers } from "redux";

const rootReducer = combineReducers({
    changeNumber,
    // changethebackground,      for multple reducers
})

export default rootReducer;