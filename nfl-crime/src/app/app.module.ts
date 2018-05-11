import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { PlayersComponent } from './players/players.component';
import { TeamsComponent } from './teams/teams.component';
 
import { HttpClientModule } from '@angular/common/http';

import { DataService } from './service/data.service';
import { RouterModule, Routes } from '@angular/router';

/*const routeLists : Routes [
  {
    path:"",
    component:AppComponent
  },
  {
    path:"players",
    component:PlayersComponent
  }
]*/

@NgModule({
  declarations: [
    AppComponent,
  
    PlayersComponent,
    TeamsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
    //RouterModule.forRoot(routeLists)
  ],
  providers: [
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
