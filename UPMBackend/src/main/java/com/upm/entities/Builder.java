package com.upm.entities;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "builder")
@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
public class Builder {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long builderId;
	
	@Column(name = "first_name",length = 40)
	private String firstName;
	
	@Column(name = "last_name",length = 40)
	private String lastName; 
	
	@Column(unique = true)
	private String email;
	
	@Column(length = 200)
	private String address;
	
	@Column(name = "mob_no",length = 15,nullable = false)
	private String mobNo;
	
	@Column(name = "password", nullable = false)
	private String password;
	
	@OneToMany(mappedBy = "builder",cascade = CascadeType.ALL,orphanRemoval = true)
	List<Building> buildingList =new  ArrayList<Building>();
	
	@OneToMany(mappedBy = "builder",cascade = CascadeType.ALL,orphanRemoval = true)
	List<Admin> adminList =new ArrayList<>();
	
	public void addAdmin(Admin admin)
	{
		adminList.add(admin);
		admin.setBuilder(this);
	}
	public void removeAdmin(Admin admin)
	{
		adminList.remove(admin);
		admin.setBuilder(null);
	}
	
	public void addBuilding(Building building)
	{
		buildingList.add(building);
		building.setBuilder(this);
	}
	public void removeBuilding(Building building)
	{
		buildingList.remove(building);
		building.setBuilder(null);
	}
	
	@Override
	public String toString() {
		return "Builder [builder_id=" + builderId + ", firstName=" + firstName + ", lastName=" + lastName + ", email="
				+ email + ", address=" + address + ", mobNo=" + mobNo + ", password=" + password + "]";
	}
	
	
}