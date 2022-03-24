Rails.application.routes.draw do
  resources :answers, only: [:index, :show]
  resources :questions, only: [:index, :show]
  resources :user_quizzes, only: [:index, :show, :create]
  resources :quizzes, only: [:index, :show]
  resources :users, only: [:index, :show, :create, :destroy]
  resources :clans, only: [:index, :show]
  post '/login', to: 'sessions#login'
  post '/logout', to: 'sessions#logout'
end
