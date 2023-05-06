const dishList = document.querySelector('.list');
const priceList = document.querySelector('.price-list');

const menu = document.querySelector('.menuField');
const price = document.querySelector('.price');
console.log(price);
const addItem = document.querySelector('.click');

addItem.addEventListener('click', function() {
    // create new list programmatically
    const menuLi = document.createElement('li');
    const priceLi = document.createElement('li');

    // get the input field values
    const menuItem = document.createTextNode(menu.value);
    const priceItem = document.createTextNode(price.value);
    console.log(priceItem);

    // add the new list item to the list created above
    menuLi.appendChild(menuItem);
    priceLi.appendChild(priceItem);

    // append the new list item to the list
    dishList.appendChild(menuLi);
    priceList.appendChild(priceLi);

    // clear input fields
    menu.innerHTML="";
    price.innerHTML="";
})
