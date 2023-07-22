
let user={
    username:undefined,
    password:undefined
}

//Get submit button reference from DOM model
let submitBtn=document.getElementById("btn-submit");

//Get Username Text field reference from DOM model
let userNametxt=document.getElementById("usre-name-txt");

//Get Password Text field reference from DOM model
let pwtxt=document.getElementById("pw-txt");


//Added click event listener to submit button
submitBtn.addEventListener("click",()=> {
    user.username=userNametxt.value;
    user.password=pwtxt.value;

    console.log(user);
});

let userName="ICET";
let userAge=11;

let address=undefined;
//let city=null;








