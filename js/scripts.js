$(document).ready(function(){
	$(".imgcontain").mouseover(function() {
		$(this).css("opacity", "0.3").children(".hoverlay").show();
	});
	$(".imgcontain").mouseout(function() {
		$(this).css("opacity", "1").children(".hoverlay").hide();
    });
    
});
