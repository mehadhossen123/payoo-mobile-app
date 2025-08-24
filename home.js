const validPin=1234;
// reuseable function start hrom here 
function getInputValueNumber(id){
   const getValueNumber= parseInt(document.getElementById(id).value);
   return getValueNumber;
   
}
function getValue(id){
   const getValue=document.getElementById(id).value;
   return getValue;
}

// add money js start here 
document.getElementById("add-monet-btn").addEventListener("click",function(e){
    e.preventDefault();
 const bank = getValue("select-bank");
 const bankAccount = getValue("bank-account");
 const numberPin = getInputValueNumber("number-pin");
 const amountAdd = getInputValueNumber("amount-add");
 const beforeBalance = parseInt(
   document.getElementById("before-balance").innerText
 );
 if(bankAccount.length<11){
    alert("Please input valid account number");
    return;
 }
 if(numberPin!==validPin){
    alert("Please enter valid pin number");
    return;
 }
 
 const totalBalance=beforeBalance+amountAdd;
 document.getElementById("before-balance").innerText=totalBalance;
 console.log(totalBalance);
 
    
});
// toggling feature start here 
document.getElementById("add-money-taka").addEventListener('click',function(){
   const form= document.getElementsByClassName("form");
   for(const forms of form){
      forms.style.display="none";
   }
    document.getElementById("add-money-parent").style.display = "block";
    

})

document.getElementById("cash-out-taka").addEventListener("click", function () {
    const form = document.getElementsByClassName("form");
    for (const forms of form) {
      forms.style.display = "none";
    }
  document.getElementById("cash-out-parent").style.display = "block";
  


});

document.getElementById("transfer-money").addEventListener('click' ,function(){
    const form = document.getElementsByClassName("form");
    for (const forms of form) {
      forms.style.display = "none";
    }
   
    document.getElementById("transfer-monet-parent").style.display='block';


})

document.getElementById("get-bonus").addEventListener('click',function(){
    const form = document.getElementsByClassName("form");
    for (const forms of form) {
      forms.style.display = "none";
    }
    document.getElementById("get-bonus -parent").style.display='block';

})


// cash out js start here 

document.getElementById("widthdraw-money-btn").addEventListener('click',function(e){
    e.preventDefault();
    const widthdrawAmount = getInputValueNumber('with-draw-amount');
    
    
 const availBalance = parseInt(
   document.getElementById("before-balance").innerText);
   const agentId = getValue("agent");
   const pipi=4545;
  
  const pin = getInputValueNumber("pin");
 if(agentId.length !==11){
    alert("Please provide valid agent number");
    return;
 }
 if(pin!==pipi){
    alert("Please enter valid pin");
    return;

 }

const updateBalance=availBalance-widthdrawAmount;
document.getElementById("before-balance").innerText=updateBalance;


});