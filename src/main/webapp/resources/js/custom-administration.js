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
	$("#addlocationform").validate({
		rules: {
			location_code: {required: true},
			description: {required: true}
		},
		messages: {
			location_code: "Please enter Location Code",
			description: "Please enter Location Description"
		}
	});

	$("#addjobform").validate({
		rules: {
			jobs_code: {required: true},
			jobs_title: {required: true},
			jobs_salary_grade: {required: true}
		},
		messages: {
			jobs_code: "Please enter Job Code",
			jobs_title: "Please enter Job Title",
			jobs_salary_grade: "Please enter Salary Grade"
		}
	});

	$('table tr:even').addClass('bggrey');

	$('#addlocation').click(function() {
		$('#addlocationform').submit();
		return false;
	});
	$('#cancellocation').click(function() {
		$('#location_code').val('');
		$('#description').val('');
		$('#addlocation').html('Add Location');
		$('#cancellocationahref').hide();
		return false;
	});
	
	$('#addjob').click(function() {
		$('#addjobform').submit();
		return false;
	});
	$('#canceljob').click(function() {
		$('#jobs_code').val('');
		$('#jobs_title').val('');
		$('#jobs_salary_grade').val('');
		$('#addjob').html('Add Job');
		$('#canceljobahref').hide();
		return false;
	});
});

function editJobMaster(recordID){
	$('#jobs_code').val(recordID);
	$('#jobs_title').val($('#jobtitlerow_'+recordID).html());
	$('#jobs_salary_grade').val($('#jobsalarygraderow_'+recordID).html());
	$('#addjob').html('Update');
	$('#canceljobahref').show();
}
function deleteJobMaster(recordID){
	$('#deljobrowcode').val(recordID);
	$('#deletejobform').submit();
}

function editLocationMaster(recordID){
	$('#location_code').val(recordID);
	$('#description').val($('#locdescrow_'+recordID).html());
	$('#addlocation').html('Update');
	$('#cancellocationahref').show();
}
function deleteLocationMaster(recordID){
	$('#dellocrowcode').val(recordID);
	$('#deletlocationform').submit();
}