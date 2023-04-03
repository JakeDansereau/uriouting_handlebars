var xml_updatebtn = document.getElementById('xml_updatebtn');
xml_updatebtn.addEventListener('click', makeRequest, false); 

//retrieves xml content
function getXmlValue(obj, tag) {
	return obj.getElementsByTagName(tag)[0].firstChild.nodeValue; 
}

function makeRequest(){
    console.log("test");
	var xhr = new XMLHttpRequest(); 
	
	var xml_addition = document.getElementById('xml_ajax_addition');
	xml_addition.innerHTML = '';
	
	//once response loads
	xhr.onload = function() {
		//ensures server status is good
		if(xhr.status === 200){
			//processes XML
			var response = xhr.responseXML;
			
			var content = response.getElementsByTagName('content');
			
			//loops through content
			for(var i = 0; i < content.length; i++){
				var head, para;
				//header
				head = document.createElement('h1');
				head.appendChild(document.createTextNode(getXmlValue(content[i],'header')));
				xml_addition.appendChild(head); 
				//paragraph
				para = document.createElement('p'); 
				para.appendChild(document.createTextNode(getXmlValue(content[i],'p1')));
				xml_addition.appendChild(para); 	
			}
		}
	};
	//prep request
	xhr.open('GET', 'xml-info.xml', true);
	//send request
	xhr.send(null);
}