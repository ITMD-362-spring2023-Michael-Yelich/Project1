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
    window.alert("By completing this survey you agree to allow the company to use all data assocated with you from shopping at our store including but not limited to: CreditCard Use, Purchase Habits, and secuirty footage. Furthermore, you agree to forfeit the right to sue over the use of this data by our compnay. Lastly, by agreeing to this you agree to recive the company newsletter");
  }
  var submitbt = document.getElementById('submitbt');
  submitbt.addEventListener('click',Submition);
  var termsbt = document.getElementById('Terms');
  termsbt.addEventListener('click',ListTerms);
};
window.addEventListener('load', init);