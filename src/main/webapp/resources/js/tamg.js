// JavaScript Document


$(function(){
		$(".user_name").focus();
		$(".user_name").focus(function(){
		$(".user_name").css("background-color","#FFFFCC");
		});
		
		$(".user_name").blur(function(){
		$(".user_name").css("background-color","#fff");
		});
		
		$(".password").focus(function(){
		$(".password").css("background-color","#FFFFCC");
		});
		
		$(".password").blur(function(){
		$(".password").css("background-color","#fff");
		});
});







$(function(){
		   
		$(".login_btn").click(function() {
			if( $(".user_name").val() == ''  || $(".password").val() == '' )
			{
			$(".error_msg").show(); 
			} 
			else
			{
			$(".error_msg").hide(); 
			}
		}); 
		
		
		$(".user_name").keypress(function(){
		$(".error_msg").hide(); 					  
		});

		$(".password").keypress(function(){
		$(".error_msg").hide(); 					  
		});

});


function sectog(imgnm, chk)
{
	var togimage=document.getElementById(imgnm);
	var subsec=document.getElementById(chk);
	if(subsec.style.display=='')
	{
		subsec.style.display='none';
		togimage.src='/trf/resources/images/e_plus.gif';
		togimage.alt='Open';
		togimage.title='Open';
	}
	else if(subsec.style.display=='none')
	{	
		subsec.style.display='';
		togimage.src='/trf/resources/images/e_minus.gif';
		togimage.alt='Close';
		togimage.title='Close';
	}
}

			
			
		
		
