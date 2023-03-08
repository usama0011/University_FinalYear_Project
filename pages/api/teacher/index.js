import dbConnect from "../../../utils/mongo";
import Teacher from "../../../models/teacher";
import { authMiddleware, adminMiddleware } from "../../../utils/verifyTokens";

export default async function handler(req, res) {
  const { method } = req;

  dbConnect();

  if (method === "GET") {
    try {
      const teachers = await Teacher.find();
      res.status(200).json(teachers);
    } catch (error) {
      res.status(500).json({ error });
    }
  } else if (method === "POST") {
    try {
      // Add authMiddleware to verify if user is authenticated
      authMiddleware(req, res, async () => {
        // Add adminMiddleware to verify if user is an admin
        adminMiddleware(req, res, async () => {
          const newTeacher = await Teacher.create(req.body);
          res
            .status(201)
            .json({ message: "Teacher added successfully", newTeacher });
        });
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({ error });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
