var sessionValid = false;

$(function(){
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
	
	jQuery.validator.addMethod(
		"selectNone", function(value, element) {   
			if (element.value == "--") {   
				return false;   
			} else {
				return true;
			}   
		}, "Please select an option."
	);
	
	$('#saveform').submit(function(){
		$('#gradedes').attr('disabled','');
		$('#tabs').tabs('select', 0);
	}); 
		
	// hover states on the static widgets
	$('#dialog_link, ul#icons li').hover(
		function() { $(this).addClass('ui-state-hover'); }, 
		function() { $(this).removeClass('ui-state-hover'); }
	);
	$("#saveform").validate({
		rules: {
			firstname: {required: true},
			lastname: {required: true},
			hiredate: {required: true},	
			title: {selectNone: true},
			currentloc: {selectNone: true},
			selloca: {selectNone: true}
		},
		messages: {
			firstname: "Please enter First Name",
			lastname: "Please enter Last Name",
			hiredate: "Please select Hire Date",
			title: "Please select Job Title",
			currentloc: "Please Select Current Location",
			selloca: "Please Select New Location"
			
		}
	});
	$("#educationform").validate({
		rules: {
			schoolname: {required: true},
			major: {required: true},
			degree: {required: true},
			licenses: {required: true},
			certifications: {required: true}
		},
		messages: {
			schoolname: "Please enter School Name",
			major: "Please enter Major",
			degree: "Please enter Degree",
			licenses: "Please enter Licenses",
			certifications: "Please enter Certifications"
		}
	});
	$("#careerform").validate({
		rules: {
			shortterm: {required: true, maxlength: 1000},
			longterm: {required: true, maxlength: 1000}
		},
		messages: {
			shortterm: "Please enter Short Term Role (1000 chars)",
			longterm: "Please enter Long Term Role (1000 chars)"
		}
	});
	$("#skillsform").validate({
		rules: {
			enterskills: {required: true, maxlength: 1000}
		},
		messages: {
			enterskills: "Please enter Skills (1000 chars)"
		}
	});
	$("#addcommentsform").validate({
		rules: {
			comment: {required: true, maxlength: 1000}
		},
		messages: {
			comment: "Please enter Comments (1000 chars)"
		}
	});
	$("#addexpform").validate({
		rules: {
			organame: {required: true},
			startdate: {required: true},
			enddate: {required: true},
			exploc: {selectNone: true},
			enddate: {required: true},
			exploc: {selectNone: true},
			othloc: {required: true},
			posittle: {required: true},
			resp: {required: true, maxlength: 1000}
		},
		messages: {
			organame: "Please enter First Name",
			startdate: "Please select Start Date",
			enddate: "Please select End Date",
			exploc: "Please select Location",
			othloc: "Please enter Other Location",
			posittle: "Please enter Title",
			resp: "Please enter Responsibility (1000 chars)"
		}
	});
	$('table tr:even').addClass('bggrey');
	
	//--- Date picker --//
	$(function() {
		$( "#hiredate" ).datepicker({dateFormat: 'mm-dd-yy', changeYear: true});
		$( "#startdate" ).datepicker({dateFormat: 'mm-dd-yy', changeYear: true});
		$( "#enddate" ).datepicker({dateFormat: 'mm-dd-yy', changeYear: true});
	});

	$('#savecomments').click(function() {
		$('#saveform').submit();
	});
	
	$('#addeducation').click(function() {
		$('#educationform').submit();
	});
	$('#canceleducation').click(function() {
		$('#addedurowcounter').val('0');
		$('#schoolname').val('');
		$('#major').val('');
		$('#degree').val('');
		$('#langs').val('');
		$('#licenses').val('');
		$('#certifications').val('');
		$('#addeducation').html('Next');
		$('#canceleducationahref').hide();
	});
	
	$('#addcareer').click(function() {
		$('#careerform').submit();
	});
	$('#cancelcareer').click(function() {
		$('#addcareerrowcounter').val('0');
		$('#shortterm').val('');
		$('#longterm').val('');
		$('#addcareer').html('Add Details');
		$('#cancelcareerahref').hide();
	});
	
	$('#addskill').click(function() {
		$('#skillsform').submit();
	});
	$('#cancelskill').click(function() {
		$('#addskillrowcounter').val('0');
		$('#enterskills').val('');
		$('#addskill').html('Add Skill');
		$('#cancelskillahref').hide();
	});
	
	$('#exploc').change(function() {
		if($(this).val() == 'Other') {
			$('#otherlocdiv').show();
			$('#othloc').attr('disabled','');
		} else {
			$('#otherlocdiv').hide();
			$('#othloc').attr('disabled','disabled');
		}
	});
	
	$('#addexp').click(function() {
		$('#addexpform').submit();
	});
	$('#cancelexp').click(function() {
		$('#addexprowcounter').val('0');
		$('#organame').val('');
		$('#posittle').val('');
		$('#startdate').val('');
		$('#enddate').val('');
		$('#exploc').val('--');
		$('#othloc').val('');
		$('#resp').val('');
		$('#addexp').html('Add Experience');
		$('#cancelexpahref').hide();
		$('#otherlocdiv').hide();
		$('#currjob').attr('checked',false);
		$('#enddate').attr('disabled','');
		$('#othloc').attr('disabled','disabled');
	});
	
	$('#addcomment').click(function() {
		$('#addcommentsform').submit();
	});
	$('#cancelcomments').click(function() {
		$('#addcommentrowcounter').val('0');
		$('#comment').val('');
		$('#addcomment').html('Add Comments');
		$('#cancelcommentahref').hide();
	});
	
	$('#reloc').click(function() {
		if ($(this).is(':checked')) {
			$('#newlocdiv').show();
			$('#selloca').attr('disabled','');
			$('#reloclabel').html('Yes');
		} else {	
			$('#newlocdiv').hide();
			$('#selloca').attr('disabled','disabled');
			$('#reloclabel').html('No');
		}
	});
	
	$('#title').change(function() {
    	getJobDescription();
    });
	
	 $('#currjob').click(function() {
		if ($(this).is(':checked')) {
			$('#enddate').attr('disabled','disabled');
			$('#enddate').val('');
			$('#currjoblabel').html('Yes');
		} else {	
			$('#enddate').attr('disabled','');
			$('#currjoblabel').html('No');
		}
	 });
	 	 
 	$("#sample1").click(function(){
		window.open(this.href, "", "toolbar=0, status=0, location=0, menubar=0, resizable=1, scrollbars=1, top=5, left=5, width=" + (screen.width - 40) +", height=" + (screen.height - 150));
		return false;
	});
 	
 	$("#sample2").click(function(){
		window.open(this.href, "", "toolbar=0, status=0, location=0, menubar=0, resizable=1, scrollbars=1, top=5, left=5, width=" + (screen.width - 40) +", height=" + (screen.height - 150));
		return false;
	});
 	
 	$("#sample3").click(function(){
		window.open(this.href, "", "toolbar=0, status=0, location=0, menubar=0, resizable=1, scrollbars=1, top=5, left=5, width=" + (screen.width - 40) +", height=" + (screen.height - 150));
		return false;
	});
});

