

var comment = 'Our team was comprised of four members. We worked on this project all semester and multiple prototypes for the project. Checkout their comments'+
 					   +'about this class below';

var projectdetails =' We completed this project and it was interesting!.... more to come';


var instamorph ='Making instamorph (http://www.instamorph.com/) coil covers:'+
'1) Pour instamorph pellets in hot water'+
'2) When pellets become clear, take out of water. If you want the plastic to be a color other than white, add the dye to the clump of clear pellets and knead it in with your fingers. For instructions on using dye with instamorph, see this website: http://www.instamorph.com/instructions/coloring-dyes'+
'To get a deep color you must add ALOT of dye. It will stain your fingers but will wash off within a week. '+
'3) Flatten the instamorph into a thin sheet by stretching and folding repeatedly. Try not to allow air bubbles to form in the layers.'+ 
'4) Once the sheet is even and thin, heat again and apply directly on top of the coil piece that is laying flat on a table surface.'+ 
'5) With your fingers, press the instamorph down and around the coil piece to get a perfect fit.'+
'6) Once the instamorph has cooled, cut off the excess plastic, leaving a small edge around the entire piece.'+
'7) To add the inner protective piece, we used waterproof lycra and Plastic Surgery glue. Apply the glue around the bottom edge of the piece. Do not apply glue around the entire piece as there needs to be an opening that the coil will be able to fit in.'+ 
'8)Place the fabric inside up on a flat surface and press the instamorph piece with glue on top of the fabric. Let it sit for about 30 seconds.'+ 
'9)Trim the edges of the fabric to match the shape of the instamorph piece.' ;


var sugru ="Making sugru (http://sugru.com/) sound blockers:"+
"1) To protect the cochlear implant and to allow the sugru to be easily removed from the cochlear implant, the first step is to wrap the cochlear implant in saran wrap. The layer should be as thin as possible while also being fitted enough so that it doesn't easily move around. It should also be wrapped so that it can be slipped off the front of the cochlear implant easily. "+
"2) Open the package of sugru and knead it until it is soft. Form the sugru into a rectangular shape roughly 3 x 2 x 0.5 cm. Make sure there is some additional material in the center to form the cup shape out of."+
"3) Wrap the piece around the saran wrapped cochlear implant closing the seam at the bottom. Form the cup shape with your thumb and fingers so that its right above the microphone. "+
"4) Use your fingers to smooth out the seam and rest of the sugru piece until you're satisfied."+
"5) If you can, leave the sugru and saran wrap on the cochlear implant overnight. If you cannot leave it on the cochlear implant, gently slide the sugur/saran wrap off and place on a table to dry overnight. Try not to let it lay on its side. "+
"6) The next day, the sugru piece should be dried and solid. You will be able to peel off the saran wrap from the inside of the sugru piece."+
"7) In order to add more grip to the sugru piece so that it wouldnt easily fall off of the cochlear implant, we used dycem (http://www.dycem-ns.com//node/250)."+
"We cut very small pieces of dycem and used plastic surgery glue to attach them to the inside front and pack of the sugru sound blocker piece.";

$(document).ready(function(){

	$('#project-details').html(projectdetails);
	$('#teamcomment').html(comment);
	$('#instamorph').html(instamorph);
	$('#sugru').html(sugru);
});
