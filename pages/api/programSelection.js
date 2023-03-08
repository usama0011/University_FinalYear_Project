import ProgramSelection from "../../models/programSelection";
import dbConnect from "../../utils/mongo";

export default async function handler(req, res) {
  const { method } = req;
  dbConnect();

  switch (method) {
    case "POST":
      try {
        const { studentId, programOfferId } = req.body;

        const programSelection = await ProgramSelection.create({
          student: studentId,
          programOffer: programOfferId,
        });

        res.status(201).json(programSelection);
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Server error" });
      }
      break;
    default:
      res.status(405).json({ error: `Method ${method} not allowed` });
      break;
  }
}
