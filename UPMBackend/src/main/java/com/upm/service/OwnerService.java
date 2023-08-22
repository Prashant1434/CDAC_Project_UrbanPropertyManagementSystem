package com.upm.service;

import com.upm.dto.AddTenantDto;
import com.upm.entities.Flat;
public interface OwnerService {
	public String addTenant(AddTenantDto tenantDto);

	public String assignFlatToTenant(Long id, Long tId);

	public String assignUtilityToTenant(Long fId,Long tId, AddUtilityDto addUtilityDto);
}