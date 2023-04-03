
/*Function adds a new row to the table with proper formatting*/
function addRow(){
	//Node for row, header, and sign up button
	var row_node = document.createElement("tr");
	var date_node = document.createElement("th");
	var event_node = document.createElement("th");
	var sign_up_node = document.createElement("th");
	var sign_up_button_node = document.createElement("button");
	
	
	/*Gets the input texts by ID and stores as variables */
	var dateInput= document.getElementById("inputDate");
	var eventInput= document.getElementById("inputEvent");
	var signInput= document.getElementById("input_sign_up_link");

	
	
	
	//creating text nodes for content inside of headers based on input texts
	var date_text = document.createTextNode(dateInput.value);
	var event_text = document.createTextNode(eventInput.value);
	var sign_up_text = document.createTextNode(signInput.value);
	
	//appending text to each element node
	date_node.appendChild(date_text);
	event_node.appendChild(event_text);
	sign_up_button_node.appendChild(sign_up_text);
	//appending sign up button into sign up node
	sign_up_node.appendChild(sign_up_button_node);
	
	
	row_node.appendChild(date_node);
	row_node.appendChild(event_node);
	row_node.appendChild(sign_up_node);



	//DOM for getting new row and elements in row to appear
	var table = document.getElementById('eventstable');
	table.appendChild(row_node);
	table.appendChild(date_node);
	table.appendChild(event_node);
	table.appendChild(sign_up_node);
	//table.appendChild(sign_up_button_node);

	
}
//Gets called outside of addEvents function and runs it on click of button. 
var taskBtn = document.getElementById('buttonPress');
taskBtn.addEventListener('click', addRow, false);




	/*setting attribute of nodes to inputs
	row_node.setAttribute("tableRow", "");
	date_node.setAttribute("header1", "inputDate");
	event_node.setAttribute("header2", "inputEvent");
	sign_up_node.setAttribute("header3", "");
	sign_up_button_node.setAttribute("h3button", "input_sign_up_link");
	
	//appends child nodes
	row_node.appendChild(row_node);
	row_node.appendChild(date_node);
	row_node.appendChild(event_node);
	row_node.appendChild(sign_up_node);
	row_node.appendChild(sign_up_button_node);
*/


	/*create node at input box
	var input = document.getElementById("eventstable");
	var input_node = document.createTextNode(eventstable);
	
	//creates button press node
	var buttonPress = document.createElement("buttonPress");
	buttonPress.setAttribute("date", "events", "signups"); 
	
	//append child node to list
	li_node.appendChild(eventstable);

	//appends child node to list
	*/
	

