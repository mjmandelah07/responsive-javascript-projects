let userName;
let email;
let phoneno;
let age;

// Get user detail and save in the local storage
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

// prompt user to enter name before accessing the page
const loadUserInformation = () => {
    userName = prompt("Enter Your Name");
    const bioDataForm = document.getElementById("personForm");
    bioDataForm.addEventListener('submit', store);

    // check if user name is empty, null or is a string, else if user name is already in local storage
    if (userName === null || userName === "" || !/^[a-zA-Z ]+$/.test(userName) ) {
        location.replace("error.html");
    }else if (userName in localStorage) {
        changeFormStyle();
    }else{
        changeTableStyle();
    }

}


// Hide the form  and display the details table if the user exists already
const changeFormStyle = () =>{
    let formElement = document.getElementById("formDiv");
    formElement.style.display = "none";

     // retrieve user details from local
     const text = localStorage.getItem(userName);
     const obj = JSON.parse(text);

     // set table row properties to user details from local storage
     document.getElementById("userName").innerHTML = userName;
     document.getElementById("userEmail").innerHTML = obj.email;
     document.getElementById("userPhoneNo").innerHTML = obj.phoneNo;
     document.getElementById("userAge").innerHTML = obj.age;

}

// hide the table element and display the form element when the user does not exist
const changeTableStyle = () => {
    let tableElement = document.getElementById("tableDiv");
    document.getElementById("user-name").value = userName;
    tableElement.style.display = "none";
}


window.onload = loadUserInformation();
