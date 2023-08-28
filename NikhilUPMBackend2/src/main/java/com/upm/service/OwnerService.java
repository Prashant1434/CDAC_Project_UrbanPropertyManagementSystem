package com.upm.service;

import java.util.List;

import com.upm.dto.AddTenantDto;
import com.upm.dto.FlatDto;
import com.upm.entities.Flat;

public interface OwnerService {
	public AddTenantDto addTenant(AddTenantDto tenantDto);
	public String assignFlatToTenant(Long id,Long tId);
	public AddTenantDto getTenantInfo(Long flatId);
	public FlatDto getFlatInfo(Long flatId);
	public List<AddTenantDto> getTenantInfoByOwnerId(Long ownerId);
}