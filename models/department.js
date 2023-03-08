const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const departmentSchema = new Schema({
    departmentName: {
        type: String,
        required: true
    },
    departmentImage: {
        type: String,
        required: true
    },
    departmentDescription: {
        type: String,
        required: true
    },
    departmentOfferPrograms: [{ type: String, required: true }],
    departmentProspectus: {
        type: String,
        required: true
    },
    departmentRating: {
        type: Number,
        required: true,
        max:5
    }
},{timestamps:true});

export default mongoose.models.Department || mongoose.model('Department', departmentSchema);

