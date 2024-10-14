import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component'; // Assuming you still want to keep the Dashboard
import { AddCabComponent } from './components/cab/addcab/addcab.component';
import { DisplayAllCabComponent } from './components/cab/displayallcab/displayallcab.component'; // Ensure this component exists
import { AddDriverComponent } from './components/driver/adddriver/adddriver.component';
import { UpdateCabComponent } from './components/cab/updatecab/updatecab.component';
import { UpdateDriverComponent } from './components/driver/updatedriver/updatedriver.component';
import { DisplayAllDriverComponent } from './components/driver/displayalldriver/displayalldriver.component';
import { AddBookingComponent } from './components/booking/addbooking/addbooking.component';
import { UpdateBookingComponent } from './components/booking/updatebooking/updatebooking.component'; 
import { SearchbookingComponent } from './components/booking/searchbooking/searchbooking.component';
import { DisplayAllBookingComponent } from './components/booking/displayallbooking/displayallbooking.component';// Ensure this component exists
import { AddPaymentComponent } from './components/payment/addpayment/addpayment.component';
import { UpdatePaymentComponent } from './components/payment/updatepayment/updatepayment.component';
import { DisplayAllPaymentComponent } from './components/payment/displayallpayment/displayallpayment.component';
import { SearchpaymentComponent } from './components/payment/searchpayment/searchpayment.component';
import { AddReviewComponent } from './components/review/addreview/addreview.component';
import { UpdateReviewComponent } from './components/review/updatereview/updatereview.component';
import { DisplayAllReviewComponent } from './components/review/displayallreview/displayallreview.component';
import { SearchreviewComponent } from './components/review/searchreview/searchreview.component';


const routes: Routes = [
  { path: 'home', component: DashboardComponent },
  { path: '', redirectTo: '/', pathMatch: 'full' }, // Default route

  // Cab routes
  { path: 'addcab', component: AddCabComponent },
  { path: 'updatecab', component: UpdateCabComponent },
  { path: 'displayallcab', component: DisplayAllCabComponent },

  // Booking routes
  { path: 'addbooking', component: AddBookingComponent },
  { path: 'updatebooking', component: UpdateBookingComponent },
  { path: 'displayallbooking', component: DisplayAllBookingComponent },

  //Payment routes
 { path: 'addpayment', component: AddPaymentComponent },
{ path: 'updatepayment', component: UpdatePaymentComponent },
 { path: 'displayallpayment', component: DisplayAllPaymentComponent },

//Review routes
{ path: 'addreview', component: AddReviewComponent },
{ path: 'updatereview', component: UpdateReviewComponent },
 { path: 'displayallreview', component: DisplayAllReviewComponent },

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
