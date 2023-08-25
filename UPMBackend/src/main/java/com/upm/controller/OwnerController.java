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

import com.upm.dto.AddTenantDto;
import com.upm.dto.FlatDto;
import com.upm.dto.UpdateProfileDto;
import com.upm.service.AdminService;
import com.upm.service.OwnerService;
import com.upm.service.UserService;

@RestController
@RequestMapping("/owner")
public class OwnerController {
	@Autowired
	private OwnerService ownerService;
	
	@Autowired
	private UserService userService;
	
	@Autowired
	private AdminService adminService;

	public OwnerController() {
		System.out.println("in ctor : "+getClass());
	}

	public AddTenantDto addTenant(AddTenantDto tenantDto) {
		System.out.println(tenantDto.toString());
		return ownerService.addTenant(tenantDto);
	}
	
	@PostMapping("/assignFlatToTenant/{fid}")
	public String assignFlatToTenant(@PathVariable Long fid,@RequestBody AddTenantDto tenantDto) {
		AddTenantDto tenant=addTenant(tenantDto);
		return ownerService.assignFlatToTenant(fid, tenant.getId());
	}
	
	@PutMapping("/updateprofile/{userId}")
	public String updateProfile(@RequestBody UpdateProfileDto updateProfileDto,@PathVariable Long userId)
	{
		return userService.editProfile(updateProfileDto,userId);
	}
	
	@GetMapping("/flatlist/{ownerId}")
	public List<FlatDto> findAllFlat(@PathVariable Long ownerId)
	{
		return adminService.getFlatListByOwner(ownerId);
	}
	
	@GetMapping("/tenantsflat/{flatId}")
	public AddTenantDto findTenantofFlat(@PathVariable Long flatId)
	{
		return ownerService.getTenantInfo(flatId);
	}
	
	@GetMapping("/flatinfo/{flatId}")
	public FlatDto findFlatInfo(@PathVariable Long flatId)
	{
		return ownerService.getFlatInfo(flatId);
	}
	
	@GetMapping("/tenantlist/{ownerId}")
	public List<AddTenantDto> findAllTenant(@PathVariable Long ownerId)
	{
		return  ownerService.getTenantInfoByOwnerId(ownerId);
	}
}