function editEducation(recordID){
	$('#addedurowcounter').val(recordID);
	$('#schoolname').val(unescapeHTML($('#schoolrow_'+recordID).html()));
	$('#major').val(unescapeHTML($('#majorrow_'+recordID).html()));
	$('#degree').val(unescapeHTML($('#degreerow_'+recordID).html()));
	$('#langs').val(unescapeHTML($('#langrow_'+recordID).html()));
	$('#licenses').val(unescapeHTML($('#licensesrow_'+recordID).html()));
	$('#certifications').val(unescapeHTML($('#certrow_'+recordID).html()));
	$('#addeducation').html('Update');
	$('#canceleducationahref').show();
}
function deleteEducation(recordID){
	$('#deledurowcounter').val(recordID);
	$('#deleteeducationform').submit();
}

function editExperience(recordID){
	$('#addexprowcounter').val(recordID);
	$('#organame').val(unescapeHTML($('#organizationrow_'+recordID).html()));
	$('#posittle').val(unescapeHTML($('#titlerow_'+recordID).html()));
	$('#startdate').val($('#startdaterow_'+recordID).html());
	$('#enddate').val($('#enddaterow_'+recordID).html());
	if('' == $('#enddate').val()) {
		$('#currjob').attr('checked', true);
		$('#enddate').attr('disabled','disabled');
		$('#currjoblabel').html('Yes');
	} else {
		$('#currjob').attr('checked', false);
		$('#enddate').attr('disabled','');
		$('#currjoblabel').html('No');
	}
	$('#exploc').val($('#locationrow_'+recordID).html());
	if('--' == $('#exploc').val()) {
		$('#exploc').val('Other');
		$('#otherlocdiv').show();
		$('#othloc').attr('disabled','');
		$('#othloc').val(unescapeHTML($('#locationrow_'+recordID).html()));
	} else {
		$('#otherlocdiv').hide();
		$('#othloc').attr('disabled','disabled');
	}
	$('#othloc').val(unescapeHTML($('#locationrow_'+recordID).html()));
	$('#resp').val(unescapeHTML($('#resprow_'+recordID).html()));
	$('#addexp').html('Update');
	$('#cancelexpahref').show();
}
function deleteExperience(recordID){
	$('#delexprowcounter').val(recordID);
	$('#deleteexpform').submit();
}

