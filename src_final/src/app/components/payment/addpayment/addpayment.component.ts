import { Component } from '@angular/core';
import { Payment } from 'src/app/model/payment.model'; // Update the import to refer to the Payment model
import { PaymentService } from 'src/app/services/payment.service'; // Update to Payment service

@Component({
  selector: 'app-addpayment', // Update the selector to reflect payment context
  templateUrl: './addpayment.component.html', // Update the template URL accordingly
  styleUrls: ['./addpayment.component.css'] // Update the style URL if necessary
})
export class AddPaymentComponent {

  constructor(private paymentService: PaymentService) {} // Update service injection

  insertPayment(data: Payment) { // Change method name to insertPayment
    this.paymentService.insert(data) // Use PaymentService for inserting payment data
      .subscribe(
        (payment) => {
          console.log('Added Payment: ', payment);
          alert('Payment added successfully!'); // Update alert message
        },
        (error) => {
          console.error('Error adding payment: ', error);
          alert('Failed to add payment. Please try again.'); // Handle error
        }
      );
  }
}
