<%@ page language="java" contentType="text/html; charset=ISO-8859-1" pageEncoding="ISO-8859-1"%>
<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<%@page import="com.dgs.infra.misc.wrapper.ResponseMessageWrapper"%>
<%@page import="com.dgs.infra.constants.DGSCommonConstants"%>
<%
String error = DGSCommonConstants.LOGIN_FAILURE_ERROR;
String customMessage=DGSCommonConstants.LOGIN_CUSTOM_MESSAGE;
pageContext.setAttribute("error", error);
pageContext.setAttribute("customMessage", customMessage);

%>


<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
   <head>
      <title>DGS</title>
      <link rel="shortcut icon" type="image/x-icon" href="${pageContext.request.contextPath}/favicon.ico" />
      <link href="<c:url value="/resources/styles/style.css"/>" rel="stylesheet" type="text/css" />
      <link href="<c:url value="/resources/styles/login.css"/>" rel="stylesheet" type="text/css" />
      <link rel="stylesheet" href="<c:url value="/resources/styles/NewDesign.css"/>" />
      <script src="<c:url value="/resources/js/header_footer.js"/>" type="text/javascript"></script>
      <script src="<c:url value="/resources/js/common.js"/>" type="text/javascript"></script>
      <script src="<c:url value="/resources/js/jquery-1.8.3.min.js"/>"></script>
      <script src="<c:url value="/resources/js/login.js"/>"></script>
<script type="text/JavaScript">

function preventBack(){window.history.forward();}
setTimeout("preventBack()", 0);
window.onunload=function(){null};

</script>
      
   </head>
   <body>
      <div id="hiddDiv" class="translucentDiv"></div>
      <div id="blankLayer" class="transparentDiv"></div>
      <div id="detailsDiv" class="detailsDiv"></div>
      <div class="dialog" id="dialogBox">
         <table cellpadding="0" cellspacing="0">
            <tbody>
               <tr class="hdt">
                  <td class="lt"></td>
                  <td class="mt" colspan="2"></td>
                  <td class="rt"></td>
               </tr>
               <tr class="bd">
                  <td class="lt">&nbsp;</td>
                  <td class="mt" id="dialogHeader"></td>
                  <td style="text-align: right;" class="mt"></td>
                  <td class="rt">&nbsp;</td>
               </tr>
               <tr class="bd">
                  <td class="lt">&nbsp;</td>
                  <td class="mt" id="dialogContent" colspan="2">
                     <!-- Content Here -->
                  </td>
                  <td class="rt">&nbsp;</td>
               </tr>
               <tr class="hdb">
                  <td class="lt"></td>
                  <td class="mt" colspan="2"></td>
                  <td class="rt"></td>
               </tr>
            </tbody>
         </table>
      </div>
      <form:form id="myform" action="/dgs/login/authenticate" modelAttribute="userDTO" commandName="userDTO">
         <div id="container">
            <div id="header">
               <div class="inner_wrap">
                  <div id="header_container">
                     <div id="application_contaienr_left">
                        <h1 class="qfocustitle">DGS</h1>
                         <div class="qfocussubtitle">The Drexel Grading
                           Application.
                        </div>
                     </div>
                     <div id="logo_container">
                        <img src="<c:url value="/resources/images/drexel_logo.png"/>" width="305"
                           height="74" alt="Drexel_Logo"></img>
                     </div>
                  </div>
               </div>
            </div>
            <div class="clr"></div>
            <div id="maincontent">
               <div class="inner_wrap">
                  <div id="content_container">
                     <div id="top_container">
                        <div id="login_box">
                           <div class="rounded_middle_content">
                              <div class="login_title">Login</div>
                              <div class="login_title1">
                              	<p class="customError"><font color="red">${userDTO.responseMessageWrapper}</font></p>
                              </div>
                              <div class="input_container">
                                 <div class="textfied">
									
                                    <input type="text" placeholder="UserName" value="" name="userName" id="userName" class="txtusername"/>
                                    
                                 </div>
                              </div>
                              
                              <div class="input_container">
                              <div class="textfied">
                                    <input type="password" placeholder="Password" value="" name="password" id="password" class="txtpassword" />
                              </div>
                              </div>
                              <div class="input_container nobrd">
                                 <div class="login_button_container">
                                <input type="image" src="<c:url value="/resources/images/login_button.jpg"/>" value="Login" id="btn_submit" class="btn_submit"/>                                 
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div id="links_box">
                           <img src="<c:url value="/resources/images/talent.jpg"/>" width="210" height="260" alt="TAM"></img>
                        </div>
                     </div>
                     <div class="clr"></div>
                  </div>
                 
               </div>
            </div>
            <div class="clr"></div>
            <div id="footer">
               <div id="footer_container">
                  <div id="info_container">
                     <div class="copyrights">
                        © 2015 Drexel University. All rights reserved. 
                     </div>
                  </div>
                  <div class="clr"></div>
               </div>
               <div class="clr"></div>
            </div>
            <div class="clr"></div>
         </div>
         <input type="hidden" name="method" id="method" value="login" />
      </form:form>
     
      </script>
   </body>
</html>
