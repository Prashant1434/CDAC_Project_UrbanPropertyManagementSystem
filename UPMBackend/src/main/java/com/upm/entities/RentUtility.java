package com.upm.entities;

import java.time.LocalDate;

import javax.persistence.Column;
import javax.persistence.Embedded;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import org.springframework.format.annotation.DateTimeFormat;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Table(name = "rent_utility")
@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class RentUtility extends RoleBaseEntity {

	@Column(name = "gas_bill")
	private double gasBill;

	@Column(name = "water_bill")
	private double waterBill;

	@Column(name = "electricity_bill")
	private double electricityBill;

	@Column(name = "bill_status")
	private boolean billStatus;

	@Column(name = "rent_amount")
	private double rentAmount;

	@Column(name = "rent_status")
	private boolean rentStatus;

	@Column(name = "rent_paid_date")
	@DateTimeFormat(pattern = "yyyy-MM-dd")
	private LocalDate rentPaidDate;

	@ManyToOne
	@JoinColumn(name = "flat_Utility_id")
	private Flat flatUtility;

	@ManyToOne
	@JoinColumn(name = "tenant_Utility_id")
	private Tenant tenantUtility;

}
