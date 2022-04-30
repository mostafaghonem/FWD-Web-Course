import express from 'express';
import students from './api/students';
import teachers from './api/teachers';

const router = express.Router();


router.get('/' , (req,res)=>{
    res.send('main API ...');
});

router.use('/students' , students);
router.use('/teachers' , teachers);

export default router;
