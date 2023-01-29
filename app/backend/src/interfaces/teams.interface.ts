import Team from '../database/models/Team.model';
import Match from '../database/models/Match.model';

export interface ITeamMatches extends Team {
  homeTeam: Match []
  awayTeam: Match []
}

export interface ITeamModel {
  getAll(): Promise<Team[]>
  getById(id: number): Promise<Team | null>
}

export interface ITeamService {
  getAll(): Promise<Team[]>
  getById(id: number): Promise<Team | null>
}
