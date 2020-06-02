// Funzione per capire se una parola è palindroma

function palindrome(string) {

  // Divido parola in un array
  var word = string.toLowerCase();
  var wordArray = word.split("");
  console.log(wordArray);

  // Creo Array Inverso
  var wordReverse = [];
  for (var i = wordArray.length - 1 ; i >= 0; i--) {
    wordReverse = wordReverse + wordArray[i];
  }
  console.log(wordReverse);

  // Se array al contrario uguale alla parola inserita
  if (word == wordReverse) {
    console.log("SI! La parola è palindroma!");

  } else if (word != wordReverse) {
    console.log("NO! La parola non è palindroma!");
  }
}

palindrome("mimmo");
