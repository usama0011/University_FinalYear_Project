import dbConnect from "../../../utils/mongo";
import User from "../../../models/user";

export default async function handler(req, res) {
  const { method } = req;
  dbConnect();
  if (method === "GET") {
    try {
      const users = await User.find();
      res.status(200).json(users);
    } catch (error) {
      res.status(500).json({ error });
    }
  } else if (method === "POST") {
    try {
      const { userName, idNumber } = req.body;
      const existingUser = await User.findOne({ idNumber });
      if (existingUser) {
        res.status(409).json({ message: "User already registered" });
      } else {
        const newUser = await User.create(req.body);
        res
          .status(201)
          .json({ message: "User registered successfully", newUser });
      }
    } catch (error) {
      res.status(500).json({ error });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
