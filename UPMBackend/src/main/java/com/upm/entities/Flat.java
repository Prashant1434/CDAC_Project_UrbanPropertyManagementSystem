package com.upm.entities;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "flat")
@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
public class Flat {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "flat_id")
	private Long flatId;

	@Column(name = "floor_no")
	private Long floorNo;
	
	@Column(name = "flat_no")
	private Long flatNo;

	@Column(name = "full_empty_status")
	private boolean fullEmptyStatus;
	
	@Column(name = "full_empty_status_tenant")
	private boolean fullEmptyStatusOfTenant;

	@Column(name = "flat_type")
	private String flatType;

	@ManyToOne
	@JoinColumn(name = "building_id")
	private Building building;

	@ManyToOne
	@JoinColumn(name = "owner_id")
	private Owner owner;

	@OneToOne
	@JoinColumn(name = "tenant_id")
	private Tenant tenantFlat;

	@OneToMany(mappedBy = "flatUtility", cascade = CascadeType.ALL, orphanRemoval = true)
	private List<RentUtility> utilityList = new ArrayList<RentUtility>();

	public void addUtility(RentUtility utility) {
		utilityList.add(utility);
		utility.setFlatUtility(this);
	}

	public void removeUtility(RentUtility utility) {
		utilityList.remove(utility);
		utility.setFlatUtility(null);
	}
}