//Look into Node, js back-end
class Character {
  constructor(){
    this.characterName = "";
    this.initiativeRoll = 0;
    this.initiativeMod = 0;
  }
}

let characterArray = []

function addCharacter(){
  var table = document.getElementById("initiative");
  var row = table.insertRow();
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  var cell3 = row.insertCell(2);
  var element1 = document.createElement("input");
  element1.type = "text";
  var element2 = document.createElement("input");
  element2.type = "text";

  cell1.appendChild(element1);
  cell2.appendChild(element2);
}

function rollInitiative(){
  var table = document.getElementById("initiative");

  numberOfCharacters = document.getElementById("initiative").rows.length-1;
  for(i = 1; i <= numberOfCharacters; i++){
    roll = Math.floor(Math.random() * 20) + 1
    table.rows[i].cells[2].innerHTML = roll;
  }
  //var thing = table.rows[1].cells[1].innerHTML
}
