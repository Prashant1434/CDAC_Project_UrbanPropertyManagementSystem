package com.upm.entities;

import javax.persistence.Entity;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Table(name = "super_admin")
@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class SuperAdmin {
	
	private String emailId;
	
	private String password;
}
