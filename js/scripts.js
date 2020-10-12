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


    function submit($form) {
        $('#mc-embedded-subscribe').val('Sending...');
        $.ajax({
          type: $form.attr('method'),
          url: $form.attr('action'),
          data: $form.serialize(),
          cache: false,
          dataType: 'json',
          contentType: 'application/json; charset=utf-8',
          error: function (err) { alert('Could not connect to the registration server. Please try again later.') },
        }) }
})