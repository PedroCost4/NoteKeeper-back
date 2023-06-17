import { Notes } from "@prisma/client";
import prisma from "../../../prisma";

export const updateNote = async (id: string, data: Notes) => {
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