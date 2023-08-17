package com.upm.entities;

import javax.annotation.Generated;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name ="users")
@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
public class Users extends RoleBaseEntity{
	
	@Column(length= 40)
	private String name;
	
	@Column(name ="email_id", unique = true)
	private String emailId;
	
	@Column(length= 15,unique = true)
	private String contact;
	
	@Column(length= 40, nullable = false)
	private String password;
	
	@Column(length= 200, name="permanent_address")
	private String permanentAddress;
	
	@Column(length= 200,name="image_path")
	private String imagePath;
	
	@Column(length= 20)
	@Enumerated(EnumType.STRING)
	private Role role;
		
}
