import { Component } from '@angular/core';
import { Payment } from 'src/app/model/payment.model'; // Import Payment model
import { PaymentService } from 'src/app/services/payment.service'; // Import PaymentService

@Component({
  selector: 'app-updatepayment', // Update selector to reflect payment context
  templateUrl: './updatepayment.component.html', // Update template file name
  styleUrls: ['./updatepayment.component.css'] // Update style file name
})
export class UpdatePaymentComponent { // Change class name to UpdatePaymentComponent

  constructor(private paymentService: PaymentService) {} // Inject PaymentService

  updatePayment(data: Payment) { // Change parameter type to Payment
    this.paymentService.update(data) // Use PaymentService for updating
      .subscribe(
        (payment) => { 
          console.log('Updated Payment is: ', payment);
          alert('Payment updated successfully!'); // Success message
        },
        (error) => {
          console.error('Error updating payment: ', error);
          alert('Failed to update payment. Please try again.'); // Handle error
        }
      );
  }
}
