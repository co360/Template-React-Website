// import langReducer from "./langReducer";
import uiReducer from "./uiReducer";
import userReducer from './userReducers';
// import cateState from './categoryReducer';
import { combineReducers } from "redux";
import listFollower from './listFollower'

// import filterTable from './filterTable'
// import sort from './sort'

const rootReducer = combineReducers({ uiReducer, userReducer, listFollower });

export default rootReducer;
