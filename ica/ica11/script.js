// Complete variable definitions and random functions

const customName = document.getElementById("custom-name");
const generateBtn = document.querySelector(".generate");
const story = document.querySelector(".story");

function randomValueFromArray(array) {
  const random = Math.floor(Math.random() * array.length);
  return array[random];
}

// Raw text strings

let characters = ["Willy the Goblin", "Big Daddy", "Father Christmas"];

let places = [
 "the soup kitchen",
"Disneyland",
"the White House"]

let events = [
"spontaneously combusted"
,"melted into a puddle on the sidewalk"
,"turned into a slug and slithered away"]

// Partial return random string function


function returnRandomStoryString() {
  const randomCharacter = randomValueFromArray(characters);
  const randomPlace = randomValueFromArray(places);
  const randomEvent = randomValueFromArray(events);
  let storyText = `It was 94 Fahrenheit outside, 
  so ${randomCharacter} decided it was a great time to cook some eggs on a pan outside. When they got to ${randomPlace} , they realized they had to go back to retrieve the pan. Suddenly ${randomCharacter} ${randomEvent}.
   Bob was a witness, but decided not to report it because they were hungry. ${randomCharacter} weighs 300 pounds.`

  return storyText;
}

// Event listener and partial generate function definition

generateBtn.addEventListener("click", generateStory);

function generateStory() {
  let newStory = returnRandomStoryString();
  if (customName.value !== "") {
    const name = customName.value;
    newStory = newStory.replace("Bob", name);
  }

  if (document.getElementById("uk").checked) {
    const weight = Math.round(300/14) + " Stones";
    const temperature = Math.round(((94-32)* (5/9))) + " Celsius";
    newStory = newStory.replace("300 pounds", weight);
    newStory = newStory.replace("94 Fahrenheit", temperature);
  }

  

  // TODO: replace "" with the correct expression
  story.textContent = newStory;
  story.style.visibility = "visible";
}