$(function() {

	$('#user_id').keyup(function(e) {
		if(e.keyCode == 13) {
			$('#formlogin').submit();
		}
	});

	$('#password').keyup(function(e) {
		if(e.keyCode == 13) {
			$('#formlogin').submit();
		}
	});

	$('#domain').keyup(function(e) {
		if(e.keyCode == 13) {
			$('#formlogin').submit();
		}
	});
	
	$('#loginbutton').click(function() {
		$('#formlogin').submit();
	});
});