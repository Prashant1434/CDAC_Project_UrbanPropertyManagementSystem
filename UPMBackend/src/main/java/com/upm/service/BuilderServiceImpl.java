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
import com.upm.dao.FlatDao;
import com.upm.dao.UsersDao;
import com.upm.dto.AddAdminDto;
import com.upm.dto.AddBuildingDto;
import com.upm.dto.AssignBuildingToAdminDto;
import com.upm.entities.Admin;
import com.upm.entities.Builder;
import com.upm.entities.Building;
import com.upm.entities.Flat;
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
	@Autowired
	private FlatDao flatDao;
	
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

	@Override
	public String addBuilding(AddBuildingDto addbuildingDto) {
		Builder builder=builderDao.findById(addbuildingDto.getBuilderId()).orElseThrow();
		builder.addBuilding(mapper.map(addbuildingDto, Building.class));
		builderDao.save(builder);
		return "building added successfully";
	}


	@Override
	public String assignBuildingToAdmin(AssignBuildingToAdminDto asssignBuildingToAdminDto) {
		Admin admin=adminDao.findById(asssignBuildingToAdminDto.getAdminId()).orElseThrow();
		System.out.println(admin.toString());
		admin.addBuilding(buildingDao.findById(asssignBuildingToAdminDto.getBuildingId()).orElseThrow());
		adminDao.save(admin);
		return "building assigned to admin successfully";
	}

	@Override
	public String removeBuilding(Long buildingId) {
		// TODO Auto-generated method stub
		 buildingDao.deleteById(buildingId);
		 return "building deleted successfully";
	}

	@Override
	public String updateAdmin(Long adminId) {
		return null;
	}

	@Override
	public String addFlat(Flat flat,Long buildingId) {
		Building building=buildingDao.findById(buildingId).orElseThrow();
		building.addFlat(flat);
		flatDao.save(flat);
		return "flat added successfully";
	}
}
