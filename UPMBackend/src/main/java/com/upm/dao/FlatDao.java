package com.upm.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.upm.entities.Building;
import com.upm.entities.Flat;

public interface FlatDao extends JpaRepository<Flat, Long> {

	List<Flat> findByBuilding(Building building);
}
