import fs from 'fs';
import { fileURLToPath } from 'url';
import { dirname , join} from 'path';

import existingTodoList from '../database/db.js'
const addToDoItem = (req, res) => {
    console.log(req?.body, 'hdddjd is')
    let todoList = existingTodoList?.length ? existingTodoList : [];
    if(req?.body?.work_desc && req?.body?.date){
        todoList.push(req?.body) 
        try{
            // console.log('import.meta.url :', fileURLToPath(import.meta.url))
            const dirPath = dirname(fileURLToPath(import.meta.url))
            console.log('dirPath :', dirPath);
            let dbFilePath = join(dirPath, '../database/db.js')
            fs.writeFile(dbFilePath, `export default ${JSON.stringify(todoList)}`, (error) => {
                if(error){
                    console.log('your err is', error);
                }
                else{
                    res.send({
                        status: 1000,
                        message: 'Data saved sucessfully'
                    })
                }
            })
        } 
        catch(err){
            console.log('error in api :', err);
        }   
        
    }

}

export default addToDoItem;