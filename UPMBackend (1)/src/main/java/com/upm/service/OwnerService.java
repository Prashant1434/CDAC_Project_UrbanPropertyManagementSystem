package com.upm.service;

import java.util.List;

import com.upm.dto.AddTenantDto;
import com.upm.dto.AddUtilityDto;
import com.upm.entities.Flat;
import com.upm.dto.AddTenantDto;
import com.upm.dto.FlatDto;

public interface OwnerService {
	public AddTenantDto addTenant(AddTenantDto tenantDto);
	public String assignFlatToTenant(Long id,Long tId);
	public String assignUtilityToTenant(Long fId,Long tId, AddUtilityDto addUtilityDto);
	public AddTenantDto getTenantInfo(Long flatId);
	public FlatDto getFlatInfo(Long flatId);
	public List<AddTenantDto> getTenantInfoByOwnerId(Long ownerId);
}