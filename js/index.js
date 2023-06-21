import Player from "./Player.js";

const main = () => {
  let player1 = null;
  let player2 = null;
  let name1 = document.getElementById("name-input-1");
  let name2 = document.getElementById("name-input-2");
  let divPlayerName1 = document.getElementById("player-name1");
  let divPlayerName2 = document.getElementById("player-name2");
  let p = document.createElement("p");

  let enter1 = (e) => {
    if (e.key === "Enter") {
      name1 = document.getElementById("name-input-1").value;

      if (name1 == "") {
        return;
      }

      player1 = name1;
      const playerOne = new Player(player1);
      player1 = playerOne;
      p = player1;
      divPlayerName1 = "";
      divPlayerName1.push(p);
      console.log(p);
    }
  };

  let enter2 = (e) => {
    if (e.key === "Enter") {
      name2 = document.getElementById("name-input-2").value;
      if (name2 == "") {
        return;
      }
      player2 = name2;
      const playerTwo = new Player(player2);
      player2 = playerTwo;
      p = player2;
      divPlayerName2 = "";
      divPlayerName2.push(p);
      console.log(player2);
    }
  };

  name1.addEventListener("keydown", enter1);
  name2.addEventListener("keydown", enter2);
};

window.addEventListener("load", main);
