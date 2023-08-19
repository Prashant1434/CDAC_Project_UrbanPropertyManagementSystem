package com.upm.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
public class AssignBuildingToAdminDto {

	private Long adminId;
	
	private Long builderId;
	
	private Long buildingId;
}
