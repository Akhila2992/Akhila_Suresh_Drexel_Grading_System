package com.dgs.web.controller;

import java.util.ArrayList;
import java.util.List;

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
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import com.dgs.business.service.DGSService;
import com.dgs.data.domain.Grademaster;
import com.dgs.data.domain.Professorcoursemapping;
import com.dgs.data.domain.StudentGradeDTO;
import com.dgs.data.domain.Studentmapping;
import com.dgs.data.domain.Usermaster;
import com.dgs.infra.dto.login.UserDTO;
import com.dgs.infra.misc.wrapper.ResponseMessageWrapper;
import com.dgs.web.constants.DGSWebConstants;
import com.dgs.web.util.RESTUtil;

@Controller
public class DGSController {

	@Autowired
	RESTUtil restUtil;

	@Autowired
	DGSService dgsService;

	private static final Logger LOG = LoggerFactory
			.getLogger(LoginController.class);

	// Render courses page
	@RequestMapping(value = "/drexel/courses", method = RequestMethod.GET)
	public String showCoursesPage() {
		return DGSWebConstants.DGS.MY_COURSES_PAGE_PATH;
	}

	// Render grade courses page
	@RequestMapping(value = "/drexel/mygradecourses", method = RequestMethod.GET)
	public String showGradeCoursePage() {
		return DGSWebConstants.DGS.MY_GRADE_COURSES_PAGE_PATH;
	}

	// Render grade Student page
	@RequestMapping(value = "/drexel/gradestudent", method = RequestMethod.GET)
	public String showGradeStudentPage() {
		return DGSWebConstants.DGS.GRADE_STUDENT_PAGE_PATH;
	}

	// Render user home page
	@RequestMapping(value = "/drexel/userhome", method = { RequestMethod.GET,
			RequestMethod.POST })
	public String showUserHomePage() {
		return DGSWebConstants.Login.WELCOME_PAGE_PATH;

	}

	@RequestMapping(value = "/drexel/getmycourses", method = RequestMethod.GET)
	public @ResponseBody List<Professorcoursemapping> getMyCourses(
			@RequestParam(value = "userId", required = false) final String userId) {
		LOG.debug("getcourses() called from controller");
		List<Professorcoursemapping> courses = new ArrayList<Professorcoursemapping>();
		ResponseMessageWrapper responseMessageWrapper = new ResponseMessageWrapper();
		try {
			courses = dgsService.getCourseDetails(userId);

		} catch (Exception e) {
			LOG.debug("Error in getting my course details:" + e);
			e.printStackTrace();
			responseMessageWrapper
					.setResponseMessage("Error in getting courses details");

		}

		return courses;

	}

	@RequestMapping(value = "/drexel/mycoursesgrades", method = RequestMethod.GET)
	public @ResponseBody List<Studentmapping> getGradesForCourses(
			@RequestParam(value = "userId", required = false) final String userId) {
		LOG.debug("getgradecourses() called from controller");
		List<Studentmapping> gradeCourses = new ArrayList<Studentmapping>();
		ResponseMessageWrapper responseMessageWrapper = new ResponseMessageWrapper();
		try {
			gradeCourses = dgsService.getGradeCourseDetails(userId);

		} catch (Exception e) {
			LOG.debug("Error in getting grade details:" + e);
			e.printStackTrace();
			responseMessageWrapper
					.setResponseMessage("Error in getting courses details");

		}

		return gradeCourses;

	}

	
	@RequestMapping(value = "/drexel/getmystudents", method = RequestMethod.GET)
	public @ResponseBody List<Usermaster> getMyStudents(
			@RequestParam(value = "userId", required = false) final String userId) {
		LOG.debug("getcourses() called from controller");
		List<Usermaster> studentList = new ArrayList<Usermaster>();
		ResponseMessageWrapper responseMessageWrapper = new ResponseMessageWrapper();
		try {
			studentList= dgsService.getMyStudentDetails(userId);

		} catch (Exception e) {
			LOG.debug("Error in getting student details:" + e);
			e.printStackTrace();
			responseMessageWrapper
					.setResponseMessage("Error in getting courses details");

		}

		return studentList;
	}

	@RequestMapping(value = "/drexel/getgrade", method = RequestMethod.GET)
	public @ResponseBody List<Grademaster> getGrade()
			{
		LOG.debug("getcourses() called from controller");
		List<Grademaster> gradeList = new ArrayList<Grademaster>();
		ResponseMessageWrapper responseMessageWrapper = new ResponseMessageWrapper();
		try {
			gradeList= dgsService.getGrades();

		} catch (Exception e) {
			LOG.debug("Error in getting student details:" + e);
			e.printStackTrace();
			responseMessageWrapper
					.setResponseMessage("Error in getting courses details");

		}

		return gradeList;
	}
	
	@RequestMapping(value = "/drexel/assigngrade", method = RequestMethod.POST)
	public ModelAndView saveGrade(@ModelAttribute @Valid StudentGradeDTO studentmapping,
	BindingResult result, HttpServletRequest request) {
		LOG.debug("saveGrade() called from controller");

		ModelAndView modelAndView = new ModelAndView();
		ResponseMessageWrapper responseMessageWrapper = new ResponseMessageWrapper();
		HttpSession session = request.getSession();
		UserDTO userDTO = (UserDTO) session.getAttribute("user");
		if (userDTO == null) {

			modelAndView.setViewName(DGSWebConstants.Login.LOGIN_PAGE_PATH);
		} else {
			String status = null;
			try {
				status = dgsService.saveGrade(studentmapping);
				responseMessageWrapper.setResponseMessage(status);
				modelAndView.setViewName(DGSWebConstants.DGS.GRADE_STUDENT_PAGE_PATH);
				modelAndView.addObject(responseMessageWrapper);
				

			} catch (Exception e) {
				LOG.debug("Error in submitting TRF:" + e);
				e.printStackTrace();
				responseMessageWrapper.setResponseMessage("Error in saving grade");
				modelAndView.setViewName(DGSWebConstants.DGS.GRADE_STUDENT_PAGE_PATH);
				modelAndView.addObject(responseMessageWrapper);
				
			}

		}
		return modelAndView;
	}


}
