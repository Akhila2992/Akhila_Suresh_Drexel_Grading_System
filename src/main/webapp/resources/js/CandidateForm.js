function showOtherText()
{	 
    //Create reference to text field
    textObj = document.getElementById('clientname');
    textObj1 = document.getElementById('other_reason');

    //Test select field value
    if(textObj.options[textObj.selectedIndex].value=='Other')
    {
	      alert('Please Enter the Name of Client Below');
        //Enable text field
	      //String cname=document.setElementById('clientName');
	      //  cname   =document.getElementById('other_reason');
	      textObj1.style.display="";
	      textObj1.disabled = false;
	      textObj1.focus();
	      
    }
    else
    {
        //Disable text field & clear value
    	textObj1.style.display="none";
    }

    return;
}



/*function confirmAction()
{		
	alert("Its landing here");
	var answer = confirm("Do you want to confirm this Action?")
	if (answer){
		document.getElementById('saveTRF').href = "#tabs-6";			
	}
	else{
		document.getElementById('saveTRF').href = "#";
		return false;
	}

}
*/



function showOtherSkills()
{	
    //Create reference to text field
    textObj = document.getElementById('mandatoryskills');
    textObj1 = document.getElementById('other_skill');

    //Test select field value
    if(textObj.options[textObj.selectedIndex].value=='OTHER') {
	      alert('Please Enter the Name of Skills Below');
        //Enable text field
	      textObj1.style.display="";
	      textObj1.disabled = false; 
    } else {        
    	textObj1.style.display="none";
    }
    return;
}

$(function(){
	var sessionValid = false;
	if(!sessionValid) {
		// Check User Session
	var sTargetURL = "index.jsp";
	$.ajax({
		type: 'POST',
		url: 'checkSession',
		success: function(data){
			if(data == 'FALSE') {
				window.location.replace( sTargetURL );
			} else {
				sessionValid = true;
			}
      	},
      	failure: function(data){
			window.location.replace( sTargetURL );
      	} 
      	
	});
}



$( "#requisitiondate" ).datepicker({dateFormat: 'dd-M-yy', changeYear: true});
$( "#projectenddate" ).datepicker({dateFormat: 'dd-M-yy', changeYear: true});

$( "#dob" ).datepicker({dateFormat: 'dd-M-yy', changeYear: true});



var $tabs = $('#tabs').tabs();
$tabs.tabs('select', '${USER_CURR_TAB}');
$tabs.bind('tabsselect', function(event, ui) {
	var currSelected = $tabs.tabs("option","selected");
});






$("#submitCandidateForm").validate({
	rules: {
		FirstName: {required: true},
		LastName: {required: true},
		Resume: {required: true},
		CandidatePhoneNum: {required: true}
			},
	messages: {
		FirstName: "Please enter First name",
		LastName: "Please enter Last name",
	    Resume: "Please upload the resume",
	    CandidatePhoneNum: "Please enter phone number"			
			}
});
$('#submitCandidate').click(function() {

	var answer = confirm("Do you continue this action ");
	if (answer) {
		$('#submitCandidateForm').submit();
			alert("Submitted");
			
		
	} else {
		alert("false");
		return false;
	}	
	
});
$('#submitCandidate1').click(function() {

	var answer = confirm("Do you continue this action ");
	if (answer) {
		$('#submitCandidateForm1').submit();
			alert("Submitted");
			window.close();
		
	} else {
		alert("false");
		return false;
	}	
	
});



$('#rejectTRFs').click(function() {

	var answer = confirm("Do you continue this action ");
	if (answer) {
		$('#Internalhire').submit();
			alert("Submitted");
			window.close();
		
	} else {
		alert("false");
		return false;
	}	
	
});

$("#submitCandidateForm1").validate({
	rules: {
		FirstName: {required: true},
		LastName: {required: true},
		//Resume: {required: true},
		CandidatePhoneNum: {required: true}
			},
	messages: {
		FirstName: "Please enter First name",
		LastName: "Please enter Last name",
	  //  Resume: "Please upload the resume",
	    CandidatePhoneNum: "Please enter phone number"			
			}
});

/*$('#saveTRF').click(function() {
	$('#saveform').submit();
});
*/
// hover states on the static widgets
$('#dialog_link, ul#icons li').hover(
	function() { $(this).addClass('ui-state-hover'); }, 
	function() { $(this).removeClass('ui-state-hover'); }
	);
});
function br2nl (inValue) {
    return inValue.replace(/(<BR>)|(<br>)/g, "\r\n");
}

function nl2br (inValue) {
    return inValue.replace(/\r/g,"<BR>");
}

