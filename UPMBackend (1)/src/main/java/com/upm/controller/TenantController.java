package com.upm.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.upm.dto.ApiResponse;
import com.upm.dto.UpdateProfileDto;
import com.upm.dto.UserDto;
import com.upm.service.TenantService;
import com.upm.service.UserService;

@RestController
@CrossOrigin( methods = {RequestMethod.GET, RequestMethod.POST, RequestMethod.PUT, RequestMethod.DELETE}, 
allowedHeaders = {"Authorization", "Content-Type"})
@RequestMapping("/tenant")
public class TenantController {
	
	@Autowired
	private UserService userService;
	
	@Autowired
	private TenantService tenantService;
	
	public TenantController() {
		System.out.println("in ctor : "+getClass());
	}
	

  @PutMapping("/rentPayment/{id}")
	public String rentPayment(@PathVariable Long id) {
		return tenantService.updateRentStatus(false, id);
	}
	
  @PutMapping("/updateprofile/{userId}")
	public ApiResponse updateProfile(@RequestBody UserDto updateProfileDto,@PathVariable Long userId)
	{
		return userService.editProfile(updateProfileDto,userId);
	}
}
