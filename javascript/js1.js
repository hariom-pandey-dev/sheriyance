// let count = 5;



// if (count-- === 5){
//     console.log("matched");
// } else{
//     console.log("not matched");

// }





//  if else  else if CSSCondition......


// let num = 61;

// if(num >= 90){
//     console.log("topper");

// } else if(num >= 60){
//     console.log("first");
// }else{
//     console.log("fail");
// }
 

//  switch statement....

// switch (1){
//     case 1:
//         console.log("hariom pandey");
        
//     case 2:
//         console.log("sheshu pandey");
       

//     case 3:
//         console.log("abhi");
        

//     case 4:
//         console.log("ranjan");
        
//     case 5:
//         console.log("tu hi hai");
//         break;
// }





// function hariNum(num){
//     if(num < 23 ) return "1st";
//     else if(num < 75) return "2nd";
//     else if(num < 78) return "3rd";
//     else return "fail";
   
// }
// console.log(hariNum(88));



// function getGrade(score){
// if(score >= 90) return "A+";
// else if(score >= 80 && score <= 89) return "A";
// else if(score >= 70 && score <= 79) return "B";
// else if(score >= 60 && score <= 69) return "C";
// else if(score >= 30 && score <= 59) return "D";
// else return "fail";

// }
// console.log(getGrade(67));..


// function clg(TIT, LNCT){
//     if(TIT === LNCT) return "same";

//     if(TIT === "exlent" && LNCT === "good") return "TIT";
//     if(TIT === "good" && LNCT === "thoda good") return "TIT";
//     if(TIT === "Thoda good" && LNCT === "bekar") return "TIT";
//      return "LNCT";
// }
// console.log(clg("Exlent" , "bekar"));


// table of 2...

// for(let i = 1; i <= 10; i++){
//     console.log(2*i);
// }

// while....

// let i = 1;

// while (i <= 5) {
//   i++;
//   if (i === 3) {
//     continue;
//   }
//   console.log(i);
// }



// let i = 2;

// do {
//     i++;
//    if(i === 8) break;
//    console.log(i);

// } while(i<=10);


// for( let i = 2; i<=10; i++){
//     if(i === 8) continue;
//     console.log(i);
// }



//  i = 2 --> i++ --> 3 -->print 3
//  i = 3 --> i++ --> 4--->print 4 ---continue x
//  i = 4 --> i++ --> 5-->print 5
//  i = 5 --> i++ --> 6 -->print 6
//  i = 6 --> i++ --> 7 ---> print 7
//  i = 7 --> i++ --> 8 --> print 8




// let i = 2;
// while(i<=10){
//     if(i === 8){
//         i++;
//         continue;
//     }
//     console.log(i);
//     i++;
// }


// let i = 2;
// do {
    
//     if( i === 8) {
//         i++;
//         continue;
//     }
//     console.log(i);
//     i++;
    
// } while(i<=10);
 

// print numbers 10 to 1 using a while loop...

//  let i = 10;
//  while(i>0){
//     console.log(i);
//     i--;
//  }


//  print even number from 1 to 20 using for loop

// for(let i=1; i<21; i++){
//     if(i%2===0){
//         console.log(i)
//     }
// }



// print odd number from 1 to 50 using while loop 


// let i = 1;

// while(i<51){
//     if(i%2 !== 0){
//         console.log(i);

//     }
//     i++;
// }


// print the multipulation table of 5 * 1 = 5 ,, 5*10 = 50... 



// for(let i=1; i<=10; i++){
//     console.log(`5 * ${i} = ${5*i}`);

// }



// print all number b/w 1 to 50 divided from 3 using for loop ..

// for(let i = 1; i<51; i++){
//     if(i%3 === 0){
//         console.log(i);
//     }
// }


// asked the user for a number and print whether each number from 1 to that number is even or odd 
//  e.g "1 is odd ","2 is even",

//  let val = prompt("give a number");
//  for(let i = 1; i<val; i++){
//     if(i%2===0){
//         console.log(`${i} is even`);

//     }else{
//         console.log(`${i} is odd`)
//     }
//  }


