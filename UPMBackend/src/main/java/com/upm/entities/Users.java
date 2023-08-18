package com.upm.entities;

import java.time.LocalDate;

import javax.annotation.Generated;
import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.MapsId;
import javax.persistence.OneToOne;
import javax.persistence.PrimaryKeyJoinColumn;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name ="users")
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
	
	@OneToOne(cascade =CascadeType.ALL ,mappedBy = "admin" , orphanRemoval = true)
	private Admin admin;

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getEmailId() {
		return emailId;
	}

	public void setEmailId(String emailId) {
		this.emailId = emailId;
	}

	public String getContact() {
		return contact;
	}

	public void setContact(String contact) {
		this.contact = contact;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		System.out.println(password);
		this.password = password;
	}

	public String getPermanentAddress() {
		return permanentAddress;
	}

	public void setPermanentAddress(String permanentAddress) {
		this.permanentAddress = permanentAddress;
	}

	public String getImagePath() {
		return imagePath;
	}

	public void setImagePath(String imagePath) {
		this.imagePath = imagePath;
	}

	public Role getRole() {
		return role;
	}

	public void setRole(Role role) {
		this.role = role;
	}

	public Users(Long id, LocalDate addedDate, String name, String emailId, String contact, String password,
			String permanentAddress, String imagePath, Role role) {
		super(id, addedDate);
		this.name = name;
		this.emailId = emailId;
		this.contact = contact;
		this.password = password;
		this.permanentAddress = permanentAddress;
		this.imagePath = imagePath;
		this.role = role;
	}

	@Override
	public String toString() {
		return "Users [name=" + name + ", emailId=" + emailId + ", contact=" + contact + ", password=" + password
				+ ", permanentAddress=" + permanentAddress + ", imagePath=" + imagePath + ", role=" + role + "]";
	}

	public Admin getAdmin() {
		return admin;
	}

	public void setAdmin(Admin admin) {
		this.admin = admin;
	}
	
	
		
}
