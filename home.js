const validPin=1234;
const transactionData=[];




// reuseable function start hrom here 
function getInputValueNumber(id){
   const getValueNumber= parseInt(document.getElementById(id).value);
   return getValueNumber;
   
}
function getValue(id){
   const getValue=document.getElementById(id).value;
   return getValue;
}
// Reuseable toggling function
function getToggle(id){
   const form = document.getElementsByClassName("form");
   for (const forms of form) {
     forms.style.display = "none";
   }
   document.getElementById(id).style.display = "block";
   return;
    
}
// handle toggling button here 
function toggleButtonHandle(id){
    const formBtns = document.getElementsByClassName(" form-btn");
    for (const btn of formBtns) {
      btn.classList.remove("border-[#0874f2]", "bg-[#0874f20d]");
      btn.classList.add("border-gray-300");
    }
    document
      .getElementById(id)
      .classList.remove("border-[#08080819]");

    document
      .getElementById(id)
      .classList.add("border-[#0874f2]", "bg-[#0874f20d]");

}

// add money js start here 
document.getElementById("add-monet-btn").addEventListener("click",function(e){
    e.preventDefault();
 const bank = getValue("select-bank");
 const bankAccount = getValue("bank-account");
 const numberPin = getInputValueNumber("number-pin");
 const amountAdd = getInputValueNumber("amount-add");
 if(amountAdd<=0){
   alert("Invalid Amount ");
   return;
 }
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
// console.log(totalBalance);
const data={
   name:"Add Money",
   date: new Date().toLocaleTimeString()


}
 transactionData.push(data);
 
 
    
});
document.getElementById("transaction-money").addEventListener('click',function(){
  
   const transcationContainer= document.getElementById("transaction-container");
    transcationContainer.innerText = "";
   
   for(const data of transactionData){
      const div =document.createElement('div');
      div.innerHTML = `
          <div class="bg-[#0808080d] mt-3  rounded-xl flex justify-between items-center">
    <div class="flex items-center gap-4">
    <div class="rounded-full  p-4 bg-[#0808080d]">
         <img  src="image/wallet1.png" alt="" class="mx-auto">
    </div>
    <div>
        <h1>${data.name}</h1>
        <p>${data.date}</p>
    </div>
</div>
<i class="fa-solid fa-ellipsis-vertical"></i>

</div>
      `;
      transcationContainer.appendChild(div);
      
   }





})
// toggling feature start here 
document.getElementById("add-money-taka").addEventListener('click',function(){
   getToggle("add-money-parent");
  toggleButtonHandle("add-money-taka");
    

})




document.getElementById("cash-out-taka").addEventListener("click", function () {
    getToggle("cash-out-parent");
    toggleButtonHandle("cash-out-taka");


});





document.getElementById("transfer-money").addEventListener('click' ,function(){
    
   getToggle("transfer-monet-parent");
   toggleButtonHandle("transfer-money");



})




document.getElementById("get-bonus").addEventListener('click',function(){
   getToggle("get-bonus -parent");
     toggleButtonHandle("get-bonus");
  
})


document.getElementById("pay-bill").addEventListener("click", function () {
  getToggle("pay-bill -parent");
  toggleButtonHandle("pay-bill");
});




document
  .getElementById("transaction-money").addEventListener("click", function () {
    getToggle("transaction -parent");
    toggleButtonHandle("transaction-money");
  });


// cash out js start here 

document.getElementById("widthdraw-money-btn").addEventListener('click',function(e){
    e.preventDefault();
    const widthdrawAmount = getInputValueNumber('with-draw-amount');
    
    
 const availBalance = parseInt(
   document.getElementById("before-balance").innerText);
   if(availBalance<widthdrawAmount || widthdrawAmount<=0){
      alert("Invalid amount ");
      return ;
   }
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
const data={
   name:"Cash Out ",
   date: new Date().toLocaleTimeString()


}
 transactionData.push(data);
 console.log(transactionData);
    
});

