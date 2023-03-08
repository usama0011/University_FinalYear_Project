import ProgramsOffer from "../../../models/programsOffer";
import dbConnect from "../../../utils/mongo";

export default async function handler(req, res) {
  const { method } = req;

  await dbConnect();

  switch (method) {
    case "GET":
      try {
        const programOffers = await ProgramsOffer.find({});
        res.status(200).json({ success: true, data: programOffers });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    case "POST":
      try {
        // Here, you can validate the programOfferId and studentId fields as per your requirements
        // You can also check if a student with the given studentId exists in your database or not

        const programOffer = await ProgramsOffer.create(req.body);
        res.status(201).json({ success: true, data: programOffer });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
}
