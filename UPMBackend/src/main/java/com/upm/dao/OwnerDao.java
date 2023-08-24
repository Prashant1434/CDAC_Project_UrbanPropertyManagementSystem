package com.upm.dao;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.upm.entities.Owner;
import com.upm.entities.Tenant;

public interface OwnerDao extends JpaRepository<Owner, Long> {

	Owner findByOwner(Owner owner);
//	Optional<Tenant> findByTenant
}
