package com.upm.dto;

import java.time.LocalDate;

import com.upm.entities.Role;

import lombok.AllArgsConstructor;

import lombok.Setter;

import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class UserDto {

	private Long id;

	private LocalDate addedDate;

	private String name;

	private String emailId;

	private String contact;

	private String password;

	private String permanentAddress;

	private String imagePath;

	private Role role;
}
