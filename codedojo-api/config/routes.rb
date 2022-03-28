Rails.application.routes.draw do
  resources :answers, only: [:index, :show]
  resources :questions, only: [:index, :show]
  resources :user_quizzes, only: [:index, :show, :create]
  resources :quizzes, only: [:index, :show]
  resources :users, only: [:index, :show, :create, :destroy]
  resources :clans, only: [:index, :show]

  post '/login', to: 'sessions#login'
  delete '/logout', to: 'sessions#logout'
  get '/authorized_user', to: 'users#show'
end
