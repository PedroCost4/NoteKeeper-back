import express from "express";
import notesRouter from "./notes.routes";
import { Request, Response } from "express";

const routes = (app: any) => {
    //Teste de rota base
    app.route("/").get((req: Request, res: Response) => {
        res.status(200).send({ title: "Home page Test Json" });
    });

    app
    .use(express.json())
    .use("/user", notesRouter)

};

export default routes;