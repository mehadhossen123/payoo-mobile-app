document.getElementById("loigin-button").addEventListener('click',function(e){
  e.preventDefault();
    const number=12345678910;
    const pin=1234;
    const mobileNumber = document.getElementById("mobile-number").value;
    const mobileNumberConverted=parseInt(mobileNumber);
    const pinNumber = document.getElementById("pin-number").value;
    const pinNumberConverted=parseInt(pinNumber);
    if(mobileNumberConverted===number&& pinNumberConverted===pin){
        window.location.href = './homePage.html';

    }
    else{
        alert("Invalid match");
    }
    
})