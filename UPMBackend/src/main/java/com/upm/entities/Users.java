package com.upm.entities;

import java.time.LocalDate;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import org.springframework.format.annotation.DateTimeFormat;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "users")
@NoArgsConstructor
@Getter
@Setter
@AllArgsConstructor
public class Users{

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	@Column(name = "added_date")
	@DateTimeFormat(pattern = "yyyy-MM-dd")
	private LocalDate addedDate;
	
	@Column(length = 40)
	private String name;

	@Column(name = "email_id", unique = true)
	private String emailId;

	@Column(length = 15, unique = true)
	private String contact;

	@Column(length = 40, nullable = false)
	private String password;

	@Column(length = 200, name = "permanent_address")
	private String permanentAddress;

	@Column(length = 200, name = "image_path")
	private String imagePath;

	@Column(length = 20)
	@Enumerated(EnumType.STRING)
	private Role role;

	@OneToOne(cascade = CascadeType.ALL, mappedBy = "admin", orphanRemoval = true)
	private Admin admin;

	@OneToOne(cascade = CascadeType.ALL, mappedBy = "owner", orphanRemoval = true)
	private Owner owner;

	@OneToOne(cascade = CascadeType.ALL, mappedBy = "tenant", orphanRemoval = true)
	private Tenant tenant;

	@Override
	public String toString() {
		return "Users [emailId=" + emailId + " name=" + name + ", emailId=" + emailId + ", contact=" + contact
				+ ", password=" + password + ", permanentAddress=" + permanentAddress + ", imagePath=" + imagePath
				+ ", role=" + role + "]";
	}
}
