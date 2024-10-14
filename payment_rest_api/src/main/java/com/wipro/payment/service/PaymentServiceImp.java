package com.wipro.payment.service;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

//import com.wipro.cabapi.entity.Cab;
import com.wipro.payment.dto.PaymentDTO;
import com.wipro.payment.entity.Payment;
import com.wipro.payment.repository.PaymentRepository;

@Service
public class PaymentServiceImp implements IPaymentService {

    @Autowired
    private PaymentRepository repo;

    @Override
    public Payment addPayment(PaymentDTO paymentDTO) {
        Payment payment = new Payment();
        payment.setPaymentType(paymentDTO.getPaymentType());
        payment.setCardNumber(paymentDTO.getCardNumber());
        payment.setExpiryDate(paymentDTO.getExpiryDate());
        payment.setCvv(paymentDTO.getCvv());
        payment.setAmount(paymentDTO.getAmount());
        payment.setCustomerId(paymentDTO.getCustomerId());
        payment.setCustomerName(paymentDTO.getCustomerName());
        payment.setCabId(paymentDTO.getCabId());
        payment.setCabName(paymentDTO.getCabName());
        payment.setTransactionDate(paymentDTO.getTransactionDate());
        return repo.save(payment);
    }

    @Override
    public PaymentDTO getById(int paymentId) {
        Payment payment = repo.findById(paymentId)
                .orElseThrow(() -> new RuntimeException("Payment not found"));
        PaymentDTO dto = new PaymentDTO();
        dto.setPaymentId(payment.getPaymentId());
        dto.setPaymentType(payment.getPaymentType());
        dto.setCardNumber(payment.getCardNumber());
        dto.setExpiryDate(payment.getExpiryDate());
        dto.setCvv(payment.getCvv());
        dto.setAmount(payment.getAmount());
        dto.setCustomerId(payment.getCustomerId());
        dto.setCustomerName(payment.getCustomerName());
        dto.setCabId(payment.getCabId());
        dto.setCabName(payment.getCabName());
        dto.setTransactionDate(payment.getTransactionDate());
        return dto;
    }

    @Override
    public List<Payment> getAllPayments() {
        return repo.findAll();
    }
    @Override
    public Payment updatePayment(PaymentDTO paymentDTO) {
        Payment payment = new Payment();
        payment.setPaymentId(paymentDTO.getPaymentId());
        payment.setPaymentType(paymentDTO.getPaymentType());
        payment.setCardNumber(paymentDTO.getCardNumber());
        payment.setExpiryDate(paymentDTO.getExpiryDate());
        payment.setCvv(paymentDTO.getCvv());
        payment.setAmount(paymentDTO.getAmount());
        payment.setCustomerId(paymentDTO.getCustomerId());
        payment.setCustomerName(paymentDTO.getCustomerName());
        payment.setCabId(paymentDTO.getCabId());
        payment.setCabName(paymentDTO.getCabName());
        payment.setTransactionDate(paymentDTO.getTransactionDate());
        return repo.save(payment);
    }

    @Override
	public void deleteById(int paymentId) {
	    Payment payment = repo.findById(paymentId)
	                  .orElseThrow(() -> new RuntimeException("Payment with ID " + paymentId + " not found."));
	    repo.delete(payment);  // Delete the cab from the repository
	    System.out.println("Payment with ID " + paymentId + " deleted successfully.");
	}
}
