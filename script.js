// Copiamo la griglia fatta ieri nella nuova repo e aggiungiamo la logica del gioco.

const gridContainer = document.querySelector('div');
const button = document.getElementById('button-game');


for(i=1;i<101;i++){
    const showingSquare = createSquare('div','square');
    showingSquare.append([i]);

    // Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe.
    //devo collegare l'array di bombe generate ai numeri dei quadrati
    // devo dar loro calsse red-square on click
    // e quando questo succede deve apparire un messaggio di sconfitta e il gioco deve fermarsi
    button.addEventListener('click',function(){
        gridContainer.classList.add('grid');
        showingSquare.classList.add('square');
        gridContainer.appendChild(showingSquare);
        showingSquare.classList.remove('azure-square');
        showingSquare.classList.remove('red-square');


    })

    showingSquare.addEventListener('click', function(){
        showingSquare.classList.toggle('azure-square');
    })
}
//La partita termina quando il giocatore clicca su una bomba o quando raggiunge il numero massimo possibile di numeri consentiti 



/**
 *  function that will create html element
 * @param tag 
 * @param classTag 
 */
function createSquare (tag, classTag){
    const square = document.createElement(tag);
    square.classTag+= classTag;
    return square;
}

/**Function that generates a random number
 * 
 * @param {*} minumNumber is the maximum number in the range
 * @param {*} maximumNumber is the minimum number in the range
 * @returns 
 */

function getRandomInt(minumNumber, maximumNumber){
    const randomNumber = (Math.floor( Math.random() * maximumNumber) + minumNumber);
    return randomNumber;
}

/** function that generates x random numbers always different
 * 
 * @param {*} minNum 
 * @param {*} maxNum 
 * @param {*} elements 
 * @returns 
 */

function getRandomUniqueNumber( minNum, maxNum, elements ){
    const numbersList = [];

    if ( (maxNum - minNum) < elements ){
        return [];
    }

    while (numbersList.length < elements){
        const newRandomNumber = getRandomInt(minNum, maxNum);
        if (!numbersList.includes(newRandomNumber)){
            numbersList.push(newRandomNumber);
        }
    }

    return numbersList;
}