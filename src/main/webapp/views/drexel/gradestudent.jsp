<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<%@page import="com.dgs.data.domain.Grademaster"%>
<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<%@page import="com.dgs.infra.misc.wrapper.ResponseMessageWrapper"%>
<%@page import="com.dgs.web.constants.DGSWebConstants"%>
<%@page import="com.dgs.data.domain.Professorcoursemapping"%>
<%@page import="com.dgs.data.domain.DGSList"%>
<%@page import="com.dgs.data.domain.Usermaster"%>
<%@page import="com.dgs.data.domain.Grademaster"%>
<%@page import="java.util.*"%>
<%@page import="java.text.SimpleDateFormat"%>

<%
	UserDTO userDTO = (UserDTO) session.getAttribute("user");
	ApplicationContext context = RequestContextUtils
			.getWebApplicationContext(request);
	RESTUtil restUtil = (RESTUtil) context.getBean("restUtil");
	String userId = userDTO.getUserName();
	List<Professorcoursemapping> courseList = (List<Professorcoursemapping>) restUtil.getData(DGSWebConstants.DGS.GET_MY_COURSE_DETAILS+"?userId=" + userId, DGSList.class);
	List<Usermaster> studentList = (List<Usermaster>) restUtil.getData(DGSWebConstants.DGS.GET_STUDENT_DETAILS+"?userId=" + userId, DGSList.class);
	List<Grademaster> gradeMasterList = (List<Grademaster>) restUtil.getData(DGSWebConstants.DGS.GET_GRADE_DETAILS, DGSList.class);
	pageContext.setAttribute("studentList", studentList);
	pageContext.setAttribute("courseList", courseList);
	pageContext.setAttribute("gradeList", gradeMasterList);
	pageContext.setAttribute("user", session.getAttribute("userDTO"));
	
	
%>




<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />
<title>DGS</title>
<link rel="shortcut icon" type="image/x-icon"
	href="${pageContext.request.contextPath}/favicon.ico" />
<link href="<c:url value="/resources/styles/tamg_style.css"/>"
	rel="stylesheet" type="text/css" />
<link type="text/css"
	href="<c:url value="/resources/styles/jquery-ui-1.8.7.custom.css"/>"
	rel="stylesheet" />
<link type="text/css"
	href="<c:url value="/resources/styles/jquery-ui-timepicker.css"/>"
	rel="stylesheet" />
<script type="text/javascript"
	src="<c:url value="/resources/js/jquery-1.6.2.min.js"/>"></script>
<script type="text/javascript"
	src="<c:url value="/resources/js/tamg.js"/>"></script>
<script type="text/javascript"
	src="<c:url value="/resources/js/gen_validatorv31.js"/>"></script>
<script type="text/javascript"
	src="<c:url value="/resources/js/jquery.ui.timepicker.js"/>"></script>
<script type="text/javascript"
	src="<c:url value="/resources/js/jquery.limit-1.2.source.js"/>"></script>
<script type="text/javascript"
	src="<c:url value="/resources/js/jquery-1.5.1.min.js"/>"></script>
<script type="text/javascript"
	src="<c:url value="/resources/js/jquery-ui.1.8.11.min.js"/>"></script>
<script type="text/javascript"
	src="<c:url value="/resources/js/jquery-ui-1.8.11.custom.min.js"/>"></script>
<script type="text/javascript"
	src="<c:url value="/resources/js/jquery.validate.min.js"/>"></script>
<script type="text/javascript"
	src="<c:url value="/resources/js/TRF.js"/>"></script>


