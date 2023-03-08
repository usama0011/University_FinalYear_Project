import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  studentName: "",
  fatherName: "",
  province: "",
  religion: "",
  Domicile: "",
  cityName: "",
  dob: "",
  gender: "",
  address: "",
  phoneNumber: "",
  email: "",
  emergencyContact: "",
  nationality: "",
  passportId: "",
  enrollmentStatus: "",
  program: "",
  levelOfStudy: "",
  disability: "",
  bloodGroup: "",
  HFQ: "",
  criminalHistory: "",
};

export const personalInfoSlice = createSlice({
  name: "personalInfo",
  initialState,
  reducers: {
    setPersonalInfoField: (state, action) => {
      const { field, value } = action.payload;
      state[field] = value;
      return state;
    },
    setUserId: (state, action) => {
      state.userId = action.payload;
    },
  },
});

export const { setPersonalInfoField,setUserId } = personalInfoSlice.actions;
export default personalInfoSlice.reducer;
