import { elements } from "./data.js";

// components

let elementIdentifier = document.getElementById("elementName");
let search = document.getElementById("search");
let main = document.getElementById("main");
let inputArea = document.querySelector(".inputArea");
let helperText = document.querySelector(".helperText");
let footer = document.querySelector(".footer");

// state management

let displayingInfo = false;

// display fetched info

function displayInfo(info) {
  displayingInfo = true;

  main.removeChild(inputArea);
  main.removeChild(helperText);
  document.body.removeChild(main);

  let newMain = document.createElement("div");
  newMain.classList.add("newMain");

  let exitContainer = document.createElement("div");
  exitContainer.classList.add("exitContainer");

  let exitIcon = document.createElement("img");
  exitIcon.src = "../assets/exit.svg";
  exitIcon.classList.add("exitIcon");

  let symbolContainer = document.createElement("div");
  symbolContainer.classList.add("symbolContainer");

  let symbol = document.createElement("div");
  symbol.classList.add("symbol");
  symbol.style.backgroundColor = "#" + info.cpkHexColor;

  let symbolAtomicMass = document.createElement("h1");
  symbolAtomicMass.classList.add("symbolAtomicMass");
  symbolAtomicMass.innerText = info.atomicMass;

  let symbolText = document.createElement("h1");
  symbolText.classList.add("symbolText");
  symbolText.innerText = info.symbol;

  let symbolAtomicNumber = document.createElement("h1");
  symbolAtomicNumber.classList.add("symbolAtomicNumber");
  symbolAtomicNumber.innerText = info.atomicNumber;

  let remInfo = document.createElement("div");
  remInfo.classList.add("remInfo");
  let remInfoLeft = document.createElement("div");
  remInfoLeft.classList.add("remInfoLeft");
  let remInfoRight = document.createElement("div");
  remInfoRight.classList.add("remInfoRight");

  let atomicNumber = document.createElement("p");
  let s = document.createElement("p");
  let name = document.createElement("p");
  let atomicMass = document.createElement("p");
  let electronicConfiguration = document.createElement("p");

  atomicNumber.classList.add("remText");
  s.classList.add("remText");
  name.classList.add("remText");
  atomicMass.classList.add("remText");
  electronicConfiguration.classList.add("remText");

  atomicNumber.innerText = "Atomic number : " + info.atomicNumber;
  s.innerText = "Symbol : " + info.symbol;
  name.innerText = "Name : " + info.name;
  atomicMass.innerText = "Atomic mass : " + info.atomicMass;
  electronicConfiguration.innerText =
    "Electronic configuration : " + info.electronicConfiguration;

  let oxidationStates = document.createElement("p");
  let standardState = document.createElement("p");
  let density = document.createElement("p");
  let groupBlock = document.createElement("p");
  let yearDiscovered = document.createElement("p");

  oxidationStates.classList.add("remText");
  standardState.classList.add("remText");
  density.classList.add("remText");
  groupBlock.classList.add("remText");
  yearDiscovered.classList.add("remText");

  oxidationStates.innerText = "Oxidation states : " + info.oxidationStates;
  standardState.innerText = "Standard physical state : " + info.standardState;
  density.innerText = "Density : " + info.density;
  groupBlock.innerText = "Type : " + info.groupBlock;
  yearDiscovered.innerText = "Year discovered : " + info.yearDiscovered;

  document.body.appendChild(newMain);
  newMain.appendChild(exitContainer);
  exitContainer.appendChild(exitIcon);
  newMain.appendChild(symbolContainer);
  symbolContainer.appendChild(symbol);
  symbol.appendChild(symbolAtomicMass);
  symbol.appendChild(symbolText);
  symbol.appendChild(symbolAtomicNumber);
  newMain.appendChild(remInfo);
  remInfo.appendChild(remInfoLeft);
  remInfo.appendChild(remInfoRight);
  remInfoLeft.appendChild(atomicNumber);
  remInfoLeft.appendChild(s);
  remInfoLeft.appendChild(name);
  remInfoLeft.appendChild(atomicMass);
  remInfoLeft.appendChild(electronicConfiguration);
  remInfoRight.appendChild(oxidationStates);
  remInfoRight.appendChild(standardState);
  remInfoRight.appendChild(density);
  remInfoRight.appendChild(groupBlock);
  remInfoRight.appendChild(yearDiscovered);

  exitIcon.addEventListener("click", () => {
    document.body.removeChild(newMain);
    document.body.appendChild(main);
    main.appendChild(inputArea);
    main.appendChild(helperText);
    main.appendChild(footer);
    displayingInfo = false;
  });
}

// fetch element according to given info

function fetchElement(info) {
  if (isNaN(info)) {
    if (info.length <= 2) {
      for (let i = 0; i <= 117; i++) {
        if (elements[i].symbol.toLowerCase() == info.toLowerCase()) {
          displayInfo(elements[i]);
          break;
        }
      }
    } else {
      for (let i = 0; i <= 117; i++) {
        if (elements[i].name.toLowerCase() == info.toLowerCase()) {
          displayInfo(elements[i]);
          break;
        }
      }
    }
  } else {
    if (elements[info - 1] != undefined) {
      displayInfo(elements[info - 1]);
    } else {
      window.alert("This element does not exist. Try again.");
    }
  }
}

// focus on input box on window load

window.addEventListener("load", () => {
  elementIdentifier.focus();
});

window.addEventListener("keypress", (e) => {
  if ((e.key == "Enter") & (elementIdentifier.value != "")) {
    fetchElement(elementIdentifier.value);
  }
});

search.addEventListener("click", () => {
  if (elementIdentifier.value != "") {
    fetchElement(elementIdentifier.value);
  }
});
