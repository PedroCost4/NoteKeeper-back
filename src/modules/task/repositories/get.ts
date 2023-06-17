import prisma from "../../../prisma";


export const getNotes = async (id: string) => {
    try {
        const notes = await prisma.notes.findMany();
        return notes;
    }catch(e){
        console.log(e);
    }
}

export default getNotes;