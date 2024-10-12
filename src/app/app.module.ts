import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import {FormsModule}  from '@angular/forms';
import { AddCabComponent } from './components/cab/addcab/addcab.component';
import { DisplayAllCabComponent } from './components/cab/displayallcab/displayallcab.component';
import { SearchcabComponent } from './components/cab/searchcab/searchcab.component';
//import { AddDriverComponent } from './components/driver/adddriver/adddriver.component';
import { UpdateDriverComponent } from './components/driver/updatedriver/updatedriver.component';
import { SearchdriverComponent } from './components/driver/searchdriver/searchdriver.component';
import { DashboardComponent } from './components/dashboard/dashboard.component'
import { AddDriverComponent } from './components/driver/adddriver/adddriver.component';
import { DisplayAllDriverComponent } from './components/driver/displayalldriver/displayalldriver.component';
import { UpdateCabComponent } from './components/cab/updatecab/updatecab.component';


@NgModule({
  declarations: [       // components
    AppComponent, AddCabComponent, UpdateCabComponent, DisplayAllCabComponent, SearchcabComponent, AddDriverComponent, UpdateDriverComponent, DisplayAllDriverComponent, SearchdriverComponent, DashboardComponent
  ],
  imports: [          // modules
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule

  ],
  providers: [],   // service classes
  bootstrap: [AppComponent]
})
export class AppModule { }
