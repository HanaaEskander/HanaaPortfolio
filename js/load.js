/*loading page*/
$(window).on("load",function(){
	$(".loading .loading-img").fadeOut(5000,
	  function(){
		$("body").css("overflow","auto");
		$(this).parent().fadeOut(5000,
		function(){
			$(this).remove();
		});
});
});