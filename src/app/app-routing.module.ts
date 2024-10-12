import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component'; // Assuming you still want to keep the Dashboard
import { AddCabComponent } from './components/cab/addcab/addcab.component';
import { DisplayAllCabComponent } from './components/cab/displayallcab/displayallcab.component'; // Ensure this component exists
import { AddDriverComponent } from './components/driver/adddriver/adddriver.component';
import { UpdateCabComponent } from './components/cab/updatecab/updatecab.component';
import { UpdateDriverComponent } from './components/driver/updatedriver/updatedriver.component';
import { DisplayAllDriverComponent } from './components/driver/displayalldriver/displayalldriver.component'; // Ensure this component exists
const routes: Routes = [
  { path: 'home', component: DashboardComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // Default route

  // Cab routes
  { path: 'addcab', component: AddCabComponent },
  { path: 'updatecab', component: UpdateCabComponent },
  { path: 'displayallcab', component: DisplayAllCabComponent },

  // Driver routes
  { path: 'adddriver', component: AddDriverComponent },
  { path: 'updatedriver', component: UpdateDriverComponent },
  { path: 'displayalldriver', component: DisplayAllDriverComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
