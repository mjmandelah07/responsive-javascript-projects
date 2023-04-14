const userHandeler = async () => {

    try {
        const getAllUserDetails = await fetch('https://randomuser.me/api/');
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
        const userImg = `<img src="${getUserImg}" alt="avatar" class="w3-left w3-circle w3-margin-right">`;
        document.getElementById('img-div').innerHTML= userImg;
        document.getElementById('title').innerHTML = userTitle;
        document.getElementById('fullName').innerHTML = `${userFirstname} ${userLastname}`;
        document.querySelector('#address').insertAdjacentHTML('beforeend', userLocationDetails);
        document.querySelector('#email').insertAdjacentHTML('beforeend', getUserEmail);
        document.querySelector('#phoneNumber').insertAdjacentHTML('beforeend', getUserPhone);
        document.querySelector('#age').insertAdjacentHTML('beforeend', getUserAge);
        document.querySelector('#passWord').insertAdjacentHTML('beforeend', getUserPassword);
        // console.log(getUserPhone);
        // console.log(getUserAge);

    } catch (err) {
        console.log(err.message);
    }
};
