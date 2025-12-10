package com.example.backend.model;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import lombok.Data;

@Entity
@Data
public class Contact {
    @Id @GeneratedValue
    private Long id;

    private String fullName;
    private String email;
    private String mobile;
    private String city;
}

