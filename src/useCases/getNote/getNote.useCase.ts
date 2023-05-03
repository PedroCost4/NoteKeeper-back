import NoteRepository from "../../repositories/note.repository";

class getNoteUseCase {

    noteRepository: NoteRepository ; 

    constructor() {
        this.noteRepository = new NoteRepository;
    }
    async execute(id) {
        return await this.noteRepository.get(id);
    }
}

export default getNoteUseCase;