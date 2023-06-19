import prisma from '../prisma.js';

export const NoteDontExists = async (req, res, next) => {
    const id = req.params.id;
    const note = await prisma.notes.findUnique({
        where: {
            id,
        },
    });
    if(!note){
        res.status(404).json({error: 'Note dont exists'});
    }
}

export const NoteWoId = async (req, res, next) => {
    const idx = parseInt(req.params.id);
    if(!idx){
        res.status(400).json({error: 'ID is Mandatory'});
    }
}

export default { NoteDontExists, NoteWoId };