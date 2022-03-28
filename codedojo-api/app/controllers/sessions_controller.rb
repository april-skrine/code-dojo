class SessionsController < ApplicationController

    require 'byebug'
    
    skip_before_action :authorized_user, only: [:login]

    def login
        user = User.find_by(username: params[:username])
		if user&.authenticate(params[:password])
			session[:current_user] = user.id
			render json: user, status: :created
        else
			render json: {error: {login: "Invalid username or password"}}, status: :unprocessable_entity 
	    end
    end

    def logout
        session.delete :current_user
        render json: {}
    end

    # def show
    #     # byebug
    #     if session[:user_id]
    #         render json: {}, status: :ok
    #     else
    #         render json: {error: "You are not authorized"}, status: :unauthorized
    #     end
    # end

end