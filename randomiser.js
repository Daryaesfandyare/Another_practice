let number = Math.floor(Math.random() * 5);

function randomiser(){
    if(number === 0){
       document.getElementById('info').style.color = 'orange';
       return 'My senses tell me that you\'re not responsible enough. Get out of here, you don\'t deserve a cat.'
    } else if(number === 1){
        document.getElementById('info').style.color = 'blue';
        return 'You got the Ragdoll!'
    } else if(number === 2){
        document.getElementById('info').style.color = 'red';
        return 'Lets face it, you might be reponsible but you\'re too broke love. Ever considered a stray cat?'
    } else if(number === 3){
        document.getElementById('info').style.color = 'green';
        return 'Congrats! You got the Persian!'
    } else if(number === 4){
        document.getElementById('info').style.color = 'purple';
        return 'Scottish Folds are your spirit animal :)'
    }
}

let fateButton = document.getElementById("fateButton");

function change(){
   let paragraph = document.createElement('p');
   paragraph.id = 'info';
   document.getElementById('section').appendChild(paragraph);
   paragraph.innerHTML = randomiser();
   paragraph.style.fontWeight = 'bold';
   paragraph.style.fontFamily = 'Roboto';
   paragraph.style.display = 'flex';
   paragraph.style.justifyContent = 'center';
   paragraph.style.lineHeight = '100px';
   paragraph.style.fontSize = '30px';
}

fateButton.addEventListener('click', change);

function stopListing(){
    fateButton.removeEventListener('click', change)
}

fateButton.addEventListener('click', stopListing)

//aboutus

let heading = document.getElementById('lastheading');

function randomiserTwo(){
    if(number === 0){
        heading.style.color = 'orange';
     } else if(number === 1){
        heading.style.color = 'blue';
     } else if(number === 2){
        heading.style.color = 'red';
     } else if(number === 3){
        heading.style.color = 'green';
     } else if(number === 4){
        heading.style.color = 'purple';
     }
}

heading.addEventListener('click', randomiserTwo);



