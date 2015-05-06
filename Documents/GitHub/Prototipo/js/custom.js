$( document ).ready(function() {
		var functionContact =
		$( "#contactForm" ).submit(function( event ) {
		$("p").remove();
		  var ok = true;
		  var filter = /^\d*$/;
		   $('.form-control').each(function() 
		   {  
			   var info = $(this).val().trim();

				if($(this).attr("type") == "tel" && !filter.test(info) )
				{
					$('<p class = "alertmessage">' + $(this).attr("messaganumber") + "</p>").insertAfter(this);
					ok = false;  
				}
				
			   if( info === "")  
			   { 
					$(this).addClass("highlight");
					$('<p class = "alertmessage">' + $(this).attr("message") + "</p>").insertAfter(this);
					ok = false;  
			   }
			   else{
				   $(this).removeClass("highlight");
			   }
		   })
			if (!ok)
		   {
			  alert('Please review the error messages');
			  event.preventDefault();
		   } 
		});
		
});