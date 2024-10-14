package com.wipro.payment.service;

import java.util.List;
import com.wipro.payment.dto.PaymentDTO;
import com.wipro.payment.entity.Payment;
//import com.wipro.review.dto.ReviewDTO;
//import com.wipro.review.entity.Review;

public interface IPaymentService {

  public  Payment addPayment(PaymentDTO paymentDTO);

 public   PaymentDTO getById(int paymentId);

  public  List<Payment> getAllPayments();

  public  Payment updatePayment(PaymentDTO paymentDTO);

    void deleteById(int paymentId);
//    public Review updateReview(ReviewDTO reviewDTO);

}
