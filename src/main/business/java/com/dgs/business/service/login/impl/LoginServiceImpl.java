package com.dgs.business.service.login.impl;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;

import com.dgs.business.service.LoginService;
import com.dgs.data.dao.UsermasterDAO;
import com.dgs.data.domain.Usermaster;
import com.dgs.infra.dto.login.UserDTO;

@Transactional
public class LoginServiceImpl implements LoginService {

	@Autowired
	private UsermasterDAO userMasterDao;

	@Override
	public UserDTO authenticate(String userName, String password)
			throws Exception {
		UserDTO userDTO = new UserDTO();

		Map<String, String> userDetails;
		try {

				
				List<Usermaster> userMasterList = userMasterDao.getAllUsers();
				for (Usermaster usermaster : userMasterList) {
					if(usermaster.getUserId().equalsIgnoreCase(userName) && usermaster.getPassword().equals(password)){
						
						userDTO.setUserName(userName);
						userDTO.setRole(usermaster.getRole());
						userDTO.setUserMailID(usermaster.getEmailId());
						
						
					}
					
				}
				
				return userDTO;
				
			//}
		} catch (Exception e) {
			e.printStackTrace();
			throw e;
		}

	}

}
