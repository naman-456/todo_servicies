import express from 'express';
import addToDoItem from './controllers/addTodoItem.js';
import bodyParser from 'body-parser';

const app = express();

app.use(bodyParser.json())

app.post('/add/todo', addToDoItem)

app.listen(3050, () => {
    console.log('Your app is running on http://localhost:3050');
})