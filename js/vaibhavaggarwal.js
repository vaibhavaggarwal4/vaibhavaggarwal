// VaibhavAggarwal.com JS

$(document).ready(function(){

	$(".link").mouseenter(function(){
		var id = $(this).attr('id');
		$(this).css({'color':'#2C3E50'});
		$("#"+id+"Dropdown").slideDown(200);
	});
	$(".link").mouseleave(function(){
		var id = $(this).attr('id');
		$(this).css({'color':'#2ECC71'});
		$("#"+id+"Dropdown").slideUp(200);
	});

});