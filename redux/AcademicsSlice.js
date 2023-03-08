import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  matricExamPass: "",
  matricExamBoard: "",
  matricRolllNumber: "",
  matricPassingYear: "",
  matricAnnualStatus: "",
  matricObtainedMarks: "",
  matricTotalNumbers: 1100,
  interExamPass: "",
  interExamBoard: "",
  interRolllNumber: "",
  interPassingYear: "",
  interAnnualStatus: "",
  interObtainedMarks: "",
  interTotalNumbers: 1100,
};
const AcademicDetails = createSlice({
  name: "Academics",
  initialState,
  reducers: {
    setAcademicsInfoField: (state, action) => {
      const { field, value } = action.payload;
      state[field] = value;
      return state;
    },
  },
});

export const { setAcademicsInfoField } = AcademicDetails.actions;

export default AcademicDetails.reducer;
