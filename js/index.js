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
  let fightbtn = document.getElementById("fight-btn");
  let turnbtn = document.getElementById("turn-btn");
  let turnbtntxt = document.getElementById("turn-btn-txt");
  let fightlog = document.getElementById("fight-log");
  let select1 = document.createElement("select");
  let select2 = document.createElement("select");
  let fightTurn = 0;
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
      fightbtn.classList.remove("hidden");
      console.log(player2.character);
    }
  };

  let startfight = () => {
    selectContainer1.classList.add("disabled");
    selectContainer2.classList.add("disabled");
    fightbtn.innerHTML = "";
    turnbtn.classList.remove("hidden");
    let random = Math.floor(Math.random() * 2);
    if (random === 1) {
      turnbtntxt.innerHTML = `${player1.name} commence!`;
      fightTurn = 1;
    } else {
      turnbtntxt.innerHTML = `${player2.name} commence!`;
      fightTurn = -1;
    }
  };

  let handleFight = () => {
    if (fightTurn === 1) {
      fight(player1, player2);
    } else {
      fight(player2, player1);
    }

    fightTurn *= -1;
  };

  let fight = (attacker, defender) => {
    divStats1.innerHTML = "";
    divStats2.innerHTML = "";
    let ul1 = document.createElement("ul");
    let ul2 = document.createElement("ul");
    let li = document.createElement("li");
    turnbtntxt.innerHTML = `Tour de ${attacker.name}`;
    attacker.character.dodge();
    let attackp = document.createElement("p");
    li.append(attackp);
    attackp.innerHTML = `${attacker.name} attaque ${defender.name} !`;
    if (defender.character.dodge() === true) {
      let dodgep = document.createElement("p");
      li.append(dodgep);
      dodgep.innerHTML = `${defender.name} à esquivé l'attaque !`;
    } else {
      let attacknbr = attacker.character.attack();
      defender.character.hp -= attacknbr;
      let lifep = document.createElement("p");
      li.append(lifep);
      lifep.innerHTML = `${
        defender.name
      } n'a plus que ${defender.character.hp.toFixed(2)} de points de vie !`;
    }
    fightlog.prepend(li); //apparaitre en premier de la liste.
    divStats1.append(ul1);
    divStats2.append(ul2);
    createStats(ul2, player2.character);
    createStats(ul1, player1.character);
  };

  turnbtn.addEventListener("click", handleFight);
  fightbtn.addEventListener("click", startfight);
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
        )}</span> <span>==></span> <span>${character[property].toFixed(
          2
        )}</span>`;
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
