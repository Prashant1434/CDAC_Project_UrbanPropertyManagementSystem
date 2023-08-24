package com.upm.dto;

import javax.persistence.Column;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class UpdateProfileDto {


	private String name;
	
	private String emailId;
	
	private String contact;
	
	private String password;
	
	private String permanentAddress;
}
