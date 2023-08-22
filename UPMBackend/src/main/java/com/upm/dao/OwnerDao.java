package com.upm.dao;


import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.upm.entities.Owner;

public interface OwnerDao extends JpaRepository<Owner, Long> {
	
}
