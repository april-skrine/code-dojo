class UsersController < ApplicationController

    skip_before_action :authorized_user, only: :create

    def index
        render json: User.all, status: :ok
    end

    def show
        if current_user
            render json: current_user, status: :ok
        else
            render json: {error: "No current user!"}, status: :unauthorized
        end
    end

    def create
        user = User.create!(user_params)
        render json: user, status: :created
    end

    def destroy
        user = User.find(params[:id])
        user.destroy
        head :no_content
    end

    private

    def user_params
        params.permit(:username, :password, :password_confirmation, :clan_id)
    end

end
