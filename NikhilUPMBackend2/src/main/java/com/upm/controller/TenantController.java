package com.upm.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;

import com.upm.dto.UpdateProfileDto;
import com.upm.service.UserService;

public class TenantController {
	
	@Autowired
	private UserService userService;
	
	@PutMapping("/updateprofile/{userId}")
	public String updateProfile(@RequestBody UpdateProfileDto updateProfileDto,@PathVariable Long userId)
	{
		return userService.editProfile(updateProfileDto,userId);
	}
}
