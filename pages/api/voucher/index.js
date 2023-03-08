import Voucher from "../../../models/voucher";
import dbConnect from "../../../utils/mongo";

export default async (req, res) => {
  const { method } = req;
  dbConnect();
  switch (method) {
    case "GET":
      try {
        const vouchers = await Voucher.find();
        res.status(200).json(vouchers);
      } catch (error) {
        res.status(500).json({ message: "Error fetching vouchers" });
      }
      break;
    case "POST":
      try {
        const newVoucher = await Voucher.create(req.body);
        res.status(201).json({ message: "Voucher created successfully" });
      } catch (error) {
        res.status(500).json({ message: "Error creating voucher" });
      }
      break;
    default:
      res.status(405).json({ message: "Method not allowed" });
      break;
  }
};
