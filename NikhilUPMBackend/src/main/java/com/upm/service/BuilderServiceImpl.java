package com.upm.service;


import java.util.Iterator;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collector;
import java.util.stream.Collectors;

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
import com.upm.dto.LoginDto;
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
		Builder builder=builderDao.findById(adminDto.getBuilderId()).orElseThrow();
//		Users userAdmin=mapper.map(adminDto, Users.class);
//		System.out.println(userAdmin.toString());
//		usersDao.save(userAdmin);
//		admin.addBuilding(building);
//		admin.setBuilder(builder);
		user.setAdmin(admin);
		builder.addAdmin(admin);
		admin.setAdmin(user);
	   // builderDao.save(builder);
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

	@Override
	public String findByEmailAndPasswordService(String emailId) {
		// TODO Auto-generated method stub
		try {
			 Optional<Builder> builder=builderDao.findByEmail(emailId);
			
			 return "builder Login successful";
		}
		catch(Exception e)
		{
			return "Oops wrong credentials!!";
		}
	}

	@Override
	public List<AddBuildingDto> getBuildingList(Long builderId) {
		// TODO Auto-generated method stub
		Builder builder=builderDao.findById(builderId).orElseThrow();
		List<Building> buildingList = buildingDao.findByBuildingBuilder(builder);
		return buildingList.stream()
				.map(building ->mapper.map(building, AddBuildingDto.class))
				.collect(Collectors.toList());
	}

	@Override
	public List<AddAdminDto> getAdminList(Long builderId) {
		// TODO Auto-generated method stub
		Builder builder=builderDao.findById(builderId).orElseThrow();
		System.out.println(builder.toString());
		List<Admin> adminList = adminDao.findByAdminBuilder(builder);
		return adminList.stream()
				.map(admin ->mapper.map(admin, AddAdminDto.class))
				.collect(Collectors.toList());
	}
}
