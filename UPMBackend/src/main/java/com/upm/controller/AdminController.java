package com.upm.controller;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.upm.dto.AddAdminDto;
import com.upm.dto.AddBuildingDto;
import com.upm.dto.AddOwnerDto;
import com.upm.dto.AddTenantDto;
import com.upm.dto.FlatDto;
import com.upm.entities.Building;
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
	
	@PutMapping("/addFlatToOwner/{fid}/{oId}")
	public String addFlatToOwner(@PathVariable Long fid,@PathVariable Long oId) {
		return adminService.addFaltToOwner(fid,oId);
	}
	
	@GetMapping("/buildinglist/{adminId}")
	public List<AddBuildingDto> findAllBuilding(@PathVariable Long adminId)
	{
		return adminService.getBuildingList(adminId);
	}
	
	@GetMapping("/flatlist/{buildingId}")
	public List<FlatDto> findAllFlat(@PathVariable Long buildingId)
	{
		return adminService.getFlatList(buildingId);
	}
	
	@GetMapping("/owner/{flatId}")
	public AddOwnerDto findOwner(@PathVariable Long flatId)
	{
		return adminService.getOwner(flatId);
	}
	
	@GetMapping("/tenant/{flatId}")
	public AddTenantDto findTenant(@PathVariable Long flatId)
	{
		return adminService.getTenant(flatId);
	}
	
	@GetMapping("/ownerlist/{adminId}")
	public List<AddOwnerDto> findAllOwner(@PathVariable Long adminId)
	{
		return adminService.getAllOwnerList(adminId);
	}
	
	

}