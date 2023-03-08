const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const VoucherSchema = new Schema(
  {
    voucherCode: {
      type: String,
      required: true,
    },
    amount: {
      type: Number,
      required: true,
    },
    paymentMethod: {
      type: String,
      required: true,
    },
    studentName: {
      type: String,
      required: true,
    },
    studentId: {
      type: String,
      required: true,
    },
    program: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      required: true,
      default: "pending",
    },
    dateCreated: {
      type: Date,
      default: Date.now,
    },
    dateModified: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);

export default mongoose.models.Voucher = mongoose.model(
  "Voucher",
  VoucherSchema
);
