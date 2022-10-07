/*//Завдання 1

let num1 = prompt('Enter first number:');
const newNum1 = parseInt(num1);
let num2 = prompt('Enter second number:');
const newNum2 = parseInt(num2);

if(newNum1 > newNum2){
    alert(newNum1+ " більше ніж число " + newNum2);
}
else if(newNum2 > newNum1){
    alert(newNum2 + " більше ніж число " + newNum1);
}
else if(newNum1 === newNum2) {
    alert(newNum1 + " дорівнює " + newNum2);
}
else{
    alert("Error");
}*/

/*//Завдання 2

let num1 = prompt('Enter first distance in km:');
const newNum1 = parseInt(num1);
let num2 = prompt('Enter second distance in f:');
const newNum2 = parseInt(num2);

let m_km = newNum1 * 1000;
let m_f = newNum2 * 0.305;

if(m_km < m_f){
    alert(newNum1 + " км менше ніж " + newNum2 + " футів");
}
else if(m_f < m_km){
    alert(newNum2 + " футів менше ніж " + newNum1 + " км");
}
else if (m_f === m_km){
    alert(newNum1 + " км дорівнює " + newNum2 + " футів");
}
else{
    alert("Error");
}*/

/*//Завдання 3

let num1 = prompt('Enter first number:');
const newNum1 = parseInt(num1);
let num2 = prompt('Enter second number:');
const newNum2 = parseInt(num2);

if(newNum1%newNum2 === 0 && newNum2%newNum1!==0){
    alert(newNum2 + " є дільником числа " + newNum1);
}
else if(newNum2%newNum1 === 0 && newNum1%newNum2!==0){
    alert(newNum1 + " є дільником числа " + newNum2);
}
else if(newNum2%newNum1 === 0 && newNum1%newNum2 ===0){
    alert("Вони оба є дільником один на одне");
}
else if(newNum2%newNum1 !== 0 && newNum1%newNum2 !==0){
    alert("Вони не діляться одне на одне");
}
else{
    alert("Error");
}*/

/*//Завдання 4

let num = prompt('Enter number:');
const newNum = parseInt(num);

let a = newNum%10;

if(newNum > 100 || newNum < 10){
    alert("Введіть двозначне число!");
}
else if(newNum%2===0){
    alert("Закінчується парним числом. Це число: " + a);
}
else if(newNum%2!==0){
    alert("Закінчується не парним числом. Це число: " + a);
}
else{
    alert("Error");
}*/


/*//Завдання 5

let num = prompt('Enter number:');
const newNum = parseInt(num);

let a = newNum%10;
let b = (newNum - newNum%10)/ 10;

if(newNum > 100 || newNum < 10){
    alert("Введіть двозначне число!");
}
else if(a > b){
    alert("Друга цифра більша ніж перша");
}
else if(a < b){
    alert("Перша цифра більша ніж друга");
}
else if(a === b){
    alert("Вони оба рівні");
}
else{
    alert("Error");
}*/


/*//Завдання 6a
let num = prompt('Enter number:');
const newNum = parseInt(num);

let a = newNum%10;
let b = ((newNum - newNum%100)/100);
let c = ((newNum%100 - newNum%10)/10);

if(newNum > 1000 || newNum < 100){
    alert("Введіть тризначне число!");
}
else if((a + b + c)%2 ===0 ){
    alert("Сума його цифр парна");
}
else if((a + b + c)%2 !==0 ){
    alert("Сума його цифр не парна");
}
else{
    alert("Error");
}*/

/*//Завдання 6b
let num = prompt('Enter number:');
const newNum = parseInt(num);

let a = newNum%10;
let b = ((newNum - newNum%100)/100);
let c = ((newNum%100 - newNum%10)/10);

if(newNum > 1000 || newNum < 100){
    alert("Введіть тризначне число!");
}
else if((a + b + c)%5 ===0 ){
    alert("Сума його цифр кратна 5");
}
else if((a + b + c)%5 !==0 ){
    alert("Сума його цифр не кратна 5");
}
else{
    alert("Error");
}*/

/*//Завдання 6c
let num = prompt('Enter number:');
const newNum = parseInt(num);

let a = newNum%10;
let b = ((newNum - newNum%100)/100);
let c = ((newNum%100 - newNum%10)/10);

if(newNum > 1000 || newNum < 100){
    alert("Введіть тризначне число!");
}
else if((a * b * c)>100){
    alert("Множення цифр більше 100");
}
else if((a * b * c)<100 ){
    alert("Mноження цифр менше 100");
}
else if((a * b * c)===100 ){
    alert("Mноження цифр дорівнює 100");
}
else{
    alert("Error");
}*/

/*//Завдання 7a
let num = prompt('Enter number:');
const newNum = parseInt(num);

let a = newNum%10;
let b = ((newNum - newNum%100)/100);
let c = ((newNum%100 - newNum%10)/10);

if(newNum > 1000 || newNum < 100){
    alert("Введіть тризначне число!");
}
else if(a === b && a === c && b === c){
    alert("Так всі числа рівні");
}
else{
    alert("Ні не всі числа рівні");
}*/

/*//Завдання 7b
let num = prompt('Enter number:');
const newNum = parseInt(num);

let a = newNum%10;
let b = ((newNum - newNum%100)/100);
let c = ((newNum%100 - newNum%10)/10);

if(newNum > 1000 || newNum < 100){
    alert("Введіть тризначне число!");
}
else if(a === b && a === c && b === c){
    alert("Всі числа одинакові");
}
else if(a === b && a !== c){
    alert("1 та 3 числа рівні");
}
else if(a !== b && a === c){
    alert("2 та 3 числа рівні");
}
else if(b === c && a !== b){
    alert("1 та 2 числа рівні");
}
else{
    alert("Всі числа різні");
}*/

//Завдання 8

let num = prompt('Enter number:');
const newNum = parseInt(num);

let num_1 = (newNum - newNum%100000)/100000;
let num_2 = ((newNum - newNum%10000)/10000)%10;
let num_3 = ((newNum - newNum%1000)/1000)%10;
let num_4 = ((newNum - newNum%100)/100)%10;
let num_5 =  ((newNum - newNum%10)/10)%10;
let num_6 = newNum%10 ;

if(newNum > 10000000 || newNum < 100000){
    alert("Введіть шестизначне число!");
}
else if(num_1 === num_6 && num_2 === num_5 && num_3 === num_4){
    alert("Так, дане число є зеркальним");
}
else{
    alert("Ні, дане число не є зеркальним");
}