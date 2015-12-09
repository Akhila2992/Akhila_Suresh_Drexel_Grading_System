function showOtherText()
{	 
    //Create reference to text field
    textObj = document.getElementById('clientname');
    textObj1 = document.getElementById('other_reason');
    var hiddentext = document.getElementById('text_other_reason');
    //Test select field value
    if(textObj.options[textObj.selectedIndex].value=='Other')
    {
	      alert('Please Enter the Name of Client Below');
        //Enable text field
	      //String cname=document.setElementById('clientName');
	      //  cname   =document.getElementById('other_reason');
	      hiddentext.style.display="";
	    	 hiddentext.disabled = true;
	      textObj1.style.display="";
	      textObj1.disabled = false;
	      textObj1.focus();
	      
    }
    else
    {
        //Disable text field & clear value
    	textObj1.style.display="none";
        hiddentext.style.display="none";
    }

    return;
}

function sid(){
	
	posType = document.getElementById("positiontype");
	sidBox = document.getElementById("sf_id");
	sidBox1 = document.getElementById("sf_id1");
	sidtr = document.getElementById("sid3");
	
	if(posType.options[posType.selectedIndex].value == "New"){
		alert("Please Enter the Sales Force ID");
		sidBox1.style.display = "block";
		sidBox.style.display = "block";
		sidtr.style.display = "block";
		
		sidBox1.disabled = flase;
		sidBox2.disabled = flase;
		sidtr.disabled = flase;
		
		sidBox1.focuse();
		sidtr.focuse();
		sidBox.focuse();
	}else{
		sidBox1.style.display = "none";
		sidBox.style.display = "none";
		sidtr.style.display = "none";
		sf_id.innerHTML = "";
	}
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
	    
	      document.getElementById("skillAction").style.display = "none";
	      document.getElementById("selectedSkills").style.display = "none";
	      document.getElementById("selectedSkillsBox").style.display = "none";
	      document.getElementById("othSkill").style.display = "block";
	      document.getElementById("othSkill1").style.display = "block";
	  
    } else {        
    	textObj1.style.display="none";
    	document.getElementById("skillAction").style.display = "block";
	    document.getElementById("selectedSkills").style.display = "block";
	    document.getElementById("selectedSkillsBox").style.display = "block";
	    document.getElementById("othSkill").style.display = "none";
	    document.getElementById("othSkill1").style.display = "none";
	    //document.getElementById("other_skill").value = "";
	    
    }
    return;
}


