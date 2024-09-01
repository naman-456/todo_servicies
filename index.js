import express from 'express';
import addToDoItem from './controllers/addTodoItem.js';
import getToDoItems from './controllers/getTodoDetails.js';
import bodyParser from 'body-parser';

const app = express();
const PORT = 3050
app.use(bodyParser.json())

app.post('/add/todo', addToDoItem)
app.get('/get/todo/list', getToDoItems)

app.listen(PORT, () => {
    console.log(`Your app is running on http://localhost:${PORT}`);
})