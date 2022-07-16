const mongoose=require('mongoose')

const TodoListItems=new mongoose.Schema({
    itemName: {type:String,required: true},
}, {collection:'todo-items'}
)

const model=mongoose.model('todoItems',TodoListItems)

module.exports=model