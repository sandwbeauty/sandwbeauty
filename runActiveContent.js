/**
 This function can be used to activate an active control like e.g. a flash movie so that
 the user can interact with it. This is used for the Internet Explorer's quirk that the
 user have to activate an active control by mouseclick before he can interact with it.
 Place the object element into a div tag and set the visibility to "none". Then call this
 function and pass the div's id.
 @param flashIntroDivId The div element which contains the hidden object element.
 */
function activateActiveContent(containerDivId) {
	// We just write the same code as already is existing into the div and display
	// the div. Doing so we automatically activate the active content when IE is used.
	var flashObjectDiv = document.getElementById(containerDivId);
	var flashObjectCode = flashObjectDiv.innerHTML;
	flashObjectDiv.innerHTML = "";
	flashObjectDiv.style.display = "block";
	flashObjectDiv.innerHTML = flashObjectCode;
}