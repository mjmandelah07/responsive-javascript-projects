// get the input element for menu name and price
const menus = document.querySelector(".menuField");
const prices = document.querySelector(".price");

// get the span element for error message
const statusMsg = document.querySelector("#status");

// get the form ids
let addForm = document.getElementById("addForm");
let updateForm = document.getElementById("updateForm");
let removeForm = document.getElementById("removeForm");
let clearButton = document.getElementById("clearButton");

// declare the menu data structure
let foodData = [];

// Retrieve the food data from local storage
let storedFoodData = localStorage.getItem("foodData");
if (storedFoodData !== null) {
  foodData = JSON.parse(storedFoodData);
}else{
  foodData = [];
}

// Function to render the table
const renderTable = () => {
  var table = document.getElementById("foodTable");
  table.innerHTML = "";

  // insert headers in the table
  var headerRow = table.insertRow();
  var menuHeader = headerRow.insertCell(0);
  var priceHeader = headerRow.insertCell(1);
  menuHeader.innerHTML = "Food";
  menuHeader.classList.add("th1");
  priceHeader.innerHTML = "Price";
  priceHeader.classList.add("th2");

  // loop through the foodData stored in localStorage and render
  foodData.forEach(function (item) {
    table.innerHTML += `<tr>
  <td>${item.name}</td>
  <td class='td2'>$${item.price}</td>
  </tr>`;
  });
}

// Clear the food array
const clearFoodData = () => {
    foodData = [];
    localStorage.removeItem("foodData");
    renderTable();
  }

// Remove a food item from the array
const removeFoodItem = (name) => {
    let index = foodData.findIndex(food => food.name === name);
    if (index !== -1) {
      foodData.splice(index, 1);
      localStorage.setItem("foodData", JSON.stringify(foodData));
      renderTable();
      removeForm.reset();
    }
  }

// Update a food item in the array
const updateFoodItem = (name, price) => {
  let index = foodData.findIndex((food) => food.name === name);
  if (index >= 0) {
    foodData[index].price = price;
    localStorage.setItem("foodData", JSON.stringify(foodData));
    renderTable();
    updateForm.reset();
  }
};

// add new food items to storage
const addItems = (name, price) => {
  foodData.push({ name: name, price: price });
  localStorage.setItem("foodData", JSON.stringify(foodData));
  // display the new food items after pushing to local storage
  renderTable();
  addForm.reset();
};


  // function to validate the values from the form and add them to the menu
 const addValidate = () => {
    //style the error message
    document.getElementById("status").style.color = "red";
    // get the input field values
    let menuValue = menus.value.trim();
    let priceValue = prices.value.trim();
    priceValue = parseInt(priceValue);

    // check if the input value is empty
    if (menuValue.length === 0 || priceValue.length === 0) {
      statusMsg.innerHTML = "Please enter a valid value.";
      return;
    } else {
      // check if pricItem is a number
      let objRegExp = /(^-?\d\d*$)/;
      if (objRegExp.test(priceValue)) {
        addItems(menuValue, parseFloat(priceValue));
        menuValue = "";
        priceValue = "";
      } else {
        statusMsg.innerHTML = "Please enter a number.";
        console.log(priceValue);
        return;
      }
    }
  };

  // function to validate the values from the form and update them to the menu
  const updateValidate = () => {
    // style the error message
    document.getElementById("status").style.color = "red";
    // get the input field values
    let menuValue = menus.value.trim();
    let priceValue = prices.value.trim();
    priceValue = parseInt(priceValue);

    // check if the input value is empty
    if (menuValue.length === 0 || priceValue.length === 0) {
      statusMsg.innerHTML = "Please enter a valid value.";
      return;
    } else {
      // check if pricItem is a number
      let objRegExp = /(^-?\d\d*$)/;
      if (objRegExp.test(priceValue)) {
        updateFoodItem(menuValue, parseFloat(priceValue));
        menuValue = "";
        priceValue = "";
      } else {
        statusMsg.innerHTML = "Please enter a number.";
        return;
      }
    }
  }

   // function to validate the values from the form and remove them to the menu
  const removeValidate = () => {
    // style the error message
    document.getElementById("status").style.color = "red";
    // get the input field values
    let menuValue = menus.value.trim();
    console.log(menuValue);

    // check if the input value is empty
    if (menuValue.length === 0) {
      statusMsg.innerHTML = "Please enter a valid value.";
      return;
    } else {
      removeFoodItem(menuValue);
  }
  }
  // function to clear all the menu
  const clearAll = () => {
    alert('Do you want to clear all  the menu items?');
    clearFoodData();
  };


  window.onload = renderTable();
