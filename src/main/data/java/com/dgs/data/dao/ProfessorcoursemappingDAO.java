package com.dgs.data.dao;


// Generated Dec 6, 2015 3:57:29 PM by Hibernate Tools 3.4.0.CR1


import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;

import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.stereotype.Repository;

import com.dgs.data.domain.Coursemaster;
import com.dgs.data.domain.Professorcoursemapping;
import com.dgs.data.domain.Usermaster;
import com.dgs.data.util.DBConnector;

/**
 * Home object for domain model class Professorcoursemapping.
 * @see .Professorcoursemapping
 * @author Hibernate Tools
 */
@Repository
public class ProfessorcoursemappingDAO {

	public List<Professorcoursemapping> getCourseDetails(String userId) throws Exception {
		Connection connection = null;
		Statement statement = null;
		ResultSet rs =null;
		
		try {

			connection = DBConnector.getConnection();
			connection.setAutoCommit(false);
			String query = "SELECT coursemaster.courseId, coursemaster.courseName FROM coursemaster INNER JOIN professorcoursemapping ON coursemaster.courseId=professorcoursemapping.courseId where userId='"+userId+"'";
			PreparedStatement stmt = connection.prepareStatement(query);
			rs = stmt.executeQuery();
			List<Professorcoursemapping> courseList = new ArrayList<Professorcoursemapping>();
			while(rs.next())
			{
				Professorcoursemapping professorCourse = new Professorcoursemapping();
				Coursemaster course = new Coursemaster();
				course.setCourseId(rs.getString("courseId"));
				course.setCourseName(rs.getString("courseName"));
				professorCourse.setCoursemaster(course);
				courseList.add(professorCourse);
				
			}
			
			return courseList;
		} catch (Exception e) {
			throw e;
		}

		finally {
			DBConnector.close(rs);
			DBConnector.close(statement);
			DBConnector.close(connection);
		}
	}

}