// count how many numbetrs btw 1 to 100 are divisible by 3 and 5 ...

// for(let i=1; i<101; i++){
//     if(i%3 === 0 && i%5 === 0){
//         console.log(i);
//     }
// }

// stope the first multiple of 7 
//  write a loop from 1 to 100 that 
// .. print each number
// .. stops completelly when it finds the first number divisible by 7 



//  for(let i = 1; i < 101; i++){
//     if(i%7 === 0){
//         continue;
//     }
//     console.log(i);
//  }



// skip multiply of 3

// write a loop from 1 to 20:
// .. skip number divisible by 3
// .. prints all others 
// use continue 

// expected output:
// 1 2 4 5 7 8 10 11...(no 3, 6, 9 etc skip)

// for(let i = 1; i<21; i++){
//     if(i%3===0){
//         continue;
//     }
//     console.log(i);
// }


// print first 5 odd number only 
// write a loop from 1 to 100 that
// .. prints only 5 odd number
// .. then stops the loop
// use both if continue and a counter + break...

// Expected output:
// 1 3 5 7 9

// let count = 0;

// for(let i = 1; i < 101; i++){
//     if(i%2 !== 0) {
//         count++;
//         console.log(i);
//     }
        
//     if(count === 5) break;

    
    
// }
 

// for(let i = 1; i<=10; i++){
//       console.log(5*i);
// }

// for(let line = 1; line <= 3; line++){
//     star = " ";

//     for(let count = 1; count <= (line *2-1); count++){
//         star += "*";
//     }
//     console.log


// let linr = i
// let count = j

// 1
// 12
// 123
// 1234
// 12345


// for(let i=1; i<=5; i++){
//     line = " ";

//     for(let j=1; j<=i; j++){
//         line += j;
        
//     }
//     console.log(line);
// }
 

// 54321
// 4321
// 321
// 21
// 1


// for(let i = 5; i>=1; i--){
//     line = " ";
//     for(let j = 5; j>=i; j++){
//         line += j;
//     }
//     console.log(line);
// }


// for(let i=1; i<=4; i++){
//     line = " ";
//     for(let j = 1; j<=i; j++)
//     {
//         line += i;
//     }
//     console.log(line);
// }



// let num = 1;

// for(let i = 1; i<=4; i++){
//     line = " ";
//     for(let j = 1; j <= i; j++){
//         line += num;
//         num++;
//     }
//     console.log(line);
// }











// function.........

// function hariOm(){
//     // function statement / funstion declaration
// }


// let harI = Function(){
//     // fuction expretion... 
// }


// **(... / rest /spread ) :---> sare arguments ko ek Array me pak kr deta h

// function hari(...son){
//     console.log(son);
// }
// hari(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
// output = [0,1,2,3,4,5,6,7,8,9]




// jab argument kai sare ho to humein utne hi parameter
// banane padenge , ise bachne k liye ,hum rest ka use
// karte hai ... agr ... function k parameter space me lge to 
// o rest operator hai 
// ager o array and object me lge to wo spread operator hai 






// return matlab jaha se aaye ho wahi dall denge 

// function hari(h){
//     return 12 + h; 
// }
//  let val = hari(11);
//  console.log(val);
  


//  first class function
// hyier order function
// pure vs impure functions
// closures 
// lexical scoping


// function hari(){
//     // console.log("hdckjadsgcku";)     function statement 
// }


// let hari = function(){
//     console.log("hashchds");    function expretion bolte hai esko
// }




// what is defference btw function declaration and expression in terms of hoisting 


//  hari();

// function hari(){
//     console.log("hariom pandey");
// }
  

// Error nhi ayega code pura chalega ... bcz ye function expretion hai






// hari();

// let hari = function(){
//     console.log("hariom pandey");
// }



// Error ayega... bcz ye ek function exprestion 




// Arrow function hai ye.....
 
// let sub = (a, b) => {     
//     return a - b;  

// }




// function hariOm( name = "sisu"){
//     console.log("hii", name);
// }
// hariOm();



// use rest parameter to accept any number of scores and return the total

