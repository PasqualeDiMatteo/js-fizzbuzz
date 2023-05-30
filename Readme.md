# FIZZBUZZ

## Traccia

Scrivi un programma che stampi in console i numeri da 1 a 100, ma che
per i multipli di 3 stampi “Fizz” al posto del numero
per i multipli di 5 stampi “Buzz” al posto del numero.
Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz” al posto del numero.

### BONUS 1:

Crea un elemento che faccia da contenitore nel DOM e poi riempilo con i tuoi elementi via JS.
Puoi usare varie tecniche (template literals, innerHTML, append, ecc).

### BONUS 2:

Applica stili differenti agli elementi aggiunti al DOM nel BONUS 1, a seconda che il valore inserito sia un numero, un fizz, un buzz o un fizzbuzz.
Come abbiamo visto puoi usare varie tecniche (style , className, classList).

---

## Steps

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
