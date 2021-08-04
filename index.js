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

function capitalizeTheFirstLetterOfEachWord(str) {
  console.log(tutorials)
}

// Given a sentence, this makes that sentence into an array of words
function arrayOfWordsFromSentence(sentence) {
  return sentence.split(' ')
}

function capitalizeEachWordInAnArray(array) {
  const array2 = array.map( word => word.slice(0, 1).toUpperCase() + word)
  const array3 = array2.map(word => word.slice(0,1) + word.slice(2, word.length))
  const string = array3.join(' ')
  return string
}

function titleCased() {
  const array3 = []
  const array4 = []
  // console.log(arrayOfSentences)
  for (let i = 0; i < tutorials.length; i++) {
    array3.push(arrayOfWordsFromSentence(tutorials[i]))
  }
  array3.forEach(interiorArray => array4.push(capitalizeEachWordInAnArray(interiorArray)))
  return array4
}

// titleCased(tutorials)
