const playButton = document.getElementById('button-game');
playButton.addEventListener(('click'), function(){
    startNewGame();
    document.getElementById('output').innerHTML=''
});

function startNewGame(){
    const gridElement = document.querySelector('div.grid');

    gridElement.innerHTML = "";

    const bombContainer = getRandomUniqueNumber( 1, 100, 16 );
    console.log('questa sono bombe: '+bombContainer)

    for (let index = 0; index < 100; index++) {
        const newCell = createElement('div','square',
        `<p>${index + 1}</p>`);
        
            if(bombContainer.includes(index+1)){
                newCell.classList.add('bomb');
            }

        newCell.addEventListener('click', function(){
            console.log(index + 1);
            console.log(this.classList)

            if(newCell.classList.contains('bomb')){
                newCell.classList.toggle('red-square');
                document.getElementById('output').innerHTML='Hai perso!'
                gridElement.innerHTML = "";
            }else{
                newCell.classList.toggle('azure-square');
                counter++
                if(counter==84){
                document.getElementById('output').innerHTML='Hai Vinto!'

                }
            }
        });

        gridElement.appendChild(newCell);
    }
}

        let counter = 0


/**
 * Function that creates a custom HTML element with the given tag and classes (as a string)
 *
 * @param {string} tagName The tag of the element to be created as a string
 * @param {string} className The classes of the element to be created as a string
 * @param {string} htmlContent The content of the element to be created as a string, including html tags.
 */
function createElement(tagName, className, htmlContent){
    const htmlElement = document.createElement(tagName);
    htmlElement.className = className;
    htmlElement.innerHTML = htmlContent;
    return htmlElement;
}

/**
 * Function that generates an array of random unique numbers between two values (both included).
 *
 * @param minNum The minimum interval for the random generated numbers
 * @param maxNum The maximum interval for the random generated numbers
 * @param elements The number of elements to be generated
 * @returns The list of random unique generated numbers, or an empty array if it is not possibile to generate that amount of numbers within the given interval.
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

/**
 * Function that generates a random number (not secure) between two values, both included.
 *
 * @param minumNumber the included minium value of the random generated number range.
 * @param maximumNumber the included maximum value of the random generated number range
 * @returns A randomly generated number.
 */
function getRandomInt(minumNumber, maximumNumber){
    const randomNumber = Math.floor( Math.random() * ( maximumNumber - minumNumber +1) + minumNumber);

    return randomNumber;
}