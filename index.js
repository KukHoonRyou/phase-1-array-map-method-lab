const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];




//How can we "iterate" through individual words in a string?
//Can we execute an iteration inside an iteration? How?
//How can we capitalize just the first letter in a word?

/*chat GPT answer

// Iterate through individual words in a string
tutorials.forEach(function(tutorial) {
  const words = tutorial.split(' ');
  words.forEach(function(word) {
    console.log(word);
  });
});

// Capitalize just the first letter in a word
function capitalizeFirstLetter(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}

const exampleWord = "example";
const capitalizedWord = capitalizeFirstLetter(exampleWord);
console.log(capitalizedWord); // Output: "Example"
*/

//Chat's answer
/*
const titleCased = function() {
  return tutorials.map(function(line) {

    const words = line.split(" ");

    const capitalizedWords = words.map(function(word) {
      return word.charAt(0).toUpperCase() + word.slice(1);
    });

    const response = capitalizedWords.join(" ");
    return response;
  });
};

console.log(titleCased());
*/

//chat's answer 2

const titleCased = () => {
  return tutorials.map((line) => {
    return line.split(/(\s+)/).map((word) => {
      return word.charAt(0).toUpperCase() + word.slice(1);
    }).join("");
  });
};

console.log(titleCased());

