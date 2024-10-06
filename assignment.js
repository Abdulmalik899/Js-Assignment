let email =prompt("Input your email")
 if(email.endsWith("@gmail.com") || email.endsWith("@yahoo.com") ){
    console.log("email is valid")
     }else{
         console.log("Invalid Email")
     }

//part2
let password = prompt("Input your Password")
if(password.endsWith(password.slice(-1).toUpperCase()) && password.startsWith(password.charAt(0).toLowerCase()) && password.includes("0")){
    console.log("Strong Password")
}else{
    console.log("weak password")
}

//part3
let URL = prompt("Input your URl")
console.log(URL.startsWith("http://")|| URL.startsWith("https://"))
 
//part5
let username = prompt("Input Username")
if(5<username.length<15){
    console.log("valid")
}else{
    console.log("Invalid")
}

//part6
let Username = prompt("Username")
console.log(Username.charAt(0).toUpperCase() + Username.slice(1))

//part7
let fileName = prompt("Input file Name with extension")
if(fileName.endswith(".mp3")){
    console.log("It's a mp3 file")
}else if(fileName.endswith(".png" || ".jpg")){
    console.log("It's a pic file i think")
}else if(fileName.endsWith(".rar")){
    console.log("It's a file that requires extraction")
}else{
    console.log("It's another type of file")
}

//part8
let phoneNumber = prompt("Input your phone number").trim()

let Origin = prompt("What country are you from?").trim().toLowerCase()
let firstNumber= String(phoneNumber.charAt(0))
if(phoneNumber.length===11 && firstNumber==0){
   if(Origin==="nigeria"){
       console.log(phoneNumber.replace("0","+234"))
       console.log("As a Nigerian, this is your full phone number")       
   }else if(Origin==="ghana"){
        console.log(phoneNumber.replace("0","+233"))
        console.log("As a ghanaian, this is your full phone number")
   }else if(Origin==="england"){
       console.log(phoneNumber.replace("0","+44"))
        console.log("As a British, this is your full phone number")
   }else{
       console.log("Country not registered")
   }
}else{
    console.log("Invalid Phone Number")
}

//part9
let message = prompt("Deliver your message").trim().toLowerCase()
if(message.includes("bad")){
    console.log(message.replaceAll("bad","***"))
}else if(message.includes("spam")){
    console.log(message.replaceAll("spam","****"))
}else if(message.includes("shit")){
    console.log(message.replaceAll("shit","****"))
}else {
    console.log("Either there are bad words there that they have not registered or the message is clean honestly i couldn't care less but this is assignment")
}

//part10
let grade = prompt("Input your score")
if(75<=grade<=100){
    console.log("A")
}else if(60<=grade<=74){
    console.log("B")
}else if(50<=grade<=59){
    console.log("C")
}else {
    console.log("I advise that you tak another exam next year")
}

