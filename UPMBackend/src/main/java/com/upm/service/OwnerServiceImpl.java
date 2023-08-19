package com.upm.service;

import java.util.Optional;

import javax.transaction.Transactional;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.upm.dao.FlatDao;
import com.upm.dao.OwnerDao;
import com.upm.dao.TenantDao;
import com.upm.dao.UsersDao;
import com.upm.dto.AddTenantDto;
import com.upm.entities.Flat;
import com.upm.entities.Tenant;
import com.upm.entities.Users;

@Transactional
@Service
public class OwnerServiceImpl implements OwnerService {

	@Autowired
	private OwnerDao ownerDao;

	@Autowired
	private TenantDao tenantDao;

	@Autowired
	private UsersDao userDao;

	@Autowired
	private FlatDao flatDao;

	@Autowired
	private ModelMapper mapper;

	@Override
	public String addTenant(AddTenantDto tenantDto) {
		Users user = mapper.map(tenantDto, Users.class);

		Tenant tenant = new Tenant(tenantDto.getStatus(), tenantDto.getLeaveDate(), tenantDto.getDeposite());

		user.setTenant(tenant);
		tenant.setTenant(user);
		userDao.save(user);
		return "Tenant Added Successfully";
	}

	@Override
	public String assignFlatToTenant(Long id, Long tId) {
		Flat flat = flatDao.findById(id).orElseThrow();
		System.out.println("flat : "+flat.toString());
		Tenant tenant = tenantDao.findById(tId).orElseThrow();
		System.out.println("tenant : "+tenant.toString());
		flat.setTenantFlat(tenant);
		tenant.setFlat(flat);
		flatDao.save(flat);
		return "Flat Added To Tenant";
	}

}
