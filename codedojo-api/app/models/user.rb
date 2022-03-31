class User < ApplicationRecord
  has_secure_password

  belongs_to :clan
  has_many :user_quizzes, dependent: :destroy
  has_many :quizzes, through: :user_quizzes

  validates :username, presence: true, on: :create
  validates :username, uniqueness: true, on: :create
  validates :password, length: {minimum: 5, maximum: 10}, on: :create

end
