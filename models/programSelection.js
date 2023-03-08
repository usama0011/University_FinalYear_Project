import mongoose from "mongoose";
const Schema = mongoose.Schema;

const programSelectionSchema = new Schema(
  {
    student: {
      type: Schema.Types.ObjectId,
      ref: "personalInformation",
      required: true,
    },
    programOffer: {
      type: Schema.Types.ObjectId,
      ref: "ProgramOffer",
      required: true,
    },
  },
  { timestamps: true }
);

module.exports =
  mongoose.models.ProgramSelection ||
  mongoose.model("ProgramSelection", programSelectionSchema);
