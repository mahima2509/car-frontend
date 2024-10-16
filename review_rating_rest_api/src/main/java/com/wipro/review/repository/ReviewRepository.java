package com.wipro.review.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.wipro.review.entity.Review;

@Repository
public interface ReviewRepository extends JpaRepository<Review, Integer> {

}
