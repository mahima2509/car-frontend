package com.wipro.review.restcontroller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.wipro.review.dto.ReviewDTO;
import com.wipro.review.entity.Review;
import com.wipro.review.service.IReviewService;

@CrossOrigin("http://localhost:4200")
@RestController
@RequestMapping("/api/reviews")
public class ReviewRestController {

    @Autowired
    private IReviewService service;

    @PostMapping("/add")
    public Review addReview(@RequestBody ReviewDTO reviewDTO) {
        return service.addReview(reviewDTO);
    }

    @GetMapping("/get/{reviewId}")
    public ReviewDTO getReviewById(@PathVariable int reviewId) {
        return service.getById(reviewId);
    }

    @GetMapping("/getall")
    public List<Review> getAllReviews() {
        return service.getAllReviews();
    }

    @PutMapping("/update")
    public Review updateReview(@RequestBody ReviewDTO reviewDTO) {
        return service.updateReview(reviewDTO);
    }

	/*
	 * @DeleteMapping("/deletebyid/{reviewId}") public ResponseEntity<String>
	 * deleteReviewById(@PathVariable int reviewId) { service.deletebyId(reviewId);
	 * return new ResponseEntity<>("Review deleted successfully", HttpStatus.OK); }
	 */
    
    @DeleteMapping(value = "/deletebyId/{reviewId}")
    public String deleteReviewById(@PathVariable int reviewId) {
        service.deleteById(reviewId);
        return "Review with ID " + reviewId + " deleted successfully.";
    }
}
