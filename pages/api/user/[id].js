import dbConnect from '../../../utils/mongo';
import User from '../../../models/user';


export default async function handler(req,res){
const {method,query:{id}} = req;
dbConnect()
if(method === 'GET'){
    try {
        const user = await User.findById(id);
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ error });
    }  
}
else if(method === 'PUT'){
try {
    const updateUser = await User.findByIdAndUpdate(id,req.body,{new:true});
    if(updateUser){
        res.status(200).json({message:"user updated Successfully",updateUser})
    }else{
        res.status(404).json({error:"User not Found"})
    }
} catch (error) {
    res.status(500).json({error})
}
}
else if(method === "DELETE"){
try {
   const deletedUser = await User.findByIdAndDelete(id);
   if(deletedUser){
       res.status(200).json({message:"user Successfully Delete"})
   }else{
       res.status(404).json({error:"User not Found"})
   }
} catch (error) {
    res.status(500).json({ error });
}
}
else {
    res.status(405).json({ error: 'Method not allowed' });
}
}