function unescapeHTML (inValue) {
	var node = document.createElement('div');  
node.innerHTML = inValue;  
if('undefined' == typeof(node.innerText)) {    
	return $("<div/>").html(br2nl(inValue)).text(); // FF  
}  
return node.innerText; // IE
}
function notempty()
{
if(document.getElementById("trfID").value=="")
{
alert('Cannot be empty');
return searchTRFForm.trfID.focus();
}


}
function getdetails() {
	var data= $('#pid1').val();
alert(data);


 


$.ajax({
	type : 'POST',
	url : 'searchprimaryaug',
	data : "pid1="+data  
		
    
		});
}
function listboxchange1(p_index) {

	  //Clear Current options in subcategory1
  document.saveform.subcategory1.options.length = 0;

  //Clear Current options in subcategory2
  document.saveform.subcategory2.options.length = 0;
  document.saveform.subcategory2.options[0] = new Option("Select Sub-Category 2", "");
  document.getElementById("otherz").disabled=1;
  switch (p_index) {

  case "50000127":
  document.saveform.subcategory1.options[0] = new Option("Select Sub-Category 1", "");

  document.saveform.subcategory1.options[1] = new Option("sourcing","50000040");

  document.saveform.subcategory1.options[2] = new Option("resourcing","50000041");
  
  document.saveform.subcategory1.options[3] = new Option("others","50000085");
  

  
  document.saveform.subcategory1.options[4] =new Option("resource management group","50000009");
  

  break;

  case "50000002":
  //document.saveform.subcategory1.options[0] = new Option("Select Sub-Category","");

  document.saveform.subcategory1.options[0] = new Option("delivery&delivery support","50000151");

  //document.saveform.subcategory1.options[2] =  new Option("delivery specialist","50000152");

  break;
  
  case "50000003" :
	  document.saveform.subcategory1.options[0]=new Option("Select Sub-Category","");
	  document.saveform.subcategory1.options[1]=new Option("Corporate communication","50000023");


	  break;
  
  case "50000006" :
	  document.saveform.subcategory1.options[0] = new Option("Select Sub-Category","");

	  document.saveform.subcategory1.options[1] = new Option("Management Information system","50000024");
	  	
	  document.saveform.subcategory1.options[2] = new Option("Accounts","50000025");
	  			
	  document.saveform.subcategory1.options[3] = new Option("Legal&company secretary","50000026");

	  document.saveform.subcategory1.options[4] = new Option("others","50000079");

	  document.saveform.subcategory1.options[5] = new Option("Finance and company secretary","50000176");

	  	break;
  case "50000007" :
	  	document.saveform.subcategory1.options[0]=new Option("Select Sub-Category","");
	  	document.saveform.subcategory1.options[1]=new Option("HCM-CORPORATE","50000027");
	  	document.saveform.subcategory1.options[2]=new Option("HCM-BUSINESS","50000028");
	  			
	  	

	  	break;
  case "50000008" :
	  	document.saveform.subcategory1.options[0]=new Option("Select Sub-Category","");
	  	document.saveform.subcategory1.options[1]=new Option("Desktop management","50000032");
	  	document.saveform.subcategory1.options[2]=new Option("Network Infrastructure","50000033");
	  			
	  	document.saveform.subcategory1.options[3]=new Option("Server Infrastructure","50000034");
	  	document.saveform.subcategory1.options[4]=new Option("others","50000083");
	  	document.saveform.subcategory1.options[5]=new Option("Information Security","50000201");

	  	break;	

  }
  return true;
  }function listboxchange(p_index) {

	  //Clear Current options in subcategory
	  document.saveform.subcategory2.options.length = 0;
	  document.getElementById("otherz").disabled=1;
	  document.getElementById('otherz').value = "";
	  switch (p_index) {

	  case "50000152":
	  document.saveform.subcategory2.options[0] = new Option("Select Sub-Category2", "");

	  document.saveform.subcategory2.options[1] = new Option("Architects", "50000156");

	  document.saveform.subcategory2.options[2] = new Option("IT consulting-Technical", "50000157");

	  document.saveform.subcategory2.options[3] = new Option("IT consulting-Functional", "50000158");

	  break;
	  case "50000027":
		  document.saveform.subcategory2.options[0] = new Option("Select Sub-Category2", "");

		  document.saveform.subcategory2.options[1] = new Option("Training & development", "50000029");

		  document.saveform.subcategory2.options[2] = new Option("System&processes", "50000030");

		  document.saveform.subcategory2.options[3] = new Option("travel", "50000031");
		  
		  document.saveform.subcategory2.options[4] = new Option("Immigration", "50000080");
		  
		  document.saveform.subcategory2.options[5] = new Option("Recruitment", "50000081");
		  
		  document.saveform.subcategory2.options[6] = new Option("others", "50000082");
		  break;
	  case "50000085":
		  document.getElementById("otherz").disabled=0;
		  document.getElementById('otherz').focus();
	     break;
	  case "50000079":
		  document.getElementById("otherz").disabled=0;
		  document.getElementById('otherz').focus();
	     break; 
	  
	  case "50000083":
		  document.getElementById("otherz").disabled=0;
		  document.getElementById('otherz').focus();
	     break; 
	  }
	  return true;
	  }
  function listboxchange3(p_index) {

	  //Clear Current options in subcategory
	  document.saveform.subcategory3.value = 0;
	  document.saveform.otherz.disabled=1;
	  document.getElementById('otherz').value = "";

	  switch (p_index) {

	  case "50000082":
		  document.getElementById("otherz").disabled=0;
		  document.getElementById('otherz').focus();
	 
	  break;
	  }
	  return true;
  }
  function enableOther(selObj)
  {
      //Create reference to text field
      textObj = document.getElementById('other_skills');

      //Test select field value
      if(selObj.options[selObj.selectedIndex].value=='OTHERS')
      {
          //Enable text field
          
          textObj.disabled = false;
      }
      else
      {
          //Disable text field & clear value
          textObj.disabled = true;
          
          textObj.value    = '';
      }

      return;
  }

  function enableOther1(selObj)
  {
      //Create reference to text field
      textObj = document.getElementById('other_skills');

      //Test select field value
      if(selObj.options[selObj.selectedIndex].value=='OTHERS')
      {
          //Enable text field
          
          textObj.disabled = false;
      }
      else
      {
          //Disable text field & clear value
          textObj.disabled = true;
          
          textObj.value    = '';
      }

      return;
  }
  // Script to move list items
