const gridContainer = document.querySelector('div');
const button = document.getElementById('button-game');


for(i=1;i<101;i++){
    const showingSquare = createSquare('div','square');
    showingSquare.append([i]);
    
    button.addEventListener('click',function(){
        gridContainer.classList.add('grid');
        showingSquare.classList.add('square');
        gridContainer.appendChild(showingSquare);
    })

    showingSquare.addEventListener('click', function(){
        showingSquare.classList.toggle('azure-square');
        console.log(document.querySelector('div.azure-square').innerHTML)
    })
}

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