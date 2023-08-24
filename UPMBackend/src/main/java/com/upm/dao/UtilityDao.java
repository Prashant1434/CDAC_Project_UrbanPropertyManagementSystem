package com.upm.dao;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.upm.entities.RentUtility;
import com.upm.entities.Utility;
public interface UtilityDao extends JpaRepository<RentUtility, Long> {
	Optional<RentUtility> findByTenantUtilityId(Long id);
}
