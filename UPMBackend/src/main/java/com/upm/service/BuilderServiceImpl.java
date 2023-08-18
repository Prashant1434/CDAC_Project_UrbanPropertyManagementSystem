package com.upm.service;


import org.apache.catalina.User;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.upm.dao.AdminDao;
import com.upm.dao.BuilderDao;
import com.upm.dao.BuildingDao;
import com.upm.dao.UsersDao;
import com.upm.dto.AddAdminDto;
import com.upm.entities.Admin;
import com.upm.entities.Builder;
import com.upm.entities.Building;
import com.upm.entities.Users;

@org.springframework.transaction.annotation.Transactional
@Service
public class BuilderServiceImpl implements BuilderService {

	@Autowired
	private BuilderDao builderDao;
	@Autowired
	private ModelMapper mapper;
	@Autowired
	private AdminDao adminDao;
	@Autowired
	private BuildingDao buildingDao;
	@Autowired
	private UsersDao usersDao;
	
	@Override
	public String addAdmin(AddAdminDto adminDto) {
//		Building building=buildingDao.findById(adminDto.getBuildingId()).orElseThrow();
//		Builder builder= builderDao.findById(adminDto.getBuilderId()).orElseThrow();
		Admin admin=new Admin();
		Users user=mapper.map(adminDto, Users.class);
//		Users userAdmin=mapper.map(adminDto, Users.class);
//		System.out.println(userAdmin.toString());
//		usersDao.save(userAdmin);
//		admin.addBuilding(building);
//		admin.setBuilder(builder);
		user.setAdmin(admin);
		admin.setAdmin(user);
	    usersDao.save(user);
		return "admin added";	
	}

}
