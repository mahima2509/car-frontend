import { Component, OnInit } from '@angular/core';
import { Payment } from 'src/app/model/payment.model'; // Import the Payment model
import { PaymentService } from 'src/app/services/payment.service'; // Import PaymentService

@Component({
  selector: 'app-displayallpayment', // Update selector for Payment context
  templateUrl: './displayallpayment.component.html', // Point to the correct HTML template
  styleUrls: ['./displayallpayment.component.css'] // Include relevant styles
})
export class DisplayAllPaymentComponent implements OnInit {

  paymentList: Payment[] = []; // List to hold all payments

  constructor(private paymentService: PaymentService) {} // Inject PaymentService

  ngOnInit() {
    this.getAllPayments(); // Fetch payments on component initialization
  }

  getAllPayments() {
    this.paymentService.getAll().subscribe(
      (list) => {
        this.paymentList = list; // Assign fetched payments to the list
        console.log(list); // Log the payment list
      },
      (error) => {
        console.error('Error fetching payments:', error); // Handle errors
      }
    );
  }

  deleteById(paymentId: number) {
    this.paymentService.delete(paymentId).subscribe(
      (msg) => {
        console.log('Deleted Payment:', msg); // Log success message
        this.getAllPayments(); // Refresh the payment list after deletion
      },
      (error) => {
        console.error('Error deleting payment:', error); // Handle errors gracefully
      }
    );
  }
}
