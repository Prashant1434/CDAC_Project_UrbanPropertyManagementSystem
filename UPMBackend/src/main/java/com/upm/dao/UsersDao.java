package com.upm.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.upm.entities.Role;
import com.upm.entities.Users;

public interface UsersDao extends JpaRepository<Users, Long> {
	
}
