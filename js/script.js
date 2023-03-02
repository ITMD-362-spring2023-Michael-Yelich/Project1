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
  function ListTerms(){
    window.alert("By completing this survey you agree to forfet all rights to sue over the use of this data by our compnay. Furthermore, by agreeing to this you agree to recive the company newsletter");
  }
  var submitbt = document.getElementById('submitbt');
  submitbt.addEventListener('click',Submition);
  var termsbt = document.getElementById('Terms');
  termsbt.addEventListener('click',ListTerms);
};
window.addEventListener('load', init);