// function hariNum(...Nums){
//      console.log(...Nums);

// }
// hariNum(2,4,6,7,8,9,45,35,24,78);




// function chekNum(Num){
//     if(Num < 30) return "pass";
//     return "faaaaaaaail";
// }
// console.log(chekNum(45));



// pass the function into another function and execute it inside

// function ssjd(val){
//     val();

// }
// ssjd(function () {
//     console.log("hari");

// });

// impure fuction....

// let num = 0;
// function addNum (Num){
//     num += Num;

// }
// addNum(34);
// console.log(num);




// convert the above function into a pure function

// let all = 0;
// function addAll(num){
//     all += num;

// }



// relative and prmitive datatype
 
 
// var a = [1, 2, 3, 4];
// var b = a;
// b.push(5); 
// primitive - jinki value direct copy kr sakte hai
// reference - jinki value direct copy nhi kr sakte hai 

// reference - array objects functions





// ..... * prompt * ......//

// let username = prompt("username");
// console.log(typeof username);

// promt se jo bhi loge o tumhe string hi dikhayega



// ...* Msg.slice *.... 

// // let msg = "hariom";
// // console.log(msg.slice(2, 5));

// esme index liya jata hai jisme start 0 index se 
// kiya jata hai or end jitna lena ho usase 1 kaam show hota hai

// Ex--> Slice(start  , end);

// jisme start ko include kiya jata hai 
// end ko include nhi kiya jata hai



// let msg = "the quater to king of parmiter and show all evrery her";
// console.log(msg.replace('show','all'));



// y = (4+6)*4;
// console.log(y);



// array object type ka hota hai js me .....



//   value change krna  

// let num1 = {val:23};
// let num2 = num1;
// num2.val = 45;
// console.log(num1.val);

//  1. Mathematical operator.....

//  -    +   /   %   *



//  2. Assingment operator.....

// let a = 12;
// a += 13;
// a -= 13;
// a *= 4;
// a /= 2;
// a %= 6;

// output a = 0


//  3. Comparison operators....

// ==  ===  !=  !==  >  <  >=  <=
//   (==)    :-  not strict compaire never use this 
//   (===)   :- strict compaire always use this 
//  (!=)    :- never use this 
//  (!==)   :- strict compaire always use this 

//  4.Logical operator....

//    && ,  ||   ,  ! 

//  true && true = true
//  false && true = false
//  true && false = false
//  false && false = false

// note :-->  AND (&&) me humesa true && true = true hota hai baki sb false hota hai 

//  true || true = true
// true || false = true
// false || true = true
// false || false = false 

// note :-->  OR (||) me humesa false  && false = false hota hai baki sb true hota hai

// note :--> NOT (!) me condition change ho jata hai true ka false and false ka true



//  5.ternary Operator....

// condition ? doThis : doThat

// 23 > 45 ? console.log("hari") : console.log("ashi");


// 6. Type cheaking  Operators....
      
// typeof 
// instentof


//  7. String Operator 
   
//  + (for concatenation)


//  8.Spread / Rest Operator

//  ... (very important in mordern js)

//   ** spread .......
 
// let hari1 = [1,2,3,4,5];
// let hari2 = [...hari1];

//   **rest ....... 

//  function abhi(a,b,h,...rest){
    
//   }

//   abhi(1,2,3,4,56,7,8,9);


//  9. Nullish Coalescing Operator 

//  ?? (fallback only when null / undefine)

// 10. Optional chaining 

//  ?. (safe access to nested values)



//  ** Hoisting ....

// hoisting ka matlab hai ki variable ko banane se phle
// use kiya jata sakta hai
// hoisting me apka variable toot jata hai do hiso me
// declaretion top of the file jata hai 
// and initialization wahi rahta hai jha veriable tha 

// ab apka variable erroe nhi deta hai kyuki wo humesa
// use hone se phle use hone se phle exist kr rha tha



// console.log(b);
// var b = 2; :--> ye do hiso me tut jayega 
//  var b; :--> ye declare part h jo top of file jata h
// b = 2;  :--> ye initialization part hai jo wahi ruk jata hai jha variable tha phle se 





