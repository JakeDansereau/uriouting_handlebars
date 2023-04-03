/*object with variables for alternating images */
var slideShow = {
	i: 0,
	images: ["images/vermont.jpeg","images/kayaking.jpeg","images/rockclimb.jpeg"],
	time: 4000,
	/*function that changes image*/
};

var alternating_elem = document.getElementById("alternating");

function imageAlt() {
	alternating_elem.src = slideShow.images[slideShow.i];
	
	if(slideShow.i < slideShow.images.length-1){
		slideShow.i++; 
	}else{
		slideShow.i = 0;
	}
	setTimeout("imageAlt()", slideShow.time); 
}
/*runs function when window opens*/ 
window.onload = imageAlt;


/*Using jQuery API for tooltip feature */
$(document).ready(function(){
   $('#inner_flex_left').tooltip();
});


/*$(document).tooltip({
   if(element.is("toolphoto")){
       /*var text = "Location: Mount Monadnock, NH"
       return "<img  id = "inner_flex_left" src = "images/group.jpeg" toolphoto alt ='" + text + "'>";
       return element.attr("alt", "Mount Monadnock, NH")

   }
    
});*/

/*


$("#inner_flex_left").tooltip({
    content: "Location: Mount Monadnock, NH"
});


*/