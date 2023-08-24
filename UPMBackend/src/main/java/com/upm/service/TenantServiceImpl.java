package com.upm.service;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.upm.dao.TenantDao;
import com.upm.dao.UsersDao;
import com.upm.dao.UtilityDao;
import com.upm.entities.RentUtility;
import com.upm.entities.Tenant;
import com.upm.entities.Users;

@Transactional
@Service
public class TenantServiceImpl implements TenantService {

	@Autowired
	private TenantDao tenantDao;

	@Autowired
	private UsersDao userDao;

	@Autowired
	private UtilityDao utilityDao;

	@Override
	public String updateRentStatus(boolean status, Long uid) {
		Tenant tenant = tenantDao.findByTenantId(uid).orElseThrow();
		RentUtility rent = utilityDao.findByBillStatusAndTenantUtilityId(status, tenant.getId()).orElseThrow();
		System.out.println("rent : " + rent.toString());
		rent.setBillStatus(true);
		utilityDao.save(rent);
		return "Payment Successful...!!!!";
	}

	

}
