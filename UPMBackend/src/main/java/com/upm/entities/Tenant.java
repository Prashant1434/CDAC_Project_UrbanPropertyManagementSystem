package com.upm.entities;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.MapsId;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import org.springframework.format.annotation.DateTimeFormat;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "tenant")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Tenant extends BaseEntity{

	private Boolean status;
	@DateTimeFormat(pattern = "yyyy-MM-dd")
	private LocalDate leaveDate;
	private Double deposite;

	@OneToOne
	@MapsId
	@JoinColumn(name = "user_id")
	private Users tenant;

	@OneToOne
	@JoinColumn(name = "flat_id")
	@MapsId
	private Flat flat;
	
	@OneToMany(mappedBy = "tenantRent",cascade = CascadeType.ALL,orphanRemoval = true)
	private List<Rent> rentList = new ArrayList<>();
	
	

}
