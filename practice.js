//Arrays
const greeting = 'Hello I am a word scrambler';

const greetingArr = greeting.split('');

const greetingString = greetingArr.join('');

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function oneRandomItemFromArray(array) {
  return getRandomInt(array.length);
}

function swapTwoItems(array) {
  const item1 = oneRandomItemFromArray(array);
  let item2 = oneRandomItemFromArray(array);
  // if item1 === item2 => oneRandomItemFromArray(array)
  while (item1 === item2) {
    item2 = oneRandomItemFromArray(array);
  }

  const temp = array[item1];
  array[item1] = array[item2];
  array[item2] = temp;

  return array;
}

console.log(swapTwoItems(greetingArr).join(''));


//Maps
const candy = new Map();
candy.set('purple', 'grape');
candy.set('red', 'apple');
candy.set('blue', 'blueberry');
candy.set('yellow', 'banana');
candy.set('green', 'melon');

candy.forEach((color, flavor) => {
  console.log(`The ${flavor} flavor is colored ${color}.`);
});

console.log(candy.get('purple')); //grape
console.log(candy.get('orange')); //undefined


//Functions
function returnFlavorfromColor(color, map) {

  let flavor = map.get(color);
  //if there's a flavor, return flavor
  if (flavor) {
    return flavor;
  }
  //if there's no flavor, return console.log(....)
  else {
    console.log(`Sorry, that color doesn't have a flavor`);
  }
}


console.log(returnFlavorfromColor('purple', candy));
console.log(returnFlavorfromColor('black', candy));

function returnFlavorArr(colorArr) {

  const flavorArr = [];

  colorArr.forEach((color) => {
   const flavorGot = candy.get(color);
   if (flavorGot) {
    flavorArr.push(flavorGot);
  }
  else {
    flavorArr.push(null);
  }
  });

  return flavorArr;
}

console.log(returnFlavorArr(['purple', 'red', 'yellow']));
console.log(returnFlavorArr(['purple', 'black', 'yellow']));