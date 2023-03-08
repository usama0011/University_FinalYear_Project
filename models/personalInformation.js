const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const personalInformationSchema = new Schema(
  {
    studentName: {
      type: String,
      required: true,
    },
    fatherName: {
      type: String,
      required: true,
    },
    province: {
      type: String,
      required: true,
    },
    religion: {
      type: String,
      required: true,
    },
    Domicile: {
      type: String,
      required: true,
    },
    cityName: {
      type: String,
      required: true,
    },
    dob: {
      type: Date,
      required: true,
    },
    gender: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    emergencyContact: {
      type: String,
      required: true,
    },
    nationality: {
      type: String,
      required: true,
    },
    passportId: {
      type: String,
      required: true,
    },
    enrollmentStatus: {
      type: String,
      required: true,
    },
    program: {
      type: String,
      required: true,
    },
    levelOfStudy: {
      type: String,
      required: true,
    },
    disability: {
      type: String,
      required: true,
    },
    bloodGroup: {
      type: String,
      required: true,
    },
    HFQ: {
      type: String,
      required: true,
    },
    criminalHistory: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.models.PersonalInformation ||
  mongoose.model("PersonalInformation", personalInformationSchema);
