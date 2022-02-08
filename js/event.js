function makeRed() {
  document.body.style.backgroundColor = 'red';
}

// handle blue button click by setting function name

const blueButton = document.getElementById('make-blue-button');
// just set the name of the function
blueButton.onclick = makeBlue;

function makeBlue() {
  document.body.style.backgroundColor = 'blue';
}

// handle event nusinf an0ynous function
const greenButton = document.getElementById('make-green-button');
// annonymous function 
greenButton.onclick = function () {
  document.body.style.backgroundColor = 'green';
}


// handel by using addEventListener
const goldButton = document.getElementById('make-gold-button');
goldButton.addEventListener('click', makeGold);


function makeGold() {
  document.body.style.backgroundColor = 'gold';
}


// addEventListener

const hotPinkButton = document.getElementById('make-hot-pink');
hotPinkButton.addEventListener('click', function makePink() {
  document.body.style.backgroundColor = 'hotpink';
})



// shortcut

document.getElementById('make-light-blue').addEventListener('click', function () {
  document.body.style.backgroundColor = 'lightblue';
})