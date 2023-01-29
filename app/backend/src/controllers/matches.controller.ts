import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { IMatchService } from '../interfaces/matches.interface';
import ErrorHandler from '../utils/error.handler';

export default class MatchesController {
  constructor(private _service: IMatchService) { }

  async getAll(req: Request, res: Response) {
    const { inProgress } = req.query;
    let query;
    if (inProgress === 'false') query = false;
    if (inProgress === 'true') query = true;

    const result = await this._service.getAll(query as boolean | undefined);
    res.status(StatusCodes.OK).send(result);
  }

  async create(req: Request, res: Response) {
    const { homeTeamId, awayTeamId } = req.body;
    if (homeTeamId === awayTeamId) {
      throw new ErrorHandler(
        StatusCodes.UNPROCESSABLE_ENTITY,
        'It is not possible to create a match with two equal teams',
      );
    }
    const done = await this._service.create(req.body);
    res.status(StatusCodes.CREATED).send(done);
  }

  async updated(req: Request, res: Response) {
    const { id } = req.params;
    await this._service.updated(Number(id));
    res.status(StatusCodes.OK).send({ message: 'Finished' });
  }

  async updateGoals(req: Request, res: Response) {
    const { id } = req.params;
    await this._service.updateGoals(Number(id), req.body);
    res.status(StatusCodes.OK).send({ message: 'Updated' });
  }
}
