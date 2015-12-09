$('#submitCandidate').click(function() {

	var answer = confirm("Do you continue this action ");
	if (answer) {
		$('#submitCandidateForm').submit();
		alert("Submitted");
		window.close();		
	} 
	
});