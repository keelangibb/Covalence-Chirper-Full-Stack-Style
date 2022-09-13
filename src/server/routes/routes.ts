import * as express from 'express';
import DB from '../db';

const router = express.Router();

router.get('/api/hello', (req, res, next) => {
    res.json('World');
});
router.get('/api/chirps', async (req, res, next) => {
    try {
        let chirps = await DB.Chirps.all()
        res.json(chirps)
    } catch (error) {
        console.log(error)
        res.sendStatus(500);
    }
});


export default router;