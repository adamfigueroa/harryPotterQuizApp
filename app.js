/**
 * Example store structure
 */
const store = {
  // 5 or more questions are required
  questions: [
    {
      question: 'What position does Harry Potter play in Quiddich??',
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
      correctAnswer: 'What does Felix Felicis potion do?'
    },
    {
      question: 'What is the current year?',
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
  score: 0
};

{/* <div class="frontpage">
    <h2>
      Hey there! Welcome to my Harry Potter quiz! Are you a real fan? Well it's time to find out!
    </h2>
</div> */}
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

/********** RENDER FUNCTION(S) **********/

// This function conditionally replaces the contents of the <main> tag based on the state of the store

/********** EVENT HANDLER FUNCTIONS **********/

// These functions handle events (submit, click, etc)

// function renderAll()
// -render the main page
 
//  function handleStartBtn(){}
// -Bind the event handler for startBtn 
//   - the event handler for startBtn on click will load the quiz 
// function quizPage(){}
// -  rendering the quiz page 
//   - dynamically generate main quiz html
// function questionSection(){} 12-27 loop
//   - generate question based on index :
  
//   function handleAnswer(){}
//   - Bind the event handler for the check answer button : will function checkAnswer()
   
//    function checkAnswer (){}
//     - check if answer is correct 
//       - display the check 
//       -bind next button
//       function handle updateQuestion(){}
//     - update the question
//      - update index : stored in STORE
//      - update score : stored in STORE
//     reached ned of the quiz ? display final : recall questionSection
//      - display question/final
// function renderFinal
// - display final page  
//  - display score 
//  - bind the resetBtn will call the quiz page function
//   - restart the quiz 

function main() {



}

$(main)