package com.upm.security;

import javax.transaction.Transactional;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.upm.dao.*;
import com.upm.dto.UserDto;
import com.upm.entities.*;
import com.upm.service.UserService;

@Service
@Transactional
public class CustomUserDetailsServiceImpl implements UserDetailsService {
	// dep user dao
	@Autowired
	private UsersDao userDao;
	
	@Autowired
	private ModelMapper mapper;
	
	@Autowired
	private UserService userService;
	

	@Override
	public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
		// invoke dao's method to get uer details form DB
		Users user = userDao.findByEmailId(email).orElseThrow(() ->new UsernameNotFoundException("Invalid Email !!!!!"));
		//=> user email exists
		System.out.println(user);
//		UserDto userDto=mapper.map(user, UserDto.class);
		return new CustomUserDetails(user);
	}

}
