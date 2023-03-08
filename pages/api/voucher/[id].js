import Voucher from "../../../models/voucher";
import dbConnect from "../../../utils/mongo";

export default async (req, res) => {
  const {
    method,
    query: { id },
  } = req;
  dbConnect();
  switch (method) {
    case "PUT":
      try {
        const updatedVoucher = await Voucher.findByIdAndUpdate(id, req.body, {
          new: true,
        });
        res.status(200).json({ message: "Voucher updated", updatedVoucher });
      } catch (error) {
        res.status(500).json({ message: "Error updating voucher" });
      }
      break;
    case "DELETE":
      try {
        await Voucher.findByIdAndDelete(id);
        res.status(200).json({ message: "Voucher deleted" });
      } catch (error) {
        res.status(500).json({ message: "Error deleting voucher" });
      }
      break;
    default:
      res.status(405).json({ message: "Method not allowed" });
      break;
  }
};
