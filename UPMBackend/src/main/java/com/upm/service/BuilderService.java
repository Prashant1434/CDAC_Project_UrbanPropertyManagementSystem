package com.upm.service;

import com.upm.dto.AddAdminDto;
import com.upm.dto.AddBuildingDto;
import com.upm.dto.AssignBuildingToAdminDto;
import com.upm.entities.Building;
import com.upm.entities.Users;

public interface BuilderService {

	String addAdmin(AddAdminDto admin);
	
	String addBuilding(AddBuildingDto buildingDto);
	
	String assignBuildingToAdmin(AssignBuildingToAdminDto asssignBuildingToAdminDto);
}