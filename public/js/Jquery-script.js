
//callback function for merch page 
$(document).ready(function(){ //for when webpage opens
	//hides description and price elements to only show when mouse hovers over pics
	$('.merchDescript').hide()
	$('.merchPrice').hide()
	$('.merchpics').on('mouseover', function() {
		$('.merchDescript').show().slideDown('slow', function(){
			$('.merchPrice').show().slideDown();
		});
	});
});

//replacing DOM and event sections
//Function adds a new row to the table with proper formatting

//creating button and input variables set to
 var $buttonPress = $('#buttonPress'); 
 var $inputDate = $('#inputDate:text'); 
 var $inputEvent = $('#inputEvent:text'); 
 var $input_sign_up_link = $('#input_sign_up_link:text');
 
 //when button is pressed, executes function
 $buttonPress.on('click', function(){
	 console.log("click");
	 //prevents default value (which is nothing) from being entered into list
	 //e.preventDefault();
	 //getting value of each input box and setting it to new row headings in list
	 var dateInput = $('#inputDate');
	 var eventInput = $('#inputEvent');
	 var signupInput = $('#input_sign_up_link');
		//creating new header and row elements to go after current row
	 $('tr:last').after('<th>' + dateInput.val() + '</li>');
	 $('th:last').after('<th>' + eventInput.val() + '</li>');
	 $('th:last').after('<th>' + '<button>' + signupInput.val() + '</button>' + '</li>');

	 //setting variables values back to empty
	 dateInput.val('');
	 eventInput.val('');
	 signupInput.val('');
 });
 
 
 

 
 
