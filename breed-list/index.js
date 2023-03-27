const breedHandLer = async () => {

    try {
        const fetchBreedList = await fetch('https://dog.ceo/api/breeds/list/all/');
        const listOfBreeds = await fetchBreedList.json();
        const breedKeys = Object.keys(listOfBreeds.message);
        console.log(breedKeys[1]);

        for (i = 0; i < breedKeys.length; i++) {
            const displayBreedHtml = `<li><a href='breed.html?breed=${breedKeys[i]}'>${breedKeys[i]}</a></li>`;
            console.log(displayBreedHtml);
            document.querySelector('ol').insertAdjacentHTML('beforeend', displayBreedHtml);
        };
    }catch (err) {
        console.log(err.message);
    }
};


breedHandLer();
