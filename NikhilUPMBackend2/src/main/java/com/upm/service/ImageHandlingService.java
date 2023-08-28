package com.upm.service;


import java.io.IOException;

import org.springframework.web.multipart.MultipartFile;

public interface ImageHandlingService {

	String uploadImage(Long userId,MultipartFile image) throws IOException;
	
	byte[] downloadImage(Long userId) throws IOException;
}
