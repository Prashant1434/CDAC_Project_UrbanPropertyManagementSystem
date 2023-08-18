package com.upm.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.upm.entities.Building;

public interface BuildingDao extends JpaRepository<Building, Long> {

}