</head>
<body>
	<div id="header">
		<%@include file="../common/header.jsp"%>

	</div>


	<table class="main_table" cellpadding="0" cellspacing="0">
		<tr>
			<td class="navi_sec"><div id="main_navigation">
					<ul>
						<li><a href="/dgs/drexel/userhome"><span>Home</span></a></li>
					</ul>
				</div></td>
			<td class="navi_sec"><div id="main_navigation"
					style="float: right">
					<ul>
						<li><a href="/dgs/login/logout"><span>Logout</span></a></li>
					</ul>
				</div></td>
		</tr>
		<tr>
			<td class="heading">Grade Student</td>
			<td align="right"><span class="mandatory style1">*</span>
				Mandatory Fields</td>
		</tr>
		<tr>
		<td colspan="2" align="center" style="color: RED;"><h2>${responseMessageWrapper.responseMessage}</h2></td>
		</tr>
		<tr>
			<td colspan="2"><div class="form_content">
					<form:form action="/dgs/drexel/assigngrade"
						modelAttribute="studentmapping" commandName="studentmapping"
						name="submitForm" id="submitForm">
						<table class="table-border" width="100%">
							<tr>
								<td class="table-header" colspan="4">Grade Students</td>
							</tr>
							<tr id="sec_address">
								<td>
									<table width="100%" border="0" align="center" cellpadding="0"
										cellspacing="0">
										<tr>

											<td class="content-cell">Course Id<span
												class="mandatory">*</span></td>

											<td class="content-cell2"><select name="courseId"
												id="courseId" class="txtbox" style="width: 150px;">

													<option selected="selected" value="">Please Select
													</option>
													<c:forEach var="courseList" items="${courseList}">
														<option value="${courseList.coursemaster.courseId}" selected="selected">
															${courseList.coursemaster.courseName}</option>
													</c:forEach>
											</select></td>

											<td class="content-cell">Student Id<span
												class="mandatory">*</span></td>

											<td class="content-cell2"><select name="userId"
												id="userId" class="txtbox" style="width: 150px;">

													<option selected="selected" value="">Please Select
													</option>
													<c:forEach items="${studentList}" var="studentList">
														<option value="${studentList.userId}" selected="selected">
															${studentList.firstName}</option>
													</c:forEach>
											</select></td>
										</tr>
										<tr>
											<td class="content-cell">Grade Id<span
												class="mandatory">*</span></td>

											<td class="content-cell2"><select name="gradeId"
												id="gradeId" class="txtbox" style="width: 150px;">

													<option selected="selected" value="">Please Select
													</option>
													<c:forEach items="${gradeList}" var="gradeList">
														<option value="${gradeList.gradeId}" selected="selected">
															${gradeList.gradeId}</option>
													</c:forEach>
											</select></td>

										</tr>
									<tr>
									<td class="content-cell">
									<table>
									<tr>
									<td class="content-cell">Please find the grade Info below.</td>
									</tr>
									<tr>
									<td class="content-cell">"A+	--> 98% and above"</td>
									</tr>
									<tr>
									<td class="content-cell">"A  -->	92% to 98%"</td>
									</tr>
									<tr>
									<td class="content-cell">"A-	--> 90% to 92%"</td>
									</tr>
									<tr>
									<td class="content-cell">"B+	--> 88% to 90%"</td>
									</tr>
									<tr>
									<td class="content-cell">"B	--> 82% to 88%"</td>
									</tr>
									<tr>
									<td class="content-cell">"B-	--> 80% to 82%"</td>
									</tr>
									<tr>
									<td class="content-cell">"C+	--> 78% to 80%"</td>
									</tr>
									<tr>
									<td class="content-cell">"C-	--> 70% to 72%"</td>
									</tr>
									<tr>
									<td class="content-cell">"D+	--> 65% to 70%"</td>
									</tr>
									<tr>
									<td class="content-cell">"D	--> 60% to 65%"</td>
									</tr>
									<tr>
									<td class="content-cell">"F	--> Below 60%"</td>
									</tr>
									</table>
									</td>
									</tr>
									</table>
									 </form:form>
									</div>
									<div id="main_navigation" class="button_style">
										<ul>
											<li><a href="/dgs/drexel/userhome"><span>Cancel</span></a></li>
											<li><a href="#"
												onclick="document.getElementById('submitForm').submit();"><span>Submit</span></a></li>

										</ul>
									</div>
								</td>
							</tr>
							<tr>
								<td colspan="2" class="footer_sec">2015 Drexel University |
									All rights reserved.</td>
							</tr>
						</table>
</body>
</html>