function sid(){
	
	posType = document.getElementById("positiontype");
	sidBox = document.getElementById("sf_id");
	sidBox1 = document.getElementById("sf_id1");
	sidtr = document.getElementById("sid3");
	
	if(posType.options[posType.selectedIndex].value == "New"){
		alert("Please Enter the Sales Force ID");
		sidBox1.style.display = "block";
		sidBox.style.display = "block";
		sidtr.style.display = "block";
		
		sidBox1.disabled = flase;
		sidBox2.disabled = flase;
		sidtr.disabled = flase;
		
		sidBox1.focuse();
		sidtr.focuse();
		sidBox.focuse();
	}else{
		sidBox1.style.display = "none";
		sidBox.style.display = "none";
		sidtr.style.display = "none";
	}
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



$( "#requisitiondate" ).datepicker({dateFormat: 'dd-M-yy', changeYear: true,minDate: 0, maxDate: "+3M +10D"});
$( "#projectenddate" ).datepicker({dateFormat: 'dd-M-yy', changeYear: true,minDate: 0, maxDate: ""});




/*$( "#interviewDate" ).datepicker({dateFormat: 'dd-mmm-yy',minDate: 0, maxDate: "+2M +10D"});
$('#timepicker').timepicker();
*/
// Tabs
var $tabs = $('#tabs').tabs();
$tabs.tabs('select', '${USER_CURR_TAB}');
$tabs.bind('tabsselect', function(event, ui) {
	var currSelected = $tabs.tabs("option","selected");
});

/*$('#submitTalentForm').click(function() {

	var answer = confirm("Do you continue this action");
	if (answer) {
	 
		$("#selectedSkills").each(function(){
			$("#selectedSkills option").attr("selected","selected");
		});
		
		$('#submitForm').submit();
		
	} else {
		return false;
	}	
	

});*/

/*$("#submitForm").validate({
	rules: {
		country: {required:true},
		vertical: {required: true},
		clientname: {required: true},
		positiontype: {required: true},
		reportsto: {required: true},
		businesstype: {required: true},
		baselocation: {required:true},
		level: {required: true},
		worktype: {required: true},
		hiretype: {required: true},
		billingStatus: {required: true},
		minEduQual: {required: true},
		projectDetails: {required: true},
		jobresponsibility: {required: true},
		technicalpanel: {required: true},
		mandatoryskills: {required: true},
		sf_id:{required: function(element){
			return $("#positiontype").val() == 'New';
			}
		}
		//other_skill:{required: true}
	//	"selectedSkills[]": {required: function(){
	//		return $("#other_skills").val() != "";
	//		}
//		},
	},
	messages: {
		
		country: "Please enter Country",
		vertical: "Please enter Vertical",
		clientname: "Please enter Client Name",
		positiontype: "Please enter Position Type",
		reportsto: "Please enter  Reports To",
		businesstype: "Please enter Business Type",
		baselocation:"Please enter Base Location",
		level: "Please enter Level",
		worktype: "Please enter location",
		hiretype: "Please enter Employment Type",
		billingStatus: "Please enter Billing Status",
		minEduQual: "Please enter Qualification",
		projectDetails: "Please enter Project Details",
		jobresponsibility: "Please enter Job Responsibility",
		technicalpanel: "Please enter Technical Panel",
		mandatoryskills: "Please Select from input ",
		sf_id:"Please enter Sales Force ID"
		//other_skill:"Please enter other skills"
		//"selectedSkills[]": "Please select mandatory Skills"
			}
});*/

$("#submitForm").submit(function(){
	$("span.errorText").each(function()
			{
				$(this).remove();	
			});
			
			//Change background color of textbox to normal
/*	$("#submitForm :input[type='text']").attr('class','notErrorField');
	$("#submitForm :input[type='textarea']").attr('class','notErrorTextArea');
	$("#submitForm :input[type='select']").attr('class','notErrorTextArea');*/
	$hasError = false;
	if($.trim($("#reportsto").val()) == ""){
		
		$("#reportsto").after('<span class="errorText"> Please enter Reports To </span>');
		$hasError = true;
	}
	if($.trim($("#country").val()) == ""){
		
		//$('#country').attr('class','errorField');
		$("#country").after('<span class="errorText"> Please select Country </span>');
		$hasError = true;
	}

	if($.trim($("#vertical").val()) == ""){
		//$('#country').attr('class','errorField');
		
		$("#vertical").after('<span class="errorText"> Please select Vertical </span>');
		$hasError = true;
	}

	if($.trim($("#clientname").val()) == ""){
		//$('#country').attr('class','errorField');
		
		$("#clientname").after('<span class="errorText"> Please select clientname </span>');
		$hasError = true;
	}
	
	if($.trim($("#clientname").val()) == "Other" && $.trim($("#other_reason").val()) == ""){
		//$('#country').attr('class','errorField');
		
		$("#other_reason").after('<span class="errorText"> Please enter clientname </span>');
		$hasError = true;
	}

	if($.trim($("#positiontype").val()) == ""){
		//$('#country').attr('class','errorField');
		
		$("#positiontype").after('<span class="errorText"> Please select clientname </span>');
		$hasError = true;
	}

	if($.trim($("#businesstype").val()) == ""){
		//$('#country').attr('class','errorField');
		
		$("#businesstype").after('<span class="errorText"> Please select Business Type </span>');
		$hasError = true;
	}
	
	if($.trim($("#baselocation").val()) == ""){
		//$('#country').attr('class','errorField');
		
		$("#baselocation").after('<span class="errorText"> Please select Base Location </span>');
		$hasError = true;
	}
	
	if($.trim($("#level").val()) == ""){
		//$('#country').attr('class','errorField');
		
		$("#level").after('<span class="errorText"> Please select Level</span>');
		$hasError = true;
	}

	if($.trim($("#worktype").val()) == ""){
		//$('#country').attr('class','errorField');
		
		$("#worktype").after('<span class="errorText"> Please select Work Type</span>');
		$hasError = true;
	}
	
	if($.trim($("#hiretype").val()) == ""){
		//$('#country').attr('class','errorField');
		
		$("#hiretype").after('<span class="errorText"> Please select Hire Type</span>');
		$hasError = true;
	}

	if($.trim($("#billingStatus").val()) == ""){
		//$('#country').attr('class','errorField');
		
		$("#billingStatus").after('<span class="errorText"> Please select Billing Status</span>');
		$hasError = true;
	}

	if($.trim($("#minEduQual").val()) == ""){
		//$('#country').attr('class','errorField');
		
		$("#minEduQual").after('<span class="errorText"> Please enter Min. Educational Qualification</span>');
		$hasError = true;
	}

	if($.trim($("#projectDetails").val()) == ""){
		//$('#country').attr('class','errorField');
		
		$("#projectDetails").after('<span class="errorText"> Please select Project Details</span>');
		$hasError = true;
	}

	if($.trim($("#jobresponsibility").val()) == ""){
		//$('#country').attr('class','errorField');
		
		$("#jobresponsibility").after('<span class="errorText"> Please select Job Responsibility</span>');
		$hasError = true;
	}
	
	if($.trim($("#selectedSkills").val()) == "" && $.trim($("#other_skill").val()) == ""){
		
		//$('#selectedSkills').attr('class','errorTextArea');
		$('#selectedSkills').after('<span class="errorText">Please select Skills </span>');
		$('#other_skill').after('<span class="errorText">Please select Skills </span>');
		$hasError = true;
	}

	if($.trim($("#technicalpanel").val()) == "" ){
		
			//$('#jobresponsibility').attr('class','errorTextArea');
			$('#technicalpanel').after('<span class="errorText"> Please Enter Technical Panel </span>');
			$hasError = true;
		}
	
	if($.trim($("#requisitiondate").val()) == "" ){
		
		//$('#jobresponsibility').attr('class','errorTextArea');
		$('#requisitiondate').after('<span class="errorText"> Please Enter Project Start Date </span>');
		$hasError = true;
	}

	if($.trim($("#projectenddate").val()) == "" ){
		
		//$('#jobresponsibility').attr('class','errorTextArea');
		$('#projectenddate').after('<span class="errorText"> Please Enter Project End Date </span>');
		$hasError = true;
	}

	if($.trim($("#positiontype").val()) == "New" && $.trim($("#sf_id").val()) == "" ){
		
		//$('#jobresponsibility').attr('class','errorTextArea');
		$('#sf_id').after('<span class="errorText"> Please select Sales Force ID </span>');
		$hasError = true;
	}
	
	if($hasError){
		$(".mandatory:first").focus();
		
		return false;
	}else{
		return true;
		alert("Test1");
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
  function showOtherText()
  {	 
      //Create reference to text field
      textObj = document.getElementById('clientname');
      textObj1 = document.getElementById('other_reason');
      var hiddentext = document.getElementById('text_other_reason');
      //Test select field value
      if(textObj.options[textObj.selectedIndex].value=='Other')
      {
  	      alert('Please Enter the Name of Client Below');
          //Enable text field
  	      //String cname=document.setElementById('clientName');
  	      //  cname   =document.getElementById('other_reason');
  	      hiddentext.style.display="";
  	      hiddentext.disabled = true;
  	      textObj1.style.display="";
  	      textObj1.disabled = false;
  	      textObj1.focus();
  	      
      }
      else
      {
          //Disable text field & clear value
      	textObj1.style.display="none";
      	hiddentext.style.display="none";
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
  	    
  	      document.getElementById("skillAction").style.display = "none";
  	      document.getElementById("selectedSkills").style.display = "none";
  	      document.getElementById("selectedSkillsBox").style.display = "none";
  	      document.getElementById("othSkill").style.display = "block";
  	      document.getElementById("othSkill1").style.display = "block";
  	  
      } else {        
      	textObj1.style.display="none";
      	document.getElementById("skillAction").style.display = "block";
  	    document.getElementById("selectedSkills").style.display = "block";
  	    document.getElementById("selectedSkillsBox").style.display = "block";
  	    document.getElementById("othSkill").style.display = "none";
  	    document.getElementById("othSkill1").style.display = "none";
  	    //document.getElementById("other_skill").value = "";
  	    
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




  /*$( "#interviewDate" ).datepicker({dateFormat: 'dd-mmm-yy',minDate: 0, maxDate: "+2M +10D"});
  $('#timepicker').timepicker();
  */
  // Tabs
  var $tabs = $('#tabs').tabs();
  $tabs.tabs('select', '${USER_CURR_TAB}');
  $tabs.bind('tabsselect', function(event, ui) {
  	var currSelected = $tabs.tabs("option","selected");
  });

  $('#submitTalentForm').click(function() {

	 /* var str = "!this is-bangalore-city.I~wa's` born $here";*/ 
	  var patt1 = /[^a-zA-Z0-9\\. \\n']/gi; 
	  var jr = $('#jobresponsibility').val();
	  //confirm(jr);
	  var rep1 = jr.replace(new RegExp(patt1)," "); 
		//  document.writeln(rep1);
	
	//confirm(rep1);
  	var answer = confirm("Do you continue this action");
  	if (answer) {
  	 
  		$("#selectedSkills").each(function(){
  			$("#selectedSkills option").attr("selected","selected");
  		});
  		
  		$('#submitForm').submit();
  		
  	} else {
  		return false;
  	}	
  	

  });

  $("#submitForm").validate({
  	rules: {
  		country: {required:true},
  		vertical: {required: true},
  		clientname: {required: true},
  		positiontype: {required: true},
  		reportsto: {required: true},
  		businesstype: {required: true},
  		baselocation: {required:true},
  		level: {required: true},
  		worktype: {required: true},
  		hiretype: {required: true},
  		billingStatus: {required: true},
  		minEduQual: {required: true},
  		projectDetails: {required: true},
  		jobresponsibility: {required: true},
  		technicalpanel: {required: true},
  		mandatoryskills: {required: true}
  		
  	//	"selectedSkills[]": {required: function(){
  	//		return $("#other_skills").val() != "";
  	//		}
//  		},
  	},
  	messages: {
  		
  		country: "Please enter Country",
  		vertical: "Please enter Vertical",
  		clientname: "Please enter Client Name",
  		positiontype: "Please enter Position Type",
  		reportsto: "Please enter  Reports To",
  		businesstype: "Please enter Business Type",
  		baselocation:"Please enter Base Location",
  		level: "Please enter Level",
  		worktype: "Please enter location",
  		hiretype: "Please enter Employment Type",
  		billingStatus: "Please enter Billing Status",
  		minEduQual: "Please enter Qualification",
  		projectDetails: "Please enter Project Details",
  		jobresponsibility: "Please enter Job Responsibility",
  		technicalpanel: "Please enter Technical Panel",
  		mandatoryskills: "Please Select from input "
  		//"selectedSkills[]": "Please select mandatory Skills"
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
