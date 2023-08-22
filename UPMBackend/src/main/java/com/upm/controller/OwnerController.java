package com.upm.controller;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.upm.dto.AddTenantDto;
import com.upm.dto.AddUtilityDto;
import com.upm.service.OwnerService;

@RestController
@RequestMapping("/owner")
public class OwnerController {
	@Autowired
	private OwnerService ownerService;

	public OwnerController() {
		System.out.println("in ctor : " + getClass());
	}

	@PostMapping("/addTenant")
	public String addTenant(@RequestBody AddTenantDto tenantDto) {
		System.out.println(tenantDto.toString());
		return ownerService.addTenant(tenantDto);
	}
	@PostMapping("/assignFlatToTenant/{id}/{tId}")
	public String assignFlatToTenant(@PathVariable Long id, @PathVariable Long tId) {
		return ownerService.assignFlatToTenant(id, tId);
	}
	@PostMapping("/assignUtilityToTenant/{fid}/{tid}")
	public String assignUtilityToTenant(@PathVariable Long fid, @PathVariable Long tid,
			@RequestBody AddUtilityDto addUtilityDto) {
		return ownerService.assignUtilityToTenant(fid, tid, addUtilityDto);
	}
}
