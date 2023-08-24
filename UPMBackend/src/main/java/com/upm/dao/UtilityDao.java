package com.upm.dao;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.upm.entities.RentUtility;

public interface UtilityDao extends JpaRepository<RentUtility, Long> {

	Optional<RentUtility> findByBillStatusAndTenantUtilityId(boolean status, Long tId);
}
