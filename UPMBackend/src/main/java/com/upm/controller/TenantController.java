package com.upm.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.upm.service.TenantService;

@RestController
@RequestMapping("/tenant")
public class TenantController {
	
	@Autowired
	private TenantService tenantService;
	
	public TenantController() {
		System.out.println("in ctor : "+getClass());
	}
	
//	@PutMapping("/updateRent/{id}")
//	public String updateRentStatus(@PathVariable Long id) {
//		return tenantService.updateRent(false,id);
//	}
}
