package com.upm.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.upm.dto.AddAdminDto;
import com.upm.dto.AddBuildingDto;
import com.upm.dto.AssignBuildingToAdminDto;
import com.upm.dto.UpdateProfileDto;
import com.upm.entities.Building;
import com.upm.entities.Flat;
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
	
	@GetMapping("/buildinglist/{builderId}")
	public List<AddBuildingDto> findAllBuilding(@PathVariable Long builderId)
	{
		return builderService.getBuildingList(builderId);
	}
	
	@GetMapping("/adminlist/{builderId}")
	public List<AddAdminDto> findAllAdmin(@PathVariable Long builderId)
	{
		return builderService.getAdminList(builderId);
	}
	
	@PostMapping("/addAdmin")
	public String addAdmin(@RequestBody AddAdminDto admin)
	{   
		System.out.println(admin.getPassword());;
		return builderService.addAdmin(admin);
	}
	@PostMapping("/addBuilding")
	public String addBuilding(@RequestBody AddBuildingDto buildingDto)
	{
		return builderService.addBuilding(buildingDto);
	}
	
	@PutMapping("/assignBuilding")
	public String asignBuildingToAdmin(@RequestBody AssignBuildingToAdminDto asssignBuildingToAdminDto)
	{
		return builderService.assignBuildingToAdmin(asssignBuildingToAdminDto);
	}
	
	@PostMapping("/addFlat/{buildingId}")
	public String addFlatInBuilding(@RequestBody Flat flat,@PathVariable Long buildingId)
	{
		return builderService.addFlat(flat,buildingId);
	}
	@PutMapping("/updateprofile/{userId}")
	public String updateProfile(@RequestBody UpdateProfileDto updateProfileDto,@PathVariable Long userId)
	{
		return userService.editProfile(updateProfileDto,userId);
	}
}
