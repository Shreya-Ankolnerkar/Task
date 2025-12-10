package com.example.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.backend.model.Newsletter;

public interface NewsletterRepo extends JpaRepository<Newsletter, Long> {}