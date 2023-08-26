package com.upm.dto;

import java.time.LocalDate;

import javax.persistence.Column;

import org.springframework.format.annotation.DateTimeFormat;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.upm.entities.Admin;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


@AllArgsConstructor
@NoArgsConstructor
public class AddBuildingDto {
	private Long id;
	
	private String name;
	
	private String address;
	
	private String phone;
	
	private LocalDate madeYear;
	
	private LocalDate addedDate;
	
	private Long floorCount;
	
	private Long builderId;
	private Long adminId;
	
	@JsonIgnore
	private Admin adminsBuilding; 
	
	private boolean status;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public String getPhone() {
		return phone;
	}

	public void setPhone(String phone) {
		this.phone = phone;
	}

	public LocalDate getMadeYear() {
		return madeYear;
	}

	public void setMadeYear(LocalDate madeYear) {
		this.madeYear = madeYear;
	}

	public LocalDate getAddedDate() {
		return addedDate;
	}

	public void setAddedDate(LocalDate addedDate) {
		this.addedDate = addedDate;
	}

	public Long getFloorCount() {
		return floorCount;
	}

	public void setFloorCount(Long floorCount) {
		this.floorCount = floorCount;
	}

	public Long getBuilderId() {
		return builderId;
	}

	public void setBuilderId(Long builderId) {
		this.builderId = builderId;
	}

	public Long getAdminId() {
		return adminId;
	}

	public void setAdminId(Long adminId) {
		this.adminId = adminId;
	}

	public Admin getAdminsBuilding() {
		return adminsBuilding;
	}

	public void setAdminsBuilding(Admin adminsBuilding) {
		this.adminsBuilding = adminsBuilding;
	}

	public boolean isStatus() {
		return status;
	}

	public void setStatus(boolean status) {
		
			this.status = status;
		
	}
	
	
}
