package com.upm.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.upm.dto.AddAdminDto;
import com.upm.entities.Users;
import com.upm.service.AdminService;
import com.upm.service.BuilderService;
import com.upm.service.UserService;

@RestController
@RequestMapping("/builder")
public class BuilderController {
	
	@Autowired
	private BuilderService builderService;
	
	@Autowired
	private UserService userService;
	
	@PostMapping("/addAdmin")
	public String addAdmin(@RequestBody AddAdminDto admin)
	{   
		System.out.println(admin.getPassword());;
		return builderService.addAdmin(admin);
	}
}
