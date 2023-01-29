import { StatusCodes } from 'http-status-codes';
import Match from '../database/models/Match.model';
import { ITeamModel } from '../interfaces/teams.interface';
import { IMatchModel, IMatchService, IResMatch, TUpGoals } from '../interfaces/matches.interface';
import ErrorHandler from '../utils/error.handler';

export default class MatchService implements IMatchService {
  constructor(private _model: IMatchModel, private _teamModel: ITeamModel) { }

  async getAll(query: boolean | undefined): Promise<IResMatch[]> {
    const matches = await this._model.getAll(query);
    return matches;
  }

  async create(data: Omit<Match, 'id' | 'inProgress'>): Promise<Match> {
    const homeTeamId = await this._teamModel.getById(data.homeTeamId);
    const awayTeamId = await this._teamModel.getById(data.awayTeamId);
    if (!homeTeamId || !awayTeamId) {
      throw new ErrorHandler(StatusCodes.NOT_FOUND, 'There is no team with such id!');
    }

    const done = await this._model.create(data);
    return done;
  }

  async updated(id: number): Promise<void> {
    await this._model.updated(id);
  }

  async updateGoals(id: number, data: TUpGoals): Promise<void> {
    await this._model.updateGoals(id, data);
  }
}
