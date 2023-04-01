import { dbank } from "../../declarations/dbank";


window.addEventListener("load", async () => {
  update();
});


document.querySelector("form").addEventListener("submit", async (event) => {

  event.preventDefault();
  
  const btn = event.target.querySelector("#submit-btn");
  const amountDeposit = parseFloat(document.getElementById("input-amount").value);
  const amountWithdraw = parseFloat(document.getElementById("withdrawal-amount").value);   

  btn.setAttribute("disabled", true);

  if (document.getElementById("input-amount").value.length != 0) {
    await dbank.deposit(amountDeposit);
  };

  if (document.getElementById("withdrawal-amount").value.length != 0) {
    await dbank.withdraw(amountWithdraw);
  } 

  await dbank.compound();

  update();

  btn.removeAttribute("disabled");

  document.getElementById("input-amount").value = "";
  document.getElementById("withdrawal-amount").value = "";
  
});

async function update(){
  let currentValue = await dbank.getAmount();
  currentValue = Math.round(currentValue * 100) / 100;
  document.getElementById("value").innerText = currentValue;
}