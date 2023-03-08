import PersonalInformation from "../../../models/personalInformation";
import dbConnect from "../../../utils/mongo";
import { authMiddleware } from "../../../utils/verifyTokens";
export default async function handler(req, res) {
  const { method } = req;
  dbConnect();
  if (method === "GET") {
    try {
      const getPersonalInformation = await PersonalInformation.find();
      res.status(200).json(getPersonalInformation);
    } catch (error) {
      res.status(500).json({ error });
    }
  } else if (method === "POST") {
    try {
      // Add authMiddleware to verit if user is authenticated;
      authMiddleware(req, res, async () => {
        const personalInformationData = await PersonalInformation.create(
          req.body
        );

        res.status(201).json({
          personalInformationData,
        });
      });
      
    } catch (error) {
      res.status(500).json({ error });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
