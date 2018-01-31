$(document).ready(function(){
	$('button').click(function(){
		var fname = $('#First').val();
		var lname = $('#Last').val();
		var des = $('#Description').val();
		var card = "<div class='contactcard'><h2>"+fname+" "+lname+"</h2><p>Click for description!</p><span>"+des+"</span><button class='card'>Highlight</button></div>"
		$('#wrapper').append(card)
		return false
	})
	$(document).on("click",".contactcard", function(){
		$(this).children('h2').toggle();
			console.log("click1");
		$(this).children('p').toggle();
			console.log("click3");
		$(this).children('span').toggle();
			console.log("click2");
		})		
	$(document).on("click",".card", function(event){
		event.stopPropagation();
		$(this).parent().css("background-color","yellow")
	})
})