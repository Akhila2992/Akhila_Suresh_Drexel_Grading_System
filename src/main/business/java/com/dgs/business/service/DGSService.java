package com.dgs.business.service;

import java.util.List;

import com.dgs.data.domain.Grademaster;
import com.dgs.data.domain.Professorcoursemapping;
import com.dgs.data.domain.StudentGradeDTO;
import com.dgs.data.domain.Studentmapping;
import com.dgs.data.domain.Usermaster;


public interface DGSService {

	public List<Professorcoursemapping> getCourseDetails(String userId) throws Exception;
	public List<Studentmapping> getGradeCourseDetails(String userId) throws Exception;
	public List<Usermaster> getMyStudentDetails(String userId) throws Exception;
	public List<Grademaster> getGrades() throws Exception;
	public String saveGrade(StudentGradeDTO studemtMapping);
	
}