function init(){
    function Submition() {
		window.alert("Thank you for your information");
	}
	var submitbt = document.getElementById('submit');
	submitbt.addEventListener('click', Submition);
}
window.addEventListener('load', init);