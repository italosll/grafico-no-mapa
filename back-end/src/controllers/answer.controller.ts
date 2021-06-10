/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
/* eslint-disable camelcase */
import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import { Answer } from '../entities/Answer';

export default {
  async create(request: Request, response: Response) {
    const answerRepository = getRepository(Answer);
    const answer = answerRepository.create(request.body);
    await answerRepository.save(answer);
    return response.json(answer).status(201);
  },

  async read(request: Request, response: Response) {
    const answerRepository = getRepository(Answer);
    const answer = await answerRepository.find();
    return response.json(answer);
  },

  async delete(request: Request, response: Response) {
    const answerRepository = getRepository(Answer);
    const { id } = request.body;
    const answer = await answerRepository.findOne({ id });

    if (!answer) {
      return response.send({
        error: `Nenhuma resposta com id ${id}`,
      });
    }

    const deleteResponse = await answerRepository.delete(id);
    return response.send({ message: 'Resposta deletado com sucesso', deleteResponse });
  },
};
