//Look into Node, js back-endx

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


function orderInitiative(){
  let table = document.getElementById("initiative")
  let orderedInitiative = document.getElementById("orderedInitiative")
  let orderedTableLength = orderedInitiative.rows.length-1;
  numberOfCharacters = table.rows.length-1;
  characterArray = []

  for(let i = 1; i <= orderedTableLength; i++) {
    orderedInitiative.deleteRow(1)
  }

  // var option = table.rows[1].cells[0].children[0].value;
  // alert(option)

  for(let i = 1; i <= numberOfCharacters; i++){
    let x = new Character();
    x.characterName = table.rows[i].cells[0].children[0].value;
    x.initiativeRoll= parseInt(table.rows[i].cells[2].innerHTML) + parseInt(table.rows[i].cells[1].children[0].value)
    characterArray.push(x)
  }

  characterArray.sort(function(a,b) {return b.initiativeRoll - a.initiativeRoll})

  console.log(characterArray)
  for(let i = 1; i <= numberOfCharacters; i++)
  {
    x= document.getElementById("orderedInitiative")
    var row = x.insertRow();
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    orderedInitiative.rows[i].cells[0].innerHTML = characterArray[i-1].characterName
    orderedInitiative.rows[i].cells[1].innerHTML = characterArray[i-1].initiativeRoll
  }

  // for(let i = 20; i > 0; i--)


  // alert(table.rows[numberOfCharacters].cells[1].innerHTML);

}
