let main__container1 = document.createElement("div");
main__container1.classList.add("main__container1");
document.querySelector("body").appendChild(main__container1);


let main__container = document.createElement("div");
main__container1.appendChild(main__container);
main__container.classList.add("main__container");

let display = document.createElement("div");
main__container.appendChild(display);
display.classList.add("display");

let ans = document.createElement("p");
display.appendChild(ans);
ans.classList.add("ans");
ans.innerHTML="2x2=4";

let keys =document.createElement("div");
main__container.appendChild(keys);
keys.classList.add("keys");

let row1 =  document.createElement("div");
keys.appendChild(row1);
row1.classList.add("row1");

let button07 =   document. createElement("button");
row1.appendChild(button07);
button07.innerHTML="07";

let button08 =   document. createElement("button");
row1.appendChild(button08);
button08.innerHTML="08";


let button09 =   document. createElement("button");
row1.appendChild(button09);
button09.innerHTML="09";

let buttondivision =   document. createElement("button");
row1.appendChild(buttondivision);
buttondivision.classList.add("arith")
buttondivision.innerHTML="/";

let row2 =  document.createElement("div");
keys.appendChild(row2);
row2.classList.add("row2");


let button04 =   document. createElement("button");
row2.appendChild(button04);
button04.innerHTML="04";

let button05 =   document. createElement("button");
row2.appendChild(button05);
button05.innerHTML="05";


let button06 =   document. createElement("button");
row2.appendChild(button06);
button06.innerHTML="06";

let buttonmul =   document. createElement("button");
row2.appendChild(buttonmul);
buttonmul.classList.add("arith")
buttonmul.innerHTML="X";




let row3=  document.createElement("div");
keys.appendChild(row3);
row3.classList.add("row3");



let button01 =   document. createElement("button");
row3.appendChild(button01);
button01.innerHTML="01";

let button02 =   document. createElement("button");
row3.appendChild(button02);
button02.innerHTML="02";


let button03 =   document. createElement("button");
row3.appendChild(button03);
button03.innerHTML="03";

let buttonmin =   document. createElement("button");
row3.appendChild(buttonmin);
buttonmin.classList.add("arith")
buttonmin.innerHTML="-";




let row4=  document.createElement("div");
keys.appendChild(row4);
row4.classList.add("row4");



let button00 =   document. createElement("button");
row4.appendChild(button00);
button00.classList.add("arith")
button00.innerHTML="0";

let buttondod =   document. createElement("button");
row4.appendChild(buttondod);
buttondod.classList.add("arith")
buttondod.innerHTML=".";


let buttonplus =   document. createElement("button");
row4.appendChild(buttonplus);
buttonplus.classList.add("arith")
buttonplus.innerHTML="+";

let buttoneq =   document. createElement("button");
row4.appendChild(buttoneq);
buttoneq.classList.add("arith")
buttoneq.innerHTML="=";



let row5=  document.createElement("div");
keys.appendChild(row5);
row5.classList.add("row5");

let clear =   document. createElement("button");
row5.appendChild(clear);
clear.classList.add("cls")
// clear.innerHTML="clear";

let cleartext = document.createElement("p");
clear.appendChild(cleartext);

let textforp = document.createTextNode("Clear");
cleartext.appendChild(textforp);

