package com.upm.dto;

import java.time.LocalDate;
import java.util.List;

import com.upm.entities.Flat;
import com.upm.entities.Rent;
import com.upm.entities.Role;
import com.upm.entities.Users;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class AddTenantDto {
	private Long id;

	private LocalDate addedDate;

	private String name;

	private String emailId;

	private String contact;

	private String password;

	private String permanentAddress;

	private String imagePath;

	private Role role;

	private boolean status;

	private LocalDate leaveDate;

	private Double deposite;
	
	public boolean getStatus() {
		return status;
	}

}