// ** questions..(1)

// let count = 5;
// use count++ and log value before and after 
// repeat for count-



// let count = 6;       preincrement---> ho rha h
// console.log(count);   output = 7
// ++count; 


// let count = 6;       postincrement---> ho rha h
// console.log(count);     output = 7
// count++;



// ** question...(2)
//  check if 10 is greater than 5, less than 20, equal to 10 

// let x = 10;
// if(x>5 && x < 2 &&  x === 10){
//     console.log("x = 10");                 true && true = true
// else {                                     //  baki sb false 
//     console.log("x != 10");
// }                                            




// ** question...(3)
//  try logical AND and OR
// true && false
// true || false
// !(true)



// ** question...(4)
// predict the result of:
// (5 > 3 && 10 > 8) ---> true
// (5 > 3 || 10 < 8) --->ture


// **question...(5)
// variable Hoisting in javaScript
    // 1. predict output of :
// console.log(a);
// var a = 10;         output = undefine


// hari();
// function hari(){                   function hoisting chal jayega ---> hariom
//     console.log("hariom");
// }






// hello();
// var hello = function() {               function call ho jayega
//     console.log("hariom pandey");
// }







// topics........ of js


// ***  loop & conditional in javascript......

// 1. conditionals.. if else else-if

// programing me kai bar aisa phase ata hai jha pr apko 
// decide karna padta hai ki kya kre , option A chose kare ya option B chose kre
// ager barish ho rhi hai to print kro hello nhi to print kro bye-bye
// if else else-if ternary switch-case

//  if(esme ya to true hona chahiye ya false )
// if(12) ---> ager true false k alawa koi random value likha jay 
//  To us case me 

// 0 "" false NaN null undefine document.all ----> to false mana jata hai ya ho jata hai
// nhi to kuchh bhi likha jay ------>true hota hai 

//     Ex ->

            //  if(45){
            //     console.log("hari");     
                                            
            //  }else{
            //     console.log("golu");           To eska output print hoga (hari) bcz true wala condition chalega
            //  }

//     Ex ->

//         if(0){
//                 console.log("hari");     
                                            
//              }else{
 //                console.log("golu");           es condition me false wala value Chalega output(golu) print hoga
//              }

// 2. condition ? true : false ......

//  ager  condition true ho to question marck k bad wala chalega nhi to colan(:) k bad wala code chalega

// Ex -> 
//  (34 < 45) ? console.log("hari") : console.log("golu");        es case me output hari print hoga




// 3. switch .....

//  Ex->

//   switch(4){
//     case 1:
//         console.log("hay");
//         break;
//         case 2:
//             console.log("no");
//         case 3: 
//         console.log("nami");
//         break;
//         case 4: 
//         console.log("hariom pandey");     

//     }
  




// **   most Imp topic that is loop.......

// Straight forward loops --> na hi value badalti hai 
//                              na hi printing badalti hai

//    dynamic loop --> value bdal sakti hai and printing bhi badal sakti hai


//    for loop .....

//   for(start; end; change){

//   }

// Ex--> 5 trms hariom print karna hai...

 
//  for(let i = 34; i < 51; i++){    5 bar hari print hoga 
//     console.log("hari");
//  }
 

// for( let i = 1; i < 51; i++){      50 bar 1 print hoga
//     console.log("1");
// }


// for(let i = 3; i < 54; i++){       output 3 se 53 tk sari value print hogi
//     console.log(i);
// }
  

// for(let i = 50; i > 1; i--){         output 50 se 2 tk sare value print hogi
//     console.log(i);
// }



// for(let i = 45; i > 0; i--){
//     if(i === 5 || i === 8) {
//         continue;                      output print hoga 45 se 1 tak jisme 5 and 8 do number hyde ho jayenge
//     }
//     else console.log(i);
// }




// for(let i = 1; i < 21; i++){
//     if(i%2===0){
//         console.log(i);
//     }
// }


// ** print whether numbers from 1 to 10 are even or odd
// for each number ,check : even -> "even" , else -> "odd" 


