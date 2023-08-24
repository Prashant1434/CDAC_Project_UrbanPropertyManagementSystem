package com.upm.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.upm.entities.Flat;

public interface FlatDao extends JpaRepository<Flat, Long> {

}
