// function to get the current URL from the browser
function getCurrentURL () {
    return window.location.search
}
const currentUrl = getCurrentURL()

// execute when breed link is clicked and window is refreshed
const onPageLoad = () => {
    // get the query string parameters
    const breedParams = new URLSearchParams(currentUrl);
    const dogBreedName = breedParams.get('breed');

    // check if query string parameter exists
    if (dogBreedName) {
        // fetch the dog breed random image
        fetch(`https://dog.ceo/api/breed/${dogBreedName}/images/random`)
        .then(dogBreedRes =>dogBreedRes.json())
        .then(dogImage => {
        // get the response from the server and display the breed ramdom image to the html page
        const dogBreedRandomImage = `<img src="${dogImage.message}"/>`
        document.querySelector('#breedImage').insertAdjacentHTML('beforeend', dogBreedRandomImage);

        document.getElementById('bigHeading').innerHTML = `Random ${dogBreedName} Dog Breed Image`;  // Dog breed header text
        })
        changeDogStyle();
    }else {

        // if query string is empty, display random image of dog
        fetch('https://dog.ceo/api/breeds/image/random')
        .then(dogImageRes => dogImageRes.json())
        .then(dogImageData => {
        //get the response from the server and display the dog image to the html page
        const dogImage = `<img src="${dogImageData.message}"/>`;
        document.querySelector('#dogImages').insertAdjacentHTML('beforeend', dogImage);
        
        document.getElementById('smallHeading').innerHTML =`Random Dog Image`;  // Dog image header text
        })
        changeBreedStyle();
    }
};

// function to hide the breed image if query string is empty
const changeBreedStyle = () =>{
    let breedDivElement = document.getElementById("randomBreedImage");
    breedDivElement.style.display = "none";
}
// function to hide random dog image if query string exists
const changeDogStyle = () =>{
    let dogDivElement = document.getElementById("dogImage");
    dogDivElement.style.display = "none";
}
