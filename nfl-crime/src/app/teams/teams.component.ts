import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { team } from '../models/team.model';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent implements OnInit {

  team$: Observable<Array<team>>;

  constructor(private dataser:DataService){}

  ngOnInit() {
    this.team$ = this.dataser.getteam();
  }
  


}
