package com.example.backend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.backend.model.Project;
import com.example.backend.repository.ProjectRepo;

@RestController
@CrossOrigin
@RequestMapping("/api/projects")
public class ProjectController {

    @Autowired
    private ProjectRepo repo;

    @GetMapping
    public List<Project> getAll() {
        return repo.findAll();
    }

    @PostMapping
    public Project add(@RequestBody Project p) {
        return repo.save(p);
    }
}

