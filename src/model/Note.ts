interface INote {
    id: String;
    title: String;
    content: String;
    date: Date;
}

class Note {

    id: String;
    title: String;
    content: String;
    date: Date;

    constructor({id, title, content, date}: INote) {
        this.id = id;
        this.title = title;
        this.content = content;
        this.date = date;
    }

}