import Player from "./Player.js";
import Mage from "./Mage.js";
import Rogue from "./Rogue.js";
import Warrior from "./Warrior.js";

const main = () => {
  let player1 = null;
  let player2 = null;
  let name1 = document.getElementById("name-input-1");
  let name2 = document.getElementById("name-input-2");
  let divPlayerName1 = document.getElementById("player-name1");
  let divPlayerName2 = document.getElementById("player-name2");
  let selectContainer1 = document.getElementById("select-container-1");
  let selectContainer2 = document.getElementById("select-container-2");
  let p = document.createElement("p");
  let divStats1 = document.getElementById("stats-1");
  let divStats2 = document.getElementById("stats-2");
  let select1 = document.createElement("select");
  let select2 = document.createElement("select");
  select1.id = "select1";
  select2.id = "select2";

  let enter1 = (e) => {
    if (e.key === "Enter") {
      name1 = document.getElementById("name-input-1").value;

      if (name1 == "") {
        return;
      }

      let option = document.createElement("option");
      let option1 = document.createElement("option");
      let option2 = document.createElement("option");
      let option3 = document.createElement("option");
      option1.classList.add("blue");
      option2.classList.add("red");
      option3.classList.add("green");

      player1 = name1;
      const playerOne = new Player(player1);
      player1 = playerOne;
      p = player1;
      divPlayerName1.innerHTML = "";
      divPlayerName1.append(p.name);
      option.append("Selectionnez une classe");
      option1.append(characters[0].label);
      option2.append(characters[1].label);
      option3.append(characters[2].label);
      select1.append(option, option1, option2, option3);
      selectContainer1.append(select1);
      selectContainer1.classList.remove("hidden");
    }
  };

  let enter2 = (e) => {
    if (e.key === "Enter") {
      name2 = document.getElementById("name-input-2").value;
      if (name2 == "") {
        return;
      }
      let option = document.createElement("option");
      let option1 = document.createElement("option");
      let option2 = document.createElement("option");
      let option3 = document.createElement("option");
      option1.classList.add("blue");
      option2.classList.add("red");
      option3.classList.add("green");

      player2 = name2;
      const playerTwo = new Player(player2);
      player2 = playerTwo;
      p = player2;
      divPlayerName2.innerHTML = "";
      divPlayerName2.append(p.name);
      option.append("Selectionnez une classe");
      option1.append(characters[0].label);
      option2.append(characters[1].label);
      option3.append(characters[2].label);
      select2.append(option, option1, option2, option3);
      selectContainer2.append(select2);
      selectContainer2.classList.remove("hidden");
    }
  };

  let selectFunction = (event) => {
    let ul = document.createElement("ul");
    if (event.target.id === "select1") {
      if (event.target.value === "mage") {
        player1.character = new Mage();
        createStats(ul, player1.character);
      } else if (event.target.value === "guerrier") {
        player1.character = new Warrior();
        createStats(ul, player1.character);
      } else if (event.target.value === "voleur") {
        player1.character = new Rogue();
        createStats(ul, player1.character);
      }

      divStats1.innerHTML = "";
      divStats1.append(ul);
      divStats1.classList.remove("hidden");
      console.log(player1.character);
    } else if (event.target.id === "select2") {
      if (event.target.value === "mage") {
        player2.character = new Mage();
        createStats(ul, player2.character);
      } else if (event.target.value === "guerrier") {
        player2.character = new Warrior();
        createStats(ul, player2.character);
      } else if (event.target.value === "voleur") {
        player2.character = new Rogue();
        createStats(ul, player2.character);
      }

      divStats2.innerHTML = "";
      divStats2.append(ul);
      divStats2.classList.remove("hidden");
      console.log(player2.character);
    }
  };

  select1.addEventListener("change", selectFunction);
  select2.addEventListener("change", selectFunction);
  name1.addEventListener("keydown", enter1);
  name2.addEventListener("keydown", enter2);

  let createStats = (ul, character) => {
    for (const property in character) {
      if (property !== "_color") {
        let li = document.createElement("li");
        li.innerHTML = `<span>${property.replace(
          "_",
          ""
        )}</span> <span>==></span> <span>${character[property]}</span>`;
        ul.append(li);
      }
    }
  };

  let characters = [
    {
      label: "mage",
      id: "mage",
    },
    {
      label: "guerrier",
      id: "guerrier",
    },
    {
      label: "voleur",
      id: "voleur",
    },
  ];
};

window.addEventListener("load", main);
