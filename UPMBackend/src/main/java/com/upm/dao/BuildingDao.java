package com.upm.dao;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.upm.entities.Building;

public interface BuildingDao extends JpaRepository<Building, Long> {
	
}
