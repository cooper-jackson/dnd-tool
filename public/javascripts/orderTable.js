function orderTable(table1, table2){
  let table = document.getElementById(table1)
  let orderedTable = document.getElementById(table2)
  let orderedTableLength = orderedTable.rows.length-1;
  numberOfCharacters = table.rows.length-1;
  characterArray = []

  for(let i = 1; i <= orderedTableLength; i++) {
    orderedTable.deleteRow(1)
  }

  for(let i = 1; i <= numberOfCharacters; i++){
    let x = new Character();
    x.characterName = table.rows[i].cells[0].children[0].value;
    x.roll= parseInt(table.rows[i].cells[2].innerHTML) + parseInt(table.rows[i].cells[1].children[0].value)
    characterArray.push(x)
  }

  characterArray.sort(function(a,b) {return b.roll - a.roll})

  console.log(characterArray)
  for(let i = 1; i <= numberOfCharacters; i++)
  {
    x= document.getElementById(table2)

    var row = x.insertRow();
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    orderedTable.rows[i].cells[0].innerHTML = characterArray[i-1].characterName
    orderedTable.rows[i].cells[1].innerHTML = characterArray[i-1].roll
  }
  if(table.id == "perception") {
    console.log(parseInt(document.getElementById("check-DC").value))
    for(let i = 1; i <= numberOfCharacters; i++) {
      if(parseInt(orderedTable.rows[i].cells[1].innerHTML) >= parseInt(document.getElementById("check-DC").value)){
        orderedTable.rows[i].cells[1].style.backgroundColor = "rgb(163, 242, 157)";
        continue;
    } else {
        break;
      }
    }
  }
  // console.log(document.getElementById("checkDC").value)
}
