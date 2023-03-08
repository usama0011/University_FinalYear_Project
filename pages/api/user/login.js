import dbConnect from "../../../utils/mongo";
import User from "../../../models/user";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
export default async function handler(req, res) {
  await dbConnect();

  if (req.method === "POST") {
    const { email, password } = req.body;

    try {
      // Find user by email
      const user = await User.findOne({ email });

      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }

      // Check password
      const isMatch = await bcrypt.compare(password, user.password);

      if (!isMatch) {
        return res.status(400).json({ message: "Invalid credentials" });
      }
      const payload = {
        user: {
          id: user.id,
          isAdmin: user.isAdmin,
        },
      };
      jwt.sign(
        payload,
        process.env.JWT_SECRET,
        { expiresIn: "1d" },
        (err, token) => {
          if (err) throw new Error(err);
          return res.status(200).json({
            token,
            user: {
              id: user.id,
              userName: user.userName,
              email: user.email,
              idNumber: user.idNumber,
              isAdmin: user.isAdmin,
            },
          });
        }
      );
    } catch (error) {
      return res.status(500).json({ message: "Server error" });
    }
  } else {
    return res.status(405).json({ message: "Method not allowed" });
  }
}
