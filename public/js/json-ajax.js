var json_updatebtn = document.getElementById('json_updatebtn');
json_updatebtn.addEventListener('click', makeRequest, false); 


function makeRequest(){
	var xhr = new XMLHttpRequest(); 
	
	//once response loads
	xhr.onload = function() {
		//ensures server status is good
		if(xhr.status === 200){
			//retrieves JSON data
			responseObject = JSON.parse(xhr.responseText);
			//string for new content
			var string = '';
			
			//looping through object
			for(var i = 0; i < responseObject.content.length; i++){
				string += '<h2>' + responseObject.content[i].header + '</h2>';
				string += '<p>' + responseObject.content[i].paragraph + '</p>';
			}
			//updating the webpage
			document.getElementById('json_ajax_addition').innerHTML = string;
		}
	};
	//prep request
	xhr.open('GET', 'json-info.json', true);
	//send request
	xhr.send(null);
}