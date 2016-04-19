//find all the buttons
var buttonOne = document.querySelector("#scenic-flights-box");
var buttonTwo = document.querySelector("#charter-trips-box");
var buttonThree = document.querySelector("#remote-trips-box");
var buttonFour = document.querySelector("#unique-routes-box");
var buttonFive = document.querySelector("#xtreme-rush-box");
var buttonSix = document.querySelector("#photo-trips-box");

//find all sections
var allSections = document.querySelectorAll(".tab");

//attach click event listeners to the buttons
buttonOne.onclick = changeTab; //if you have () it runs the function straight away
buttonTwo.onclick = changeTab;
buttonThree.onclick = changeTab;
buttonFour.onclick = changeTab;
buttonFive.onclick = changeTab;
buttonSix.onclick = changeTab;

//function that changes the visible tab
function changeTab() {
	// alert(this.id);

	//hide all tabs
	for (var i = 0; i<allSections.length; i++) {
		allSections[i].style.display = "none";
	}

	//switch based on ID of the button checked
	switch (this.id) {
		case "scenic-flights-box":
			allSections[0].style.display = "block";
		break;

		case "charter-trips-box":
			allSections[1].style.display = "block";
		break;

		case "remote-trips-box":
			allSections[2].style.display = "block";
		break;

		case "unique-routes-box":
			allSections[3].style.display = "block";
		break;

		case "xtreme-rush-box":
			allSections[4].style.display = "block";
		break;

		case "photo-trips-box":
			allSections[5].style.display = "block";
		break;
	}
}