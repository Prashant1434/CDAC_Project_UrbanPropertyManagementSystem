package com.upm.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.upm.dto.AddBuilderDto;
import com.upm.service.SuperAdminService;
import com.upm.service.SuperAdminServiceImpl;

@RestController
@RequestMapping("/superadmin")
public class superAdminController {
	
	@Autowired
	private SuperAdminService superAdminService;
	
	@PostMapping("/addBuilder")
	public AddBuilderDto addBuilder(@RequestBody AddBuilderDto addBuilderDto)
	{
		return superAdminService.addBuilder(addBuilderDto);
	}

}
