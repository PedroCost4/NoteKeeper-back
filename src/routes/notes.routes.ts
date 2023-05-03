import Router from 'express';


const router = Router();

router
.post('/notes', async (req, res) => {
    //await createNote(req, res);
})

.get('/notes', async (req,res) => {
    //await getNotes(req, res);
})

.put('/notes', async (req, res) => {
    //await updateNote(req, res);
})

.delete('/notes/:id', async (req, res) => {
    //await deleteNote(req, res);
})


export default router;