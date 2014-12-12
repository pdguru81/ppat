

var comment = 'Our team was comprised of four members. We worked on this project all semester and multiple prototypes for the project. Checkout their comments'+
 					   +'about this class below';

var projectdetails ='Welcome! We are Team Kate from the MIT course 6.811: Principles and Practice of Assistive Technology. We worked with our client, Kate, in Cambridge to create a water resistant, noise blocking cover for her cochlear implants! This incredibly fun project took about eight weeks and we used this site to document the work that we have done so far. Feel free to look!'




var loadhaat = function(){
		 $("#haat-summary").load("HAATForWeb/HAATForWeb.html",function(response){
		 		$('#haat-summary').html(response);
		 }); 
	  }


var loadtestAndResults = function(){
	$("#testsAndResults").load("testsAndResults/testsAndResults.html",function(response){
		 		$('#testsAndResults').html(response);
		 }); 
}




$(document).ready(function(){
  	
	$('#project-details').html(projectdetails);
	$('#teamcomment').html(comment);
	
	$('#logo').click(function() {
			//reload the page
		 document.location.href=document.location.href;
		
	});

	// prevent panels causing page to jump
	$('.panel-title a').on('click',function(e){
		var panel =$(this).parents('.panel-title').parents('.panel-heading').parents('.panel').children('.panel-collapse');
		e.preventDefault();
	    
	});



});
