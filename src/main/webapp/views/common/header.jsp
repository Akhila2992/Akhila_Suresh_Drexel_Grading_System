<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
   pageEncoding="ISO-8859-1"%>
<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@page import="java.util.Date"%>
<%@page import="com.dgs.infra.dto.login.UserDTO"%>
<%@page import="org.springframework.web.servlet.support.RequestContextUtils"%>
<%@page import="org.springframework.context.ApplicationContext"%>
<%@page import="java.util.List"%>
<%@page import="com.dgs.web.util.RESTUtil"%>
<% 
UserDTO user=(UserDTO) session.getAttribute("user");
    if(user==null)
    {
    	ApplicationContext appContext = RequestContextUtils.getWebApplicationContext(request); 
     	RESTUtil appUtil = (RESTUtil)appContext.getBean("restUtil");
     	session.invalidate();
    	response.sendRedirect(appUtil.dgsAppBaseUrl+"/login/logout");
    }
    pageContext.setAttribute("user", user);
    %>
 
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
   <head>
      <meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
      <title>DGS</title>
      <link href="<c:url value="/resources/styles/style.css"/>" rel="stylesheet" type="text/css" />
      <link href="<c:url value="/resources/styles/login.css"/>" rel="stylesheet" type="text/css" />
      <link rel="stylesheet" href="<c:url value="/resources/styles/NewDesign.css"/>" />
      <script src="<c:url value="/resources/js/header_footer.js"/>" type="text/javascript"></script>
      
   </head>
   <body>
   
   
      <div id="hiddDiv" class="translucentDiv"></div>
      <div id="blankLayer" class="transparentDiv"></div>
      <div id="detailsDiv" class="detailsDiv"></div>
      <div class="dialog" id="dialogBox">
       
      </div>
      <div class="headersecdiv">
         <div class="header_rolesec">
           
         </div>
         <div style="float:left; padding:13px;">
            <h1 style="float:left; padding:7px 0 0 0; font-size:40px; font-family:Arial; color:#0d5cab; margin:0;">DGS</h1>
            <div style="float:left; padding:24px 0 0 8px; color:#666; font-family:Arial; font-weight:bold;">The Drexel Grading Application.</div>
         </div>
         <div id="logo_container">
                        <img src="<c:url value="/resources/images/drexel_logo.png"/>" width="305"
                           height="60" alt="Drexel_Logo" align="right" style="padding-top: 20px;padding-right: 30px"></img>
                     </div>
         
      </div>
     <div class="header_login_txtarea" align="right"><h2>Welcome <font face="Arial" color="#0d5cab">${user.userName}</font>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h2></div>
     
      <!-- 
         <div id="date"></div>
         
         <script>
         var d = new Date();
         document.getElementById("date").innerHTML = d.toDateString();
         </script>
          -->
   </body>
</html>