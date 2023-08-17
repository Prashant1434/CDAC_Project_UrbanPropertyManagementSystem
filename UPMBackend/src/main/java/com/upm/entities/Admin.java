package com.upm.entities;

import java.time.LocalDate;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
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
import net.bytebuddy.asm.Advice.Local;

@Entity
@Table(name = "admin")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Admin extends BaseEntity{
	
	@OneToOne(fetch = FetchType.LAZY)
	@MapsId
	@JoinColumn(name ="user_id")
	private Users admin;
	
	@OneToOne(fetch = FetchType.LAZY)
	@MapsId
	@JoinColumn(name ="building_id")
	private Building building;
}
