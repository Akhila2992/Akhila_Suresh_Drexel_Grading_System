package com.dgs.web.controller;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import javax.validation.Valid;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;

import com.dgs.infra.constants.DGSCommonConstants;
import com.dgs.infra.dto.login.UserDTO;
import com.dgs.web.constants.DGSWebConstants;
import com.dgs.web.util.RESTUtil;

@Controller
public class LoginController {

	@Autowired
	RESTUtil restUtil;

	private static final Logger LOG = LoggerFactory
			.getLogger(LoginController.class);

	@RequestMapping(value = "/login", method = RequestMethod.GET)
	public String showLandingPage() {
		LOG.debug("showLandingPage() called");
		return DGSWebConstants.Login.LOGIN_PAGE_PATH;
	}

	/*
	 * authenticate user
	 */
	@RequestMapping(value = "/login/authenticate", method = RequestMethod.POST)
	public ModelAndView authenticate(@ModelAttribute @Valid UserDTO userDTO,
			BindingResult result, HttpServletRequest request) {
		LOG.debug("authenticate() called from controller");

		String modelName = DGSWebConstants.Login.LOGIN_PAGE_PATH;
		ModelAndView modelAndView = new ModelAndView();
		
		try {
			userDTO = restUtil.postData(userDTO,
					DGSWebConstants.Login.LOGIN_WS_PAGE_PATH, UserDTO.class);
			if (userDTO.getResponseMessageWrapper().equals(
					DGSCommonConstants.LOGIN_SUCCESS_STATUS)) {
				// request.setAttribute("userDTO",userDTO );

				modelName = DGSWebConstants.Login.WELCOME_PAGE_PATH;

			} else if (userDTO.getResponseMessageWrapper().equals(
					DGSCommonConstants.LOGIN_CUSTOM_MESSAGE)) {
				modelName = DGSWebConstants.Login.LOGIN_PAGE_PATH;

			}

			else {

				modelName = DGSWebConstants.Login.LOGIN_PAGE_PATH;
				userDTO.setResponseMessageWrapper(DGSCommonConstants.LOGIN_FAILURE_ERROR);
			}
			
		} catch (Exception e) {

			userDTO.setResponseMessageWrapper(DGSCommonConstants.LOGIN_SERVER_ISSUE);
		}
		
		modelAndView.setViewName(modelName);
		modelAndView.addObject("userDTO", userDTO);
		request.setAttribute("userDTO",userDTO);
		return modelAndView;
		// new ModelAndView(modelName,"responseMessageWrapper",
		// responseMessageWrapper);
	}

	/*
	 * logout
	 */
	@RequestMapping(value = "/login/logout", method = RequestMethod.GET)
	public String logout(HttpServletRequest request) {
		HttpSession session = request.getSession();
		session.invalidate();
		Cookie[] cookies = request.getCookies();
		if (cookies != null)
			for (int i = 0; i < cookies.length; i++) {
				cookies[i].setMaxAge(0);
			}
		return DGSWebConstants.Login.LOGIN_PAGE_PATH;
	}
	
	
}
