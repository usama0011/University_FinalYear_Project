const mongoose = require('mongoose');

const teacherSchema = new mongoose.Schema({
  teacherName: {
    type: String,
    required: true
  },
  teacherAge: {
    type: Number,
    required: true
  },
  teacherSubject: {
    type: String,
    required: true
  },
  teacherExperience: {
    type: Number,
    required: true
  },
  teacherImage: {
    type: String,
    required: true
  },
  teacherDescription: {
    type: String,
    required: true
  },
  teacherEducation: {
    type: String,
    required: true
  }
},{timestamps:true});

export default mongoose.models.Teacher || mongoose.model('Teacher', teacherSchema);

