package com.example.backend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.backend.model.Newsletter;
import com.example.backend.repository.NewsletterRepo;
@RestController
@CrossOrigin
@RequestMapping("/api/newsletter")
public class NewsletterController {

    @Autowired
    private NewsletterRepo repo;

    @GetMapping
    public List<Newsletter> getAll() {
        return repo.findAll();
    }

    @PostMapping
    public Newsletter add(@RequestBody Newsletter n) {
        return repo.save(n);
    }
}

