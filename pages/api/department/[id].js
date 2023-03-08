import Department from "../../../models/department";
import dbConnect from "../../../utils/mongo";

export default async function handler(req,res){
    const {method,query:{id}} = req;
    dbConnect();
    if(method === 'GET'){
     try {
       const singleDepartment = await Department.findById(id);
       res.status(200).json(singleDepartment) 
     } catch (error) {
        res.status(500).json({error})
     }
    }
    else if (method === 'PUT') {
        try {
            const updatedDepartment = await Department.findByIdAndUpdate(id, req.body, { new: true });
            if (updatedDepartment) {
                res.status(200).json({ message: 'Department updated successfully', updatedDepartment });
            } else {
                res.status(404).json({ error: 'Department not found' });
            }
        } catch (error) {
            res.status(500).json({ error });
        }
    } 
    else if (method === 'DELETE') {
        try {
            const deletedDepartment = await Department.findByIdAndDelete(id);
            if (deletedDepartment) {
                res.json({ message: 'Department deleted successfully' });
            } else {
                res.status(404).json({ error: 'Department not found' });
            }
        } catch (error) {
            res.status(500).json({ error });
        }
    }
}