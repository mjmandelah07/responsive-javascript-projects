let userName;
let email;
let phoneno;
let age;

const store = () => {
    email = document.getElementById("email").value.trim();
    phoneno = document.getElementById("phone-no").value.trim();
    age = document.getElementById("age").value.trim();
    const user = {
        email: email,
        phoneNo: phoneno,
        age: age
    }

    // store the user datails in the local storage
    window.localStorage.setItem(userName, JSON.stringify(user));


}




const user = () => {

    userName = prompt("Enter Your Name")
    document.getElementById("personForm").onsubmit = store;
        // check if user name is empty, null or is a string, else if user name is already in local storage
    if (userName === null || userName === "" || !/^[a-zA-Z ]+$/.test(userName) ) {
        location.replace("error.html");
    }else if (userName in localStorage) {
        return changeFormStyle();
    }else{
        return changeTableStyle();
    }

}




// Hide the form  and display the details table if the user exists already
function changeFormStyle(){
    let formElement = document.getElementById("formDiv");
    formElement.style.display = "none";

     // retrieve user details from local
     let text = localStorage.getItem(userName);
     let obj = JSON.parse(text);

     // set table row properties to user details from local storage
     document.getElementById("userName").innerHTML = userName;
     document.getElementById("userEmail").innerHTML = obj.email;
     document.getElementById("userPhoneNo").innerHTML = obj.phoneNo;
     document.getElementById("userAge").innerHTML = obj.age;

}

// hide the table element and display the form element when the user does not exist
function changeTableStyle(){
    let tableElement = document.getElementById("tableDiv");
    document.getElementById("user-name").value = userName;
    tableElement.style.display = "none";
}
