Clan.destroy_all
Answer.destroy_all
Question.destroy_all
Quiz.destroy_all

puts 'Seeding Clans...'
Clan.create(clan_name: "Vanilla Vipers", slogan: 'Vanilla JavaScript is our lifeblood.')
Clan.create(clan_name: "React Ronin", slogan: 'We have no master but React.')
Clan.create(clan_name: "Ruby Red Pandas", slogan: 'Our eyes are as red as our Ruby blood.')
Clan.create(clan_name: "Rails Rabbits", slogan: 'Our Rails is as fast and sleek as a rabbit.')

puts 'Seeding Quizzes...'
Quiz.create(quiz_name: 'JavaScript Quiz')
Quiz.create(quiz_name: 'React Quiz')

puts 'Seeding Quiz Questions...'
Question.create(quiz_id: 1, question_text: "Fill in the blank for the missing equality operator:
9000 ___ 9001")
Question.create(quiz_id: 1, question_text: "Given the following code:
const age = 6;
const isAdult = age >= 18;
isAdult; //=> ___")
Question.create(quiz_id: 1, question_text: "How would you declare this JavaScript logical Operator: OR")
Question.create(quiz_id: 1, question_text: "Which of the following describes a variable that has been declared using const?")
Question.create(quiz_id: 1, question_text: "Which of the following is a disadvantage of using var to declare a variable?")
Question.create(quiz_id: 1, question_text: "Which keyword will let a variable be re-assigned, but not re-declared?")
Question.create(quiz_id: 1, question_text: "A function is a first class object.")
Question.create(quiz_id: 1, question_text: "You cannot call a function before you have declared it.")
Question.create(quiz_id: 1, question_text: "You should never pass a function as an argument.")
Question.create(quiz_id: 2, question_text: "A React function component must start with a capital letter.")
Question.create(quiz_id: 2, question_text: "What is used to pass data into a component?")
Question.create(quiz_id: 2, question_text: "Any time you want to make a change (adding, updating or deleting an item) to an array that's being stored in state, you first need to make a copy of the array using the spread operator.")
Question.create(quiz_id: 2, question_text: "Event listeners cannot be attached directly to our custom React components.")
Question.create(quiz_id: 2, question_text: "React will always re-render a component when the setState function is called.")

puts 'Seeding First Quiz Answers...'
Answer.create(question_id: 1, answer_text: '==!', correct: true)
Answer.create(question_id: 1, answer_text: "===", correct: false)
Answer.create(question_id: 1, answer_text: "=", correct: false)
Answer.create(question_id: 1, answer_text: "!==", correct: false)
Answer.create(question_id: 2, answer_text: "TRUE", correct: false)
Answer.create(question_id: 2, answer_text: "FALSE", correct: true)
Answer.create(question_id: 3, answer_text: "&&", correct: false)
Answer.create(question_id: 3, answer_text: "||", correct: true)
Answer.create(question_id: 3, answer_text: "!", correct: false)
Answer.create(question_id: 3, answer_text: "!!", correct: false)
Answer.create(question_id: 4, answer_text: "It cannot be re-assigned or re-declared.", correct: true)
Answer.create(question_id: 4, answer_text: "It can be re-assigned, but not re-declared.", correct: false)
Answer.create(question_id: 4, answer_text: "It can be re-declared, but not re-assigned.", correct: false)
Answer.create(question_id: 5, answer_text: "It does not allow you to redeclare the variable.", correct: false)
Answer.create(question_id: 5, answer_text: "It can lead to scope-related bugs.", correct: true)
Answer.create(question_id: 5, answer_text: "I don't know.", correct: false)
Answer.create(question_id: 5, answer_text: "It does not allow you to reassign the value of a variable.", correct: false)
Answer.create(question_id: 6, answer_text: "let", correct: true)
Answer.create(question_id: 6, answer_text: "const", correct: false)
Answer.create(question_id: 6, answer_text: "var", correct: false)
Answer.create(question_id: 6, answer_text: "other", correct: false)
Answer.create(question_id: 7, answer_text: "TRUE", correct: true)
Answer.create(question_id: 7, answer_text: "FALSE", correct: false)
Answer.create(question_id: 8, answer_text: "TRUE", correct: true)
Answer.create(question_id: 8, answer_text: "FALSE", correct: false)
Answer.create(question_id: 9, answer_text: "TRUE", correct: false)
Answer.create(question_id: 9, answer_text: "FALSE", correct: true)

puts 'Seeding Second Quiz Answers...'
Answer.create(question_id: 10, answer_text: 'TRUE', correct: true)
Answer.create(question_id: 10, answer_text: 'FALSE', correct: false)
Answer.create(question_id: 11, answer_text: 'functions', correct: false)
Answer.create(question_id: 11, answer_text: 'arguments', correct: false)
Answer.create(question_id: 11, answer_text: 'props', correct: true)
Answer.create(question_id: 11, answer_text: 'data', correct: false)
Answer.create(question_id: 12, answer_text: 'TRUE', correct: false)
Answer.create(question_id: 12, answer_text: 'FALSE', correct: true)
Answer.create(question_id: 13, answer_text: 'TRUE', correct: true)
Answer.create(question_id: 13, answer_text: 'FALSE', correct: false)
Answer.create(question_id: 14, answer_text: 'TRUE', correct: false)
Answer.create(question_id: 14, answer_text: 'FALSE', correct: true)

puts 'Done seeding!'