function editComment(recordID) {
	$('#addcommentrowcounter').val(recordID);
	$('#comment').val(unescapeHTML($('#comments_'+recordID).html()));
	$('#addcomment').html('Update');
	$('#cancelcommentahref').show();
}
function deleteComment(recordID) {
	$('#delcommentrowcounter').val(recordID);
	$('#deletecommentform').submit();
}

function editSkill(recordID) {
	$('#addskillrowcounter').val(recordID);
	$('#enterskills').val(unescapeHTML($('#skill_'+recordID).html()));
	$('#addskill').html('Update');
	$('#cancelskillahref').show();
}
function deleteSkill(recordID) {
	$('#delskillrowcounter').val(recordID);
	$('#deleteskillform').submit();
}

function editCareer(recordID) {
	$('#addcareerrowcounter').val(recordID);
	$('#shortterm').val(unescapeHTML($('#shorttermrole_'+recordID).html()));
	$('#longterm').val(unescapeHTML($('#longtermrole_'+recordID).html()));
	$('#addcareer').html('Update');
	$('#cancelcareerahref').show();
}
function deleteCareer(recordID) {
	$('#delcareerrowcounter').val(recordID);
	$('#deletecareerform').submit();
}

function savePersonalProfile() {
	var parameters = 'edittype=' + $('#personaledittype').val();
	parameters += '&firstname=' + $('#firstname').val();
	parameters += '&middlename=' + $('#middlename').val();
	parameters += '&lastname=' + $('#lastname').val();
	parameters += '&hiredate=' + $('#hiredate').val();
	parameters += '&title=' + $('#title').val();
	parameters += '&gradedes=' + $('#gradedes').val();
	parameters += '&currentloc=' + $('#currentloc').val();
	parameters += '&reloc=' + $('#reloc').is(':checked');
	parameters += '&selloca=' + $('#selloca').val();
	$.ajax({type: 'POST', url: 'addDetails', data: parameters});
}

function getJobDescription() {
	var input = $('#title').val();

	if('--' == input) {
		$('#gradedes').val('');
	} else {
		var parameters = 'descriptiontype=JOB_GRADE_DESC';
		parameters += '&input=' + input;
		$.ajax({
			type: 'POST',
			url: 'getDescription',
			data: parameters,
			success: function(data) {
				$('#gradedes').val(data);
			}
		});
	}
}

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