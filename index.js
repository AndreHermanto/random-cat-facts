//This function will return a string of cat fact(DO NOT MODIFY THIS FUNCTION)
async function fetchCatFact(){
    const response = await fetch("https://catfact.ninja/fact");
    const obj = await response.json();
    return obj.fact
}

//TODO: Reference to UL, Generate fact button and clear button  elements

button.addEventListener('click', async (e) => {
    const fact = await fetchCatFact();
    //TODO: Build your code to append your cat fact into the list here
    //Add a delete button, then add an event listener so it will delete the list on click

})


//TODO: Add event listener for clear button, then remove all lists on click
