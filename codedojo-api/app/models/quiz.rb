class Quiz < ApplicationRecord
    has_many :user_quizzes
    has_many :users, through: :user_quizzes
    has_many :questions
    has_many :answers, through: :questions
end
