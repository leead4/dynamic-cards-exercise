///////////find our objects in the dom that we want to attach event listeners to


var createButton = document.getElementById("makeIt");
var outputDiv = document.getElementById("Output");


function cardMaker() {
	var inputText = document.getElementById("makeCard");
	//////create a card for our user
	var cardEl = document.createElement("DIV"); ///<<creates our big Div
	cardEl.cardList.add("card");
	
	//var containerDiv = document.createElement("DIV"); //creates another DIV
	//containerDiv.className = "container";
	
	var textEL = document.createElement("P"); //makes our paragraph element
	var inputText = document.getElementById("makeCard"); /// finds what our user put in
	console.log(inputText.value);
	var textWords = document.createTextNode(inputText.value);
	

	//make a delete button
	var deleteButton = document.createElement("BUTTON");
	var deleteWords = document.createTextNode("delete");
	deleteButton.addEventListener("click", function(event){
		console.log("clicked");
		var deleteKid = event.target;
		var deleteDad = deleteKid.parentElement;
		var deleteGrandPa = deleteDad.parentElement;
		deleteGrandPa.removeChild(deleteDad);

	});
////////////////////attach everything to our card and place in the dom
    

		cardEl.appendChild(textEL);
		cardEl.appendChild(textWords);
		cardEl.appendChild(deleteButton);
		cardEl.appendChild(deleteWords);
		outputDiv.appendChild(cardEl);


    //outputDiv.appendChild(cardEl);
	//outputDiv.appendChild(containerDiv);
	//outputDiv.appendChild(textEL);
	//outputDiv.appendChild(textWords);
	//outputDiv.appendChild(deleteButton);
	//outputDiv.appendChild(deleteWords);

}


function cardKiller(){
	//////we need to make an if statement to find the card we created 
	//because it's not been made until user makes it



}



////attach eventListener to our button
createButton.addEventListener("click", cardMaker);





