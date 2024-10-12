import { Component } from '@angular/core';
import { Cab } from 'src/app/model/cab.model';
import { CabService } from 'src/app/services/cab.service'; // Update the service reference to CabService

@Component({
  selector: 'app-displayallcab', // Update the selector to reflect cab context
  templateUrl: './displayallcab.component.html', // Update the template URL accordingly
  styleUrls: ['./displayallcab.component.css'] // Update the style URL if necessary
})
export class DisplayAllCabComponent {
  
  cabList: Cab[] = []; // Change the list to Cab[]

  constructor(private cabService: CabService) {} // Update service injection

  ngOnInit() {
    this.getAllCabs(); // Change method name to get all cabs
  }

  getAllCabs() {
    this.cabService.getAll().subscribe(
      (list) => {
        this.cabList = list; // Assign the fetched cabs to cabList
        console.log(list);
      }
    );
  }

  deleteById(cabId: number) { // Change parameter to cabId
    this.cabService.delete(cabId).subscribe((msg) => {
      console.log("Deleted: " + msg);
      this.getAllCabs(); // Refresh the list after deletion
    });
  }
}
