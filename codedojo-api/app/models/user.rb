class User < ApplicationRecord
  has_secure_password

  belongs_to :clan
  has_many :user_quizzes
  has_many :quizzes, through: :user_quizzes

  validates :username, presence: true
  validates :username, uniqueness: true
  validates :password, length: {minimum: 5, maximum: 10}
end
