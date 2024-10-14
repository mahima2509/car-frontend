package com.wipro.payment.restcontroller;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.wipro.payment.dto.PaymentDTO;
import com.wipro.payment.entity.Payment;
import com.wipro.payment.service.IPaymentService;

@CrossOrigin(origins = "http://localhost:4200") // Allow CORS for frontend interaction
@RestController
@RequestMapping("/api/payments")
public class PaymentRestController {

    @Autowired
    private IPaymentService service;

    // Add a new payment
    @PostMapping(value = "/add", produces = "application/json", consumes = "application/json")
    public Payment addPayment(@RequestBody PaymentDTO paymentDTO) {
        return service.addPayment(paymentDTO);
    }

    // Get a payment by ID
    @GetMapping(value = "/get/{paymentId}", produces = "application/json")
    public PaymentDTO getPaymentById(@PathVariable int paymentId) {
        return service.getById(paymentId);
    }

    // Get all payments
    @GetMapping(value = "/getall", produces = "application/json")
    public List<Payment> getAllPayments() {
        return service.getAllPayments();
    }

    // Update an existing payment
    @PutMapping(value = "/update")//, produces = "application/json", consumes = "application/json")
    public Payment updatePayment(@RequestBody PaymentDTO paymentDTO) {
        return service.updatePayment(paymentDTO);
    }

    // Delete a payment by ID
    @DeleteMapping(value = "/deletebyId/{paymentId}")
    public String deletePaymentById(@PathVariable int paymentId) {
        service.deleteById(paymentId);
        return "Payment with ID " + paymentId + " deleted successfully.";
    }
}
