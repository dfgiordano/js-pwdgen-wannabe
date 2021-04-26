// Chiedi all'utente il suo nome,
var nome = prompt ("Qual è il tuo nome?");
console.log(nome);


// poi chiedi il suo cognome,
var cognome = prompt ("Qual è il tuo cognome?");
console.log(cognome);


// poi chiedi il suo colore preferito
var colore = prompt ("Qual è il tuo colore preferito?");
console.log(colore);

var password = "La tua nuova password é:" + " " + nome + cognome + colore + "21" ;

// Infine scrivi sulla pagina nomecognomecolorepreferito21

document.getElementById("password").innerHTML = password;