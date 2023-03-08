const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const programOfferSchema = new Schema(
  {
    programTitle: {
      type: String,
      required: true,
    },
    programCode: {
      type: String,
      required: true,
      unique: true,
    },
    programDescription: {
      type: String,
      required: true,
    },
    programLevel: {
      type: String,
      required: true,
    },
    programDuration: {
      type: Number,
      required: true,
    },
    programDegree: {
      type: String,
      required: true,
    },
    programDepartment: {
      type: String,
      required: true,
    },
    programCampus: {
      type: String,
      required: true,
    },
    programFee: {
      type: Number,
      required: true,
    },
    programRequirements: {
      type: String,
      required: true,
    },
    programEligibility: {
      type: String,
      required: true,
    },
    programCurriculum: {
      type: String,
      required: true,
    },
    programDeadline: {
      type: Date,
      required: true,
    },
    programStartDate: {
      type: Date,
      required: true,
    },
    programEndDate: {
      type: Date,
      required: true,
    },
    programImage: {
      data: Buffer,
      contentType: String,
    },
  },
  { timestamps: true }
);

export default mongoose.models.ProgramOffer ||
  mongoose.model("ProgramOffer", programOfferSchema);
