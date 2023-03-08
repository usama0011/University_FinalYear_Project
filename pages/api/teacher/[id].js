import Teacher from "../../../models/teacher";
import dbConnect from "../../../utils/mongo";
export default async function handler(req, res, next) {
  const {
    method,
    query: { id },
  } = req;
  dbConnect();
  if (method === "GET") {
    try {
      const singleTeacher = await Teacher.findById(id);
      res.status(200).json(singleTeacher);
    } catch (error) {
      res.status(500).json({ error });
    }
  } else if (method === "PUT") {
    try {
      const updatedTeacher = await Teacher.findByIdAndUpdate(id, req.body, {
        new: true,
      });
      if (updatedTeacher) {
        res
          .status(200)
          .json({ message: "Teacher updated successfully", updatedTeacher });
      } else {
        res.status(404).json({ error: "Teacher not found" });
      }
    } catch (error) {
      res.status(500).json({ error });
    }
  } else if (method === "DELETE") {
    try {
      const deletedTeacher = await Teacher.findByIdAndDelete(id);
      if (deletedTeacher) {
        res.json({ message: "Teacher deleted successfully" });
      } else {
        res.status(404).json({ error: "Teacher not found" });
      }
    } catch (error) {
      res.status(500).json({ error });
    }
  }
}
