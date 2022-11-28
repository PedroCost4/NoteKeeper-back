import prisma from '../prisma.js';

export const createNote = async (req, res) => {
    try {
        const note = await prisma.Notes.create({
            data: {
                titulo: req.body.titulo,
                conteudo: req.body.conteudo
            },
        });
        res.status(200).send(note);
    }catch(e){
        console.log(e);
    }
}

export default createNote;