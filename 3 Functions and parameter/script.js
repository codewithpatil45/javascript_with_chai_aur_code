console.log("patil");
//Functions and parameter in js
 function say(){
    console.log("A");
    console.log("B");
    console.log("C");
    console.log("D");
 }
//  say()
 
// function addtwonumbre (Number1,Number2){
//       console.log(Number1 + Number2);
      
// }

function addtwonumbre (Number1,Number2){
    //  let result = Number1 + Number2
    //   return result
    return Number1 + Number2
    }


const result= addtwonumbre(3,4)
// console.log(result);

function isLoggedIn (usernamme){
    return `${usernamme} Just you  loging`
}
console.log(isLoggedIn("Patril"));

//Functions with objects and array in javascript \

function calculate(...nym1){
    return nym1
}
console.log(calculate(20000, 400, 800, 47845))

  const user = {
    username : "Atharva",
    Price : 999
  }
  function hand(any){
    console.log(`username is ${any} and Price is ${any} `);
    
  }
  console.log(user);
  