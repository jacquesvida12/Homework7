// Character list. Each house has a name and a code
const houses = [
    {
      code: "ST",
      name: "Stark"
    },
    {
      code: "LA",
      name: "Lannister"
    },
    {
      code: "BA",
      name: "Baratheon"
    },
    {
      code: "TA",
      name: "Targaryen"
    }
  ];
  
  // Return an array of characters belonging to a house
  const getCharacters = houseCode => {
    switch (houseCode) {
      case "ST":
        return ["Eddard", "Catelyn", "Robb", "Sansa", "Arya", "Jon Snow"];
      case "LA":
        return ["Tywin", "Cersei", "Jaime", "Tyrion"];
      case "BA":
        return ["Robert", "Stannis", "Renly"];
      case "TA":
        return ["Aerys", "Daenerys", "Viserys"];
      default:
        return []; // Empty array
    }
  };

//make the options for the houses
const houseChoice = (text, value) => {
  const element = document.createElement("option");
  element.textContent = text;
  element.value = value;
  return element;
};
//make the list element for the houses to display

const listelement = (text) => {
  const element = document.createElement("li");
  element.textContent = text;
  return element;
};
//selector + house choices
const houseEl = document.querySelector("select");

houses.forEach(house => {
  houseEl.appendChild(houseChoice(house.name, house.code));
});
//make the list show when changing
houseEl.addEventListener("change", e => {
  const characters = getCharacters(e.target.value);
  const charEl = document.getElementById("characters");
  charEl.innerHTML = "";
  characters.forEach(characters => {
    charEl.appendChild(listelement(characters));
  });
});
