package com.upm.dao;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.upm.entities.Tenant;
import com.upm.entities.Users;

public interface TenantDao extends JpaRepository<Tenant, Long> {
	Tenant findByTenant(Users user);
	
}
