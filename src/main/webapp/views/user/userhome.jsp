<%@ page language="java" contentType="text/html; charset=ISO-8859-1" pageEncoding="ISO-8859-1"%>
<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<%@page import="com.dgs.infra.misc.wrapper.ResponseMessageWrapper"%>
<%@page import="com.dgs.infra.constants.DGSCommonConstants"%>
<%@page import="com.dgs.web.constants.DGSWebConstants"%>
<%@page import ="com.dgs.infra.dto.login.UserDTO" %>
<%@page import="com.dgs.web.util.RESTUtil"%>

<%

UserDTO userDTO=(UserDTO)request.getAttribute("userDTO");
if(userDTO != null)
{
	
	session.setAttribute("user", userDTO);
}
	
%>



<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />
<title>DGS</title>
<link rel="shortcut icon" type="image/x-icon" href="${pageContext.request.contextPath}/favicon.ico" />
<link href="<c:url value="/resources/styles/tamg_style.css"/>" rel="stylesheet" type="text/css" />
<script type="text/javascript" src="<c:url value="/resources/js/jquery-1.6.2.min.js"/>"></script>
<script type="text/javascript" src="<c:url value="/resources/js/tamg.js"/>"></script>
<script type="text/javascript">
	$(function(){
		// Tabs
		var $tabs = $('#tabs').tabs();
		$tabs.tabs('select', '${USER_CURR_TAB}');
		$tabs.bind('tabsselect', function(event, ui) {
			var currSelected = $tabs.tabs("option","selected");
			if(0 == currSelected) {
					savePersonalProfile();
			}
		});
	});
</script>
<script type="text/javascript">
	
	var image1=new Image();
	image1.src="/resources/images/university1.jpg";
	var image2=new Image();
	image2.src="/resources/images/university2.jpg";
	var image3=new Image();
	image3.src="/resources/images/university3.jpg";
	
	//
	</script>

<noscript>
	<meta http-equiv="refresh" content="0; URL=jserror.jsp"/>
</noscript>
</head>

<body style="padding:0px;margin:0px" >

<%@include file="../common/header.jsp" %>


<table class="main_table" cellpadding="0" cellspacing="0">
  
  <tr>
    <td class="navi_sec"><div id="main_navigation">
<% 

String role = null;%>
			
			<c:if test="${user.role == 'PROFESSOR'}">
			<% 	role = DGSCommonConstants.PROFESSOR_ROLE; %>
				<ul>
				
					<li><a href="/dgs/drexel/gradestudent"><span>Grade Student</span></a></li>
					<li><a href="/dgs/drexel/courses"><span>My Courses</span></a></li>
					
				</ul>
			</c:if>
			<c:if test="${user.role == 'STUDENT'}">
			<%  role = DGSCommonConstants.STUDENT_ROLE; %>
				<ul>
					<li><a href="/dgs/drexel/mygradecourses"><span>My Courses & Grades</span></a></li>
					
				</ul>
			</c:if>
			
      </div>
      
      </td>
    <td class="navi_sec"><div id="main_navigation" style="float:right">
        <ul>
          <li><a href="/dgs/login/logout"><span>Logout</span></a></li>
        </ul>
      </div></td>
  </tr>

   <tr>
    <td class="heading">Welcome to Drexel Grading Application </td>
    </tr>
  
   <tr>
   <td colspan="2" align="center">
  <img src="<c:url value="/resources/images/university1_1.jpg"/>" width="800"
                           height="500" alt="Drexel_Logo" align="middle" ></img>
   </td>
   </tr>  
   
    
  <tr>
   
    <td class="footer_sec_left" style="font-weight:bold;font-size:1.0em;color:WHITE">If you believe you need to have a different role please write to Drexel Admin </td><td class="footer_sec"> &copy; 2015 Drexel University | All rights reserved. </td>
                                                                                                                                                                                                                                                  
  </tr>
</table>

</body>
<script>
//variable that will increment through the images
var step=1
function slideit(){
//if browser does not support the image object, exit.
if (!document.images)
return
document.images.slide.src=eval("image"+step+".src")
if(step<3)
step++
else
step=1
setTimeout("slideit()",500)
}
slideit()

</script>
</html>

 