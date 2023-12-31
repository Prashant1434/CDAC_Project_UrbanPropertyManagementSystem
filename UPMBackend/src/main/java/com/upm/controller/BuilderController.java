package com.upm.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.upm.dto.AddAdminDto;
import com.upm.dto.AddBuildingDto;
import com.upm.dto.ApiResponse;
import com.upm.dto.AssignBuildingToAdminDto;
import com.upm.dto.FlatDto;
import com.upm.dto.UpdateProfileDto;
import com.upm.dto.UserDto;
import com.upm.entities.Building;
import com.upm.entities.Flat;
import com.upm.entities.Users;
import com.upm.service.AdminService;
import com.upm.service.BuilderService;
import com.upm.service.UserService;

@RestController
@RequestMapping("/builder")
@CrossOrigin
public class BuilderController {
	
	@Autowired
	private BuilderService builderService;
	
	@Autowired
	private UserService userService;
	
	@GetMapping("/buildinglist/{builderId}")
	public List<AddBuildingDto> getBuildingList(@PathVariable Long builderId)
	{
		return builderService.getBuildingList(builderId);
	}
	
	@GetMapping("/adminlist/{builderId}")
	public List<AddAdminDto> findAllAdmin(@PathVariable Long builderId)
	{
		return builderService.getAdminList(builderId);
	}
	
	@PostMapping("/addAdmin/{builderId}")
	public ApiResponse addAdmin(@RequestBody AddAdminDto admin,@PathVariable Long builderId)
	{   
		System.out.println(admin.getPassword());
		return builderService.addAdmin(admin,builderId);
	}
	@PostMapping("/addBuilding/{builderId}")
	public ApiResponse addBuilding(@RequestBody AddBuildingDto buildingDto,@PathVariable Long builderId)
	{
		return builderService.addBuilding(buildingDto,builderId);
	}
	
	@PutMapping("/assignBuilding/{adminId}/{buildingId}")
	public ApiResponse asignBuildingToAdmin(@PathVariable Long adminId,@PathVariable Long buildingId)
	{
		return builderService.assignBuildingToAdmin(adminId,buildingId);
	}
	
	@PostMapping("/addFlat/{buildingId}")
	public ApiResponse addFlatInBuilding(@RequestBody FlatDto flat,@PathVariable Long buildingId)
	{
		return builderService.addFlat(flat,buildingId);
	}
	@PutMapping("/updateprofile/{userId}")
	public ApiResponse updateProfile(@RequestBody UserDto updateProfileDto,@PathVariable Long userId)
	{
		return userService.editProfile(updateProfileDto,userId);
	}
	
	@GetMapping("/getBuilding/{buildingId}")
	public AddBuildingDto getBuilding(@PathVariable Long buildingId)
	{
		return builderService.getBuildingDetails(buildingId);
	}
}
