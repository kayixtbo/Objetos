const readline = require("readline-sync")
const enemies = ["Dragão", "Espadachim", "Caçador de recompensa", "Bisão"]
const character = {
    surname: "Ogro",
    arma: "Espada",
    specialty: "Boxe",

    attack: function(){
        console.log(`\n${character.surname} está atacando o ${vilao} com sua ${character.arma}`);
    },

    defend: function(){
        console.log(`\n${character.surname} está defendendo de ${vilao}`);
    },

    run: function () {
        console.log(`\n${character.surname} está correndo do ${vilao}`); 
    }
}
let test,test1,continuar_andando,vilao,score
score = 0
do {
    if (score<enemies.length-1) {
        score++
    }else{
        score = 0
    }
    
    vilao = enemies[score]
    test = true
    console.log(`\n${vilao} surge atacando o ${character.surname}`);
    do {
        test1 = false
        console.log(`\nO que fazer?
    1 - Correr
    2 - Atacar
    3 - defender`);
    let ask = readline.questionInt(": ")
    switch (ask) {
        case 1:
            character.run()
            break;
        case 2:
            character.attack()
            break;
        case 3:
            character.defend()
            break;
        default:
            console.log("\nEscolha uma opção válida");
            test1 = true
            break;
    }
    } while (test1);
    
    continuar_andando = readline.question("\nDeseja continuar andando? digite n para 'não' ")
    if (continuar_andando=="n") {
        test = false
    }
} while (test);