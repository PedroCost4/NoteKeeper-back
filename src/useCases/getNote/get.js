import prisma from '../../prisma.js';

export const getNotes = async (req,res) => {
    try {
        const notes = await prisma.Notes.findMany();
        return res.status(200).json(notes);
    }catch(e){
        console.log(e);
    }
}

export default getNotes;