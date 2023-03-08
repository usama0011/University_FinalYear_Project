import Academic from "../../../models/academic";
import dbConnect from "../../../utils/mongo";
import { authMiddleware } from "../../../utils/verifyTokens";

export default async function handler(req, res) {
  const { method } = req;
  dbConnect();
  if (method === "GET") {
    try {
      authMiddleware(req, res, async () => {
        // const academicsData = await Academic.find();
        res.status(200).json({message:"API is working Fine"})
      });
    } catch (error) {
      res.status(500).json(error);
    }
  } else if (method === "POST") {
    try {
      authMiddleware(req, res, async () => {
        const createPersonaInformation = await Academic.create(req.body);
        res.status(201).json(createPersonaInformation);
      });
    } catch (error) {
      res.status(500).json(error);
    }
  } else {
    res.status(405).json({ message: "Method not Allowed" });
  }
}
