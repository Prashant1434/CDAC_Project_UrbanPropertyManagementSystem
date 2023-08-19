package com.upm.controller;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.upm.dto.AddAdminDto;
import com.upm.entities.Flat;
import com.upm.entities.Users;
import com.upm.service.AdminService;

@RestController
@RequestMapping("/admin")
public class AdminController {
	@Autowired
	private  AdminService adminService;
	
	public AdminController() {
		System.out.println("inside ctor : "+getClass());
	}
	
	@PostMapping("/addOwner")
	public String addOwner(@RequestBody AddAdminDto adminDto) {
		return adminService.addOwner(adminDto);
	}
	
	@PostMapping("/addFlatToOwner/{id}")
	public String addFlatToOwner(@RequestBody Flat flat,@PathVariable Long id) {
		return adminService.addFaltToOwner(flat,id);
	}

