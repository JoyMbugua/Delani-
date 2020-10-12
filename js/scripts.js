$(document).ready(function(){
	$(".imgcontain").mouseover(function() {
		$(this).css("opacity", "0.3").children(".hoverlay").show();
	});
	$(".imgcontain").mouseout(function() {
		$(this).css("opacity", "1").children(".hoverlay").hide();
    });
    
});

$(document).ready(function() {
    $(".writeup").hide();
    $(".services").click(function() {
        $(this).children(".writeup").show("slow")
        $(this).children(".services img").hide();

    })
    $("p").hover(function() {
        $(this).slidedown()
    }, $(".services img").show()
    )

    $(".btn").click(function() {
        alert("Thank you for contacting us!")
    })
})