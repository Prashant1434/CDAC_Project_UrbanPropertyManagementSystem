package com.upm.service;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.upm.dao.TenantDao;
import com.upm.dao.UtilityDao;
import com.upm.entities.RentUtility;
import com.upm.entities.Tenant;

@Transactional
@Service
public class TenantServiceImpl implements TenantService {

	@Autowired
	private TenantDao tenantDao;

	@Autowired
	private UtilityDao utilityDao;

//	@Override
//	public String updateRent(boolean status,Long userId) {
//		Tenant tenant = tenantDao.findByStatusAndTenantId(status==false,userId).orElseThrow();
//		RentUtility utility = utilityDao.findByTenantUtilityId(tenant.getId()).orElseThrow();
//		utility.setBillStatus(true);
//		utilityDao.save(utility);
//		return "Payement Done Successfully !!!";
//	}

}
