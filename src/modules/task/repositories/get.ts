import prisma from "../../../prisma";

export const getNotes = async (id: string) => {
    try {
        const note = await prisma.notes.findFirst({
            where: {
                id,
            }
        }
        );
        return note;
    }catch(e){
        console.log(e);
    }
}

export default getNotes;