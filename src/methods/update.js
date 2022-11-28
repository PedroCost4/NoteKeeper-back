import prisma from '../prisma.js';
import {NoteDontExists, NoteWoId} from './testingEntries.js';

export const updateNote = async (req, res) => {
    NoteWoId(req,res, next);
    NoteDontExists(req, res, next);
    const idx = parseInt(req.params.id);
    try {
        await prisma.Notes.update({
            where: {
                id: idx
            },
            data: {
                titulo: req.body.titulo,
                conteudo: req.body.conteudo
            },
        });
    }catch(e){
        console.log(e);
    }
}

export default updateNote;