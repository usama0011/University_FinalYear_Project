import Academic from "../../../models/Academic";
import dbConnect from "../../../utils/mongo";
export default async function handler(req,res){
    const {method,query:{id}} = req;
    dbConnect();
    if(method === 'GET'){
     try {
       const singleAcademic = await Academic.findById(id);
       res.status(200).json(singleAcademic) 
     } catch (error) {
        res.status(500).json({error})
     }
    }
    else if (method === 'PUT') {
        try {
            const updatedAcademic = await Academic.findByIdAndUpdate(id, req.body, { new: true });
            if (updatedAcademic) {
                res.status(200).json({ message: 'Academic updated successfully', updatedAcademic });
            } else {
                res.status(404).json({ error: 'Academic not found' });
            }
        } catch (error) {
            res.status(500).json({ error });
        }
    } 
    else if (method === 'DELETE') {
        try {
            const deletedAcademic = await Academic.findByIdAndDelete(id);
            if (deletedAcademic) {
                res.json({ message: 'Academic deleted successfully' });
            } else {
                res.status(404).json({ error: 'Academic not found' });
            }
        } catch (error) {
            res.status(500).json({ error });
        }
    }
}