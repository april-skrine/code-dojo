Clan.destroy_all
Answer.destroy_all
Question.destroy_all
Quiz.destroy_all

puts 'Seeding Clans...'
Clan.create(clan_name: "Vanilla Vipers", slogan: 'Vanilla JavaScript is our lifeblood.')
Clan.create(clan_name: "React Ronin", slogan: 'We have no master but React.')
Clan.create(clan_name: "Ruby Red Pandas", slogan: 'Our eyes are as red as our Ruby blood.')
Clan.create(clan_name: "React Rabbits", slogan: 'Our Rails is as fast and sleek as a rabbit.')

puts 'Seeding Quizzes...'
Quiz.create(quiz_name: 'JavaScript Quiz')
Quiz.create(quiz_name: 'Ruby Quiz')

puts 'Seeding Questions...'
Question.create(quiz_id: 1, question_text: "Question here")
Question.create(quiz_id: 1, question_text: "Question here")
Question.create(quiz_id: 2, question_text: "Question here")
Question.create(quiz_id: 2, question_text: "Question here")


puts 'Seeding Answers...'
Answer.create(question_id: 1, answer_text: "Some answer", correct: true)
Answer.create(question_id: 1, answer_text: "Some answer", correct: false)
Answer.create(question_id: 2, answer_text: "Some answer", correct: true)
Answer.create(question_id: 2, answer_text: "Some answer", correct: false)
Answer.create(question_id: 3, answer_text: "Some answer", correct: true)
Answer.create(question_id: 3, answer_text: "Some answer", correct: false)
Answer.create(question_id: 4, answer_text: "Some answer", correct: true)
Answer.create(question_id: 4, answer_text: "Some answer", correct: false)

puts 'Done seeding!'

