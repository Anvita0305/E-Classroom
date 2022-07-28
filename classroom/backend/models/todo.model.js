const mongoose=require('mongoose')

const TodoListItems=new mongoose.Schema({
    username:{type:String},
    itemName: [String],
}, {collection:'todo-items'}
)

const model=mongoose.model('todoItems',TodoListItems)

module.exports=model
