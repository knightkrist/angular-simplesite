import { Injectable } from '@angular/core';
import { crime } from '../models/crime.model';
import { player } from '../models/player.model';
import { team } from '../models/team.model';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  crimeapi:string;
  playerapi:string;
  teamapi: string;

  constructor(private crimehttp:HttpClient, private playerhttp:HttpClient, private teamhttp:HttpClient) {
    this.crimeapi = "http://nflarrest.com/api/v1/crime";
    this.playerapi = "http://nflarrest.com/api/v1/crime/topPlayers/Theft";
    this.teamapi = "http://nflarrest.com/api/v1/crime/topTeams/Theft";
   }

   getCrime(): Observable<Array<crime>>{
    return this.crimehttp.get<Array<crime>>(this.crimeapi);
   }

   getplayer(): Observable<Array<player>>{
    return this.playerhttp.get<Array<player>>(this.playerapi);
   }

   getteam(): Observable<Array<team>>{
    return this.teamhttp.get<Array<team>>(this.teamapi);
   }
}
