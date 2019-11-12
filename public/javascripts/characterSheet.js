var addid_attacks = 0;
var addid_spells = 0;
var addid_items = 0;

function addFeat(id){
  var featsList = document.getElementById("feats-features")

  addid_attacks++

  var text = document.createElement("textarea")

  text.id = "feat_"+addid_attacks
  text.name = "feats[]"
  text.rows = "4"
  text.cols = "40"

  featsList.appendChild(text)
}

function addSpell(id){
  var spellsList = document.getElementById("spells")

  addid_spells++

  var text = document.createElement("textarea")

  text.id = "spell_"+addid_spells
  text.name = "spells[]"
  text.rows = "4"
  text.cols = "40"

  spellsList.appendChild(text)
}

function addItem(id){
  var itemsList = document.getElementById("items")

  addid_items++

  var text = document.createElement("textarea")

  text.id = "item_"+addid_items
  text.name = "items[]"
  text.rows = "4"
  text.cols = "40"

  itemsList.appendChild(text)
}



function addAttack(){
  var div = document.getElementById("attack-wrapper")
  let inputRow = document.createElement('div')
  let inputClasses = ['attack-name', 'attack-bonus', 'attack-damage']

  inputRow.classList.add('attack-values')

  inputClasses.forEach(item => {
    let input = document.createElement('input')

    input.setAttribute('autocomplete', 'off')
    input.classList.add(item)
    input.type = 'text'
    inputRow.appendChild(input)
  })

  div.appendChild(inputRow)
  // var input1 = document.createElement("input")
  // var input2 = document.createElement("input")
  // var input3 = document.createElement("input")
  //
  // input1.type = "text"
  // input2.type = "text"
  // input3.type = "text"
  //
  // input1.name = "attack-name[]"
  // input2.name = "attack-bonus[]"
  // input3.name = "attack-damage[]"
  //
  // div.appendChild(input1)
  // div.appendChild(input2)
  // div.appendChild(input3)
}
