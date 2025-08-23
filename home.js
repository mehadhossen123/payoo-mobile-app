const validPin=1234;

// add monet js start here 
document.getElementById("add-monet-btn").addEventListener("click",function(e){
    e.preventDefault();
 const bank = document.getElementById("select-bank").value;
 const bankAccount = document.getElementById("bank-account").value;
 const numberPin = parseInt(document.getElementById("number-pin").value);
 const amountAdd = parseInt(document.getElementById("amount-add").value);
 
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
    document.getElementById("add-money-parent").style.display = "block";
    document.getElementById("cash-out-parent").style.display="none";
})

document.getElementById("cash-out-taka").addEventListener("click", function () {
  document.getElementById("cash-out-parent").style.display = "block";
  document.getElementById("add-money-parent").style.display='none';

});
// cash out js start here 

document.getElementById("widthdraw-money-btn").addEventListener('click',function(e){
    e.preventDefault();
    const widthdrawAmount = parseInt(
      document.getElementById("with-draw-amount").value
    );
    
 const availBalance = parseInt(
   document.getElementById("before-balance").innerText);
   const agentId = document.getElementById("agent").value;
   const pipi=4545;
  
  const pin = parseInt(document.getElementById("pin").value);
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