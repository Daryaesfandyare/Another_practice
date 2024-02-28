//all var
let catHeading = document.getElementById('catheading');

//persian 
let firstButton = document.getElementById('firstButton'); 
let closeInfo = document.getElementById('closeInfo');
let persianCat = document.getElementById('image-1');
let persianParagraph = document.getElementById('paragraph-1');

function newBlock() { 
    closeInfo.style.display= 'block';
    firstButton.hidden = true;
    persianCat.style.display = 'block';
    persianParagraph.style.display = 'block';
    catHeading.hidden = true;
}
    firstButton.addEventListener('click', newBlock);

function removesBlock(){
    firstButton.hidden = false;
    persianCat.style.display = 'none';
    persianParagraph.style.display = 'none';
    closeInfo.style.display = 'none';
    firstButton.hidden = false;
    catHeading.hidden = false;
}
   closeInfo.addEventListener('click', removesBlock);
//ragdoll 

let ragdoll = document.getElementById('image-2');
let ragdollParagraph = document.getElementById('paragraph-2');
let secondButton = document.getElementById('secondButton');
let secondCloseInfo = document.getElementById('closeInfo-2');

function secondBlock(){
    ragdoll.style.display = 'block';
    ragdollParagraph.style.display = 'block';
    secondCloseInfo.style.display = 'block';
    secondButton.hidden = true;
    catHeading.hidden = true;
}
    secondButton.addEventListener('click', secondBlock);

function removesSecondBlock(){
    secondButton.hidden = false;
    ragdoll.style.display = 'none';
    ragdollParagraph.style.display = 'none';
    secondCloseInfo.style.display = 'none';
    catHeading.hidden = false;
}
    secondCloseInfo.addEventListener('click', removesSecondBlock);
//scottishfold
let scottish = document.getElementById('image-3');
let scottishParagraph = document.getElementById('paragraph-3');
let thirdButton = document.getElementById('thirdButton');
let thirdCloseInfo = document.getElementById('closeInfo-3');

let view = function(){
   scottish.style.display = 'block';
   scottishParagraph.style.display = 'block';
   thirdButton.hidden = true;
   thirdCloseInfo.style.display = 'block';
   catHeading.hidden = true;
}

   thirdButton.addEventListener('click', view);

let close = function(){
    scottish.style.display = 'none';
    scottishParagraph.style.display = 'none';
    thirdButton.hidden = false;
    thirdCloseInfo.style.display = 'none';
    catHeading.hidden = false;
}
    thirdCloseInfo.addEventListener('click', close);
