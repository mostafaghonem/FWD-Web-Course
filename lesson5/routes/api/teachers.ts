import express from 'express';
const router = express.Router();

router.get('/' , (req,res)=>{
    res.send('Teachers route ...');
});

export default router;
