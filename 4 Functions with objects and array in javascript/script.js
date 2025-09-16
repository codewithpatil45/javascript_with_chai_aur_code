console.log("Patil");
//Functions with objects and array in javascript 
// if {true}{
    
//     let a =50
//     const b =85
//    3.
   
    
    
// }

// console.log(a);
// console.log(b);
// console.log(c);

//Scope level and mini hoisting in javascript

//arrow function 

// const user = {
//   username: "Atharva",
//   price: 999,
//   welcomeMessage: function () {
//     console.log(`Welcome To Our Website, ${this.username}`);
//   }
// };

// user.welcomeMessage(); // Welcome To Our Website, Atharva
// user.username = "Patil"
// username.welcomeMessage(); 


///Scope level and mini hoisting in javascript 

// function one (){
//   const username = "Atharva"

//   function two(){
//     const Websiste = "Youtubr"
//     console.log(username);
    
//   }
//   // console.log(Websiste);

//   two()
  
// }


// one()

// if(true){
//   const username = "atharva"
//   if (username === "Patiilas")
//     console.log(username);
    
// }


//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// function add (num){
//   return num + 1
// }

// add(5)


// THIS and arrow function in javascript 


const user = {
  username: "atharvqaa",   // fixed key name and colon
  price: 999,              // removed extra space before colon (optional style)
  welcome: function () {   // fixed method name spelling
    console.log(`${this.username}, Welcome to website`); // fixed property name and typo
  }
};

// user.welcome(); // need parentheses to call the function

// user.username = "sam"
// user.welcome()

// function chai(){
//   console.log(this);
  
// }
// chai()

const chai = () => {
    let username = "ATharva"
    console.log(this.username);
    
}
// chai()

// const addtwo = (num1 , num2) => {
//   return num1 + num2
// }
// const addtwo = (num1 , num2) =>  num1 + num2
// const addtwo = (num1 , num2) =>  (num1 + num2)

const addtwo = (num1 , num2) =>  ({usernae : "Atharva"})

console.log(addtwo(45 , 50))


