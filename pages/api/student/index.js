import RegisteredStudentDetail from "../../../models/studentdetail";
import dbConnect from "../../../utils/mongo";
export default async (req, res) => {
    const {method} = req;
    dbConnect();
    if(method === 'GET'){
        try {
          const registeredStudentDetails = await RegisteredStudentDetail.find().populate('personalInformation').populate('academic');
          res.status(200).json(registeredStudentDetails);
        } catch (error) {
          res.status(500).json({ message: 'Error fetching registered student details', error });
        }
    }
  }


