const mongoose=require('mongoose');

mongoose.connect('mongodb://localhost:27017/studentsdata',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useCreateIndex: true,
}).then(()=>
{
    console.log('connected to mongodb');
}).catch((e)=>{
    console.log(e);
}); //connect to mongodb
