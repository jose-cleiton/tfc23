import Match from '../database/models/Match.model';

export interface IResMatch extends Match {
  homeTeam: { teamName: string },
  awayTeam: { teamName: string }
}

export type TUpGoals = Omit<Match, 'id' | 'inProgress' | 'homeTeamId' | 'awayTeamId'>;

export interface IMatchTeam {
  id: number;
  homeTeamId: number;
  homeTeamGoals: number;
  awayTeamId: number;
  awayTeamGoals: number;
  inProgress: boolean;
}

export interface IMatchModel {
  getAll(inProgess: boolean | undefined): Promise<IResMatch[]>
  create(data: Omit<Match, 'id' | 'inProgess'>): Promise<Match>
  updated(id: number): Promise<void>
  updateGoals(id:number, data: TUpGoals): Promise<void>
}

export interface IMatchService {
  getAll(query: boolean | undefined): Promise<IResMatch[]>
  create(data: Omit<Match, 'id' | 'inProgess'>): Promise<Match>
  updated(id: number): Promise<void>
  updateGoals(id:number, data: TUpGoals): Promise<void>
}
