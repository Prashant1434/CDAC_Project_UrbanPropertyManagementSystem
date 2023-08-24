package com.upm.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.upm.entities.Rent;

public interface RentDao extends JpaRepository<Rent, Long> {

}
