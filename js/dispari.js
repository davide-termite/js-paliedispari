function game(userChoice, userNum) {

  // // Utente sceglie Pari o dispari
  // while ((userChoice !== "pari") && (userChoice !== "dispari")) {
  //   var choice = prompt("Scegli: pari o dispari?");
  //   var userChoice = choice.toLowerCase();
  // }
  // console.log(choice);
  //
  // // Utente sceglie numero da 1 a 5
  // var userNum = prompt("Inserisci un numero da 1 a 5");
  // console.log(userNum);

  // Computer genera numero random da 1 a 5
  var computerNum = Math.floor(Math.random() * 5 + 1);
  console.log(computerNum);

  // Somma numero computer e user
  var sum = userNum + computerNum;

  if ((sum % 2 == 0) && (userChoice == "pari")){
    console.log("Hai vinto!");
  } else if ((sum % 2 != 0) && (userChoice == "dispari")) {
    console.log("Hai vinto!");
  } else if ((sum % 2 == 0) && (userChoice == "dispari")) {
    console.log("Hai perso!");
  } else if ((sum % 2 != 0) && (userChoice == "pari")) {
    console.log("Hai perso!");
  }

}

game("pari", 5);
