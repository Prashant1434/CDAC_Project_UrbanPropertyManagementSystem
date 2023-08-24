package com.upm.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.upm.entities.Tenant;
import com.upm.service.TenantService;
import com.upm.service.UserService;

@RestController
@CrossOrigin
@RequestMapping("/tenant")
public class TenantController {
	
	@Autowired
	private TenantService tenantService;
	
	@Autowired
	private UserService userService;
	
	
	
	@PutMapping("/rentPayment/{id}")
	public String rentPayment(@PathVariable Long id) {
		return tenantService.updateRentStatus(false, id);
	}
}
