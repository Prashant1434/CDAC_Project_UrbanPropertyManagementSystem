package com.upm.dto;

import javax.persistence.Column;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;

import com.upm.entities.Role;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
public class AddAdminDto {

	private Long id;
	
	private String name;
	
	private String emailId;
	
	private String contact;
	
	private String password;
	
	private String permanentAddress;
	
	private String imagePath;
	
	private Role role;
	
	private Long builderId;
	
	private Long buildingId;
}
