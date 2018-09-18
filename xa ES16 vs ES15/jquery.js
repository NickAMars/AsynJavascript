//ONLY ONE ELEMENT CLICK
// stop event bubble
//JQuery
$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");// use class complete
});

$("ul").on("click","span",function(event){
	alert("clicked on a span!");
	$(this).parent().fadeOut(500, function(){
		$(this).remove(); // this refers to the parent
	});
	event.stopPropagation();// jquery method to top event bubbling
	
});

$("input[type='text']").keypress(function(event){
	if(event.which ===13){
		var toDoList = $(this).val();
		$(this).val("");
		$("ul").append("<li><span>X</span>" + todoText + "</li>")
	}
});

$(".fa-plus").click(function(){
	$("input[type='text']").fadeToggle();
});


//$("li").click()