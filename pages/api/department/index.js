import dbConnect from "../../../utils/mongo";
import Department from "../../../models/department";

export default async function handler(req,res){
  const {method} = req;
  dbConnect();
  if(method === 'GET'){
    try {
        const departments = await Department.find();
        res.status(200).json(departments);
      } catch (err) {
        res.status(500).json({ message: err.message });
      }
  } 
  else if ( method === 'POST'){
    try {
        const newDepartment = await Department.create(req.body);
        res.status(201).json(newDepartment);
      } catch (err) {
        res.status(500).json({ message: err.message });
      }
  }
  else {
    res.status(405).json({ error: 'Method not allowed' });
}   
}

