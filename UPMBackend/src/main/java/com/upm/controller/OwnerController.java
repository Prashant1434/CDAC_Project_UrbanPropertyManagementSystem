package com.upm.controller;
import java.time.LocalDate;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.upm.dto.AddTenantDto;
import com.upm.dto.AddUtilityDto;
import com.upm.dto.ApiResponse;
import com.upm.dto.FlatDto;
import com.upm.dto.UpdateProfileDto;
import com.upm.dto.UserDto;
import com.upm.service.AdminService;
import com.upm.service.OwnerService;
import com.upm.service.UserService;

@RestController
@RequestMapping("/owner")
@CrossOrigin
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
	public ApiResponse assignFlatToTenant(@PathVariable Long fid,@RequestBody AddTenantDto tenantDto) {
		tenantDto.setStatus(true);
		tenantDto.setAddedDate(LocalDate.now());
		AddTenantDto tenant=addTenant(tenantDto);
		return ownerService.assignFlatToTenant(fid, tenant.getId());
	}
	
	@PutMapping("/updateprofile/{userId}")
	public ApiResponse updateProfile(@RequestBody UserDto updateProfileDto,@PathVariable Long userId)
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
	
	@PostMapping("/assignUtilityToTenant/{fid}/{tid}")
	public ApiResponse assignUtilityToTenant(@PathVariable Long fid, @PathVariable Long tid ,@RequestBody AddUtilityDto addUtilityDto ) {
		return ownerService.assignUtilityToTenant(fid, tid, addUtilityDto);
	}
	
	@GetMapping("/utilityList/{fid}")
	public List<AddUtilityDto> getUitilityListOfFlat(@PathVariable Long fid){
		return ownerService.getUtilityListOfFlat(fid);
	}
}
