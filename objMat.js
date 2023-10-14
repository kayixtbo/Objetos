const readline = require("readline-sync")
const accumulation_of_dirt = ["areia","poeira", "plastico","cabelo"]
const broom = {
    material: "madeira",
    size_centimeters: 120,

    dirty: function (dirt){
         accumulation_of_dirt.push(dirt)
    },

    to_clean: function(){
        accumulation_of_dirt = []
    }
}
let test
do {
    test = true
    let dirty_add = readline.question("Informe a sujeira: ")
    broom.dirty(dirty_add)
    let to_ask = readline.question("Deseja continuar?")
    if (to_ask=="sim") {
        continue
    } else {
        test = false
    }
    console.log(accumulation_of_dirt);
    
    let to_ask2 = readline.question("Deseja varrer a sujeira? ")
    if (to_ask2=="sim") {
        broom.to_clean
        test = false
    }
    
} while (test);


