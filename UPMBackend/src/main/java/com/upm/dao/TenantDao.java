package com.upm.dao;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.upm.entities.Tenant;

public interface TenantDao extends JpaRepository<Tenant, Long> {
//	Optional<Tenant> findByStatusAndTenantId(boolean status,Long uId);
}
