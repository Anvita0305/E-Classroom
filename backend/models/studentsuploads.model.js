const mongoose=require('mongoose')

const studentAssignmentUploads=new mongoose.Schema({
    assignmentId:{type:String},
    studentId:{type:String},
    fileName:{type:String},
    assignment:{data:Buffer,contentType:String},
    fileUploadDate:{type:String},
    fileUploadTime:{type:String},
},{collection:'assignment-uploads'}
)


const model=mongoose.model('assignmentUploads',studentAssignmentUploads)
module.exports=model