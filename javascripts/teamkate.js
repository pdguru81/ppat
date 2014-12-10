

var comment = 'Our team was comprised of four members. We worked on this project all semester and multiple prototypes for the project. Checkout their comments'+
 					   +'about this class below';

var projectdetails =' Welcome! We are team Kate from 6.811- Principles and Practice of Assistive Technology.'+
 " We worked with our client, Kate, in cambridge  to create a water resistant, noise blocking cover for her cochlear implant!" +
 ' This incredibly fun project took about eight weeks and we use this site to document the work that we have done so far. Feel free to look at the docs!';


//instructions on how to use instamorph
var instamorph='<ol style="type:1">'+
"Making instamorph ("+"<a href='http://www.instamorph.com/'>instamorph link</a>"+ ") coil covers:"+
 '<li>Pour instamorph pellets in hot water</li>'+
 '<li>When pellets become clear, take out of water. If you want the plastic to be a color other than white, add the dye to the clump of clear pellets and knead it in with your fingers. For instructions on using dye with instamorph, see this website: '+
 "<a href='http://www.instamorph.com/instructions/coloring-dyes'>Instructions link</a> To get a deep color you must add ALOT of dye. It will stain your fingers but will wash off within a week. </li>"+
 '<li>Flatten the instamorph into a thin sheet by stretching and folding repeatedly. Try not to allow air bubbles to form in the layers.</li>'+
 '<li>Once the sheet is even and thin, heat again and apply directly on top of the coil piece that is laying flat on a table surface.</li>'+
 '<li>With your fingers, press the instamorph down and around the coil piece to get a perfect fit.</li>'+
 '<li> Once the instamorph has cooled, cut off the excess plastic, leaving a small edge around the entire piece.</li>'+
 '<li> To add the inner protective piece, we used waterproof lycra and Plastic Surgery glue. Apply the glue around the bottom edge of the piece. Do not apply glue around the entire piece as there needs to be an opening that the coil will be able to fit in.</li>'+
 '<li>Place the fabric inside up on a flat surface and press the instamorph piece with glue on top of the fabric. Let it sit for about 30 seconds.'+
'</li>'+
'<li>Trim the edges of the fabric to match the shape of the instamorph piece.</li>'+
'</ol>';

// Instructions on how to use sugru
var sugru ='<ol style="type:1">'+
"Making sugru (<a href='http://sugru.com/'>Sugru link</a>) sound blockers: "+
"<li> To protect the cochlear implant and to allow the sugru to be easily removed from the cochlear implant, the first step is to wrap the cochlear implant in saran wrap. The layer should be as thin as possible while also being fitted enough so that it doesn't easily move around. It should also be wrapped so that it can be slipped off the front of the cochlear implant easily. </li>"+
"<li> Open the package of sugru and knead it until it is soft. Form the sugru into a rectangular shape roughly 3 x 2 x 0.5 cm. Make sure there is some additional material in the center to form the cup shape out of.</li>"+
"<li> Wrap the piece around the saran wrapped cochlear implant closing the seam at the bottom. Form the cup shape with your thumb and fingers so that its right above the microphone.</li> "+
"<li> Use your fingers to smooth out the seam and rest of the sugru piece until you're satisfied.</li>"+
"<li> If you can, leave the sugru and saran wrap on the cochlear implant overnight. If you cannot leave it on the cochlear implant, gently slide the sugur/saran wrap off and place on a table to dry overnight. Try not to let it lay on its side.</li> "+
"<li> The next day, the sugru piece should be dried and solid. You will be able to peel off the saran wrap from the inside of the sugru piece.</li>"+
"<li> In order to add more grip to the sugru piece so that it wouldnt easily fall off of the cochlear implant, we used dycem (http://www.dycem-ns.com//node/250).</li>"+
"We cut very small pieces of dycem and used plastic surgery glue to attach them to the inside front and pack of the sugru sound blocker piece.";
'</ol>';




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
  	//load the haat summary page
  	//loadtestAndResults();
  	//loadhaat();
	$('#project-details').html(projectdetails);
	$('#teamcomment').html(comment);
	//$('#instamorph').html(instamorph);
	//$('#sugru').html(sugru);

	$('#success').click(function() {
		//loadtestAndResults();

	});

	// prevent panels from jumping
	$('.panel-title a').on('click',function(e){
		var panel =$(this).parents('.panel-title').parents('.panel-heading').parents('.panel').children('.panel-collapse');
		console.log("here");
		e.preventDefault();
	    
	});



});
