import prisma from "../../../prisma";

export const deleteNote = async (id: string) => {
    try {
        const deletedNote = await prisma.notes.delete({
            where: {
                id,
            },
        });
        return deletedNote;
    }catch (e) {
        console.log(e);
    }
}

export default deleteNote;