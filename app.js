/**
 * Example store structure
 */
const store = {
  // 5 or more questions are required
  questions: [
    {
      question: 'What position does Harry Potter play in Quiddich?',
      answers: [
        'Chaser',
        'Keeper',
        'Seeker',
        'Bludger'
      ],
      correctAnswer: 'Seeker'
    },
    {
      question: 'What does the Mirror of Erised do?',
      answers: [
        'It shows you your hearts desire.',
        'It shows you the future.',
        'It shows you where to locate the Philosophers Stone.',
        'It shows you your soulmate.'
      ],
      correctAnswer: 'It shows you your hearts desire.'
    },
    {
      question: 'What magical talent does Harry share with Voldemort?',
      answers: [
        'He is an Auror.',
        'He is a Parselmouth.',
        'He is an Animagus.',
        'He is a Werewolf.'
      ],
      correctAnswer: 'He is a Parselmouth.'
    },
    {
      question: 'What does Felix Felicis potion do?',
      answers: [
        'It allows the drinker to assume the appearance of someone else.',
        'It is a deadly poison.',
        'Whoever drinks it falls in love.',
        'It gives you good luck.'
      ],
      correctAnswer: 'It gives you good luck.'
    },
    {
      question: 'What is a Horcrux?',
      answers: [
        'It is a mundane object containing part of a soul.',
        'It is the most powerful wand.',
        'It is a Goblin-made sword that appears when you are in need.',
        'It is a stone that can turn any base metal into pure gold.'
      ],
      correctAnswer: 'It is a mundane object containing part of a soul.'
    },
    {
      question: 'What does the Imperius Curse do?',
      answers: [
        'The curse tortures the victim.',
        'The curse kills the victim.',
        'The curse places the victim completely under the caster\'s control.',
        'The curse erases the victim\'s memory.'
      ],
      correctAnswer: 'The curse places the victim completely under the caster\'s control.'
    },
  ],
  quizStarted: false,
  questionNumber: 0,
  score: 0,
  wrong: 0
};


/**
 * 
 * Technical requirements:
 * 
 * Your app should include a render() function, that regenerates the view each time the store is updated. 
 * See your course material, consult your instructor, and reference the slides for more details.
 *
 * NO additional HTML elements should be added to the index.html file.
 *
 * You may add attributes (classes, ids, etc) to the existing HTML elements, or link stylesheets or additional scripts if necessary
 *
 * SEE BELOW FOR THE CATEGORIES OF THE TYPES OF FUNCTIONS YOU WILL BE CREATING 👇
 * 
 */

/********** TEMPLATE GENERATION FUNCTIONS **********/

// These functions return HTML templates
function generateMainPage() {
  return `<div class="mainPage">
  <h2 class="quizTitle">Step right up to the Harry Potter Quiz!</h2>
  <p class="introPage">Hey there! Welcome to my Harry Potter quiz! Are you a real fan? Well it's time to find out!</p>
  <button id="startBtn">Start Quiz!</button>
</div>
`
}

function generateQuestionPage() {
  let question = store.questions[store.questionNumber];
  
  let answers = question.answers.map((answer, index) => {
    if (index === 0) {
      return `<input type="radio" name="answer" id="answer${index}" class="answers" value="${answer}" required>
      <label for="answer${index}">${answer}</label><br>`
     } 
      return `<input type="radio" name="answer" id="answer${index}" class="answers" value="${answer}">
      <label for="answer${index}">${answer}</label><br>`
  });
  return `<div class="questionPage">
  <span class="questionCounter">Question ${store.questionNumber + 1}/6</span>
  <form id="questionForm">
  <h2 class="question">${question.question}</h2>
  ${answers.join("")}
  <button id="answerBtn">Submit</button>
  </form>
  <span class="answerCounter">Correct: ${store.score} Incorrect: ${store.wrong}</span>
</div>
` 
}

function generateFinalPage() {
  return `<div class="correctPage">
  <h2 class="final">Yay! You finished the quiz!</h2>
  <p class="answerCounter">Correct: ${store.score} Incorrect: ${store.wrong}</p>
  <img class="correctGif" src="./images/party-hard.gif" alt="Harry and Ron smiling">
  <button id="reset">Try Again?</button>
</div>
`
}



/********** RENDER FUNCTION(S) **********/

// This function conditionally replaces the contents of the <main> tag based on the state of the store



/********** EVENT HANDLER FUNCTIONS **********/

// These functions handle events (submit, click, etc)

// function renderAll()
// -render the main page
function renderPage() {
  let html = ''
  if (store.quizStarted) {
    if (store.questionNumber === store.questions.length) {
      html = generateFinalPage();
    } else {
      html = generateQuestionPage()
    } 
  } else {
    html = generateMainPage()
  }
  $('main').html(html);
}


//  function handleStartBtn(){}
// -Bind the event handler for startBtn 
//   - the event handler for startBtn on click will load the quiz 
function handleStartQuizBtn() {
  $('main').on('click', '#startBtn', function(event) {
    store.quizStarted = true;
    renderPage();
  } )
}

//    function checkAnswer (){}
//     - check if answer is correct 
//       - display the check correct or incorrect
//       - display final page  
//       - display score 
function checkAnswer() {
  $('main').on('submit', '#questionForm', function(event) {
    event.preventDefault();
    let e = store.questions[store.questionNumber].correctAnswer;
    let submitValue = $('input[name="answer"]:checked').val();
    console.log(e, submitValue)
     if (submitValue === e) {
       store.score++;
       $('main').html(`<div class="correctPage">
       <h2 class="correct">Yay! you were correct!</h2>
       <p class="answerCounter">Correct: ${store.score} Incorrect: ${store.wrong}</p>
       <button id="nextBtn">Next Question</button>
       <img class="correctGif" src="./images/harry-and-ron.gif" alt="Harry and Ron smiling">
     </div>
     `)
     } else {
       store.wrong++;
       $('main').html(`<div class="incorrectPage">
       <h2 class="incorrect">Oh no! That is the wrong answer!</h2>
       <p class="answerCounter">Correct: ${store.score} Incorrect: ${store.wrong}</p>
       <button id="nextBtn">Next Question</button>
       <img class="incorrectGif" src="./images/harry-rubber-arm.gif" alt="Harry holding rubber arm in shock">
     </div>
     `)
     }   
  })
}

// - increment the questionNumber by 1
// - render the page
function handleNextBtn() {
  $('main').on('click', '#nextBtn', function(event) {
    store.questionNumber++;
    renderPage();
  })
}

//  - bind the resetBtn will call the quiz page function
//   - restart the quiz
function handleFinalBtn() {
  $('main').on('click', '#reset', function(event) {
    event.preventDefault();
    store.quizStarted = false;
    store.questionNumber = 0;
    store.score = 0;
    store.wrong = 0;
    renderPage();
  })
}

function main() {
renderPage();
handleStartQuizBtn()
handleNextBtn()
checkAnswer()
handleFinalBtn()
}

$(main)