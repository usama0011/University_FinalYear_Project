import PersonalInformation from "../../../models/PersonalInformation";
import dbConnect from "../../../utils/mongo";

export default async function handler(req, res) {
  const {
    method,
    query: { id },
  } = req;
  dbConnect();
  if (method === "GET") {
    try {
      const singlePersonalInformation = await PersonalInformation.findById(id);
      res.status(200).json(singlePersonalInformation);
    } catch (error) {
      res.status(500).json({ error });
    }
  } else if (method === "PUT") {
    try {
      const updatedPersonalInformation =
        await PersonalInformation.findByIdAndUpdate(id, req.body, {
          new: true,
        });
      if (updatedPersonalInformation) {
        res
          .status(200)
          .json({
            message: "PersonalInformation updated successfully",
            updatedPersonalInformation,
          });
      } else {
        res.status(404).json({ error: "PersonalInformation not found" });
      }
    } catch (error) {
      res.status(500).json({ error });
    }
  } else if (method === "DELETE") {
    try {
      const deletedPersonalInformation =
        await PersonalInformation.findByIdAndDelete(id);
      if (deletedPersonalInformation) {
        res.json({ message: "PersonalInformation deleted successfully" });
      } else {
        res.status(404).json({ error: "PersonalInformation not found" });
      }
    } catch (error) {
      res.status(500).json({ error });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
