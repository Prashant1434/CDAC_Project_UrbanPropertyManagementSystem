package com.upm.dto;

import java.time.LocalDate;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class AddUtilityDto {

	private Long id;

	private double gasBill;

	private double waterBill;

	private double electricityBill;

	private boolean billStatus;

	private double rentAmount;

	private LocalDate addedDate;

	private LocalDate rentPaidDate;
}
