import express from 'express';
import { promises as fs } from 'fs';
import csv from 'csvtojson';

const app = express();

const inputFile  = 'E:/Mostafa Ghonem/FCIS/My Code/FWD-Web-Course/lesson5/exercise1/users.csv';
const outputFile = 'E:/Mostafa Ghonem/FCIS/My Code/FWD-Web-Course/lesson5/exercise1/users.json';

app.get('/convert' , (req,res)=>{
    res.send('converting in process!');
    csv().fromFile(inputFile).then((data)=>{
        const newData = data.map((item:{first_name:string,last_name:string,phone:string})=>{
            let first = item.first_name;
            let last = item.last_name;
            let phone = item.phone;
            if(item.phone === "") phone = 'missing data';
            return {first , last , phone};
        })
        fs.writeFile(outputFile , JSON.stringify(newData));
    })
})

const port = 5000;
// start the Express server
app.listen(port, () => {
    console.log(`server started at http://localhost:${port}`);
});
