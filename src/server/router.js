import express from 'express';
const router = express.Router();

import { createNote, getNotes, updateNote, deleteNote } from '../methods/controller.js';


router
.post('/notes', async (req, res) => {
    await createNote(req, res);
})

.get('/notes', async (req,res) => {
    await getNotes(req, res);
})

.put('/notes', async (req, res) => {
    await updateNote(req, res);
})

.delete('/notes/:id', async (req, res) => {
    await deleteNote(req, res);
})


export default router;