
import todoList from '../database/db.js'
const getToDoItems = (req, res) => {
    res.send({
        status : 1000,
        data:{
            todoItems: todoList
        }
    })    

}

export default getToDoItems