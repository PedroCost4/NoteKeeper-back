import { Prisma } from '@prisma/client';
import prisma from '../../../prisma';

export const createNote = async ({titulo, conteudo, userId}: Prisma.NotesUncheckedCreateInput) => {
    try {
        const note = await prisma.notes.create({
            data: {
                titulo,
                conteudo,
                userId
            },
        });
        return note;
    }catch(e){
        console.log(e);
    }
}