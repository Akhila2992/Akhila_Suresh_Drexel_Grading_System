package com.dgs.web.constants;



public interface DGSWebConstants {

	
	static interface Login{

		// Paths to JSP pages
		public static final String LOGIN_PAGE_PATH = "login/login";
		public static final String WELCOME_PAGE_PATH = "/user/userhome";
		

		// Paths to RESTful Web Services
		public static final String LOGIN_WS_PAGE_PATH = "/login/userdetails";
	
	}
	
	static interface DGS{
	
		//Paths to JSP pages
		public static final String GRADE_STUDENT_PAGE_PATH = "drexel/gradestudent";
		public static final String MY_COURSES_PAGE_PATH = "drexel/mycourses";
		public static final String MY_GRADE_COURSES_PAGE_PATH = "drexel/mygradecourses";
			
				
		
		// Paths to RESTful Web Services
		public static final String GET_CONFIG_DETAILS = "/drexel/getconfigvalues";
		public static final String GET_COURSE_DETAILS = "/drexel/getcoursedetails";
		public static final String GET_MY_COURSE_DETAILS = "/drexel/getmycourses";
		public static final String GET_MY_GRADE_COURSE_DETAILS = "/drexel/mycoursesgrades";
		public static final String GET_STUDENT_DETAILS = "/drexel/getmystudents";
		public static final String GET_GRADE_DETAILS = "/drexel/getgrade";
	
	}

}
