import express from "express";

const app = express();

app.get('/api' , (req,res)=>{
    res.send('Hello World');
});

const port = 5000;
app.listen(port , ()=> console.log(`listening on port ${port}`));

export default app;