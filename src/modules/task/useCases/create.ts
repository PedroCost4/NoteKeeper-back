import { Prisma } from "@prisma/client";
import { createNote } from "../repositories/create";

export const createNoteUseCase = async (note: Prisma.NotesUncheckedCreateInput) => {
    return createNote(note);
}