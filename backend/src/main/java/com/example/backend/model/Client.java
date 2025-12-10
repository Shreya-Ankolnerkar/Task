package com.example.backend.model;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import lombok.Data;

@Entity
@Data
public class Client {
    @Id @GeneratedValue
    private Long id;

    private String name;
    private String designation;
    private String description;
    private String image;
}
