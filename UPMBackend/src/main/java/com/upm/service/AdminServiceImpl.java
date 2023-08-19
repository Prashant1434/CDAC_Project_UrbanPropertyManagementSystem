package com.upm.service;

import java.util.Optional;

import javax.transaction.Transactional;

import org.modelmapper.ModelMapper;
import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.upm.dao.AdminDao;
import com.upm.dao.FlatDao;
import com.upm.dao.OwnerDao;
import com.upm.dao.UsersDao;
import com.upm.dto.AddAdminDto;
import com.upm.entities.Flat;
import com.upm.entities.Owner;
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
	private ModelMapper mapper;

	public AdminServiceImpl() {
		System.out.println("inside ctor : " + getClass());
	}

	@Override
	public String addOwner(AddAdminDto adminDto) {
		Users user = mapper.map(adminDto, Users.class);
		Owner owner = new Owner();
		owner.setOwner(user);
		user.setOwner(owner);
		userDao.save(user);
		return "Owner Added Successfully";
	}

	public String addFaltToOwner(Flat flat,Long id) {
		Owner owner = ownerDao.findById(id).orElseThrow();
		owner.addFlat(flat);
		flatDao.save(flat);
		return "flat added to owner successfully";
	}

}
