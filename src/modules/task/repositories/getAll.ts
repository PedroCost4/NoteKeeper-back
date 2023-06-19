import prisma from "../../../prisma";


export const getNotes = async (userId: string) => {
    try {
        const notes = await prisma.notes.findMany({
            where: {
                userId,
            }
        });
        return notes;
    }catch(e){
        console.log(e);
    }
}

export default getNotes;