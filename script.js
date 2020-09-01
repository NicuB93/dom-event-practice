var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var li = document.querySelectorAll("li")
var div = document.querySelectorAll(".item");
var removeList = document.querySelectorAll(".removeList")


// Make the "delete" button work
function deleteList()	{
	for (let i = 0; i < removeList.length; i++) {
		removeList[i].addEventListener("click", function()	{
			div[i].remove();
		});
	}
}

// click a li to toggle
function	toggleList()	{
	for (let i = 0; i < li.length; i++) {
		li[i].addEventListener("click", toggle);
	}
}

function toggle()	{
	this.classList.toggle("done");
}

//Function to update data and functionality
function updateLengthAndFunctions()	{
	divLength();
	liLength();
	removeLength();
	toggleList();
	deleteList();
}
//Created functions to update functionality to newly added li
function divLength()	{
	return div = document.querySelectorAll(".item");
}

function liLength()	{
	return li = document.querySelectorAll("li");
}

function  removeLength()	{
	return removeList = document.querySelectorAll(".removeList");
}

//Default code 
function inputLength() {
	return input.value.length;
}

function createListElement() {
	var div = document.createElement("div");
	var deleteButton = document.createElement("button");
	var li = document.createElement("li");
	div.classList.add("item");
	deleteButton.classList.add("removeList");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(div);
	div.appendChild(li);
	div.appendChild(deleteButton);
	deleteButton.appendChild(document.createTextNode("Delete"));
	input.value = "";
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
		updateLengthAndFunctions();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
		updateLengthAndFunctions();
	}
}

button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);

toggleList();
deleteList();