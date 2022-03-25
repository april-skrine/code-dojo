class SessionsController < ApplicationController

    require 'byebug'
    
    skip_before_action :authorized_user, only: [:login, :show]

    def login
        user = User.find_by(username: params[:username])
		if user&.authenticate(params[:password])
			session[:user_id] = user.id
			render json: user, status: :created
        else
			render json: {error: {login: "Invalid username or password"}}, status: :unauthorized 
	    end
    end

    def logout
        session.delete :user_id
    end

    def show
        # byebug
        if session[:user_id]
            render json: {}, status: :ok
        else
            render json: {error: "You are not authorized"}, status: :unauthorized
        end
    end

end