package com.upm.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.upm.entities.RentUtility;

public interface UtilityDao extends JpaRepository<RentUtility, Long> {

}
