package com.example.backend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.backend.model.Contact;
import com.example.backend.repository.ContactRepo;
@RestController
@CrossOrigin
@RequestMapping("/api/contact")
public class ContactController {

    @Autowired
    private ContactRepo repo;

    @GetMapping
    public List<Contact> getAll() {
        return repo.findAll();
    }

    @PostMapping
    public Contact add(@RequestBody Contact contact) {
        return repo.save(contact);
    }
}

