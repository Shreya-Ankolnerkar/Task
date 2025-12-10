package com.example.backend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.backend.model.Client;
import com.example.backend.repository.ClientRepo;
@RestController
@CrossOrigin
@RequestMapping("/api/clients")
public class ClientController {

    @Autowired
    private ClientRepo repo;

    @GetMapping
    public List<Client> getAll() {
        return repo.findAll();
    }

    @PostMapping
    public Client add(@RequestBody Client client) {
        return repo.save(client);
    }
}

