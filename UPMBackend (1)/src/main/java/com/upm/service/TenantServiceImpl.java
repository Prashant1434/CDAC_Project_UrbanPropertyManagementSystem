package com.upm.service;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import javax.transaction.Transactional;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.upm.dao.TenantDao;
import com.upm.dao.UtilityDao;
import com.upm.dto.AddUtilityDto;
import com.upm.dto.ApiResponse;
import com.upm.entities.RentUtility;
import com.upm.entities.Tenant;
import com.upm.dao.UsersDao;
import com.upm.entities.RentUtility;
import com.upm.entities.Users;

@Transactional
@Service
public class TenantServiceImpl implements TenantService {

	@Autowired
	private TenantDao tenantDao;

	@Autowired
	private UtilityDao utilityDao;

	@Autowired
	private UsersDao userDao;

	@Autowired
	private ModelMapper mapper;

	@Override
	public ApiResponse updateRentStatus(boolean status, Long uid) {
//		Tenant tenant = tenantDao.findByTenantId(uid).orElseThrow();
		RentUtility rent = utilityDao.findByBillStatusAndId(status, uid).orElseThrow();
		System.out.println("rent : " + rent.toString());
		rent.setBillStatus(true);
		rent.setRentPaidDate(LocalDate.now());
		utilityDao.save(rent);
		return new ApiResponse("Payment Successful...!!!!");
	}

	@Override
	public List<AddUtilityDto> getUtilityListOfTenant(Long tid) {
		Users user = userDao.findById(tid).orElseThrow();
		Tenant tenant = user.getTenant();
		List<RentUtility> utilityList = tenant.getRentList();
		return utilityList.stream().map(i -> mapper.map(i, AddUtilityDto.class)).collect(Collectors.toList());
	}

	@Override
	public AddUtilityDto getUtilityByUtilityId(Long utilityId) {
		RentUtility utility = utilityDao.findById(utilityId).orElseThrow();
		return mapper.map(utility, AddUtilityDto.class);
	}
}
