package com.upm.service;

import java.util.List;

import com.upm.dto.AddAdminDto;
import com.upm.dto.AddBuildingDto;
import com.upm.dto.ApiResponse;
import com.upm.dto.AssignBuildingToAdminDto;
import com.upm.dto.FlatDto;
import com.upm.dto.LoginDto;
import com.upm.entities.Builder;
import com.upm.entities.Building;
import com.upm.entities.Flat;
import com.upm.entities.Users;

public interface BuilderService {

	ApiResponse addAdmin(AddAdminDto admin,Long builderId);
	
	ApiResponse addBuilding(AddBuildingDto buildingDto,Long builderId);
	
	ApiResponse assignBuildingToAdmin(Long adminId,Long buildingId);
	
	String removeBuilding(Long buildingId);
	
	String updateAdmin(Long adminId);
	
	ApiResponse addFlat(FlatDto flatDto,Long builddingId);

	String findByEmailAndPasswordService(String emailId);

	List<AddBuildingDto> getBuildingList(Long builderId);

	List<AddAdminDto> getAdminList(Long builderId);

	AddBuildingDto getBuildingDetails(Long buildingId);
}
