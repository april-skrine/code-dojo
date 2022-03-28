class AnswersController < ApplicationController
    
    skip_before_action :authorized_user, only: [:index]

    def index
        render json: Answer.all, status: :ok
    end

    def show
        render json: Answer.find(params[:id]), status: :ok
    end
end
