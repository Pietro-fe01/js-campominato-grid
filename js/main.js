"use strict";

/* 
Consegna
L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
Ogni cella ha un numero progressivo, da 1 a 100.
Ci saranno quindi 10 caselle per ognuna delle 10 righe.
Quando l'utente clicca su ogni cella, la cella cliccata si colora di 
azzurro ed emetto un messaggio in console con il numero della cella cliccata.
Bonus
Aggiungere una select accanto al bottone di generazione, che fornisca una 
scelta tra tre diversi livelli di difficoltà:
- con difficoltà 1 => 100 caselle, con un numero compreso tra 1 e 100, divise
 in 10 caselle per 10 righe;

- con difficoltà 2 => 81 caselle, con un numero compreso tra 1 e 81, divise
 in 9 caselle per 9 righe;

- con difficoltà 3 => 49 caselle, con un numero compreso tra 1 e 49, divise
 in 7 caselle per 7 righe;

*/
const cellContainer = document.querySelector(".cell-container");
const playGameButton = document.getElementById("play-game");

playGameButton.addEventListener("click", function(){
    cellContainer.innerHTML = "";
    for(let i=1; i<=100; i++){
        const cellSquare = document.createElement("div");
        cellSquare.classList.add("cell-item");
        cellSquare.innerHTML = i;
        cellSquare.addEventListener("click", function(){
            this.classList.add("blue-bg-color");
        });
        cellContainer.append(cellSquare);
    }
});

