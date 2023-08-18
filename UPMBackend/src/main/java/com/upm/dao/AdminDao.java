package com.upm.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.upm.entities.Admin;

public interface AdminDao extends JpaRepository<Admin, Long> {

}
