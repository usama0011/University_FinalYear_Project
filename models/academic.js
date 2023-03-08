const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const academicSchema = new Schema(
  {
    matricExamPass: {
      type: String,
      required: true,
    },
    matricExamBoard: {
      type: String,
      required: true,
    },
    matricRolllNumber: {
      type: String,
      required: true,
    },
    matricPassingYear: {
      type: String,
      required: true,
    },
    matricAnnualStatus: {
      type: String,
      required: true,
    },
    matricObtainedMarks: {
      type: String,
      required: true,
    },
    matricTotalNumbers: {
      type: String,
      required: true,
      default: "1100",
    },
    interExamPass: {
      type: String,
      required: true,
    },
    interExamBoard: {
      type: String,
      required: true,
    },
    interRolllNumber: {
      type: String,
      required: true,
    },
    interPassingYear: {
      type: String,
      required: true,
    },
    interAnnualStatus: {
      type: String,
      required: true,
    },
    interObtainedMarks: {
      type: String,
      required: true,
    },
    interTotalNumbers: {
      type: String,
      required: true,
      default: "1100",
    },
  },
  { timestamps: true }
);

export default mongoose.models.Academic ||
  mongoose.model("Academic", academicSchema);
