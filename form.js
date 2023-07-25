
let user={
    userName:undefined,
    password:undefined
}

//Get submit button reference from DOM model
let submitBtn = document.getElementById("btn-submit");

//Get Username Text field reference from DOM model
let userNametxt = document.getElementById("user-name-txt");


//Get Password Text field reference from DOM model
let pwtxt = document.getElementById("pw-txt");

//Added click event listener to submi button
submitBtn.addEventListener("click", () =>{
    console.log(userNametxt.value);
    console.log(pwtxt.value)

    user.userName =userNametxt.value;
    user.password=pwtxt.value;

    console.log(user.toString());
});








 

