package com.upm.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.upm.entities.Admin;
import com.upm.entities.Users;
public interface AdminDao extends JpaRepository<Users, Long> {

}
