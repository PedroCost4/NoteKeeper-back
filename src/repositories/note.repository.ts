import prisma  from "../prisma";

class noteRepository {
    constructor() {
    }
    create = async (req, res) => {
        try {
            const note = await prisma.notes.create({
                data: {
                    titulo: req.body.titulo,
                    conteudo: req.body.conteudo
                },
            });
            res.status(200).send(note);
        }catch(e){
            console.log(e);
        }
    }

    get = async (id: String) => {
        try {
            const note = await prisma.notes.findMany();
            return note;
        }catch(e){
            console.log(e);
        }
    }


}

export default noteRepository;