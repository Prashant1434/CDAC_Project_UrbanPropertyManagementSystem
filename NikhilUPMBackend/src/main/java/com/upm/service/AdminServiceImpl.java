package com.upm.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collector;
import java.util.stream.Collectors;

import javax.transaction.Transactional;

import org.modelmapper.ModelMapper;
import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.upm.dao.AdminDao;
import com.upm.dao.BuildingDao;
import com.upm.dao.FlatDao;
import com.upm.dao.OwnerDao;
import com.upm.dao.TenantDao;
import com.upm.dao.UsersDao;
import com.upm.dto.AddAdminDto;
import com.upm.dto.AddBuildingDto;
import com.upm.dto.AddOwnerDto;
import com.upm.dto.AddTenantDto;
import com.upm.dto.FlatDto;
import com.upm.entities.Admin;
import com.upm.entities.Building;
import com.upm.entities.Flat;
import com.upm.entities.Owner;
import com.upm.entities.Tenant;
import com.upm.entities.Users;

@Transactional
@Service
public class AdminServiceImpl implements AdminService {

	@Autowired
	private OwnerDao ownerDao;

	@Autowired
	private UsersDao userDao;

	@Autowired
	private FlatDao flatDao;

	@Autowired
	private AdminDao adminDao;

	@Autowired
	private BuildingDao buildingDao;

	@Autowired
	private TenantDao tenantDao;

	@Autowired
	private ModelMapper mapper;

	public AdminServiceImpl() {
		System.out.println("inside ctor : " + getClass());
	}

	@Override
	public AddOwnerDto addOwner(AddOwnerDto ownerDto) {
		Users user = mapper.map(ownerDto, Users.class);
		Owner owner = new Owner();
		owner.setOwner(user);
		user.setOwner(owner);
		Users newUser=userDao.save(user);
		Owner newOwner=ownerDao.findByOwner(newUser);
		return mapper.map(newOwner, AddOwnerDto.class); 
	}

	public String addFaltToOwner(Long fid, Long oId) {
		Flat flat = flatDao.findById(fid).orElseThrow();
		Owner owner = ownerDao.findById(oId).orElseThrow();
		owner.addFlat(flat);
		flatDao.save(flat);
		return "flat added to owner successfully";
	}

	@Override
	public List<AddBuildingDto> getBuildingList(Long adminId) {
		// TODO Auto-generated method stub
		Admin admin = adminDao.findById(adminId).orElseThrow();

		List<Building> buildingList = buildingDao.findByAdminsBuilding(admin);

		return buildingList.stream()
				.map(building -> mapper.map(building, AddBuildingDto.class))
				.collect(Collectors.toList());
	}

	@Override
	public List<FlatDto> getFlatList(Long buildingId) {
		// TODO Auto-generated method stub
		Building building = buildingDao.findById(buildingId).orElseThrow();

		List<Flat> flatList = flatDao.findByBuilding(building);

		return flatList.stream().map(f -> mapper.map(f, FlatDto.class)).collect(Collectors.toList());
	}

	@Override
	public AddOwnerDto getOwner(Long flatId) {
		// TODO Auto-generated method stub
		Flat flat = flatDao.findById(flatId).orElseThrow();
		Owner owner = flat.getOwner();
		if(owner==null)
		{
			return null;
		}
		Users user = owner.getOwner();
		return mapper.map(user, AddOwnerDto.class);
	}

	@Override
	public AddTenantDto getTenant(Long flatId) {
		// TODO Auto-generated method stub
		Flat flat = flatDao.findById(flatId).orElseThrow();
		Tenant tenant = flat.getTenantFlat();
		Users user = tenant.getTenant();
		return mapper.map(user, AddTenantDto.class);
	}

	@Override
	public List<AddOwnerDto> getAllOwnerList(Long adminId) {
		// TODO Auto-generated method stub
		List<AddBuildingDto> buildingList = getBuildingList(adminId);
		buildingList.forEach(i -> System.out.println(i.getName()));
		List<FlatDto> flatList = new ArrayList<FlatDto>();

		for (AddBuildingDto buildingDto : buildingList) {
			flatList.addAll(getFlatList(buildingDto.getId()));
		}
		List<AddOwnerDto> ownerList = new ArrayList<AddOwnerDto>();
		for (FlatDto flatDto : flatList) {
			AddOwnerDto owner=getOwner(flatDto.getFlatId());
			if(owner!=null)
			ownerList.add(owner);
		
		}
		return ownerList;
	
	}

	@Override
	public List<FlatDto> getAllEmptyFlats(Long buildingId) {
		// TODO Auto-generated method stub
		Building building=buildingDao.findById(buildingId).orElseThrow();
		List<Flat> flatList=flatDao.findByBuilding(building);
		flatList.forEach(i->System.out.println(i.getFlatType()));
		return flatList.stream()
					.filter(i-> i.getOwner()==null)
					.map(flat -> mapper.map(flat, FlatDto.class))
					.collect(Collectors.toList());
	}

	@Override
	public List<FlatDto> getFlatListByOwner(Long ownerId) {
		// TODO Auto-generated method stub
		List<Flat> flatList=flatDao.findByOwner(ownerDao.findById(ownerId).orElseThrow());
		return flatList.stream()
				.map(flat ->mapper.map(flat, FlatDto.class))
				.collect(Collectors.toList());
	}

}
