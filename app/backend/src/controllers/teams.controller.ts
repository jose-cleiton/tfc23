import { StatusCodes } from 'http-status-codes';
import { Request, Response } from 'express';
import { ITeamService } from '../interfaces/teams.interface';

export default class TeamController {
  constructor(private _service: ITeamService) {}

  async getAll(_req: Request, res: Response) {
    const teams = await this._service.getAll();
    res.status(StatusCodes.OK).send(teams);
  }

  async getById(req: Request, res: Response) {
    const { id } = req.params;
    const teamId = await this._service.getById(Number(id));
    res.status(StatusCodes.OK).send(teamId);
  }
}
