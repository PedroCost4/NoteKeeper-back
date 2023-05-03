import prisma from '../../prisma.js';
import {NoteDontExists, NoteWoId} from '../../methods/testingEntries.js';

export const deleteNote = async (req, res, next) => {
    NoteWoId(req,res, next);
    NoteDontExists(req, res, next);
    const idx = parseInt(req.params.id);
    try {
        await prisma.Notes.delete({
            where: {
                id: idx
            },
        });
        return res.status(200).json({message: 'Note deleted'});
    }catch (e) {
        console.log(e);
    }
}

export default deleteNote;