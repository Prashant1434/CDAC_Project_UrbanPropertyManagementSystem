package com.upm.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.upm.dto.LoginDto;
import com.upm.service.UserService;

@RestController
@RequestMapping("/users")
public class UserController {

	@Autowired
	private UserService userService;
	
	public UserController() {
		System.out.println("In ctor : " + getClass());
	}
	
	@PostMapping("/login")
	public String loginUsers(@RequestBody LoginDto loginDto) {
		System.out.println("login Dto : "+loginDto.toString());
		return userService.loginUser(loginDto);
	}
}
