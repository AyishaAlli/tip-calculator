"use strict";
// Variables
const bill = document.getElementById("bill");
const calcBtn = document.getElementById("btn");
const tipH = document.querySelector(".tipNumber");
const totalH = document.querySelector(".totalNumber");

calcBtn.addEventListener("click", calcTotal);

const bill1 = 22;

function calcTotal(num) {
  let tip = Number(bill.value) * 0.2;
  let total = Number(bill.value) * 0.2 + Number(bill.value);
  tipH.innerHTML = tip.toFixed(2);
  totalH.innerHTML = total.toFixed(2);
}
