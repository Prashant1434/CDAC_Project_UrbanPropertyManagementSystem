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
import com.upm.dto.ApiResponse;
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
	public ApiResponse addAdmin(AddAdminDto adminDto,Long builderId) {
//		Building building=buildingDao.findById(adminDto.getBuildingId()).orElseThrow();
//		Builder builder= builderDao.findById(adminDto.getBuilderId()).orElseThrow();
		Users users=usersDao.findById(builderId).orElseThrow();
		Admin admin=new Admin();
		Users user=mapper.map(adminDto, Users.class);
		Builder builder=builderDao.findByUserBuilder(users);
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
		return new ApiResponse("admin added successfully!!");	
	}

	@Override
	public ApiResponse addBuilding(AddBuildingDto addbuildingDto,Long builderId) {
		Users user=usersDao.findById(builderId).orElseThrow();
		Builder builder=builderDao.findByUserBuilder(user);
		builder.addBuilding(mapper.map(addbuildingDto, Building.class));
		builderDao.save(builder);
		return new ApiResponse("building added successfully");
	}


	@Override
	public ApiResponse assignBuildingToAdmin(Long adminId,Long buildingId) {
		Users user=usersDao.findById(adminId).orElseThrow();

		Admin admin=adminDao.findByAdmin(user);
		System.out.println(admin.toString());
		admin.addBuilding(buildingDao.findById(buildingId).orElseThrow());
		adminDao.save(admin);
		return new ApiResponse("building assigned to admin successfully");
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
			 Optional<Builder> builder=builderDao.findByUserBuilderEmailId(emailId);
			
			 return "builder Login successful";
		}
		catch(Exception e)
		{
			return "Oops wrong credentials!!";
		}
	}

	@Override
	public List<AddBuildingDto> getBuildingList(Long builderId) {
		Users user=usersDao.findById(builderId).orElseThrow();
		Builder builder=builderDao.findByUserBuilder(user);
		List<Building> buildingList = buildingDao.findByBuildingBuilder(builder);
		//buildingList.forEach(i->System.out.println(i.getName()));
		List<AddBuildingDto> blist= buildingList.stream()
				.map(building ->mapper.map(building, AddBuildingDto.class))
				.collect(Collectors.toList());
		for (AddBuildingDto addBuildingDto : blist) {
		 if(addBuildingDto.getAdminsBuilding()==null)
			 addBuildingDto.setStatus(false);
		 else
			addBuildingDto.setStatus(true);
		}
		return blist;
	}

	@Override
	public List<AddAdminDto> getAdminList(Long builderId) {
		// TODO Auto-generated method stub
		Users user=usersDao.findById(builderId).orElseThrow();

		Builder builder=builderDao.findByUserBuilder(user);
		System.out.println(builder.getUserBuilder().getName());
		List<Admin> adminList = adminDao.findByAdminBuilder(builder);
		for (Admin admin2 : adminList) {
			System.out.println(admin2.getAdmin().getName());
		}
		return adminList.stream()
				.map(admin ->mapper.map(admin.getAdmin(), AddAdminDto.class))
				.collect(Collectors.toList());
	}

	@Override
	public AddBuildingDto getBuildingDetails(Long buildingId) {
		// TODO Auto-generated method stub
		return mapper.map(buildingDao.findById(buildingId).orElseThrow(), AddBuildingDto.class);
	}
}
