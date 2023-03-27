// fetch('https://dog.ceo/api/breed/African/images/random')
function getCurrentURL () {
    return window.location.search
}
const currentUrl = getCurrentURL()
console.log(currentUrl);

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
        const headTopic = `Random ${dogBreedName} Dog Breed Image`
        document.getElementById('bigHeading').innerHTML = headTopic;
        console.log(headTopic);
        document.querySelector('#breedImage').insertAdjacentHTML('beforeend', dogBreedRandomImage);
    })
    changeDogStyle();
    }else {

        // if query string is empty, display random image of dog
        fetch('https://dog.ceo/api/breeds/image/random')
        .then(dogImageRes => dogImageRes.json())
        .then(dogImageData => {
        //get the response from the server and display the dog image to the html page
        console.log(dogImageData.message);
        const dogImage = `<img src="${dogImageData.message}"/>`;
        const secondHeadTopic = `Random Dog Image`
        document.getElementById('smallHeading').innerHTML = secondHeadTopic;
        document.querySelector('#dogImages').insertAdjacentHTML('beforeend', dogImage);
        })
        changeBreedStyle();
    }
};

// hide the breed image if query string is empty
const changeBreedStyle = () =>{
    let breedDivElement = document.getElementById("randomBreedImage");
    breedDivElement.style.display = "none";
}

const changeDogStyle = () =>{
    let dogDivElement = document.getElementById("dogImage");
    dogDivElement.style.display = "none";
}
