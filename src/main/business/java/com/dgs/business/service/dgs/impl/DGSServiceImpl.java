package com.dgs.business.service.dgs.impl;

import java.util.ArrayList;
import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;

import com.dgs.business.service.DGSService;
import com.dgs.data.dao.GrademasterDAO;
import com.dgs.data.dao.ProfessorcoursemappingDAO;
import com.dgs.data.dao.StudentmappingDAO;
import com.dgs.data.dao.UsermasterDAO;
import com.dgs.data.domain.Grademaster;
import com.dgs.data.domain.Professorcoursemapping;
import com.dgs.data.domain.StudentGradeDTO;
import com.dgs.data.domain.Studentmapping;
import com.dgs.data.domain.Usermaster;
import com.dgs.infra.constants.DGSCommonConstants;


@Transactional
public class DGSServiceImpl implements DGSService {
	
	@Autowired
	private ProfessorcoursemappingDAO proDao;
	
	@Autowired
	private StudentmappingDAO stuDao;
	
	@Autowired
	private UsermasterDAO userDao;
	
	@Autowired
	private GrademasterDAO gradeDao;
	
	public List<Professorcoursemapping> getCourseDetails(String userId) throws Exception {
		
		List<Professorcoursemapping> courses = new ArrayList<Professorcoursemapping>();
		courses = proDao.getCourseDetails(userId);
		return courses;


	}


	public List<Studentmapping> getGradeCourseDetails(String userId) throws Exception {
		
		List<Studentmapping> gradeCourses = new ArrayList<Studentmapping>();
		gradeCourses = stuDao.getGradeCourseDetails(userId);
		
		return gradeCourses;


	}



	public List<Usermaster> getMyStudentDetails(String userId) throws Exception {
		List<Usermaster> myStudents = new ArrayList<Usermaster>();
		myStudents = userDao.getMyStudents(userId);
		
		return myStudents;

	}

	

	public List<Grademaster> getGrades() throws Exception {
		List<Grademaster> gradeList = new ArrayList<Grademaster>();
		gradeList = gradeDao.getGrades();
		
		return gradeList;

	}
	
	public String saveGrade(StudentGradeDTO studentMapping) {
		String gradeAssign = null;
		try {
			
			gradeAssign = stuDao.saveGrade(studentMapping);

		} catch (Exception e) {
			gradeAssign = DGSCommonConstants.GRADE_ASSIGN_FAILURE;
		}

		return gradeAssign;

	}


}
