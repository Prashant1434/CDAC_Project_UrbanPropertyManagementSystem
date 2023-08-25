package com.upm.dto;

import java.time.LocalDate;

import com.upm.entities.Role;

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
public class AddOwnerDto {
	private Long id;

	private LocalDate addedDate;

	private String name;

	private String emailId;

	private String contact;

	private String password;

	private String permanentAddress;

	private String imagePath;

	private Role role;

	private Long flatId;
	
	

}
