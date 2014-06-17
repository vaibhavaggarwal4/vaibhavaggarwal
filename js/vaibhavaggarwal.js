// VaibhavAggarwal.com JS

$(document).ready(function(){

	$(".link").mouseenter(function(){
		var id = $(this).attr('id');
		$(this).css({'color':'#F1C40F'});
		$("#"+id+"Dropdown").slideDown(200);
	});
	$(".link").mouseleave(function(){
		var id = $(this).attr('id');
		$(this).css({'color':'white'});
		$("#"+id+"Dropdown").slideUp(200);
	});

});