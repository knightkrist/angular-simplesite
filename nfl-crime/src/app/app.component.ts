import { Component } from '@angular/core';
import { crime } from './models/crime.model';
import { DataService } from './service/data.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  crime$: Observable<Array<crime>>;
  title = 'app';

  constructor(private dataser:DataService){}

  
  ngOnInit() {
    this.crime$ = this.dataser.getCrime();
  }

}
