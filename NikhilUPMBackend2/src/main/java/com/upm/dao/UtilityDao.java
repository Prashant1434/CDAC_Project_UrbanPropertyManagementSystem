package com.upm.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.upm.entities.Utility;

public interface UtilityDao extends JpaRepository<Utility, Long> {

}
