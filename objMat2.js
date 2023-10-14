const readline = require("readline-sync")
const bicycle = {
    brand: "CALOI",
    brake: "Freio V-Brake",
    rim: 29,

    pedal: function(){
        console.log("\nEssa bicicleta está pedalando");
    },

    braking: function(){
        console.log("\nEssa bicileta está freiando");
    }
}
let test1,test2,test3
do {
    test1 = true
    do {
        test2 = true
        do {
            test3 = false
            console.log("\nEscolha a opção");
            console.log("1 - pedalar");
            console.log("2 - Freiar");
            let ask = readline.questionInt(": ")
            switch (ask) {
                case 1:
                    bicycle.pedal()
                    break;
                case 2:
                    bicycle.braking()
                    break
                default:
                    console.log("\nInforme um valor válido");
                    test3 = true
                    break;
            }
        } while (test3);

        let Continue = readline.question("\nDeseja continuar? n para 'não': ")
        if (Continue=="n") {
            test2 = false
        }
    } while (test2);   
} while (test1);