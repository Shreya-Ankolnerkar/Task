package com.example.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.backend.model.Contact;

public interface ContactRepo extends JpaRepository<Contact, Long> {}
