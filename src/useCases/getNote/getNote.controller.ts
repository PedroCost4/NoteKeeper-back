import { Request, Response } from "express";
import getNoteUseCase  from "./getNote.useCase";

class getNoteController {
    constructor(private getNoteUseCase: getNoteUseCase) {}

    async handle(request: Request, response: Response): Promise<Response> {
        try {
            const { id } = request.params;

            const note = await this.getNoteUseCase.execute(id);

            return response.status(200).json(note);
        } catch (error) {
            return response.status(400).json({
                message: error.message || 'Unexpected error.'
            });
        }
    }
}