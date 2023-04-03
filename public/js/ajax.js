
//LOADING HTML WITH AJAX
//getting button id in index.html
var updatebtn = document.getElementById('updatebtn');
//event listener to react on button click
updatebtn.addEventListener('click', ajaxRequest, false); 


function ajaxRequest(){
	//XMLHttpRequest object
	var xhr = new XMLHttpRequest();
	
	xhr.onload = function(){
		//runs if server status is okay
		if(xhr.status === 200){
			//updates
			document.getElementById('ajax_addition').innerHTML = xhr.responseText;
		}
	};
	//preps request from ajax.html file
	xhr.open('GET', 'ajax.html', true);
	
	//sending request
	xhr.send(null);
};
 

