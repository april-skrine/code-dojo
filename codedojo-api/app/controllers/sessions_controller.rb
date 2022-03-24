class SessionsController < ApplicationController

    def login
        user = user.find_by(username: params[:username])
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

end