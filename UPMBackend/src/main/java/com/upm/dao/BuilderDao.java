package com.upm.dao;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.upm.dto.LoginDto;
import org.springframework.data.jpa.repository.JpaRepository;

import com.upm.entities.Builder;
import com.upm.entities.Users;

public interface BuilderDao extends JpaRepository<Builder, Long> {
	Optional<Builder> findByEmail(String emailId);
}
