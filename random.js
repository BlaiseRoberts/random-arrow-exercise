
//grab img Elements
var rightArrow = document.getElementById("rightArrow")
var leftArrow = document.getElementById("leftArrow")


//add listener to window click
window.addEventListener("click", handleArrow)

function handleArrow (e) {
	var randomNumber = Math.random();
	console.log(randomNumber)
	if (randomNumber < .5) {
		rightArrow.classList.remove("hidden")
		rightArrow.classList.add("visible")
		leftArrow.classList.add("hidden")
		leftArrow.classList.remove("visible")
	} else {
		rightArrow.classList.remove("visible")
		rightArrow.classList.add("hidden")
		leftArrow.classList.remove("hidden")
		leftArrow.classList.add("visible")
	}

}