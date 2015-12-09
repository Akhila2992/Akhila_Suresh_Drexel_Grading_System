
$("#Internalhire2").validate({
	rules: {
		name: {required: true},
		contactNumber: {required: true},
			},
	messages: {
		
		name: "Please enter Name",
		contactNumber: "Please enter Contact Number"
	}
});
