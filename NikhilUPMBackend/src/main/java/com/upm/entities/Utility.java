package com.upm.entities;

import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "utility")
@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
public class Utility extends RoleBaseEntity{

	@ManyToOne
	@JoinColumn(name = "flat_id")
	private Flat flatUtility; 
	
	@Column(name = "gas_bill")
	private double gasBill;
	
	@Column(name = "water_bill")
	private double waterBill;
	
	@Column(name = "electricity_bill")
	private double electricityBill;
	
	@Column(name = "status")
	private boolean status;
	
	
	
}
