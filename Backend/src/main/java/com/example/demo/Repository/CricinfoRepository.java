package com.example.demo.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.model.Cricinfo;

public interface CricinfoRepository extends JpaRepository<Cricinfo, Integer> {

}
