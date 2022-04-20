import express from 'express';
import routes from './routes';
import morgan from 'morgan';

const app = express();

//Middlewares
app.use(morgan('tiny'));
//routes handler
app.use('/' , routes);


const port = 5000;
app.listen(port , ()=>{
    console.log(`Server runing on Port ${port}`);
});