// for(let i = 1; i < 21; i++){
//     if(i%2===0){
//         console.log(`${i} -> even`);
//     }else console.log(`${i} -> odd`);
// }





//** ask user for a number and say if its positive or negative 
// use prompt() and a conditional. */



// let num = prompt("enter a number");
// if(num > 0){
//     alert("number is possitive");
// }else if(num < 0){
//     alert("number is negative");

// }else alert("number zero hai");


//* prompt se kuchh bhi mango o hume string deta hai

// let num = +prompt("Enter a number");


// if(num > 0)  console.log("possitive");
// else if(num < 0)  console.log("negative")
//     else console.log("zero hai ");


// console.log(typeof num);





// "    ha            "   --> es condition ko space hatane k liye .trim() ka use kiya jata hai


// let age = prompt("ege btao");
// if(age === null){
//     console.error("you cancelled it");

// }else  if(age.trim() === ""){ 
   
//     console.error("bhai dhange se likhle.");
// }else{
    
//   age = +(age.trim());
//   if(isNaN(age)){
//     console.error("bhai please number dede");
//   }else{
//     console.log("confirm yr number hai")
//   }
// }



// let marks = prompt("enter the marks");
// if(marks === null){
//     console.error("incorr")
//     console.error(" you cancelled it");

// }else if(marks.trim() === ""){
//     console.error("bhai dhang se likh le");

// }
// else{
//     marks = Number(marks.trim());
//     if(isNaN(marks)){
//         console.alert('the onditon of perteing');
//         console.error("bhai numer de de... ");
//     }else console.log("bikul ye number hai")
// }





// user se ek age mango jo ki vote dene me alligible ho

// let age = prompt("enter your name");

// if(age===null){
//     console.error("you cancelled it");

// }else{
//     if(age.trim() === ""){
//         console.error("please write something..");

//     }else{
//       age =  Number(age);
//       if(isNaN(age)) {
//         console.error("plz enter a number");

//       }else {
//         if(age < 0) console.error("amanya age")

//        else if(age >= 18) console.log("you can vote");
//         else console.log("you cant vote");

//       }
//     }
// }




// print  multiplication table of 5.....

// for(let i = 1; i < 11; i++){
//     console.log(`5 x ${i} = ${5*i}`); 
// }





// count how many numbers btween 1 and 15 are greater than 8 loop count conditionally


// let count = 0;

// for(let i = 1; i < 16; i++){
//     if(i > 8){
//         count++;
//         console.log(i);
//     }
// }
// console.log(`total count is ${count}`);




// asked user for pasword and print acces status


// let password = "hariom@123";

// let pass = prompt("pasword btao");
// if(pass === null){
//     console.error("you cancelled it");
 
// }else {
//     if(password.trim() === ""){
//         console.error("please write something..");
// } else{ 
    

//     if(pass === password){
//         console.log("correct");
//     }else{
//         console.log("incorrect");
//     }
// }
// }








// allow only 3 attempt to enter correct password 
// if user get it right early stop. if not "acccount locked" 



// start 

// ... /// your.code
// change
// }



// let i = 1;
// while(i<11){
//     console.log("hariom");
//     i++;
// }



// let pass = prompt("tummujhe password do");

// while(pass !== "ruk jao"){ 
//     console.log(pass);
// pass = prompt("tum mujhe password do");
// }


// solution.......


// let attempt = 0;
// let open = false;
// let pass = "hari";


// let password = prompt("password btao");
// attempt++;

// if(password === pass) open = true;


// while(password !== pass){
//     if(attempt === 3){
//         console.error("acccount locked");
//         break;
//     }
//     password = prompt("password btao");
//     if(password === pass) open = true;
//     attempt++;

// }
//  if(open === true){
//         console.log("account opened");
// }






// prectice ..... question...

// question....1,

// ask user age and check if eligible to vote 
// if age >= 18 then "eligible" else then "not eligible"





// let age = prompt("enter your age");

// if(age === null || age.trim() === ""){
//     console.log("invalid age");
// }
// else{
//       age = Number(age); 

