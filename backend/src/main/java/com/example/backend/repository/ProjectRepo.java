package com.example.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.backend.model.Project;

public interface ProjectRepo extends JpaRepository<Project, Long> {}