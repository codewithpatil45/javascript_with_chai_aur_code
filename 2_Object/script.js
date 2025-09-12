// console.log("patil");

// // singleton 

// //objext literals

// const Jsuser = {
//     name: "patil",        // key
//     location: "pune",
//     "full name": "atharva bhilare",
//     email: "atharvabhilare4050@gmail.com",
//     isLoggedIn: false,
// };
// console.log(Jsuser);

// console.log(Jsuser.email);
// // console.log(Jsuser.["email"]);


// Jsuser.email = "codewithpatil45@gmail.com"

// // Jsuser.greeting = function () {
// //     console.log("It is Patil   ");
    
// // }
// // console.log(Jsuser.greeting());

// const userr ={}
// // const userr = new Object()

// // userr.id ="11265ssdc"
// // userr.name ="sujar"
// // userr.isLoggedin =false
// // console.log(userr)

// const regularUser = {
//      email : "sawygswdfywsu@gmaiil.com",
//      fullnamee : {
//         userFullname: {
//              fistname: "Ruhul",
//              lastname : "galwade",
//         }
//      }
// }
// // console.log(regularUser.fullnamee.userFullname)

// const obj1 = {
//     1:"a",2:"b"
// }
// const obj2 = {
//     3:"c",4:"d"
// }
// // const obj3 = {obj1 ,  obj2}
// // const obj3 = Object.assign({}, obj1 , obj2)
// const obj3 = {...obj1, ...obj2}
// // console.log(obj3);


// const useer = [
//     {
//         id : 1,
//         emsl :"bot@gmail.com",
//     }  {
//         id : 1,
//         emsl :"bot@gmail.com",
//     }  {
//         id : 1,
//         emsl :"bot@gmail.com",
//     }  {
//         id : 1,
//         emsl :"bot@gmail.com",
//     }  {
//         id : 1,
//         emsl :"bot@gmail.com",
//     }
// ]
// userr[1].emsl











//Object de-structure and JSON API intro

const course = {
    coursename: "js in hindi",
    price:"999",
    CouserInstructo: "ATharva",
}

// course.price = "Rate"

const{price} = course

console.log(price);

//Api

// {
//     "name" : "patil",
//     "cousedname" : "js",
//     "Price" : "free",
// }


console.log("Done");
