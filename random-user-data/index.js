const userHandeler = async () => {
  try {
    const getAllUserDetails = await fetch("https://randomuser.me/api/");
    const allUsersDetails = await getAllUserDetails.json();
    const allUsersResults = allUsersDetails.results;
    const allUsersKeys = Object.values(allUsersResults);

    // get all users images
    const getUserImg = allUsersKeys[0].picture.large;

    // get all users names details
    const getUserNames = allUsersKeys[0].name;
    const userTitle = getUserNames.title;
    const userFirstname = getUserNames.first;
    const userLastname = getUserNames.last;

    // get all users location details
    const getUserLocation = allUsersKeys[0].location;
    const userLocationDetails = `${getUserLocation.street.number} ${getUserLocation.street.name}, ${getUserLocation.city}, ${getUserLocation.state}, ${getUserLocation.country}`;

    // get all users email addresses
    const getUserEmail = allUsersKeys[0].email;

    // get all users phone numbers
    const getUserPhone = allUsersKeys[0].phone;

    //get all users age
    const getUserAge = allUsersKeys[0].dob.age;

    //get all users password details
    const getUserPassword = allUsersKeys[0].login.password;

    // insert users information to the interface
    document.getElementById("userImage").setAttribute("src", getUserImg);
    document.getElementById("title").innerHTML = userTitle;
    document.getElementById(
      "fullName"
    ).innerHTML = `${userFirstname} ${userLastname}`;
    document.getElementById("address").innerHTML = userLocationDetails;
    document.querySelector("#email").innerHTML = getUserEmail;
    document.querySelector("#phoneNumber").innerHTML = getUserPhone;
    document.querySelector("#age").innerHTML = getUserAge;
    document.querySelector("#passWord").innerHTML = getUserPassword;
    // console.log(getUserPhone);
    // console.log(getUserAge);
  } catch (err) {
    console.log(err.message);
  }
};

const getUser = async (event) => {
  event.preventDefault();

  try {
    let gender = event.target[0].value;
    let country = event.target[1].value;
    const getAllUserDetails = await fetch(
      `https://randomuser.me/api/?gender=${gender}&nat=${country}`
    );
    const allUsersDetails = await getAllUserDetails.json();
    const allUsersResults = allUsersDetails.results;
    const allUsersKeys = Object.values(allUsersResults);
    // get all users images
    const getUserImg = allUsersKeys[0].picture.large;
    // get all users names details
    const getUserNames = allUsersKeys[0].name;
    const userTitle = getUserNames.title;
    const userFirstname = getUserNames.first;
    const userLastname = getUserNames.last;
    // get all users location details
    const getUserLocation = allUsersKeys[0].location;
    const userLocationDetails = `${getUserLocation.street.number} ${getUserLocation.street.name}, ${getUserLocation.city}, ${getUserLocation.state}, ${getUserLocation.country}`;
    // get all users email addresses
    const getUserEmail = allUsersKeys[0].email;
    // get all users phone numbers
    const getUserPhone = allUsersKeys[0].phone;
    //get all users age
    const getUserAge = allUsersKeys[0].dob.age;
    //get all users password details
    const getUserPassword = allUsersKeys[0].login.password;
    // insert users information to the interface
    document.getElementById("userImage").setAttribute("src", getUserImg);
    document.getElementById("title").innerHTML = userTitle;
    document.getElementById(
      "fullName"
    ).innerHTML = `${userFirstname} ${userLastname}`;
    document.getElementById("address").innerHTML = userLocationDetails;
    document.querySelector("#email").innerHTML = getUserEmail;
    document.querySelector("#phoneNumber").innerHTML = getUserPhone;
    document.querySelector("#age").innerHTML = getUserAge;
    document.querySelector("#passWord").innerHTML = getUserPassword;
    // console.log(getUserPhone);
    // console.log(getUserAge);
  } catch (err) {
    console.log(err.message);
  }
};

document.querySelector("#selectionForm").addEventListener("submit", getUser);
