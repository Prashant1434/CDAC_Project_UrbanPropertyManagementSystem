package com.upm.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.upm.entities.Builder;
import com.upm.entities.Users;

public interface BuilderDao extends JpaRepository<Builder, Long> {

}
