document.querySelector(".form").onchange =function () {

const totalbill= Number(document.querySelector("#total-bill").value) ;
const tip=document.querySelector("#tipInput").value;
const tipOutPut=document.querySelector("#tipOutPut");
const tipAmount=document.querySelector("#tipAmount");
const TotalBillWithTip=document.querySelector("#TotalBillWithTip");
const results=document.querySelector(".results");


tipOutPut.innerHTML=`${tip}%`
results.style.display="block"

const tipvalue = totalbill * (tip/100);
tipAmount.value=tipvalue.toFixed(2)

const billWithTip = tipvalue + tip;
// TotalBillWithTip.value=Math.ceil(billWithTip)
TotalBillWithTip.value=billWithTip.toFixed(2)




    tipAmount.innerHTML=`<p>${tipvalue}</p>`
}

