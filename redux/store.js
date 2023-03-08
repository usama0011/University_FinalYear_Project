import { combineReducers, configureStore } from "@reduxjs/toolkit";
import AcademicsSlice from "./AcademicsSlice";
import personalInfoReducer from "./personalInfoReducer";

const rootReducer = combineReducers({
  personalInfo: personalInfoReducer,
  Aacademics: AcademicsSlice,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
