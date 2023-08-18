package com.upm.entities;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import org.hibernate.annotations.ManyToAny;
import org.springframework.format.annotation.DateTimeFormat;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name ="building")
@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
public class Building extends RoleBaseEntity{

	@Column(length = 40)
	private String name;
	
	@Column(length = 200)
	private String address;
	
	@Column(length = 15,unique = true)
	private String phone;
	
	@Column(name = "made_year")
	@DateTimeFormat(pattern = "yyyy-MM-dd")
	private LocalDate madeYear;
	
	@Column(name = "added_date")
	@DateTimeFormat(pattern = "yyyy-MM-dd")
	private LocalDate addedDate;
	
	@Column(name ="floor_count")
	private Long floorCount;

	
	@ManyToOne
	@JoinColumn(name="builder_building_id")
	private Builder builder;
	
	@ManyToOne
	@JoinColumn(name = "admin_building_id")
	private Admin adminsBuilding;
	
	@OneToMany(mappedBy = "building",cascade = CascadeType.ALL,orphanRemoval = true)
	private List<Flat> flatList =new ArrayList<Flat>();
	
	
}