//      if(isNaN(age)){
//         console.log("plz enter a number");
//      } else if(age >= 18){
//         console.log(`your are eligible: ${age}`);
//      }else {
//         console.log("not eligible to vote")
//      }

// }



// question ...2,

//  print multiplication table of 5 use loop to print 
// 5 x 1 to 5 x 10



//    for(let i = 1; i < 11; i++){
//     console.log(`5 x i : ${5*i}`);
//    }
    

// question .....3,

// count  how many numbers between 1 and 15 are greater than 8
// loop and count conditionally



// let  count = 0;

// for(let i = 1; i < 16; i++){
//     if(i > 8 ){
//         count++;
//         console.log(i);
//     }
   
// }
//  console.log(`total number of count : ${count}`);




// question ....4,

// asked user for password and print acces status hardcoded correct
// password . compare with user input.


// let pass = "hari@123";

// let password = prompt("enter a password");

// if(password === null || password.trim() === ""){
//     console.error("incrrect password");
// }
//  else if(password === pass){
//     console.log("acces");

// }else {
//     console.log("not acces");
// }


// question.... 5,

// allow only 3 attempts to enter correct password
// if user get it right early , stop. if not "Acount locked"


// let attempt = 0;
// let pass = "hariom@123";
// let open = false;

// let password = prompt("enter your password");

// if(password === pass) open = true;

// while(password !== pass){
//     if(attempt === 3){
//         console.error(" Account locked for 24hours");
//         break;

//     }
//     let password = prompt("enter your password");

//     if(password === pass) open = true; 
//     attempt++;

// }
// if(open === true){
//     console.log("Account open");
// }












// ** Find the age of adult or young..........

// function hariOm(age){
//     if(age<18) return "too young";
        
//        return  "Adult";
    
// }

// console.log(hariOm(12));


// ** pass a function into another function and execute it inside.


//   function hari(val){
//     val();

//   }

//   hari(function (){
//     console.log("hariom pandey");

//   })


//** */ What is higher-order function ? .....


// function dsds(valu){  ----> yhi higher-order function hai kuki accept kr rha ek or function
//     valu();
   

    
// }
// dsds(function(){

// })



// **pure function .......


//  function double(num) {
//   return num * 2;            ye pure function hai kyuki ye khud k uper depend kr rha hai

//  }
//  console.log(double(6));


// **impure function .....

//    let x = 4;
//    function haru(a){       ye impure function hai kyuki ye x k uper depend hai
//     return a * x ;
//    }
   
//    console.log( haru(5));


// ** closure ---->>.....

// closure ek aisa function hota hai jo apne outer 
// function ke variable ko yaad rakhta hai humesa.


//  Ex ->:
         
        //  function dds(){

        //     let x = 5;
        //     return function(){
        //         console.log(x);
        //     } 
    
        // } 



        // dds(); 





        // question.... 11,

       // Allow only 3 attampt enter the correct password
      
// let attempt = 0;
// let sahipassword = "harsh";


// let userpassword = prompt ("apna password batao");
//  attempt++;


// // while banao jo tab tak chale jb tk password match na kar jaye

// while(attempt < 3 && sahipassword !== userpassword){
   
   
//     userpassword = prompt ("apna password btao");
//      attempt++;

// }
//  if(attempt === 3 && sahipassword !== userpassword ) {
//         console.error("Acount lock !");
        
//     } else {
//         console.log("ekdam sahi password hai");
//   }
    


  let  attempt = 0;
    let sahipassword = "hari";
    let userpassword = prompt ("apna password btao");
    attempt++;

    // ek while bnao jo tb tk chale jb tk password match na kr jaye
    
while( attempt < 3 && sahipassword !== userpassword){

    userpassword = prompt ("apna password btao");
    attempt++;
}
if (attempt === 3 && sahipassword !== userpassword){
    console.error("Acount locked !");
} else{
    console.log("done");
    
}


// question...12

// Asked user for words until they type "stop" . count how many times they typed "yes"

// loop until "stop" is typed . count "yes".
















