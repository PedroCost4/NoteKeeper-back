import { Notes, Prisma } from "@prisma/client";
import prisma from "../../../prisma";

export const updateNote = async (id: string, data: Prisma.NotesUncheckedUpdateInput) => {
    try {
        const updatedNote = await prisma.notes.update({
            where: {
                id,
            },
            data,
        });
        return updatedNote
    }catch(e){
        console.log(e);
    }
}

export default updateNote;