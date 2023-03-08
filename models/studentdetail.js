const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RegisteredStudentDetailSchema = new Schema({
    personalInformation: {
        type: Schema.Types.ObjectId,
        ref: 'PersonalInformation'
    },
    academic: {
        type: Schema.Types.ObjectId,
        ref: 'Academic'
    }
});

export default mongoose.models.RegisteredStudentDetail ||mongoose.model('RegisteredStudentDetail', RegisteredStudentDetailSchema);
