const readline = require("readline-sync")
const perfil = {
    Nome: "Deivyson",
    Idade: 22,
    Bio: "Cogito ergo sun",

    mudar_bio: function (m_bio) {
        perfil.Bio = m_bio
    },

    mudar_nome: function(m_nome){
        perfil.Nome = m_nome
    },

    mudar_idade: function(m_idade){
        perfil.Idade = m_idade
    }

}
let test,test2,ask,N_nome,N_bio,N_idade,ask2,test3
do {
    test = false
    do {
        test2 = false
        console.log(`\nOpções
    1 - mudar nome
    2 - mudar idade
    3 - mudar bio`);
        ask = readline.questionInt("\nInforme a opção: ")
        switch (ask) {
            case 1:
                console.log(`\nNome: ${perfil.Nome}, Idade: ${perfil.Idade}, Bio: ${perfil.Bio}`)
                N_nome = readline.question("\nInforme o novo nome: ")
                perfil.mudar_nome(N_nome)
                console.log(`\nNome: ${perfil.Nome}, Idade: ${perfil.Idade}, Bio: ${perfil.Bio}`);
                break;
            case 2:
                console.log(`\nNome: ${perfil.Nome}, Idade: ${perfil.Idade}, Bio: ${perfil.Bio}`)
                N_idade = readline.question("\nInforme a nova idade: ")
                perfil.mudar_idade(N_idade)
                console.log(`\nNome: ${perfil.Nome}, Idade: ${perfil.Idade}, Bio: ${perfil.Bio}`);
                break;
            case 3:
                console.log(`\nNome: ${perfil.Nome}, Idade: ${perfil.Idade}, Bio: ${perfil.Bio}`);
                N_bio = readline.question("\nInforme a nova bio: ")
                perfil.mudar_bio(N_bio)
                console.log(`\nNome: ${perfil.Nome}, Idade: ${perfil.Idade}, Bio: ${perfil.Bio}`);
                break;
            default:
                console.log("\nEscolha uma opção válida");
                test2 = true
                break;
        }
    } while (test2);

    do {
        test3 = false
        ask2 = readline.question("\nDeseja mudar algo mais? ")
        switch (ask2) {
            case "sim":
                test = true
                break;
            case "não":
                console.log(`\nFinalizando...`);
                break
            default:
                console.log("\nInforme uma opção válida!");
                test3 = true
                break;
        }
    } while (test3);
    
} while (test);