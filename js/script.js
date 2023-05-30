console.log("JSOK");

/*
1. Prendo gli elementi dal DOM
2. Genero un numero = 1
3. **Per** 100 volte
   - **Se** il numero è divisibile per 3
     - Aggiungi _Fizz_
   - **Se** il numero è divisibile per 5
     - Aggiungi _Buzz_
     - **Se** l'elemento era _Fizz_ diventa _FrizzBuzz_
   - **Se** l'elemento è vuoto
     - Aggiungi il numero
   - Stampa l'elemento
   - Aumenta il numero di 1
   - Ripeti 
*/

// I take the elements from the DOM

const fizzBuzz = document.getElementById("fizz-buzz");
let listElement = "";
// Counter

for (let i = 1; i <= 100; i++) {
  let elementPrint = "";
  let box = "box";
  let element = "";

  //   if the number is divisible by 3 I add fizz

  if (!(i % 3)) {
    elementPrint += "Fizz";
    box += " fizz";
  }
  //   if the number is divisible by 5 I add buzz

  if (!(i % 5)) {
    elementPrint += "Buzz";
    box += " buzz";
  }
  // if it is not divisible by 3 or 5 we print the number

  if (!elementPrint) elementPrint = i;

  console.log(elementPrint);

  element = `<div class="${box}">${elementPrint}</div>`;

  listElement += element;
}

fizzBuzz.innerHTML = listElement;
