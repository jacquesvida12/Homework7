// Country list
const countryList = [
    "Afghanistan",
    "Albania",
    "Algeria",
    "Andorra",
    "Angola",
    "Anguilla",
    "Antarctica",
    "Antigua-and-Barbuda",
    "Argentina",
    "Armenia",
    "Aruba",
    "Australia",
    "Autria",
    "Azerbaïjan"
  ];
  
const countryEl = document.querySelector("input");
const autofillEl = document.getElementById("suggestions");

//make the autofill and return it
const autofiller = country => {
   const element = document.createElement("div");
    element.classList.add("suggestion");
    element.textContent = country;
    element.addEventListener("input", e => {
        countryEl.value = e.target.textContent;
        autofillEl.innerHTML = "";
    });
    return element;

};

countryEl.addEventListener("input", () => {
    autofiller.innerHTML = "";
    countryList.forEach(country => {
        if (country.startsWith(countryEl.value)) {
            autofillEl.appendChild(autofiller(country));
        }
    });
});




