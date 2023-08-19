package com.upm.entities;

import java.time.LocalDate;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.MapsId;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import org.springframework.format.annotation.DateTimeFormat;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "rent")
@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
public class Rent {

	@Id
	@Column(name = "rent_id")
	private Long rentId;
	
	@Column(name = "rent_amount")
	private double rentAmount;
	
	@Column(name = "rent_status")
	private boolean rentStatus;
	
	@Column(name = "rent_paid_date")
	@DateTimeFormat(pattern = "yyyy-MM-dd")
	private LocalDate rentPaidDate;
	
	@ManyToOne
	@JoinColumn(name = "flat_rent_id")
	private Flat flatRent;
	
	@ManyToOne
	@JoinColumn(name = "tenant_rent_id")
	private Tenant tenantRent;
}
