function init(){
  function Submition() {  
	var check = document.getElementById('T+C');
    if(check.checked){
      window.alert("Thank you for your information");
	}
    else{
	  window.alert("Please agree to the terms and conditions");
	};
  };
  var submitbt = document.getElementById('submitbt');
  submitbt.addEventListener('click',Submition);
};
window.addEventListener('load', init);